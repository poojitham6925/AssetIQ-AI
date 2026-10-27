from fastapi import APIRouter, HTTPException, status

from app.core.database import check_database_connection

router = APIRouter()


@router.get("/health", summary="Application health check")
def health_check() -> dict[str, str]:
    return {"status": "ok"}


@router.get("/health/database", summary="Database connectivity check")
def database_health_check() -> dict[str, str]:
    if not check_database_connection():
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Database connection is unavailable.",
        )
    return {"status": "ok", "database": "connected"}
