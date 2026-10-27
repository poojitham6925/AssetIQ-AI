import ssl
from unittest.mock import MagicMock

import pytest
from pydantic import SecretStr

from app.core import email as email_module
from app.core.config import Settings


@pytest.fixture()
def smtp_client(monkeypatch: pytest.MonkeyPatch) -> MagicMock:
    client = MagicMock()
    client.__enter__.return_value = client
    monkeypatch.setattr(email_module.smtplib, "SMTP", MagicMock(return_value=client))
    return client


@pytest.mark.parametrize("smtp_starttls", [True, False])
def test_sender_uses_only_configured_transport_security(
    monkeypatch: pytest.MonkeyPatch,
    smtp_client: MagicMock,
    smtp_starttls: bool,
) -> None:
    settings = Settings(
        _env_file=None,
        app_env="development",
        smtp_host="127.0.0.1",
        smtp_port=1025,
        smtp_from_email="noreply@example.test",
        smtp_starttls=smtp_starttls,
        smtp_user=None,
        smtp_password=None,
    )
    monkeypatch.setattr(email_module, "get_settings", lambda: settings)

    email_module.send_verification_email("user@example.test", "verification-token")

    if smtp_starttls:
        smtp_client.starttls.assert_called_once()
    else:
        smtp_client.starttls.assert_not_called()
    smtp_client.send_message.assert_called_once()


def test_sender_authenticates_only_after_starttls(
    monkeypatch: pytest.MonkeyPatch,
    smtp_client: MagicMock,
) -> None:
    settings = Settings(
        _env_file=None,
        smtp_host="mail.example.test",
        smtp_user="smtp-user",
        smtp_password=SecretStr("smtp-password"),
        smtp_from_email="noreply@example.test",
    )
    monkeypatch.setattr(email_module, "get_settings", lambda: settings)

    email_module.send_verification_email("user@example.test", "verification-token")

    smtp_client.starttls.assert_called_once()
    smtp_client.login.assert_called_once_with("smtp-user", "smtp-password")
    assert isinstance(smtp_client.starttls.call_args.kwargs["context"], ssl.SSLContext)


def test_sender_rejects_missing_delivery_configuration(
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    settings = Settings(_env_file=None, smtp_starttls=True)
    monkeypatch.setattr(email_module, "get_settings", lambda: settings)
    smtp = MagicMock()
    monkeypatch.setattr(email_module.smtplib, "SMTP", smtp)

    with pytest.raises(email_module.EmailDeliveryError, match="not configured"):
        email_module.send_verification_email("user@example.test", "verification-token")

    smtp.assert_not_called()
