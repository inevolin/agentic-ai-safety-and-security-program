"""Ollama HTTP client per CLAUDE.md Local-LLM Fallback protocol.

Serializes local LLM calls via a filesystem lock so only one request hits
localhost:11434 at a time (MacBook resource preservation). Every call
writes a full transcript per CLAUDE.md § Recording local-LLM sessions.
"""
from __future__ import annotations

import fcntl
import json
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Any

import requests

from config import (
    LOGS_OLLAMA,
    OLLAMA_BASE_URL,
    OLLAMA_LOCK_PATH,
    OLLAMA_NUM_CTX,
    OLLAMA_TEMP_DEFAULT,
    OLLAMA_TIMEOUT_S,
)


@dataclass
class OllamaResponse:
    response: str
    metadata: dict[str, Any]
    transcript_path: Path


class OllamaClient:
    def __init__(
        self,
        base_url: str = OLLAMA_BASE_URL,
        lock_path: Path = OLLAMA_LOCK_PATH,
        transcript_dir: Path = LOGS_OLLAMA,
    ) -> None:
        self.base_url = base_url
        self.lock_path = lock_path
        self.transcript_dir = transcript_dir
        self.transcript_dir.mkdir(parents=True, exist_ok=True)
        self.lock_path.parent.mkdir(parents=True, exist_ok=True)

    def generate(
        self,
        model: str,
        prompt: str,
        reason_for_use: str,
        source_file: str,
        output_file: str = "",
        temperature: float = OLLAMA_TEMP_DEFAULT,
        num_ctx: int = OLLAMA_NUM_CTX,
    ) -> OllamaResponse:
        req = {
            "model": model,
            "prompt": prompt,
            "stream": False,
            "options": {"num_ctx": num_ctx, "temperature": temperature},
        }
        with self.lock_path.open("w") as lockfile:
            fcntl.flock(lockfile.fileno(), fcntl.LOCK_EX)
            try:
                try:
                    resp = requests.post(
                        f"{self.base_url}/api/generate",
                        json=req,
                        timeout=OLLAMA_TIMEOUT_S,
                    )
                    resp.raise_for_status()
                    data = resp.json()
                except requests.exceptions.Timeout as e:
                    raise TimeoutError(
                        f"ollama {model} timed out after {OLLAMA_TIMEOUT_S}s"
                    ) from e
            finally:
                fcntl.flock(lockfile.fileno(), fcntl.LOCK_UN)

        response_text = data.get("response", "")
        metadata = {k: v for k, v in data.items() if k != "response"}

        transcript = self._write_transcript(
            model=model,
            prompt=prompt,
            response=response_text,
            metadata=metadata,
            reason_for_use=reason_for_use,
            source_file=source_file,
            output_file=output_file,
            options=req["options"],
        )
        return OllamaResponse(
            response=response_text, metadata=metadata, transcript_path=transcript
        )

    def _write_transcript(
        self,
        *,
        model: str,
        prompt: str,
        response: str,
        metadata: dict[str, Any],
        reason_for_use: str,
        source_file: str,
        output_file: str,
        options: dict[str, Any],
    ) -> Path:
        ts = time.strftime("%Y-%m-%dT%H-%M-%SZ", time.gmtime())
        slug = "".join(
            c for c in reason_for_use.lower()[:40] if c.isalnum() or c == "-"
        )
        model_slug = model.replace("/", "_").replace(":", "_")
        path = self.transcript_dir / f"{ts}-{model_slug}-{slug or 'untagged'}.md"
        body = (
            f"# Ollama transcript — {model} — {reason_for_use}\n\n"
            f"**Timestamp (UTC):** {ts}\n"
            f"**Model:** {model}\n"
            f"**Source file:** {source_file}\n"
            f"**Output file:** {output_file or 'n/a'}\n"
            f"**Reason for using local model:** {reason_for_use}\n"
            f"**Request options:** {json.dumps(options)}\n\n"
            f"## Prompt\n```\n{prompt}\n```\n\n"
            f"## Response\n{response}\n\n"
            f"## Metadata\n```json\n{json.dumps(metadata, indent=2)}\n```\n"
        )
        path.write_text(body)
        return path
