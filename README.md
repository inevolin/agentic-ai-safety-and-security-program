# AI Agent Security Research & Training Platform

Defensive research project on social engineering, prompt injection, and tool-use abuse against AI agents — paired with an end-to-end certification training platform for the company leaders, IT admins, and developers who deploy them.

> Research artifact. All attacker domains, vendor names, and portal URLs are placeholders used for defensive testing. Do not act on any URL inside `attacks/` or the mitigation document.

## What's in the repo

| Path | What it is |
|---|---|
| `sources/` | Corpus of **1,205 items** across 10 taxonomy categories — 274 papers/blogs/reports (each with a companion summary) and 931 Promptfoo LM Security DB exploit entries. Indexed by `sources/INDEX.md`. |
| `attacks/` | Red-team CTF harness that runs documented attack vectors against `claude -p` (Haiku / Sonnet / Opus). Includes 21+ scripted enterprise attack demos under `attacks/demos/`. |
| `docs/mitigations/ai-agent-security-mitigations.md` | 1,054-line mitigation research document. Executive risk register, 10 defensive primitives, and 17 attack anatomy cards — all grounded in the bypasses we actually tested. |
| `web/` | Next.js 14 training web app. Six lesson modules, per-module quizzes, a 40-question proctored exam, PDF certificate issuance, and a public verification page. |
| `logs/` | Session-by-session research journal (58 files). Each session ends with a log + git commit. |
| `CLAUDE.md` | Living context document for Claude sessions working on this repo. Read it before touching `attacks/` — it records the gotchas already paid for. |
| `METHODOLOGY.md` | How this research is run: defender-side framing, verbatim-first extraction, parallel subagent batches, local-LLM fallback for policy refusals. |

## Headline findings

24 indirect prompt-injection attacks built and tested end-to-end against production Claude models.

- **Haiku** — compromised by every attack tested.
- **Sonnet** — 16 confirmed bypass mechanisms. The attack surface is enterprise workflows where Sonnet reads untrusted external content (Slack, Notion, CI logs, git history, email threads, calendar invites, helpdesk tickets, config files, vendor registries) and writes to an internal system. Sonnet is robustly defended against direct document injection but trusts its own enterprise's data sources.
- **Opus** — 5 confirmed bypasses (SP1, SP1 full-chain, MAA1, WIKI1 v4, CONF1+MAA1 v2). Opus's stronger defenses against document and conversational injection make it **more** reliant on data registries as ground truth — which amplifies MAA1 (multi-agent transitive data poisoning) against the most capable model.

The most critical result is **MAA1**: a cheap upstream Haiku agent processing external documents gets weaponized to poison an internal registry, and Sonnet/Opus downstream cite that poisoned registry as policy-authoritative — turning the enterprise's own defensive policy into the delivery mechanism.

Full write-up in `attacks/demos/FINDINGS.md`. Per-bypass anatomy and mitigations in `docs/mitigations/ai-agent-security-mitigations.md`.

## Training platform (`web/`)

Next.js 14 + TypeScript + Tailwind + Prisma 7 (SQLite via `@prisma/adapter-libsql`) + NextAuth (JWT + credentials) + `@react-pdf/renderer`.

Content: 6 MDX lesson modules with gated quizzes, a 40-question exam (shuffled question order, 80% pass mark), signed PDF certificate with a public `/verify/[code]` page.

```bash
cd web
pnpm install
pnpm exec prisma migrate dev      # creates dev.db
pnpm dev                          # http://localhost:3000
pnpm test                         # jest tests for grading + exam-submit
pnpm build && pnpm start          # production
```

Environment: `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `CERT_ISSUER`. Replit Cloud Run config in `web/.replit` + `web/replit.nix`.

## Running an attack demo

```bash
cd attacks/demos/<ATTACK-ID>
./run_demo.sh              # seeds sandbox, runs claude -p, grades output
```

Each demo directory contains: the seed payload, the system prompt, a `run_demo.sh` orchestrator, and the verdict logs from prior runs. The harness proper lives at `attacks/_harness/` — see `attacks/README.md` and `CLAUDE.md` for the gotchas (sandbox location, OAuth vs API-key auth, watchdog, grader diffing).

## Directory map

```
.
├── attacks/            red-team harness + 21+ enterprise attack demos
│   ├── _harness/       run_attempt.sh, grade.sh, CTF system prompt
│   ├── _scenarios/     mitigation primitives + assessments
│   ├── demos/          scripted attacks (SP1, AI1, TP1, MAA1, CI1, GIT1, EL1, SL1, ...)
│   └── INDEX.md        attempt × model ledger
├── docs/
│   ├── mitigations/    research paper (risk register, primitives, anatomy cards)
│   └── superpowers/    design specs + implementation plans
├── sources/            1,205 papers + Promptfoo LM Security DB entries
├── web/                Next.js 14 training app
├── logs/               58 session logs (chronological research journal)
├── CLAUDE.md           project context for future Claude sessions
└── METHODOLOGY.md      how the research is run
```

## Methodology

See `METHODOLOGY.md`. Short version: defender-side framing, verbatim extraction before extrapolation, massively parallel subagents for batch work, session logs as handover documents, and local Ollama fallback (on an M1 MBP) when Claude policy-refuses clearly in-scope defensive tasks. Every Ollama interaction is transcribed to `logs/ollama-transcripts/`.
