"""Discovery mode per spec §8/§9.

Every 10 global rounds (orchestrator schedules), runs one Claude Opus
call to scan rejected proposals + recent corpus additions + catalog.
Writes `_scenarios/proposed/auto-{ts}.md` when Claude returns a draft.
Pauses after 5 consecutive empty calls (spec §15 Q5).
"""
from __future__ import annotations

import json
import re
import time
from pathlib import Path

from config import DISCOVERY_PAUSE_AFTER_EMPTY
from roles import load_prompt


_JSON_BLOCK_RE = re.compile(r"\{.*\}", re.DOTALL)


class DiscoveryEngine:
    def __init__(self, claude, prompts_dir: Path, proposed_dir: Path) -> None:
        self.claude = claude
        self.template = load_prompt(prompts_dir, "discovery", "v1")
        self.proposed_dir = proposed_dir
        self.proposed_dir.mkdir(parents=True, exist_ok=True)
        self._empty_streak = 0
        self._paused = False

    def is_paused(self) -> bool:
        return self._paused

    def unpause(self) -> None:
        self._paused = False
        self._empty_streak = 0

    def run(
        self,
        rejected_proposals: list[str],
        recent_corpus: str,
        catalog: str,
    ) -> dict:
        if self._paused:
            return {"drafted": False, "paused": True}
        if not rejected_proposals:
            self._empty_streak += 1
            self._check_pause()
            return {"drafted": False}

        prompt = self.template.render(
            rejected_proposals="\n\n---\n\n".join(rejected_proposals),
            recent_corpus=recent_corpus,
            catalog=catalog,
        )
        resp = self.claude.invoke(model="opus", prompt=prompt, system_prompt=None)
        parsed = _parse_json(resp.stdout)
        draft = parsed.get("new_scenario_draft")
        if not draft:
            self._empty_streak += 1
            self._check_pause()
            return {"drafted": False}

        ts = time.strftime("%Y%m%d-%H%M%S", time.gmtime())
        draft_file = self.proposed_dir / f"auto-{ts}.md"
        draft_file.write_text(draft)

        index = self.proposed_dir / "INDEX.md"
        existing = index.read_text() if index.exists() else "# Proposed scenarios\n\n"
        entry = (
            f"- [{draft_file.name}]({draft_file.name}) "
            f"— evidence {parsed.get('evidence_count')} — status: pending\n"
        )
        index.write_text(existing + entry)

        self._empty_streak = 0
        return {
            "drafted": True,
            "draft_file": str(draft_file),
            "pattern_description": parsed.get("pattern_description"),
        }

    def _check_pause(self) -> None:
        if self._empty_streak >= DISCOVERY_PAUSE_AFTER_EMPTY:
            self._paused = True


def _parse_json(text: str) -> dict:
    m = _JSON_BLOCK_RE.search(text)
    if not m:
        return {}
    try:
        return json.loads(m.group(0))
    except json.JSONDecodeError:
        return {}
