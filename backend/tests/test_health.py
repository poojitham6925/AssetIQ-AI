from fastapi.testclient import TestClient

from app.main import app


def test_health_endpoint_returns_ok() -> None:
    with TestClient(app) as client:
        response = client.get("/api/v1/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_database_health_endpoint_returns_connected(monkeypatch) -> None:
    from app.api.routes import health
    monkeypatch.setattr(health, "check_database_connection", lambda: True)
    with TestClient(app) as client:
        response = client.get("/api/v1/health/database")
    assert response.status_code == 200
    assert response.json() == {"status": "ok", "database": "connected"}


def test_database_health_endpoint_returns_503_without_connection(monkeypatch) -> None:
    from app.api.routes import health
    monkeypatch.setattr(health, "check_database_connection", lambda: False)
    with TestClient(app) as client:
        response = client.get("/api/v1/health/database")
    assert response.status_code == 503
    assert response.json()["detail"] == "Database connection is unavailable."
