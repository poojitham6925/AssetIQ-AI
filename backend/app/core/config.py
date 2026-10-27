import ipaddress
from functools import lru_cache
from pathlib import Path
from typing import Literal

from pydantic import AliasChoices, Field, SecretStr, model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_prefix="APP_",
        env_file=Path(__file__).resolve().parents[2] / ".env",
        env_file_encoding="utf-8",
        extra="ignore",
        case_sensitive=False,
    )

    app_name: str = Field(default="AssetIQ AI API", min_length=1, max_length=120)
    app_env: Literal["development", "test", "production"] = Field(
        default="development",
        validation_alias=AliasChoices("APP_ENV", "APP_APP_ENV", "app_env"),
    )
    debug: bool = False
    api_v1_prefix: str = Field(default="/api/v1", pattern=r"^/[a-zA-Z0-9/_-]*$")
    db_user: str = Field(default="assetiq_app", min_length=1)
    db_password: SecretStr | None = None
    db_host: str = Field(default="localhost", min_length=1)
    db_port: int = Field(default=5432, ge=1, le=65535)
    db_name: str = Field(default="assetiq_dev", min_length=1)
    frontend_origin: str = Field(default="http://localhost:5173", min_length=1)
    frontend_url: str = Field(default="http://localhost:5173", min_length=1)
    auth_cookie_secure: bool = False
    auth_session_ttl_hours: int = Field(default=12, ge=1, le=720)
    smtp_host: str | None = None
    smtp_port: int = Field(default=587, ge=1, le=65535)
    smtp_user: str | None = None
    smtp_password: SecretStr | None = None
    smtp_from_email: str | None = None
    smtp_starttls: bool = True

    @model_validator(mode="after")
    def require_secure_auth_cookies_in_production(self) -> "Settings":
        if not self.smtp_starttls:
            host = (self.smtp_host or "").strip()
            normalized_host = host.strip("[]").lower()
            is_loopback = normalized_host == "localhost"
            if not is_loopback:
                try:
                    is_loopback = ipaddress.ip_address(normalized_host).is_loopback
                except ValueError:
                    is_loopback = False

            if "app_env" not in self.model_fields_set or self.app_env not in {"development", "test"}:
                raise ValueError("APP_SMTP_STARTTLS can only be disabled in development or test.")
            if not is_loopback:
                raise ValueError("APP_SMTP_STARTTLS can only be disabled for a loopback SMTP host.")
            if self.smtp_user is not None or self.smtp_password is not None:
                raise ValueError("SMTP credentials cannot be configured when STARTTLS is disabled.")

        if self.app_env == "production":
            if not self.auth_cookie_secure:
                raise ValueError("APP_AUTH_COOKIE_SECURE must be enabled in production.")
            if not self.frontend_origin.startswith("https://") or not self.frontend_url.startswith("https://"):
                raise ValueError("Frontend origin and URL must use HTTPS in production.")
        return self


@lru_cache
def get_settings() -> Settings:
    return Settings()
