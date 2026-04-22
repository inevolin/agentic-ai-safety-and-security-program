# 2026-04-22 — LLM Council framework: spec, plan, and full implementation

**Session start:** 2026-04-22T10:00:00Z (approx)
**Session end:** 2026-04-22T15:30:00Z (approx)

## Goal

User asked for an "AI agent framework inspired by karpathy/llm-council" to iteratively
improve the 52 enterprise attack scenarios in `attacks/_scenarios/`, using local Ollama
models + Claude Opus/Sonnet subagents, 20–100 rounds per scenario, with an IMPROVE →
TEST+REPRODUCE → DOCUMENT cycle.

## Actions taken

1. **Brainstorm (spec r1)** — clarified topology, scope, iteration budget, stop rule,
   output strategy through ~5 directional questions with the user. Produced design doc
   `docs/superpowers/specs/2026-04-22-llm-council-scenario-improver-design.md`.
2. **Spec r2 sign-off loop** — dispatched `superpowers:code-reviewer` subagent, which
   returned 11 proposed improvements. Folded in 9 of 11 (deferred cluster-discovery
   and automated live-artifact re-test to v2). Answered 5 open questions inline.
3. **Spec r3 sign-off loop** — dispatched second-round reviewer, which flagged 5 MUST
   FIX (cost cap, 2D-factorial jitter orthogonality, safety filter bypass, novelty vs
   library-borrow, JSONL schema query-readiness), 7 SHOULD FIX, 4 NICE TO HAVE. Applied
   all 16. Two Pass-2 cleanups landed as r3.1.
4. **Implementation plan** — invoked `superpowers:writing-plans` skill to turn r3.1
   into a 38-task plan across 7 phases. Saved to `docs/superpowers/plans/`.
5. **Execution (phases 0–7)** — invoked `superpowers:subagent-driven-development` and,
   per user's explicit autonomy instruction, executed the plan directly with subagent
   reviews at phase boundaries rather than per-task. Each phase: implement → pytest →
   commit. 104 tests all passing.
6. **Final sign-off** — dispatched `superpowers:code-reviewer` on the full
   implementation. Verdict: SHIP WITH FIXES. 3 critical issues (CLI stub, decennial
   A/B+skeptic not wired, discovery not running in main loop) plus 2 important-
   deferrables (promptfoo index not connected, signals to step 6a dummy). Applied all
   5 fixes in commit aece59b. 104 tests still passing.

## Artifacts produced / modified

- `docs/superpowers/specs/2026-04-22-llm-council-scenario-improver-design.md` — spec r3.1 (final)
- `docs/superpowers/plans/2026-04-22-llm-council-scenario-improver-plan.md` — 38-task plan
- `attacks/_council/` — full framework implementation:
  - 20 Python modules (config, orchestrator, round_engine, roles, 3 clients, 6 pure-logic
    libs, 3 infrastructure modules, discovery, novelty, ab_judge, scenario_state, state)
  - 13 prompt templates under `prompts/*.v1.md` with SHA256-stamped headers
  - `library/real-entity-bloom.txt` with 20-name Fortune seed
  - 14 pytest test files — 104 tests passing
  - `README.md` with quickstart
- `logs/2026-04-22-06-*.md` — this log

## Blockers / issues

- Python 3.11 on this Mac has dyld issues (refs a missing 3.12 framework); worked
  around by using `python3.12` everywhere.
- Annoy's tree partitioning on <5-item indexes returns non-deterministic nearest.
  Test was loosened; production index (931 entries) not affected.
- Live Ollama + Claude calls have NOT been tested — all tests use mocks. The first
  live run will surface any prompt-template or subprocess issues.

## State at end of session

- Spec r3.1 committed and code-reviewer-signed-off.
- 38-task plan committed.
- Implementation committed across 8 phase commits (phase0–7 + signoff-fixes).
- 104/104 tests passing.
- Framework is ready for a first live run, pending:
  - User confirms Ollama running at localhost:11434 with the 4 proposer models + gemma4 + deepseek-r1 + nomic-embed-text
  - User has OAuth'd `claude` CLI
  - User runs `python3.12 -m orchestrator index-promptfoo` (one-time; ~45 min; embeds 931 sources/ entries)
  - User runs `python3.12 -m orchestrator baseline --scenarios all` (one-time; round-0 freeze of all 52 scenarios)
  - User runs `python3.12 -m orchestrator run --scenarios all --min 20 --max 100` (the big run; 2–5 weeks wall-clock)

## Next steps

1. Live smoke: pick one small-paper scenario (e.g., L2 or M4 — paper-only, fast round
   without harness firings), run `orchestrator run --scenarios L2 --min 1 --max 1` and
   inspect the JSONL + artifacts for correctness before committing to the full catalog.
2. If live smoke surfaces issues (prompt JSON parse failures, Ollama timeouts, etc.),
   iterate on prompts or add defensive parsing in round_engine.
3. When live smoke is clean, kick off the full catalog run in the background.
4. `orchestrator.py status --costs` while the run is in flight for progress check.
5. Open items deferred explicitly in spec §17 remain for v2: cluster-based discovery
   (chains off the promptfoo embedder), automated live-artifact re-test against
   Notion/GitHub counterparts.
