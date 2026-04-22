"""Classify a scenario markdown as harness-extractable (single-shot payload)
or paper-only. Per spec §5."""
from __future__ import annotations

import re
from dataclasses import dataclass


_KNOWN_EXTRACTABLE_IDS = {
    "F1", "F2", "F4", "E2", "E3", "SC1", "SC2", "H1", "M1", "L1", "L4",
}

_AUTOMATION_RE = re.compile(r"\*\*Automation:\*\*\s*([^\n]+)", re.IGNORECASE)
_CHANNEL_RE = re.compile(r"\*\*Injection channel:\*\*\s*([^\n]+)", re.IGNORECASE)
_ID_RE = re.compile(r"###\s+([A-Z]+\d+[a-z]?)\.?", re.IGNORECASE)
_PAYLOAD_RE = re.compile(
    r"\*\*Payload \(example\):\*\*\s*\n\s*```", re.IGNORECASE
)


@dataclass
class ExtractabilityResult:
    extractable: bool
    reason: str


_SINGLE_SHOT_CHANNELS = [
    "pdf", "csv", "readme", "skill.md", "tool description",
    "resume", "ocr", "questionnaire",
]


def classify(markdown: str) -> ExtractabilityResult:
    # 1. Explicit list overrides anything else
    id_match = _ID_RE.search(markdown)
    scenario_id = id_match.group(1).upper() if id_match else ""
    if scenario_id in _KNOWN_EXTRACTABLE_IDS:
        return ExtractabilityResult(True, f"known-extractable id {scenario_id}")

    # 2. Must have a code-fenced payload block
    if not _PAYLOAD_RE.search(markdown):
        return ExtractabilityResult(False, "no code-fenced payload block")

    # 3. human-in-loop → not extractable
    auto = _AUTOMATION_RE.search(markdown)
    automation = auto.group(1).strip().lower() if auto else ""
    if "human-in-loop" in automation or "hitl" in automation:
        return ExtractabilityResult(False, "human-in-loop automation")

    # 4. Channel heuristic
    channel = _CHANNEL_RE.search(markdown)
    channel_text = channel.group(1).strip().lower() if channel else ""
    for keyword in _SINGLE_SHOT_CHANNELS:
        if keyword in channel_text:
            return ExtractabilityResult(True, f"channel matches {keyword}")

    return ExtractabilityResult(False, "multi-tool or ambiguous channel")
