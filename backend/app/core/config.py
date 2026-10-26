from functools import lru_cache
from typing import Literal

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_prefix="APP_",
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
        case_sensitive=False,
    )

    app_name: str = Field(default="AssetIQ AI API", min_length=1, max_length=120)
    app_env: Literal["development", "test", "production"] = "development"
    debug: bool = False
    api_v1_prefix: str = Field(default="/api/v1", pattern=r"^/[a-zA-Z0-9/_-]*$")


@lru_cache
def get_settings() -> Settings:
    return Settings()
