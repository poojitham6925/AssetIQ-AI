# AssetIQ AI Backend — Stage 4A

Minimal FastAPI foundation, configuration, health endpoint, and tests.
This stage does not connect to PostgreSQL, create a database, or run migrations.

## Requirements
- Python 3.14
- PowerShell on Windows

## Setup
From the repository root:

```powershell
Set-Location "E:\AssetIQ-AI\backend"
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install --upgrade pip
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m pytest
```

## Run locally
```powershell
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload
```

Check `http://127.0.0.1:8000/api/v1/health`; API docs: `http://127.0.0.1:8000/docs`.

## Configuration
Defaults are safe for local development. Copy `.env.example` to `.env` only to override
settings. Never commit `.env` or put credentials in source control.

## Stage boundaries
No authentication, asset CRUD, analytics, QR, database session, database creation,
migrations, frontend changes, commits, pushes, or deployment are included.
