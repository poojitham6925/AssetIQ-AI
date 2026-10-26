import pytest
from pydantic import ValidationError

from app.core.config import Settings


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
