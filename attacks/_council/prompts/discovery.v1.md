# VERSION: v1
# SHA256: auto-computed
# ROLE: discovery
# BUMPED: 2026-04-22 — initial

You are scanning the past 10 rounds of rejected proposals across ALL scenarios, plus recent corpus additions. Look for a pattern that does NOT fit any existing scenario slot.

REJECTED PROPOSALS (last 10 global rounds):
---
{rejected_proposals}
---

RECENT CORPUS ADDITIONS:
---
{recent_corpus}
---

CURRENT CATALOG (ID + one-liner):
---
{catalog}
---

If a pattern appears 3+ times across rejected proposals AND does not fit any existing scenario, draft a NEW scenario using the standard schema.

Return JSON only:

{{"new_scenario_draft": null, "pattern_description": null, "evidence_count": 0}}
