# Details

Supplementary reference for the [Agentic AI Safety & Security Program](README.md). Top-level README covers the headline result, training platform, attack catalogue, and defensive playbook. Sections below cover local setup, corpus structure, intent-based quickstart, reproducibility guarantees, and project conventions.

---

## Run the training platform locally

```bash
cd web
pnpm install
pnpm exec prisma migrate dev      # creates dev.db
pnpm dev                          # http://localhost:3000
pnpm test                         # jest tests for grading + exam-submit
pnpm build && pnpm start          # production
```

Required env: `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `CERT_ISSUER`. Replit Cloud Run config is checked in (`web/.replit`, `web/replit.nix`).

---

## The corpus

`sources/` is the substrate the attacks and the playbook are built on. Ten taxonomy buckets — one category per item, definitions in [`sources/INDEX.md`](sources/INDEX.md):

```
prompt-injection · jailbreaking · agent-attacks · multimodal-attacks
training-poisoning-backdoors · human-manipulation · deception-alignment
influence-ops · defenses-benchmarks · surveys
```

Each bucket holds two file types side-by-side:

- **Papers / blogs / reports** (numeric ID prefix, e.g. `230-…md`) — each paired with a `{id}-summary.md` that pulls real prompts and payloads **verbatim** before any extrapolation.
- **Promptfoo LM Security DB entries** (8-hex-hash prefix) — 931 exploit records scraped from [promptfoo.dev/lm-security-db](https://www.promptfoo.dev/lm-security-db) on 2026-04-22.

Total: **1,205 items.** Built and indexed via massively parallel subagent fan-out — see [`METHODOLOGY.md`](METHODOLOGY.md) §1.1.

---

## Quickstart by intent

<table>
<tr><td width="33%" valign="top">

### 🎯 Reproduce a bypass

```bash
cd attacks/demos/MAA1-multi-agent
./run_demo.sh
```

Read the verdict log written into the demo directory.

</td><td width="33%" valign="top">

### 🛡️ Ship mitigations

Open [`docs/mitigations/ai-agent-security-mitigations.md`](docs/mitigations/ai-agent-security-mitigations.md), start at the **Executive Risk Register**, then jump to **Part 2 — Technical Playbook** for enforcement points.

</td><td width="33%" valign="top">

### 🎓 Train your team

```bash
cd web && pnpm install
pnpm exec prisma migrate dev
pnpm dev
```

Six modules, gated quizzes, proctored exam, signed certificate.

</td></tr>
</table>

---

## Reproducibility & provenance

- **Every attack demo is a single-command repro** with a checked-in seed payload, system prompt, runner script, and prior verdict logs.
- **Every session is logged** in `logs/YYYY-MM-DD-NN-slug.md` and committed before the session ends.
- **Every Ollama interaction is transcribed verbatim** to `logs/ollama-transcripts/` — full prompt, full response, model metadata.
- **CLAUDE.md is a living document** — gotchas, MCP confounds, harness quirks, and bypass parameters are all recorded as future-Claude handover.
- **No fabricated citations.** Arxiv IDs and DOIs are verified by fetching the abstract page before any source is added to the corpus.

---

## Project conventions (for contributors and future agents)

- **Code changes go through subagents** at `model: "sonnet"`, medium effort. The parent agent surveys, plans, and reviews — Sonnet does the reads/edits/builds. Conserves context, separates orchestration from execution.
- **Never force-push** or amend published commits.
- **Never delete `sources/` files** without confirming with the user.
- **Always wrap rendered attack-vector IDs** in the `<AttackRef>` component on the training site — bare text loses the tooltip + provenance link.
- **Light mode is CSS-variable overrides**, not a separate theme. New dark utilities require a matching `html.light` override or you'll ship a dark patch.
- **Portals for popovers.** Tooltips and modals over `glass` cards must `createPortal` to `document.body` — those surfaces use `overflow: hidden` and create stacking contexts.
