"""Tests for prompt-template loader."""
from __future__ import annotations

import hashlib
from pathlib import Path

import pytest

from roles import PromptTemplate, load_prompt


@pytest.fixture
def fake_prompts_dir(tmp_path: Path) -> Path:
    d = tmp_path / "prompts"
    d.mkdir()
    (d / "test_role.v1.md").write_text(
        "# VERSION: v1\n"
        "# SHA256: placeholder\n"
        "# ROLE: test_role\n\n"
        "Hello {name}, your task is {task}.\n"
    )
    return d


def test_load_returns_template(fake_prompts_dir: Path):
    tmpl = load_prompt(fake_prompts_dir, "test_role", version="v1")
    assert isinstance(tmpl, PromptTemplate)
    assert tmpl.role == "test_role"
    assert tmpl.version == "v1"
    assert "{name}" in tmpl.body


def test_load_computes_content_sha(fake_prompts_dir: Path):
    tmpl = load_prompt(fake_prompts_dir, "test_role", version="v1")
    expected = hashlib.sha256(tmpl.body.encode()).hexdigest()
    assert tmpl.sha256 == expected


def test_load_strips_metadata_headers(fake_prompts_dir: Path):
    tmpl = load_prompt(fake_prompts_dir, "test_role", version="v1")
    assert not tmpl.body.startswith("# VERSION")


def test_render_fills_placeholders(fake_prompts_dir: Path):
    tmpl = load_prompt(fake_prompts_dir, "test_role", version="v1")
    out = tmpl.render(name="Alice", task="review")
    assert "Alice" in out
    assert "review" in out


def test_missing_role_raises(fake_prompts_dir: Path):
    with pytest.raises(FileNotFoundError):
        load_prompt(fake_prompts_dir, "does_not_exist")
