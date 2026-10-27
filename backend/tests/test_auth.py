from collections.abc import Iterator
from dataclasses import dataclass

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine, select
from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy.pool import StaticPool

from app.core.auth import digest_token
from app.core.config import get_settings
from app.core.database import get_db
from app.main import app
from app.models import Base, EmailVerificationToken, Membership, User, Workspace


@dataclass
class AuthTestContext:
    client: TestClient
    session_factory: sessionmaker[Session]
    sent_verification_tokens: list[tuple[str, str]]


@pytest.fixture()
def auth_context(monkeypatch: pytest.MonkeyPatch) -> Iterator[AuthTestContext]:
    from app.api.routes import auth as auth_routes

    sent_tokens: list[tuple[str, str]] = []
    monkeypatch.setattr(
        auth_routes,
        "send_verification_email",
        lambda email, token: sent_tokens.append((email, token)),
    )
    engine = create_engine(
        "sqlite://",
        connect_args={"check_same_thread": False},
        poolclass=StaticPool,
    )
    Base.metadata.create_all(engine)
    test_session_factory = sessionmaker(bind=engine, expire_on_commit=False)

    def override_get_db() -> Iterator[Session]:
        with test_session_factory() as session:
            yield session

    app.dependency_overrides[get_db] = override_get_db
    try:
        with TestClient(app) as client:
            yield AuthTestContext(client, test_session_factory, sent_tokens)
    finally:
        app.dependency_overrides.clear()
        engine.dispose()


def _origin_header() -> dict[str, str]:
    return {"Origin": get_settings().frontend_origin}


def test_registration_verification_login_and_personal_workspace(
    auth_context: AuthTestContext,
) -> None:
    registration = auth_context.client.post(
        "/api/v1/auth/register",
        headers=_origin_header(),
        json={
            "name": "AssetIQ User",
            "email": "  USER@Example.com ",
            "password": "correct horse battery",
        },
    )

    assert registration.status_code == 201
    assert registration.json()["message"].startswith("Account created.")
    assert auth_context.sent_verification_tokens[0][0] == "user@example.com"

    with auth_context.session_factory() as session:
        user = session.scalar(select(User).where(User.email == "user@example.com"))
        assert user is not None
        assert user.password_hash.startswith("$argon2id$")
        assert user.password_hash != "correct horse battery"
        workspace = session.scalar(select(Workspace))
        membership = session.scalar(select(Membership))
        assert workspace is not None
        assert workspace.type == "personal"
        assert workspace.name == "AssetIQ User's workspace"
        assert membership is not None
        assert membership.user_id == user.id
        assert membership.workspace_id == workspace.id
        assert membership.role == "owner"
        assert user.email_verified_at is None
        verification_token = session.scalar(select(EmailVerificationToken))
        assert verification_token is not None
        assert verification_token.token_hash == digest_token(auth_context.sent_verification_tokens[0][1])
        assert verification_token.token_hash != auth_context.sent_verification_tokens[0][1]

    verification = auth_context.client.post(
        "/api/v1/auth/verify-email",
        json={"token": auth_context.sent_verification_tokens[0][1]},
    )
    assert verification.status_code == 200
    with auth_context.session_factory() as session:
        user = session.scalar(select(User).where(User.email == "user@example.com"))
        assert user is not None
        assert user.email_verified_at is not None

    invalid_verification = auth_context.client.post(
        "/api/v1/auth/verify-email",
        json={"token": "x" * 40},
    )
    assert invalid_verification.status_code == 400
    reused_verification = auth_context.client.post(
        "/api/v1/auth/verify-email",
        json={"token": auth_context.sent_verification_tokens[0][1]},
    )
    assert reused_verification.status_code == 400

    wrong_password = auth_context.client.post(
        "/api/v1/auth/login",
        headers=_origin_header(),
        json={"email": "user@example.com", "password": "wrong password"},
    )
    assert wrong_password.status_code == 401

    login = auth_context.client.post(
        "/api/v1/auth/login",
        headers=_origin_header(),
        json={"email": "USER@example.com", "password": "correct horse battery"},
    )
    assert login.status_code == 200
    assert login.json()["email"] == "user@example.com"
    set_cookie_headers = login.headers.get_list("set-cookie")
    assert any("assetiq_session=" in header and "HttpOnly" in header and "SameSite=lax" in header for header in set_cookie_headers)
    assert any("assetiq_csrf=" in header and "HttpOnly" not in header and "SameSite=lax" in header for header in set_cookie_headers)
    assert auth_context.client.cookies.get("assetiq_session")
    assert auth_context.client.cookies.get("assetiq_csrf")

    current_user = auth_context.client.get("/api/v1/auth/me")
    assert current_user.status_code == 200
    assert current_user.json()["email"] == "user@example.com"

    csrf_token = auth_context.client.cookies.get("assetiq_csrf")
    assert csrf_token
    rejected_logout = auth_context.client.post("/api/v1/auth/logout")
    assert rejected_logout.status_code == 403
    logout = auth_context.client.post(
        "/api/v1/auth/logout",
        headers={"X-CSRF-Token": csrf_token},
    )
    assert logout.status_code == 204
    assert auth_context.client.get("/api/v1/auth/me").status_code == 401


