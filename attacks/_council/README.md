# attacks/_council/ — LLM Council scenario-improvement framework

Karpathy-style LLM council that iterates every enterprise attack scenario
for 20–100 rounds. See spec:
`docs/superpowers/specs/2026-04-22-llm-council-scenario-improver-design.md` (r3.1).

## Invariants

- Sequential scenarios (no cross-scenario parallelism).
- One Ollama HTTP request at a time via `fcntl` lock at `/tmp/council-ollama.lock`.
- At most 2 concurrent `claude -p` subprocesses via `BoundedSemaphore(2)`.
- Hard-pinned Claude model IDs at startup; resume refuses on mismatch.
- Append-only JSONL per scenario at `attacks/_scenarios/versions/{id}.jsonl`.
- Canonical scenario markdown overwritten only on CONVERGED / HARDENED / CEILING.
- Every Ollama call logged per CLAUDE.md § Recording local-LLM sessions.

## Install

```bash
cd attacks/_council
python3.12 -m pip install --user --break-system-packages -e .[dev]
```

(Python 3.11 has dyld issues on this Mac; 3.12 verified.)

## Running

```bash
cd attacks/_council

# Tests
python3.12 -m pytest

# Orchestrator CLI help
python3.12 -m orchestrator --help

# One-time index build (requires local Ollama with nomic-embed-text)
python3.12 -m orchestrator index-promptfoo

# Baseline all scenarios (round 0 only, fast)
python3.12 -m orchestrator baseline --scenarios all

# Full run (weeks of wall-clock — run in background)
python3.12 -m orchestrator run --scenarios all

# Progress
python3.12 -m orchestrator status

# Resume after crash
python3.12 -m orchestrator resume
```

## Files produced per scenario

- `attacks/_scenarios/by-department/{dept}.md` — canonical, overwritten on convergence.
- `attacks/_scenarios/versions/{id}.jsonl` — append-only audit trail, one row per round.
- `logs/council/{date}/{id}/r{NN}/` — per-round artifacts (proposals, critiques, harness logs).
- `logs/ollama-transcripts/` — every Ollama call, per CLAUDE.md protocol.
- `attacks/_council/library/techniques.jsonl` — cross-scenario learnings.
- `attacks/_council/library/cost-ledger.jsonl` — harness spend tracking.
- `attacks/_council/library/safety-redactions.jsonl` — every safety-filter event.

## Layout

```
attacks/_council/
  config.py                  constants, allowlists, model registry
  orchestrator.py            CLI + scheduler
  round_engine.py            7-step per-round protocol
  roles.py                   SHA256-hashed prompt template loader
  ollama_client.py           HTTP + fcntl lock + transcript writer
  claude_client.py           claude -p subprocess + semaphore(2)
  harness_adapter.py         wraps attacks/_harness/run_attempt.sh
  extractability.py          §5 classifier
  scoring.py                 Wilson CI, semantic diff, MRR, rank variance
  stop_rule.py               §7 decider with bidirectional A/B signal
  harness_schedule.py        §7a 2D-factorial jitter
  safety_filter.py           3-layer: NFKD + regex + Bloom (Layer 3 deferred)
  promptfoo_index.py         §8 Annoy-backed novelty oracle
  novelty.py                 §8 scorer with M4 library-borrow exclusion
  technique_library.py       §4.3 cross-scenario append-only library
  cost_tracker.py            §14.1 cap enforcement
  ab_judge.py                §4.2 step 6b blinded current-vs-r00
  state.py                   JSONL round rows + .council-state.json
  scenario_state.py          §13 state machine with 5-reopen ceiling
  discovery.py               §8 decennial pattern-mining
  prompts/                   13 v1 templates
  library/                   techniques, cost ledger, bloom, annoy index
  tests/                     103+ tests
```

## Spec r3.1 as source of truth

Any behavior question is answered by the spec, not by a subsequent conversation.
The spec has been sign-off-reviewed by a superpowers:code-reviewer subagent.
