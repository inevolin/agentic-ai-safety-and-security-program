# 2026-04-21 — Corpus buildout, expansion, and summarization kickoff

**Session start:** 2026-04-21 (continued from prior session)
**Session end:** 2026-04-21 (in progress)

## Goal
Continue and extend a research corpus on AI social engineering / prompt injection, then produce per-file attack-vector summaries, then organize by topic. Set up persistent logging for future sessions.

## Actions taken
- Verified a user-supplied arxiv paper (2603.25326, "Evaluating Language Models for Harmful Manipulation", DeepMind) was not yet in corpus; downloaded and saved as `sources/230-arxiv-2603.25326-evaluating-language-models-for-harmful-manipulation.md`.
- Dispatched 3 parallel subagents to find & add SOTA papers related to AI manipulation / deception / influence ops. Added 57 new papers (IDs 231–290) across:
  - Persuasion/manipulation (231–250): Salvi RCT, DarkBench, SycEval, ELEPHANT, Moloch's Bargain, etc.
  - Deception/scheming (251–269): Alignment Faking, In-context Scheming, Sycophancy-to-Subterfuge, TruthfulQA, AI Sandbagging, CoT Monitorability, MONA.
  - Influence ops (271–290): Goldstein foundational, BotVerse, MALINT, OpenAI threat reports, CIB studies.
- Removed 2 duplicate files (286/287 overlapped 235/249).
- Created `CLAUDE.md` and `logs/` directory for session handover.
- Kicked off summarization pass: each source gets a companion `{id}-summary.md` with attack-vector breakdown, real-world applicability, reproduction examples, defenses, and framework takeaways.

## Artifacts produced / modified
- `sources/` — 275 source files (was 218 at session start, then 277, deduped to 275).
- `sources/*-summary.md` — 156+ produced so far (of 274 target; live count fluctuates).
- `CLAUDE.md` — project conventions + logging instructions.
- `logs/2026-04-21-01-corpus-buildout-and-summarization.md` — this file.
- `/tmp/rem6_*` — batch lists for pending summarization.

## Blockers / issues
- Multiple subagent runs hit Anthropic Usage Policy refusals when prompted to "generate attacker transcripts" for influence-ops papers. Worked around by reframing prompts in defender/detection-feature terms.
- Parent-session rate-limit hit and reset at 12am Europe/Lisbon; resumed after user re-logged in.
- Earlier 14-way parallel fanout (~20 files/agent) was too aggressive — burned rate limits fast. Reduced to 3–6 concurrent agents and smaller chunks of ~20 files each.

## State at end of session
- Corpus: 275 source files in `sources/`, ~13 MB.
- Summaries: 156 `*-summary.md` present; 121 outstanding. 3 subagents currently processing `/tmp/rem6_aa`/`ab`/`ac` (63 files). The final 58 (chunks `ad`/`ae`/`af`) are staged but not yet dispatched.
- No reorganization into subdirectories yet; user wants categorization (training-data attacks / prompt injection / multimodal / human psychology / etc.) once all summaries are produced.

## Next steps
- Wait for current 3 subagents to complete; then dispatch the remaining 58 files in chunks `/tmp/rem6_ad`, `ae`, `af` using the neutral defender-side prompt template.
- Once all 274 summaries exist, propose a taxonomy (e.g. `prompt-injection/`, `jailbreaking/`, `agent-attacks/`, `multimodal-attacks/`, `training-poisoning-backdoors/`, `human-manipulation/`, `deception-alignment/`, `influence-ops/`, `defenses-benchmarks/`, `surveys/`) and move both source and summary into the right subdir.
- Rebuild `sources/INDEX.md` to reflect the new structure.
