from fastapi import HTTPException, status


def service_unavailable(detail: str = "This service is not available yet.") -> HTTPException:
    return HTTPException(
        status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
        detail=detail,
    )
