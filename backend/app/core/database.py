from collections.abc import Generator

from sqlalchemy import Engine, create_engine, text
from sqlalchemy.engine import URL
from sqlalchemy.orm import Session, sessionmaker

from app.core.config import get_settings

_settings = get_settings()
_engine: Engine | None = None
_session_factory: sessionmaker[Session] | None = None


def get_database_url() -> URL:
    password = _settings.db_password
    if password is None or not password.get_secret_value():
        raise RuntimeError("Database credentials are not configured. Set APP_DB_PASSWORD in backend/.env.")
    return URL.create(
        drivername="postgresql+psycopg",
        username=_settings.db_user,
        password=password.get_secret_value(),
        host=_settings.db_host,
        port=_settings.db_port,
        database=_settings.db_name,
    )


def get_engine() -> Engine:
    global _engine
    if _engine is None:
        _engine = create_engine(get_database_url(), pool_pre_ping=True, pool_size=5, max_overflow=5)
    return _engine


def get_session_factory() -> sessionmaker[Session]:
    global _session_factory
    if _session_factory is None:
        _session_factory = sessionmaker(bind=get_engine(), autoflush=False, autocommit=False, expire_on_commit=False)
    return _session_factory


def get_db() -> Generator[Session, None, None]:
    session = get_session_factory()()
    try:
        yield session
    finally:
        session.close()


def check_database_connection() -> bool:
    try:
        with get_engine().connect() as connection:
            connection.execute(text("SELECT 1"))
        return True
    except Exception:
        return False
