"""Tests for Ollama HTTP client."""
from __future__ import annotations

from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest

from ollama_client import OllamaClient, OllamaResponse


@pytest.fixture
def client(tmp_council_root: Path) -> OllamaClient:
    return OllamaClient(
        base_url="http://test.invalid:11434",
        lock_path=tmp_council_root / "lock",
        transcript_dir=tmp_council_root / "transcripts",
    )


def test_generate_posts_and_parses(client: OllamaClient):
    fake = MagicMock()
    fake.json.return_value = {
        "response": "hello world",
        "eval_count": 42,
        "total_duration": 1234567,
    }
    fake.raise_for_status = MagicMock()
    with patch("ollama_client.requests.post", return_value=fake) as post:
        r = client.generate(
            model="gemma4:latest",
            prompt="hi",
            reason_for_use="test",
            source_file="n/a",
        )
    assert isinstance(r, OllamaResponse)
    assert r.response == "hello world"
    assert r.metadata["eval_count"] == 42
    post.assert_called_once()


def test_generate_writes_transcript(
    client: OllamaClient, tmp_council_root: Path
):
    fake = MagicMock()
    fake.json.return_value = {
        "response": "x", "eval_count": 1, "total_duration": 1,
    }
    fake.raise_for_status = MagicMock()
    with patch("ollama_client.requests.post", return_value=fake):
        client.generate(
            model="gemma4:latest",
            prompt="P",
            reason_for_use="AUP refusal fallback",
            source_file="sources/test.md",
        )
    transcripts = list((tmp_council_root / "transcripts").glob("*.md"))
    assert len(transcripts) == 1
    content = transcripts[0].read_text()
    assert "**Model:** gemma4:latest" in content
    assert "AUP refusal fallback" in content
    assert "sources/test.md" in content


def test_timeout_raises(client: OllamaClient):
    import requests
    with patch("ollama_client.requests.post",
               side_effect=requests.exceptions.Timeout):
        with pytest.raises(TimeoutError):
            client.generate(
                model="gemma4:latest", prompt="x",
                reason_for_use="r", source_file="s",
            )
