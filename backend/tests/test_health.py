def test_health_endpoint_returns_ok(client) -> None:
    response = client.get("/api/v1/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_root_endpoint_returns_service_information(client) -> None:
    response = client.get("/")

    assert response.status_code == 200
    body = response.json()
    assert body["status"] == "ok"
    assert body["name"] == "AssetIQ AI API"
    assert body["health"] == "/api/v1/health"
