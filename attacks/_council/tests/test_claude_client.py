"""Tests for Claude CLI wrapper."""
from __future__ import annotations

import subprocess
from unittest.mock import MagicMock, patch

import pytest

from claude_client import ClaudeClient, ClaudeResponse


def _fake_completed(stdout: str, returncode: int = 0) -> MagicMock:
    m = MagicMock(spec=subprocess.CompletedProcess)
    m.stdout = stdout
    m.stderr = ""
    m.returncode = returncode
    return m


@pytest.fixture
def client() -> ClaudeClient:
    return ClaudeClient(semaphore_size=2, timeout_s=30)


def test_invoke_returns_response(client: ClaudeClient):
    with patch("claude_client.subprocess.run",
               return_value=_fake_completed("hello")) as run:
        r = client.invoke(model="sonnet", prompt="test", system_prompt=None)
    assert isinstance(r, ClaudeResponse)
    assert r.stdout == "hello"
    assert r.returncode == 0
    run.assert_called_once()


def test_invoke_passes_cli_flags(client: ClaudeClient):
    with patch("claude_client.subprocess.run",
               return_value=_fake_completed("x")) as run:
        client.invoke(model="opus", prompt="p", system_prompt="sys")
    # args passed as keyword
    cmd = run.call_args.kwargs.get("args")
    assert cmd is not None
    assert "--model" in cmd
    assert "--setting-sources" in cmd
    assert "--no-session-persistence" in cmd
    assert "--disable-slash-commands" in cmd
    assert "--bare" not in cmd  # CLAUDE.md: never pass --bare


def test_invoke_model_alias_resolves_to_full_id():
    pinned = ClaudeClient(
        semaphore_size=2,
        timeout_s=30,
        model_ids={
            "opus": "claude-opus-4-7",
            "sonnet": "claude-sonnet-4-6",
            "haiku": "claude-haiku-4-5-20251001",
        },
    )
    with patch("claude_client.subprocess.run",
               return_value=_fake_completed("x")) as run:
        pinned.invoke(model="opus", prompt="p", system_prompt=None)
    cmd = run.call_args.kwargs.get("args")
    assert "claude-opus-4-7" in cmd


def test_timeout_raises(client: ClaudeClient):
    with patch("claude_client.subprocess.run",
               side_effect=subprocess.TimeoutExpired(cmd="claude", timeout=30)):
        with pytest.raises(TimeoutError):
            client.invoke(model="sonnet", prompt="p", system_prompt=None)
