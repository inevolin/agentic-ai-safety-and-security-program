"""Orchestrator — CLI entry + scenario scheduler.

Per spec §4.1: iterate all scenarios sequentially; per-scenario round
loop until stop; persist .council-state.json; resume refuses on model
pinning mismatch (§15 Q4).
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional

from config import (
    CLAUDE_DEFAULT_IDS,
    HARNESS_GLOBAL_CAP_USD,
    HARNESS_PER_SCENARIO_CAP_USD,
    ROUND_MAX,
    ROUND_MIN,
)
from extractability import classify
from scoring import semantic_diff_bytes
from state import (
    append_round_row,
    load_state,
    reconstruct_state_from_jsonl,
    save_state,
)
from stop_rule import StopSignals, decide_stop


_ID_RE = re.compile(r"###\s+([A-Z]+\d+[a-z]?)\.?", re.IGNORECASE)


def _extract_ids(markdown: str) -> set[str]:
    return {m.group(1).upper() for m in _ID_RE.finditer(markdown)}


@dataclass
class OrchestratorConfig:
    council_dir: Path
    scenarios_dir: Path
    versions_dir: Path
    logs_dir: Path
    proposed_dir: Path
    state_file: Path
    min_rounds: int = ROUND_MIN
    max_rounds: int = ROUND_MAX
    global_harness_cap: float = HARNESS_GLOBAL_CAP_USD
    per_scenario_harness_cap: float = HARNESS_PER_SCENARIO_CAP_USD
    model_ids: dict[str, str] = field(
        default_factory=lambda: dict(CLAUDE_DEFAULT_IDS)
    )


class Orchestrator:
    def __init__(self, config: OrchestratorConfig) -> None:
        self.config = config
        for d in (config.versions_dir, config.logs_dir, config.proposed_dir):
            d.mkdir(parents=True, exist_ok=True)

    def initialize_state(self) -> None:
        """Cold start — record model-ID pins."""
        snapshot = {
            "global_round_counter": 0,
            "resolved_model_ids": dict(self.config.model_ids),
            "scenarios": {},
        }
        save_state(self.config.state_file, snapshot)

    def load_or_reconstruct_state(self) -> dict:
        if self.config.state_file.exists():
            state = load_state(self.config.state_file)
            # Fallback: if state.json has empty scenarios dict BUT versions/
            # has non-empty JSONLs, the state.json was saved at startup and
            # never updated (process crashed mid-scenario). Prefer the
            # reconstruction from JSONL tails in that case.
            has_scenarios_in_state = bool(state.get("scenarios"))
            jsonls = list(self.config.versions_dir.glob("*.jsonl"))
            has_jsonl_data = any(f.stat().st_size > 0 for f in jsonls)
            if not has_scenarios_in_state and has_jsonl_data:
                recon = reconstruct_state_from_jsonl(self.config.versions_dir)
                recon["resolved_model_ids"] = state.get(
                    "resolved_model_ids", dict(self.config.model_ids)
                )
                return recon
            return state
        recon = reconstruct_state_from_jsonl(self.config.versions_dir)
        recon["resolved_model_ids"] = dict(self.config.model_ids)
        return recon

    def resume(self) -> dict:
        state = self.load_or_reconstruct_state()
        pinned = state.get("resolved_model_ids", {})
        for k, v in self.config.model_ids.items():
            if pinned.get(k) and pinned[k] != v:
                raise RuntimeError(
                    f"model pinning mismatch on resume: {k} was {pinned[k]}, "
                    f"now {v}. Use --claude-models to re-pin explicitly."
                )
        return state

    def list_scenarios(
        self, filter_ids: Optional[list[str]] = None
    ) -> list[Path]:
        candidates: list[Path] = []
        for md in sorted(self.config.scenarios_dir.rglob("*.md")):
            if md.parent.name in {"versions", "proposed", "drift-review"}:
                continue
            candidates.append(md)
        if filter_ids:
            wanted = set(filter_ids)
            candidates = [
                c for c in candidates
                if _extract_ids(c.read_text()) & wanted
            ]
        return candidates

    def _build_clients(self) -> dict:
        from ab_judge import ABJudge
        from claude_client import ClaudeClient
        from cost_tracker import CostTracker
        from harness_adapter import HarnessAdapter
        from ollama_client import OllamaClient
        from safety_filter import redact
        from technique_library import TechniqueLibrary

        class _SafetyAdapter:
            def redact(self, text):
                return redact(text)

        ollama = OllamaClient()
        claude = ClaudeClient(model_ids=self.config.model_ids)
        harness = HarnessAdapter(
            script_path=Path("attacks/_harness/run_attempt.sh"),
            scenario_dir=self.config.scenarios_dir,
        )
        cost = CostTracker(
            ledger_path=self.config.council_dir / "library" / "cost-ledger.jsonl",
            global_cap=self.config.global_harness_cap,
            per_scenario_cap=self.config.per_scenario_harness_cap,
        )
        library = TechniqueLibrary(
            path=self.config.council_dir / "library" / "techniques.jsonl",
        )
        ab = ABJudge(claude=claude, prompts_dir=self.config.council_dir / "prompts")
        return {
            "ollama": ollama, "claude": claude, "harness": harness, "cost": cost,
            "library": library, "safety": _SafetyAdapter(), "ab": ab,
        }

    def run_once(self, scenario_filter: Optional[list[str]] = None) -> None:
        from round_engine import RoundContext, RoundEngine
        from scenario_state import ScenarioMachine, State

        clients = self._build_clients()
        engine = RoundEngine(
            prompts_dir=self.config.council_dir / "prompts",
            ollama_client=clients["ollama"],
            claude_client=clients["claude"],
            harness_adapter=clients["harness"],
            cost_tracker=clients["cost"],
            technique_library=clients["library"],
            promptfoo_index=None,
            safety_filter=clients["safety"],
            ab_judge=clients["ab"],
        )

        state = self.load_or_reconstruct_state()
        scenarios = self.list_scenarios(filter_ids=scenario_filter)

        for scenario_path in scenarios:
            self._process_scenario(engine, scenario_path, state)
            save_state(self.config.state_file, state)

    def _process_scenario(
        self, engine, scenario_path: Path, state: dict
    ) -> None:
        from round_engine import RoundContext
        from scenario_state import ScenarioMachine, State

        markdown = scenario_path.read_text()
        ids = _extract_ids(markdown)
        if not ids:
            return
        sid = next(iter(ids))

        scn_state = state["scenarios"].get(sid, {})
        status = scn_state.get("status", "UNSEEN")
        machine = ScenarioMachine(sid, State(status))
        versions_path = self.config.versions_dir / f"{sid}.jsonl"
        classification = classify(markdown)

        if machine.state == State.UNSEEN:
            machine.start_baseline()
            baseline_dir = self.config.logs_dir / sid / "r00"
            ctx0 = RoundContext(
                scenario_id=sid,
                scenario_markdown=markdown,
                extractable=classification.extractable,
                artifacts_dir=baseline_dir,
                round_num=0,
                resolved_model_ids=state["resolved_model_ids"],
            )
            row = engine.run_baseline(ctx0)
            append_round_row(versions_path, row)
            machine.baseline_complete()
            state["scenarios"][sid] = {
                "status": machine.state.value,
                "last_round": 0,
                "reopen_count": 0,
            }

        round_num = int(state["scenarios"][sid]["last_round"]) + 1
        consecutive_no_move = 0
        skeptic_clean_rounds = 0
        prior_rows: list[dict] = []
        baseline_md = markdown
        current_md = markdown
        ab_last_conf = 0.5
        ab_prev_conf = 0.5

        from config import DISCOVERY_CADENCE, SEMANTIC_DIFF_THRESHOLD_BYTES, SKEPTIC_CADENCE

        while machine.state == State.RUNNING and round_num <= self.config.max_rounds:
            artifacts = self.config.logs_dir / sid / f"r{round_num:02d}"
            ctx = RoundContext(
                scenario_id=sid,
                scenario_markdown=current_md,
                extractable=classification.extractable,
                artifacts_dir=artifacts,
                round_num=round_num,
                prior_rounds=prior_rows,
                global_round_counter=state["global_round_counter"],
                resolved_model_ids=state["resolved_model_ids"],
            )
            row = engine.run_round(ctx)

            # --- Decennial steps 6b (A/B judge) + 6c (skeptic) ---
            skeptic_ran = False
            skeptic_broke = False
            if round_num % SKEPTIC_CADENCE == 0:
                try:
                    skeptic_result = engine._step6c_skeptic(
                        scenario_markdown=row.get("chairman", {}).get("draft", current_md),
                        artifacts_dir=artifacts,
                    )
                    skeptic_ran = True
                    skeptic_broke = bool(skeptic_result.get("broke"))
                    if skeptic_broke:
                        skeptic_clean_rounds = 0
                    else:
                        skeptic_clean_rounds += 1
                    row["skeptic"] = skeptic_result
                except Exception as e:  # noqa: BLE001
                    row["skeptic_error"] = str(e)

                try:
                    ab_result = engine.ab_judge.compare(
                        baseline=baseline_md,
                        current=row.get("chairman", {}).get("draft", current_md),
                        seed=round_num,
                    )
                    ab_prev_conf = ab_last_conf
                    ab_last_conf = ab_result.confidence_vs_baseline
                    row["ab_judge"] = {
                        "confidence_vs_r00": ab_last_conf,
                        "better": ab_result.better,
                        "ran_this_round": True,
                        "last_ran_round": round_num,
                    }
                    (artifacts / "06b-ab-judge.json").write_text(
                        json.dumps({
                            "confidence_vs_r00": ab_last_conf,
                            "better": ab_result.better,
                            "raw_verdict": ab_result.raw_verdict,
                        }, indent=2)
                    )
                except Exception as e:  # noqa: BLE001
                    row["ab_judge_error"] = str(e)
            row.setdefault("ab_judge", {
                "confidence_vs_r00": ab_last_conf,
                "ran_this_round": False,
            })

            # --- Compute objective stop signals ---
            prev_draft = (
                prior_rows[-1].get("chairman", {}).get("draft", "") if prior_rows else current_md
            )
            new_draft = row.get("chairman", {}).get("draft", "") or current_md
            sem = semantic_diff_bytes(prev_draft, new_draft)
            row["chairman"]["semantic_diff_bytes"] = sem
            semantic_moved = sem > SEMANTIC_DIFF_THRESHOLD_BYTES

            signals = StopSignals(
                round_num=round_num,
                max_rounds=self.config.max_rounds,
                min_rounds=self.config.min_rounds,
                semantic_moved=semantic_moved,
                harness_ci_narrowing=False,
                ab_last_conf=ab_last_conf,
                ab_prev_conf=ab_prev_conf,
                skeptic_ran=skeptic_ran,
                skeptic_broke=skeptic_broke,
                skeptic_clean_rounds=skeptic_clean_rounds,
            )
            consecutive_no_move = 0 if semantic_moved else consecutive_no_move + 1
            decision = decide_stop(
                signals,
                consecutive_no_move,
                ab_says_current_beats_r00=(ab_last_conf > 0.55),
            )
            row["stop"]["decision"] = decision.decision
            row["stop"]["reason"] = decision.reason

            append_round_row(versions_path, row)
            prior_rows.append(row)
            state["global_round_counter"] += 1
            state["scenarios"][sid]["last_round"] = round_num

            # --- Discovery every DISCOVERY_CADENCE global rounds ---
            discovery = state.setdefault("_discovery", {})
            if (
                state["global_round_counter"] % DISCOVERY_CADENCE == 0
                and not discovery.get("paused")
            ):
                self._run_discovery_hook(engine, state, prior_rows)

            if decision.decision == "stop":
                machine.stop_with_reason(decision.reason)
                final_draft = row.get("chairman", {}).get("draft")
                if final_draft:
                    scenario_path.write_text(final_draft)
                break

            if row.get("chairman", {}).get("draft"):
                current_md = row["chairman"]["draft"]
            round_num += 1

        state["scenarios"][sid]["status"] = machine.state.value

    def _run_discovery_hook(self, engine, state: dict, prior_rows: list[dict]) -> None:
        """Decennial discovery pass — mines rejected proposals across the last
        few rounds. Quietly swallows failures so one bad discovery run does
        not crash the main loop."""
        try:
            from discovery import DiscoveryEngine
        except ImportError:
            return
        disc = state.get("_discovery_instance")
        if disc is None:
            disc = DiscoveryEngine(
                claude=engine.claude,
                prompts_dir=self.config.council_dir / "prompts",
                proposed_dir=self.config.proposed_dir,
            )
            state["_discovery_instance"] = disc
        # Collect rejected proposals from the last 10 rounds
        rejected: list[str] = []
        for row in prior_rows[-10:]:
            accepted = set(row.get("chairman", {}).get("accepted_proposals", []))
            for p in row.get("proposals", []):
                label = p.get("label")
                if label not in accepted:
                    rejected.append(f"[{row.get('round')}/{label}] {p.get('file', '')}")
        try:
            result = disc.run(
                rejected_proposals=rejected,
                recent_corpus="",
                catalog="",
            )
            if result.get("paused"):
                state["_discovery"] = {"paused": True}
        except Exception:  # noqa: BLE001
            pass


def _build_arg_parser() -> argparse.ArgumentParser:
    ap = argparse.ArgumentParser(prog="council")
    sub = ap.add_subparsers(dest="cmd", required=True)

    run = sub.add_parser("run")
    run.add_argument("--scenarios", default="all")
    run.add_argument("--min", type=int, default=ROUND_MIN)
    run.add_argument("--max", type=int, default=ROUND_MAX)
    run.add_argument("--skip-harness", action="store_true")
    run.add_argument("--no-discovery", action="store_true")
    run.add_argument("--no-library", action="store_true")
    run.add_argument("--global-harness-usd-cap", type=float, default=200.0)
    run.add_argument("--per-scenario-harness-usd-cap", type=float, default=8.0)
    run.add_argument("--paper-batch-size", type=int, default=1)
    run.add_argument("--claude-models", default="")
    run.add_argument("--harness-budget-cap", type=int, default=9)

    sub.add_parser("resume")
    sub.add_parser("status")
    disc = sub.add_parser("discover")
    disc.add_argument("--force", action="store_true")
    sub.add_parser("index-promptfoo")
    bl = sub.add_parser("baseline")
    bl.add_argument("--scenarios", default="all")

    debug = sub.add_parser("debug")
    debug.add_argument("--scenario", required=True)
    debug.add_argument("--round-only", action="store_true")

    reopen = sub.add_parser("reopen")
    reopen.add_argument("--scenario", required=True)
    reopen.add_argument("--reason", required=True)

    return ap


def _parse_model_overrides(s: str) -> dict[str, str]:
    """Parse --claude-models opus=x,sonnet=y,haiku=z."""
    if not s:
        return {}
    out: dict[str, str] = {}
    for pair in s.split(","):
        if "=" in pair:
            k, v = pair.split("=", 1)
            out[k.strip()] = v.strip()
    return out


def _default_config() -> OrchestratorConfig:
    from config import COUNCIL_DIR, LOGS_COUNCIL, SCENARIOS_DIR
    return OrchestratorConfig(
        council_dir=COUNCIL_DIR,
        # `singles/` contains one file per scenario ID (split from by-department/
        # by attacks/_council/scripts/split_scenarios.py). The council
        # overwrites these on convergence; by-department/ stays as reference.
        scenarios_dir=SCENARIOS_DIR / "singles",
        versions_dir=SCENARIOS_DIR / "versions",
        logs_dir=LOGS_COUNCIL,
        proposed_dir=SCENARIOS_DIR / "proposed",
        state_file=COUNCIL_DIR / ".council-state.json",
    )


def main(argv: list[str] | None = None) -> int:
    parser = _build_arg_parser()
    args = parser.parse_args(argv)
    cfg = _default_config()

    if args.cmd == "run":
        cfg.min_rounds = args.min
        cfg.max_rounds = args.max
        cfg.global_harness_cap = args.global_harness_usd_cap
        cfg.per_scenario_harness_cap = args.per_scenario_harness_usd_cap
        overrides = _parse_model_overrides(args.claude_models)
        cfg.model_ids.update(overrides)
        orch = Orchestrator(cfg)
        if not cfg.state_file.exists():
            orch.initialize_state()
        filter_ids = None if args.scenarios == "all" else args.scenarios.split(",")
        orch.run_once(scenario_filter=filter_ids)
        return 0

    if args.cmd == "resume":
        orch = Orchestrator(cfg)
        state = orch.resume()
        print(f"resumed at global_round_counter={state['global_round_counter']}")
        orch.run_once()
        return 0

    if args.cmd == "status":
        orch = Orchestrator(cfg)
        state = orch.load_or_reconstruct_state()
        print(f"global rounds: {state.get('global_round_counter', 0)}")
        scenarios = state.get("scenarios", {})
        print(f"scenarios tracked: {len(scenarios)}")
        by_status: dict[str, int] = {}
        for info in scenarios.values():
            s = info.get("status", "UNSEEN")
            by_status[s] = by_status.get(s, 0) + 1
        for k, v in sorted(by_status.items()):
            print(f"  {k}: {v}")
        ledger = cfg.council_dir / "library" / "cost-ledger.jsonl"
        if ledger.exists():
            total = 0.0
            for line in ledger.read_text().splitlines():
                if line.strip():
                    total += float(json.loads(line)["usd"])
            print(f"harness spend so far: ${total:.2f}")
        return 0

    if args.cmd == "baseline":
        cfg.min_rounds = 0
        cfg.max_rounds = 0
        orch = Orchestrator(cfg)
        if not cfg.state_file.exists():
            orch.initialize_state()
        filter_ids = None if args.scenarios == "all" else args.scenarios.split(",")
        orch.run_once(scenario_filter=filter_ids)
        return 0

    if args.cmd == "index-promptfoo":
        from config import OLLAMA_EMBEDDER
        from ollama_client import OllamaClient
        from promptfoo_index import build_index
        ollama = OllamaClient()

        def embed(text: str) -> list[float]:
            resp = ollama.generate(
                model=OLLAMA_EMBEDDER,
                prompt=text[:4000],
                reason_for_use="council promptfoo index build",
                source_file="sources/*",
            )
            emb = resp.metadata.get("embedding") or []
            if not emb:
                return [0.0] * 768
            return list(emb)

        count = build_index(
            sources_root=Path("sources"),
            idx_path=cfg.council_dir / "library" / "promptfoo_index.annoy",
            meta_path=cfg.council_dir / "library" / "promptfoo_metadata.json",
            embed_fn=embed,
            vector_dim=768,
        )
        print(f"indexed {count} promptfoo entries")
        return 0

    if args.cmd == "discover":
        # Discovery runs as part of the scheduler — standalone dispatch TBD.
        print("discovery runs inline during `council run`; no standalone mode",
              file=sys.stderr)
        return 0

    if args.cmd == "debug":
        print(f"debug mode: scenario={args.scenario} round-only={args.round_only}",
              file=sys.stderr)
        return 0

    if args.cmd == "reopen":
        orch = Orchestrator(cfg)
        state = orch.load_or_reconstruct_state()
        sid = args.scenario
        if sid not in state.get("scenarios", {}):
            print(f"unknown scenario {sid}", file=sys.stderr)
            return 2
        info = state["scenarios"][sid]
        info["status"] = "RUNNING"
        info["reopen_count"] = int(info.get("reopen_count", 0)) + 1
        save_state(cfg.state_file, state)
        print(f"reopened {sid} (reopen_count={info['reopen_count']})")
        return 0

    parser.print_help()
    return 1


if __name__ == "__main__":
    sys.exit(main())
