import smtplib
import ssl
from email.message import EmailMessage
from urllib.parse import urlencode

from app.core.config import get_settings


class EmailDeliveryError(Exception):
    pass


def send_verification_email(recipient: str, token: str) -> None:
    settings = get_settings()
    if not settings.smtp_host or not settings.smtp_from_email:
        raise EmailDeliveryError("Email delivery is not configured.")

    verification_url = (
        f"{settings.frontend_url.rstrip('/')}/verify-email?"
        f"{urlencode({'token': token})}"
    )
    message = EmailMessage()
    message["Subject"] = "Verify your AssetIQ account"
    message["From"] = settings.smtp_from_email
    message["To"] = recipient
    message.set_content(
        "Verify your AssetIQ account using this single-use link. "
        f"It expires in 24 hours:\n\n{verification_url}\n"
    )

    try:
        with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=15) as client:
            if settings.smtp_starttls:
                client.starttls(context=ssl.create_default_context())
            if settings.smtp_user:
                if settings.smtp_password is None:
                    raise EmailDeliveryError("Email delivery credentials are incomplete.")
                client.login(settings.smtp_user, settings.smtp_password.get_secret_value())
            client.send_message(message)
    except EmailDeliveryError:
        raise
    except (OSError, smtplib.SMTPException):
        raise EmailDeliveryError("Verification email could not be delivered.") from None
