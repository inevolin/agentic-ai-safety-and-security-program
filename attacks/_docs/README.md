# attacks/_docs/ — Research findings and ideation protocol

This directory holds two types of documents for the attack workstream:

## Contents

| File | Purpose |
|---|---|
| `ideation-protocol.md` | Governs how attack vectors are designed: Opus-first (parent agent), Ollama-fallback when Opus refuses on specific payload wording. Read this before proposing a new attack. |
| `findings-2026-04-22.md` | Baseline battery results — 8 seed attacks against Haiku 4.5 with explicit canary system prompt. All 8 held defensively; documents grader behavior, behavioral observations, and the backlog of next-step vectors. |
| `findings-2026-04-22-council-and-opus.md` | Follow-on session: Opus/Sonnet one-shot results on the same 8 seeds (zero genuine canary breaches), plus the LLM-council iterative framework (F1/F2/E2/A1/L2 scenarios). |

## How findings documents are used

After every meaningful attack session, append a new findings note here (or add a dated section to an existing file). The findings doc is the cross-session memory for the attack workstream; session logs in `logs/` record the mechanical steps, but `_docs/` records the analytical conclusions — what fired, what didn't, why, and what to try next.

## Ideation flow

1. Parent agent (Opus) designs hypothesis, technique family, source citations, expected outcome, payload text.
2. If Opus refuses on wording, hand off to a local Ollama model per `ideation-protocol.md`.
3. Opus curates result, wraps into an attempt directory under `attacks/NNN-slug/`, and updates `attacks/INDEX.md`.

See also `CLAUDE.md` → "Red-team harness (`attacks/`)" and "Ideation protocol" sections for the full authoritative context.
