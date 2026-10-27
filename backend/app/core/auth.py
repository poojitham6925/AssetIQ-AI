import hashlib
import secrets
from datetime import datetime, timedelta, timezone
from uuid import UUID

from pwdlib import PasswordHash
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.config import get_settings
from app.models import AuthSession

_password_hash = PasswordHash.recommended()


def hash_password(password: str) -> str:
    return _password_hash.hash(password)


def verify_password(password: str, password_hash: str) -> bool:
    return _password_hash.verify(password, password_hash)


def new_opaque_token() -> str:
    return secrets.token_urlsafe(32)


def digest_token(token: str) -> str:
    return hashlib.sha256(token.encode("utf-8")).hexdigest()


def create_auth_session(session: Session, user_id: UUID) -> tuple[AuthSession, str, str]:
    settings = get_settings()
    raw_session_token = new_opaque_token()
    raw_csrf_token = new_opaque_token()
    now = datetime.now(timezone.utc)
    auth_session = AuthSession(
        user_id=user_id,
        token_hash=digest_token(raw_session_token),
        csrf_token_hash=digest_token(raw_csrf_token),
        expires_at=now + timedelta(hours=settings.auth_session_ttl_hours),
    )
    session.add(auth_session)
    return auth_session, raw_session_token, raw_csrf_token


def get_active_session(session: Session, raw_token: str | None) -> AuthSession | None:
    if not raw_token:
        return None
    auth_session = session.scalar(
        select(AuthSession).where(AuthSession.token_hash == digest_token(raw_token))
    )
    if auth_session is None or auth_session.revoked_at is not None:
        return None
    expires_at = auth_session.expires_at
    if expires_at.tzinfo is None:
        expires_at = expires_at.replace(tzinfo=timezone.utc)
    if expires_at <= datetime.now(timezone.utc):
        return None
    return auth_session
