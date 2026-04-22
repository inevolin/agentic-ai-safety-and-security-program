"""Round engine integration tests with mocked clients."""
from __future__ import annotations

import json
from pathlib import Path
from unittest.mock import MagicMock

import pytest

from round_engine import RoundContext, RoundEngine


@pytest.fixture
def mocked_engine(tmp_council_root: Path):
    prompts = tmp_council_root / "prompts"
    prompts.mkdir(exist_ok=True)
    # Per-role templates with the exact placeholders each role renders
    # (matching the production prompts).
    per_role_placeholders = {
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
    for role, placeholders in per_role_placeholders.items():
        body = " ".join(f"{{{p}}}" for p in placeholders) or "(stub)"
        (prompts / f"{role}.v1.md").write_text(
            f"# VERSION: v1\n# SHA256: x\n# ROLE: {role}\n\n{body}\n"
        )
    return RoundEngine(
        prompts_dir=prompts,
        ollama_client=MagicMock(),
        claude_client=MagicMock(),
        harness_adapter=MagicMock(),
        cost_tracker=MagicMock(),
        technique_library=MagicMock(),
        promptfoo_index=None,
        safety_filter=MagicMock(),
        ab_judge=MagicMock(),
    )


def test_baseline_freezes_verbatim_scenario(
    mocked_engine, tmp_council_root, fake_scenario_paper
):
    out_dir = tmp_council_root / "logs" / "F99" / "r00"
    ctx = RoundContext(
        scenario_id="F99",
        scenario_markdown=fake_scenario_paper.read_text(),
        extractable=False,
        artifacts_dir=out_dir,
        round_num=0,
    )
    record = mocked_engine.run_baseline(ctx)
    baseline_file = out_dir / "baseline.md"
    assert baseline_file.exists()
    # MUST be verbatim — no rephrasing
    assert baseline_file.read_text() == fake_scenario_paper.read_text()
    assert "baseline_sha256" in record
    assert record["is_baseline"] is True


def test_run_round_executes_all_steps_in_order(
    mocked_engine, tmp_council_root, fake_scenario_paper
):
    # Ollama side-effects for: 4 proposals + 4 peer-ranks + 1 local critique = 9
    ollama_responses = []
    for i in range(4):
        m = MagicMock()
        m.response = f"### Proposal\nconcrete improvement {i}"
        m.transcript_path = tmp_council_root / f"t{i}.md"
        ollama_responses.append(m)
    for _ in range(4):
        m = MagicMock()
        m.response = '{"ranking": ["A","B","C","D"], "rationale": {}}'
        m.transcript_path = tmp_council_root / "t.md"
        ollama_responses.append(m)
    m = MagicMock()
    m.response = (
        '{"A":{"realism":4,"novelty":3,"detectability_gap":3,'
        '"specificity":3,"rationale":"x"},"B":{},"C":{},"D":{},'
        '"new_weakness_found":true}'
    )
    m.transcript_path = tmp_council_root / "t.md"
    ollama_responses.append(m)
    mocked_engine.ollama.generate.side_effect = ollama_responses

    # Claude side-effects with SKIP_STOP_VOTE=True:
    # defender critique, chairman, reproducer, technique extractor = 4
    claude_responses = [
        MagicMock(
            stdout='{"A":{"realistic_2026":true,"already_covered":null,'
                   '"mitigation_primitive":"3","new_weakness":true,'
                   '"critique":"c"},"B":{},"C":{},"D":{},'
                   '"new_weakness_found":true}',
            stderr="", returncode=0,
        ),
        MagicMock(
            stdout=(
                '{"delta_score":0.25,"accepted_proposals":["A"],'
                '"techniques_borrowed_this_round":[],"rationale":"r"}\n\n'
                "### F99. Improved\n"
                "RESEARCH ARTIFACT — do not execute\n"
                "body\n"
            ),
            stderr="", returncode=0,
        ),
        MagicMock(
            stdout='{"reproduction":"x","ambiguity_score":0.2,'
                   '"score_against_promptfoo_only":0.7,'
                   '"score_against_all":0.5,"closest_technique_id":null,'
                   '"exceeds_reference":true}',
            stderr="", returncode=0,
        ),
        MagicMock(
            stdout='{"technique_summary":"t","injection_channel_tag":"x",'
                   '"attacker_goal_tag":"y","pivot_mechanism_tag":"z"}',
            stderr="", returncode=0,
        ),
    ]
    mocked_engine.claude.invoke.side_effect = claude_responses

    mocked_engine.safety.redact.return_value = ("clean", [])
    mocked_engine.library.append_from_dict.return_value = MagicMock(
        technique_id="T-000001", summary="t"
    )

    ctx = RoundContext(
        scenario_id="F99",
        scenario_markdown=fake_scenario_paper.read_text(),
        extractable=False,
        artifacts_dir=tmp_council_root / "logs" / "F99" / "r01",
        round_num=1,
        resolved_model_ids={
            "opus": "claude-opus-4-7",
            "sonnet": "claude-sonnet-4-6",
            "haiku": "claude-haiku-4-5-20251001",
        },
    )

    record = mocked_engine.run_round(ctx)

    assert record["round"] == 1
    assert record["is_baseline"] is False
    assert "chairman" in record
    assert record["chairman"]["delta_score"] == 0.25
    assert record["stop"]["decision"] == "continue"
    # 4 + 4 + 1 = 9 Ollama calls
    # With SKIP_PEER_RANK=True (default): 4 proposers + 1 local critic = 5
    # (previously 9 with peer-rank: 4 proposers + 4 peer-rankers + 1 critic)
    assert mocked_engine.ollama.generate.call_count == 5
    # 5 Claude calls
    # With SKIP_STOP_VOTE=True (default): 4 Claude calls instead of 5
    # (defender critic, chairman, reproducer, technique extractor)
    assert mocked_engine.claude.invoke.call_count == 4
    # RESEARCH ARTIFACT banner preserved
    assert "RESEARCH ARTIFACT" in record["chairman"]["draft"]
