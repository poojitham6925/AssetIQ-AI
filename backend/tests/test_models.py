from pathlib import Path

from alembic.config import Config
from alembic.script import ScriptDirectory
from sqlalchemy import CheckConstraint, DateTime, ForeignKeyConstraint, UniqueConstraint

from app.models import AuthSession, Base, EmailVerificationToken, Membership, User, Workspace


def test_user_workspace_membership_models_are_registered() -> None:
    assert set(Base.metadata.tables) == {
        "users",
        "workspaces",
        "memberships",
        "auth_sessions",
        "email_verification_tokens",
    }
    assert User.__table__ is Base.metadata.tables["users"]
    assert Workspace.__table__ is Base.metadata.tables["workspaces"]
    assert Membership.__table__ is Base.metadata.tables["memberships"]
    assert AuthSession.__table__ is Base.metadata.tables["auth_sessions"]
    assert EmailVerificationToken.__table__ is Base.metadata.tables["email_verification_tokens"]


def test_user_model_stores_normalized_email_and_password_hash() -> None:
    user = User.__table__
    assert user.c.email.type.length == 320
    assert not user.c.email.nullable
    assert not user.c.password_hash.nullable
    assert user.c.email_verified_at.type.timezone
    assert {constraint.name for constraint in user.constraints if isinstance(constraint, UniqueConstraint)} == {
        "uq_users_email"
    }
    assert {constraint.name for constraint in user.constraints if isinstance(constraint, CheckConstraint)} == {
        "ck_users_email_normalized",
        "ck_users_email_nonempty",
        "ck_users_password_hash_nonempty",
    }


def test_workspace_model_constrains_workspace_type() -> None:
    workspace = Workspace.__table__
    assert workspace.c.type.type.length == 20
    assert {constraint.name for constraint in workspace.constraints if isinstance(constraint, CheckConstraint)} == {
        "ck_workspaces_type",
        "ck_workspaces_name_nonempty",
    }


def test_membership_preserves_history_and_limits_active_duplicates() -> None:
    membership = Membership.__table__
    assert membership.c.revoked_at.nullable
    assert membership.c.joined_at.type.timezone
    assert membership.c.revoked_at.type.timezone
    assert {constraint.name for constraint in membership.constraints if isinstance(constraint, CheckConstraint)} == {
        "ck_memberships_role",
        "ck_memberships_revoked_after_joined",
    }
    foreign_keys = {
        (foreign_key.parent.name, foreign_key.ondelete)
        for constraint in membership.constraints
        if isinstance(constraint, ForeignKeyConstraint)
        for foreign_key in constraint.elements
    }
    assert foreign_keys == {("workspace_id", "RESTRICT"), ("user_id", "RESTRICT")}
    active_membership_index = next(
        index for index in membership.indexes if index.name == "uq_memberships_active_workspace_user"
    )
    assert active_membership_index.unique
    assert str(active_membership_index.dialect_options["postgresql"]["where"]) == "revoked_at IS NULL"
    assert isinstance(membership.c.joined_at.type, DateTime)


def test_new_migration_follows_untouched_initial_revision() -> None:
    backend_dir = Path(__file__).resolve().parents[1]
    config = Config(str(backend_dir / "alembic.ini"))
    config.set_main_option("script_location", str(backend_dir / "migrations"))
    scripts = ScriptDirectory.from_config(config)

    assert scripts.get_revision("0002_user_workspace_membership").down_revision == "0001_initial"
    assert scripts.get_revision("0003_auth_sessions").down_revision == "0002_user_workspace_membership"
    assert scripts.get_current_head() == "0003_auth_sessions"
