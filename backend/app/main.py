from fastapi import FastAPI

from app.api.router import api_router
from app.core.config import get_settings

settings = get_settings()

app = FastAPI(
    title=settings.app_name,
    debug=settings.debug,
    version="0.1.0",
)

app.include_router(api_router, prefix=settings.api_v1_prefix)


@app.get("/", tags=["root"])
def root() -> dict[str, str]:
    return {
        "name": settings.app_name,
        "status": "ok",
        "health": f"{settings.api_v1_prefix}/health",
    }
