"""Claude CLI subprocess wrapper.

Uses `claude -p --model <id>` per harness convention. Does NOT use
`--bare` (breaks OAuth — documented in CLAUDE.md). Concurrency bounded
to 2 live subprocesses via threading.BoundedSemaphore.
"""
from __future__ import annotations

import subprocess
import threading
from dataclasses import dataclass
from typing import Optional

from config import (
    CLAUDE_CLI_FLAGS,
    CLAUDE_DEFAULT_IDS,
    CLAUDE_SEMAPHORE_SIZE,
    CLAUDE_TIMEOUT_S,
)


@dataclass
class ClaudeResponse:
    stdout: str
    stderr: str
    returncode: int


class ClaudeClient:
    def __init__(
        self,
        semaphore_size: int = CLAUDE_SEMAPHORE_SIZE,
        timeout_s: int = CLAUDE_TIMEOUT_S,
        model_ids: Optional[dict[str, str]] = None,
    ) -> None:
        self._semaphore = threading.BoundedSemaphore(semaphore_size)
        self._timeout_s = timeout_s
        self._model_ids = dict(model_ids or CLAUDE_DEFAULT_IDS)

    def resolve_model(self, alias: str) -> str:
        return self._model_ids.get(alias, alias)

    def invoke(
        self,
        model: str,
        prompt: str,
        system_prompt: Optional[str] = None,
    ) -> ClaudeResponse:
        model_id = self.resolve_model(model)
        cmd = [
            "claude", "-p", prompt,
            "--model", model_id,
            *CLAUDE_CLI_FLAGS,
        ]
        if system_prompt:
            cmd.extend(["--system-prompt", system_prompt])

        with self._semaphore:
            try:
                completed = subprocess.run(
                    args=cmd,
                    capture_output=True,
                    text=True,
                    timeout=self._timeout_s,
                    check=False,
                )
            except subprocess.TimeoutExpired as e:
                raise TimeoutError(
                    f"claude -p timed out after {self._timeout_s}s"
                ) from e

        return ClaudeResponse(
            stdout=completed.stdout,
            stderr=completed.stderr,
            returncode=completed.returncode,
        )
