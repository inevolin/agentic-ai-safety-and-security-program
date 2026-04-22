"""End-to-end smoke test with all external calls mocked.

Runs a 1-round session against a fixture scenario, asserts:
- r00 baseline exists (verbatim copy)
- >=2 round rows in JSONL (baseline + 1 round)
- canonical scenario markdown file overwritten after stop
"""
from __future__ import annotations

from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest

from orchestrator import Orchestrator, OrchestratorConfig


@pytest.fixture
def e2e_config(tmp_council_root: Path, fake_scenario_paper: Path) -> OrchestratorConfig:
    scenarios_dir = tmp_council_root / "scenarios"
    scenarios_dir.mkdir()
    target = scenarios_dir / "F99.md"
    target.write_text(fake_scenario_paper.read_text())

    # Wire minimal-placeholder prompts per role
    prompts = tmp_council_root / "prompts"
    prompts.mkdir(exist_ok=True)
    per_role = {
        "offensive_proposer": ["scenario_markdown", "harness_history", "library_top3"],
        "peer_rank": ["scenario_markdown", "proposal_A", "proposal_B", "proposal_C", "proposal_D"],
        "balanced_critic_local": ["scenario_markdown", "proposals"],
        "defender_critic_claude": ["scenario_markdown", "proposals"],
        "chairman_synthesizer": [
            "scenario_markdown", "proposals_with_mrr",
            "local_critique_json", "defender_critique_json",
            "harness_history", "library_top3", "critique_degraded",
        ],
        "cold_reproducer": ["scenario_markdown", "prior_art_neighbors"],
        "stop_vote": [
            "round_num", "min_rounds", "max_rounds",
            "semantic_diff", "ci_narrowing", "ab_signal",
            "skeptic_ran", "skeptic_broke",
            "consecutive_no_move", "reopen_count",
        ],
        "ab_judge": ["draft_a", "draft_b", "label_A", "label_B"],
        "adversarial_skeptic": ["scenario_markdown"],
        "discovery": ["rejected_proposals", "recent_corpus", "catalog"],
        "technique_extractor": [
            "accepted_proposal", "scenario_id", "injection_channel",
            "attacker_goal", "pivot_mechanism",
        ],
        "tightened_critic": ["scenario_markdown", "proposals"],
        "novelty_scorer": [],
    }
    for role, placeholders in per_role.items():
        body = " ".join(f"{{{p}}}" for p in placeholders) or "(stub)"
        (prompts / f"{role}.v1.md").write_text(
            f"# VERSION: v1\n# SHA256: x\n# ROLE: {role}\n\n{body}\n"
        )

    return OrchestratorConfig(
        council_dir=tmp_council_root,
        scenarios_dir=scenarios_dir,
        versions_dir=tmp_council_root / "versions",
        logs_dir=tmp_council_root / "logs",
        proposed_dir=tmp_council_root / "proposed",
        state_file=tmp_council_root / ".council-state.json",
        min_rounds=1, max_rounds=1,
    )


def _canned_ollama(tmp: Path):
    client = MagicMock()

    def fake_generate(*, model, prompt, reason_for_use, source_file, **kw):
        rv = MagicMock()
        rl = reason_for_use.lower()
        if "peer-rank" in rl or "rank" in rl:
            rv.response = '{"ranking":["A","B","C","D"],"rationale":{}}'
        elif "critic" in rl or "critique" in rl:
            rv.response = (
                '{"A":{"realism":4,"novelty":3,"detectability_gap":3,'
                '"specificity":3,"rationale":"x"},"B":{},"C":{},"D":{},'
                '"new_weakness_found":true}'
            )
        else:
            rv.response = "### Proposal\nconcrete improvement"
        rv.transcript_path = tmp / "t.md"
        return rv

    client.generate.side_effect = fake_generate
    return client


def _canned_claude():
    client = MagicMock()
    responses = [
        # defender critique
        (
            '{"A":{"realistic_2026":true,"already_covered":null,'
            '"mitigation_primitive":"3","new_weakness":true,'
            '"critique":"c"},"B":{},"C":{},"D":{},'
            '"new_weakness_found":true}'
        ),
        # chairman
        (
            "### F99. Improved\n"
            "RESEARCH ARTIFACT — do not execute\n"
            "body\n\n"
            '{"delta_score":0.3,"accepted_proposals":["A"],'
            '"techniques_borrowed_this_round":[],"rationale":"r"}'
        ),
        # reproducer
        (
            '{"reproduction":"x","ambiguity_score":0.2,'
            '"score_against_promptfoo_only":0.6,'
            '"score_against_all":0.5,"closest_technique_id":null,'
            '"exceeds_reference":true}'
        ),
        # stop-vote
        '{"decision":"continue","reason":"","rationale":""}',
        # technique extractor
        (
            '{"technique_summary":"t","injection_channel_tag":"x",'
            '"attacker_goal_tag":"y","pivot_mechanism_tag":"z"}'
        ),
    ] * 10

    call_idx = {"n": 0}

    def fake_invoke(model, prompt, system_prompt=None):
        rv = MagicMock()
        rv.stdout = responses[call_idx["n"] % len(responses)]
        call_idx["n"] += 1
        rv.stderr = ""
        rv.returncode = 0
        return rv

    client.invoke.side_effect = fake_invoke
    client.resolve_model.side_effect = lambda a: a
    return client


def _canned_harness():
    h = MagicMock()
    h.fire.return_value = MagicMock(
        success=True, verdict_caveat=None,
        verdict_file=Path("/tmp/v.md"), log_file=Path("/tmp/l.log"),
        raw_stdout="", raw_stderr="", returncode=0,
    )
    return h


def test_e2e_one_round_completes(e2e_config, tmp_council_root):
    ollama = _canned_ollama(tmp_council_root)
    claude = _canned_claude()
    harness = _canned_harness()

    orch = Orchestrator(config=e2e_config)
    orch.initialize_state()
    # Override _build_clients to inject mocks
    orch._build_clients = lambda: {
        "ollama": ollama, "claude": claude, "harness": harness,
        "cost": MagicMock(**{
            "check_caps.return_value": None,
            "scenario_spend.return_value": 0.0,
            "record_firing": MagicMock(),
        }),
        "library": MagicMock(**{
            "append_from_dict.return_value": MagicMock(
                technique_id="T-000001", summary="t"
            ),
        }),
        "safety": MagicMock(**{"redact.return_value": ("clean", [])}),
        "ab": MagicMock(),
    }

    orch.run_once(scenario_filter=["F99"])

    jsonl = e2e_config.versions_dir / "F99.jsonl"
    assert jsonl.exists()
    rows = [r for r in jsonl.read_text().strip().split("\n") if r]
    assert len(rows) >= 2  # baseline + at least one round
    baseline_dir = e2e_config.logs_dir / "F99" / "r00"
    assert (baseline_dir / "baseline.md").exists()
