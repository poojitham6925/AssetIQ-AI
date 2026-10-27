from pathlib import Path

import pytest
from pydantic import ValidationError

from app.core.config import Settings


def test_settings_load_env_file_from_backend_directory() -> None:
    env_file = Path(Settings.model_config["env_file"])

    assert env_file.is_absolute()
    assert env_file == Path(__file__).resolve().parents[1] / ".env"


def test_settings_use_safe_defaults() -> None:
    settings = Settings(_env_file=None)

    assert settings.app_name == "AssetIQ AI API"
    assert settings.app_env == "development"
    assert settings.debug is False
    assert settings.api_v1_prefix == "/api/v1"


def test_settings_reject_unknown_environment() -> None:
    with pytest.raises(ValidationError):
        Settings(_env_file=None, app_env="staging")


def test_settings_reject_invalid_api_prefix() -> None:
    with pytest.raises(ValidationError):
        Settings(_env_file=None, api_v1_prefix="api/v1")


def test_production_requires_secure_auth_cookies_and_https_frontend() -> None:
    with pytest.raises(ValidationError):
        Settings(_env_file=None, app_env="production")

    settings = Settings(
        _env_file=None,
        app_env="production",
        auth_cookie_secure=True,
        frontend_origin="https://app.example.com",
        frontend_url="https://app.example.com",
    )
    assert settings.auth_cookie_secure


def test_smtp_starttls_defaults_to_enabled() -> None:
    settings = Settings(_env_file=None)

    assert settings.smtp_starttls is True


@pytest.mark.parametrize(
    "host",
    ["localhost", "127.0.0.1", "::1", "[::1]"],
)
@pytest.mark.parametrize("app_env", ["development", "test"])
def test_smtp_starttls_can_be_disabled_only_for_local_environment(
    host: str,
    app_env: str,
) -> None:
    settings = Settings(
        _env_file=None,
        app_env=app_env,
        smtp_starttls=False,
        smtp_host=host,
    )

    assert settings.smtp_starttls is False


@pytest.mark.parametrize(
    "overrides",
    [
        {"smtp_host": "localhost"},
        {"app_env": "production", "smtp_host": "localhost"},
        {"app_env": "development", "smtp_host": "mail.example.test"},
        {"app_env": "test", "smtp_host": None},
        {"app_env": "development", "smtp_host": "127.0.0.1", "smtp_user": "user"},
        {
            "app_env": "development",
            "smtp_host": "127.0.0.1",
            "smtp_password": "secret",
        },
    ],
)
def test_disabling_smtp_starttls_rejects_unsafe_configuration(
    overrides: dict[str, str | None],
) -> None:
    with pytest.raises(ValidationError):
        Settings(_env_file=None, smtp_starttls=False, **overrides)


@pytest.mark.parametrize("env_name", ["APP_ENV", "APP_APP_ENV"])
def test_environment_loaded_development_allows_loopback_smtp_without_starttls(
    monkeypatch: pytest.MonkeyPatch,
    env_name: str,
) -> None:
    for name in (
        "APP_ENV",
        "APP_APP_ENV",
        "APP_SMTP_STARTTLS",
        "APP_SMTP_HOST",
        "APP_SMTP_USER",
        "APP_SMTP_PASSWORD",
    ):
        monkeypatch.delenv(name, raising=False)

    monkeypatch.setenv(env_name, "development")
    monkeypatch.setenv("APP_SMTP_STARTTLS", "false")
    monkeypatch.setenv("APP_SMTP_HOST", "127.0.0.1")

    settings = Settings(_env_file=None)

    assert settings.app_env == "development"
    assert "app_env" in settings.model_fields_set
    assert settings.smtp_starttls is False


@pytest.mark.parametrize("env_name", ["APP_ENV", "APP_APP_ENV"])
def test_environment_loaded_production_rejects_disabled_smtp_starttls(
    monkeypatch: pytest.MonkeyPatch,
    env_name: str,
) -> None:
    for name in (
        "APP_ENV",
        "APP_APP_ENV",
        "APP_SMTP_STARTTLS",
        "APP_SMTP_HOST",
        "APP_SMTP_USER",
        "APP_SMTP_PASSWORD",
        "APP_AUTH_COOKIE_SECURE",
        "APP_FRONTEND_ORIGIN",
        "APP_FRONTEND_URL",
    ):
        monkeypatch.delenv(name, raising=False)

    monkeypatch.setenv(env_name, "production")
    monkeypatch.setenv("APP_SMTP_STARTTLS", "false")
    monkeypatch.setenv("APP_SMTP_HOST", "127.0.0.1")
    monkeypatch.setenv("APP_AUTH_COOKIE_SECURE", "true")
    monkeypatch.setenv("APP_FRONTEND_ORIGIN", "https://app.example.test")
    monkeypatch.setenv("APP_FRONTEND_URL", "https://app.example.test")

    with pytest.raises(ValidationError, match="APP_SMTP_STARTTLS"):
        Settings(_env_file=None)