def test_registration_rejects_normalized_duplicate_email(auth_context: AuthTestContext) -> None:
    payload = {
        "name": "AssetIQ User",
        "email": "user@example.com",
        "password": "correct horse battery",
    }
    first = auth_context.client.post(
        "/api/v1/auth/register",
        headers=_origin_header(),
        json=payload,
    )
    duplicate = auth_context.client.post(
        "/api/v1/auth/register",
        headers=_origin_header(),
        json={**payload, "email": " USER@EXAMPLE.COM "},
    )

    assert first.status_code == 201
    assert duplicate.status_code == 409


@pytest.mark.parametrize(
    "payload",
    [
        {"name": "User", "email": "not-an-email", "password": "correct horse battery"},
        {"name": "User", "email": "user@example.com", "password": "short"},
        {"name": "   ", "email": "user@example.com", "password": "correct horse battery"},
    ],
)
def test_registration_rejects_invalid_input(
    auth_context: AuthTestContext,
    payload: dict[str, str],
) -> None:
    response = auth_context.client.post(
        "/api/v1/auth/register",
        headers=_origin_header(),
        json=payload,
    )

    assert response.status_code == 422
    with auth_context.session_factory() as session:
        assert session.scalar(select(User)) is None
        assert session.scalar(select(Workspace)) is None
        assert session.scalar(select(Membership)) is None


def test_login_rejects_invalid_credentials(auth_context: AuthTestContext) -> None:
    response = auth_context.client.post(
        "/api/v1/auth/login",
        headers=_origin_header(),
        json={"email": "missing@example.com", "password": "incorrect password"},
    )

    assert response.status_code == 401
    assert "assetiq_session" not in auth_context.client.cookies


def test_unavailable_email_delivery_rolls_back_registration(
    auth_context: AuthTestContext,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    from app.api.routes import auth as auth_routes
    from app.core.email import EmailDeliveryError

    def fail_delivery(_email: str, _token: str) -> None:
        raise EmailDeliveryError("not configured")

    monkeypatch.setattr(auth_routes, "send_verification_email", fail_delivery)
    response = auth_context.client.post(
        "/api/v1/auth/register",
        headers=_origin_header(),
        json={
            "name": "AssetIQ User",
            "email": "user@example.com",
            "password": "correct horse battery",
        },
    )

    assert response.status_code == 503
    with auth_context.session_factory() as session:
        assert session.scalar(select(User)) is None
        assert session.scalar(select(Workspace)) is None
        assert session.scalar(select(Membership)) is None
