"""Tests for DiscoveryEngine."""
from __future__ import annotations

from pathlib import Path
from unittest.mock import MagicMock

from discovery import DiscoveryEngine


def _prompts(d: Path) -> Path:
    d.mkdir(exist_ok=True)
    (d / "discovery.v1.md").write_text(
        "# VERSION: v1\n# SHA256: x\n# ROLE: discovery\n\n"
        "{rejected_proposals} {recent_corpus} {catalog}\n"
    )
    return d


def test_discovery_skips_when_rejected_empty(tmp_council_root: Path):
    claude = MagicMock()
    prompts = _prompts(tmp_council_root / "prompts")
    proposed = tmp_council_root / "proposed"
    proposed.mkdir(exist_ok=True)
    eng = DiscoveryEngine(claude=claude, prompts_dir=prompts, proposed_dir=proposed)
    result = eng.run(rejected_proposals=[], recent_corpus="", catalog="")
    assert result["drafted"] is False


def test_discovery_writes_draft_when_claude_returns_one(tmp_council_root: Path):
    claude = MagicMock()
    claude.invoke.return_value = MagicMock(
        stdout=(
            '{"new_scenario_draft": "### NEW1. X\\nbody", '
            '"pattern_description": "p", "evidence_count": 4}'
        ),
        stderr="", returncode=0,
    )
    prompts = _prompts(tmp_council_root / "prompts")
    proposed = tmp_council_root / "proposed"
    proposed.mkdir(exist_ok=True)
    eng = DiscoveryEngine(claude=claude, prompts_dir=prompts, proposed_dir=proposed)
    result = eng.run(rejected_proposals=["p1", "p2", "p3", "p4"],
                     recent_corpus="r", catalog="c")
    assert result["drafted"] is True
    drafts = list(proposed.glob("auto-*.md"))
    assert len(drafts) == 1


def test_discovery_pauses_after_5_empty(tmp_council_root: Path):
    claude = MagicMock()
    claude.invoke.return_value = MagicMock(
        stdout='{"new_scenario_draft": null, "pattern_description": null, "evidence_count": 0}',
        stderr="", returncode=0,
    )
    prompts = _prompts(tmp_council_root / "prompts")
    proposed = tmp_council_root / "proposed"
    proposed.mkdir(exist_ok=True)
    eng = DiscoveryEngine(claude=claude, prompts_dir=prompts, proposed_dir=proposed)
    for _ in range(5):
        eng.run(rejected_proposals=[], recent_corpus="", catalog="")
    assert eng.is_paused() is True
