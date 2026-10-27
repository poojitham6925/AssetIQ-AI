import hmac
import re
import uuid
from datetime import datetime, timedelta, timezone

from fastapi import APIRouter, Depends, HTTPException, Request, Response, status
from pydantic import BaseModel, ConfigDict, Field, field_validator
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session, joinedload

from app.core.auth import (
    create_auth_session,
    digest_token,
    get_active_session,
    hash_password,
    new_opaque_token,
    verify_password,
)
from app.core.config import get_settings
from app.core.database import get_db
from app.core.email import EmailDeliveryError, send_verification_email
from app.models import EmailVerificationToken, Membership, User, Workspace

router = APIRouter(prefix="/auth", tags=["authentication"])

SESSION_COOKIE = "assetiq_session"
CSRF_COOKIE = "assetiq_csrf"
CSRF_HEADER = "X-CSRF-Token"
EMAIL_PATTERN = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


class RegistrationRequest(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True)

    name: str = Field(min_length=1, max_length=120)
    email: str = Field(min_length=3, max_length=320)
    password: str = Field(min_length=12, max_length=128)

    @field_validator("email")
    @classmethod
    def normalize_email(cls, value: str) -> str:
        normalized = value.strip().lower()
        if not EMAIL_PATTERN.fullmatch(normalized):
            raise ValueError("Enter a valid email address.")
        return normalized


class LoginRequest(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True)

    email: str = Field(min_length=3, max_length=320)
    password: str = Field(min_length=1, max_length=128)

    @field_validator("email")
    @classmethod
    def normalize_email(cls, value: str) -> str:
        normalized = value.strip().lower()
        if not EMAIL_PATTERN.fullmatch(normalized):
            raise ValueError("Enter a valid email address.")
        return normalized


class VerifyEmailRequest(BaseModel):
    token: str = Field(min_length=32, max_length=128)


class AuthUserResponse(BaseModel):
    id: uuid.UUID
    email: str


def _set_auth_cookies(
    response: Response,
    session_token: str,
    csrf_token: str,
) -> None:
    settings = get_settings()
    max_age = settings.auth_session_ttl_hours * 60 * 60
    response.set_cookie(
        SESSION_COOKIE,
        session_token,
        max_age=max_age,
        httponly=True,
        secure=settings.auth_cookie_secure,
        samesite="lax",
        path="/",
    )
    response.set_cookie(
        CSRF_COOKIE,
        csrf_token,
        max_age=max_age,
        httponly=False,
        secure=settings.auth_cookie_secure,
        samesite="lax",
        path="/",
    )


def _clear_auth_cookies(response: Response) -> None:
    settings = get_settings()
    response.delete_cookie(
        SESSION_COOKIE,
        path="/",
        secure=settings.auth_cookie_secure,
        httponly=True,
        samesite="lax",
    )
    response.delete_cookie(
        CSRF_COOKIE,
        path="/",
        secure=settings.auth_cookie_secure,
        httponly=False,
        samesite="lax",
    )


def _require_frontend_origin(request: Request) -> None:
    if request.headers.get("origin") != get_settings().frontend_origin:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Request origin is not allowed.",
        )


@router.post("/register", status_code=status.HTTP_201_CREATED)
def register(
    payload: RegistrationRequest,
    request: Request,
    db: Session = Depends(get_db),
) -> dict[str, str]:
    _require_frontend_origin(request)

    existing_user = db.scalar(select(User).where(User.email == payload.email))
    if existing_user is not None:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="An account with this email already exists.",
        )

    password_hash = hash_password(payload.password)
    raw_verification_token = new_opaque_token()
    now = datetime.now(timezone.utc)
    user = User(email=payload.email, password_hash=password_hash)
    workspace = Workspace(name=f"{payload.name}'s workspace", type="personal")

    try:
        db.add_all([user, workspace])
        db.flush()
        db.add(Membership(
            user_id=user.id,
            workspace_id=workspace.id,
            role="owner",
        ))
        db.add(EmailVerificationToken(
            user_id=user.id,
            token_hash=digest_token(raw_verification_token),
            expires_at=now + timedelta(hours=24),
        ))
        db.flush()
        send_verification_email(user.email, raw_verification_token)
        db.commit()
    except IntegrityError:
        db.rollback()
        if db.scalar(select(User.id).where(User.email == payload.email)) is not None:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="An account with this email already exists.",
            ) from None
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Registration could not be completed.",
        ) from None
    except EmailDeliveryError:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Account was not created because verification email delivery is unavailable.",
        ) from None

    return {"message": "Account created. Check your email to verify it before signing in."}


@router.post("/verify-email")
def verify_email(
    payload: VerifyEmailRequest,
    db: Session = Depends(get_db),
) -> dict[str, str]:
    now = datetime.now(timezone.utc)
    verification = db.scalar(
        select(EmailVerificationToken)
        .options(joinedload(EmailVerificationToken.user))
        .where(EmailVerificationToken.token_hash == digest_token(payload.token))
    )
    if verification is None or verification.consumed_at is not None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Verification link is invalid or expired.",
        )
    expires_at = verification.expires_at
    if expires_at.tzinfo is None:
        expires_at = expires_at.replace(tzinfo=timezone.utc)
    if expires_at <= now:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Verification link is invalid or expired.",
        )

    verification.consumed_at = now
    verification.user.email_verified_at = now
    db.commit()
    return {"message": "Email verified. You can now sign in."}


@router.post("/login")
def login(
    payload: LoginRequest,
    request: Request,
    response: Response,
    db: Session = Depends(get_db),
) -> AuthUserResponse:
    _require_frontend_origin(request)
    user = db.scalar(select(User).where(User.email == payload.email))
    if (
        user is None
        or not verify_password(payload.password, user.password_hash)
        or user.email_verified_at is None
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email/password or unverified account.",
        )

    _, session_token, csrf_token = create_auth_session(db, user.id)
    db.commit()
    _set_auth_cookies(response, session_token, csrf_token)
    return AuthUserResponse(id=user.id, email=user.email)


@router.get("/me", response_model=AuthUserResponse)
def current_user(
    request: Request,
    db: Session = Depends(get_db),
) -> AuthUserResponse:
    auth_session = get_active_session(db, request.cookies.get(SESSION_COOKIE))
    if auth_session is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication is required.",
        )
    return AuthUserResponse(id=auth_session.user.id, email=auth_session.user.email)


@router.post("/logout", status_code=status.HTTP_204_NO_CONTENT)
def logout(
    request: Request,
    response: Response,
    db: Session = Depends(get_db),
) -> Response:
    raw_session_token = request.cookies.get(SESSION_COOKIE)
    auth_session = get_active_session(db, raw_session_token)
    if auth_session is not None:
        cookie_csrf = request.cookies.get(CSRF_COOKIE, "")
        header_csrf = request.headers.get(CSRF_HEADER, "")
        if (
            not cookie_csrf
            or not header_csrf
            or not hmac.compare_digest(cookie_csrf, header_csrf)
            or not hmac.compare_digest(
                digest_token(cookie_csrf),
                auth_session.csrf_token_hash,
            )
        ):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="CSRF validation failed.",
            )
        auth_session.revoked_at = datetime.now(timezone.utc)
        db.commit()
    _clear_auth_cookies(response)
    response.status_code = status.HTTP_204_NO_CONTENT
    return response
