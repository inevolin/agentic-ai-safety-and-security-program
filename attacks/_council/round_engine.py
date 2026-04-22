"""Round engine — the 7-step per-round protocol (spec §6).

This module orchestrates ONE scenario's ONE round. The orchestrator
(orchestrator.py) calls run_round(ctx) in a loop until stop.
"""
from __future__ import annotations

import hashlib
import json
import re
import time
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

from config import (
    HARNESS_PER_FIRING_USD,
    HARNESS_SYSPROMPTS,
    HARNESS_TIERS,
    OLLAMA_CRITIC_EVEN,
    OLLAMA_CRITIC_ODD,
    OLLAMA_PROPOSERS,
    RESEARCH_BANNER,
)
from harness_schedule import plan_next_firing, should_stop
from roles import load_prompt
from scoring import mean_reciprocal_rank, rank_variance, wilson_95_ci


_JSON_BLOCK_RE = re.compile(r"\{.*\}", re.DOTALL)


def _parse_json_from_response(text: str) -> dict:
    m = _JSON_BLOCK_RE.search(text)
    if not m:
        return {}
    try:
        return json.loads(m.group(0))
    except json.JSONDecodeError:
        return {}


def _find_balanced_json_object(text: str, start: int) -> tuple[int, int] | None:
    """From `start` find the first `{` then walk forward to its balanced `}`,
    skipping strings and escapes. Returns (open_idx, close_idx_exclusive)."""
    n = len(text)
    i = start
    while i < n and text[i] != "{":
        i += 1
    if i >= n:
        return None
    open_idx = i
    depth = 0
    in_str = False
    esc = False
    while i < n:
        ch = text[i]
        if in_str:
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == '"':
                in_str = False
        else:
            if ch == '"':
                in_str = True
            elif ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    return (open_idx, i + 1)
        i += 1
    return None


def _parse_first_json_from_response(text: str) -> dict:
    """Find and parse the FIRST well-formed JSON object in the text.
    Robust to Claude output truncation: unlike greedy regex, this walks
    braces and decodes just the first balanced block."""
    pos = 0
    while pos < len(text):
        bounds = _find_balanced_json_object(text, pos)
        if bounds is None:
            return {}
        start, end = bounds
        try:
            return json.loads(text[start:end])
        except json.JSONDecodeError:
            pos = start + 1  # try next {
    return {}


def _strip_first_json_block(text: str) -> str:
    """Remove the first well-formed JSON object from the text."""
    bounds = _find_balanced_json_object(text, 0)
    if bounds is None:
        return text
    start, end = bounds
    return text[:start] + text[end:]


def _slug(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


_PAYLOAD_BLOCK_RE = re.compile(
    r"\*\*Payload \(example\)[^*]*?\*\*\s*\n+"     # heading
    r"(?:>\s*[^\n]*\n)*"                            # any blockquote lines (banners)
    r"\n?"
    r"(?:```[a-zA-Z]*\n|>\s*```[a-zA-Z]*\n)"       # opening fence
    r"(?P<body>.*?)"                                # capture body
    r"(?:^```|^>\s*```)",                           # closing fence
    re.DOTALL | re.MULTILINE,
)


def _extract_payload_section(chairman_draft: str) -> str:
    """Extract the content of the first `**Payload (example):**` code block.

    The chairman draft is the full scenario markdown. For harness firing,
    we want just the attack content (the code-fenced block), not the
    detection signals or mitigation hooks that would tip off the target.

    Handles both plain code fences (```) and blockquoted code fences
    (> ```) since chairman sometimes wraps payloads in blockquotes.
    """
    m = _PAYLOAD_BLOCK_RE.search(chairman_draft)
    if not m:
        return ""
    body = m.group("body")
    # Strip any leading "> " blockquote markers
    lines = [ln.lstrip("> ").rstrip() for ln in body.splitlines()]
    return "\n".join(lines).strip()


def _format_harness_history(prior: list[dict]) -> str:
    if not prior:
        return "(no prior harness results)"
    lines = []
    for r in prior:
        h = r.get("harness") or {}
        if not h.get("extractable"):
            continue
        for tier_run in h.get("runs", []):
            lines.append(
                f"round {r.get('round')} tier={tier_run.get('tier')} "
                f"successes={tier_run.get('successes')}/{tier_run.get('runs')}"
            )
    return "\n".join(lines) or "(no extractable harness data)"


def _factorial_coverage(
    priors: list[tuple[str, float, bool]],
) -> dict[str, int]:
    cov: dict[str, int] = {"v1": 0, "v2": 0, "v3": 0}
    for v, _, _ in priors:
        cov[v] = cov.get(v, 0) + 1
    return cov


@dataclass
class RoundContext:
    scenario_id: str
    scenario_markdown: str
    extractable: bool
    artifacts_dir: Path
    round_num: int
    prior_rounds: list[dict] = field(default_factory=list)
    global_round_counter: int = 0
    resolved_model_ids: dict[str, str] = field(default_factory=dict)


class RoundEngine:
    def __init__(
        self,
        prompts_dir: Path,
        ollama_client,
        claude_client,
        harness_adapter,
        cost_tracker,
        technique_library,
        promptfoo_index,
        safety_filter,
        ab_judge,
    ) -> None:
        self.prompts_dir = prompts_dir
        self.ollama = ollama_client
        self.claude = claude_client
        self.harness = harness_adapter
        self.cost = cost_tracker
        self.library = technique_library
        self.promptfoo = promptfoo_index
        self.safety = safety_filter
        self.ab_judge = ab_judge

    # --- Round 0 baseline -----------------------------------------------

    def run_baseline(self, ctx: RoundContext) -> dict[str, Any]:
        """Round 0 — verbatim freeze of existing scenario (spec §6 round 0)."""
        ctx.artifacts_dir.mkdir(parents=True, exist_ok=True)
        baseline_file = ctx.artifacts_dir / "baseline.md"
        baseline_file.write_text(ctx.scenario_markdown)
        sha = hashlib.sha256(ctx.scenario_markdown.encode("utf-8")).hexdigest()
        return {
            "round": 0,
            "is_baseline": True,
            "is_noop": False,
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "scenario_id": ctx.scenario_id,
            "baseline_sha256": sha,
            "resolved_model_ids": dict(ctx.resolved_model_ids),
            "stop": {"decision": "continue", "reasons": {}, "reason": ""},
        }

    # --- Round N -------------------------------------------------------

    # Fast-mode toggles — skip low-signal / high-cost steps for hackathon-
    # pace runs. Set to False via --full-council flag later if we want the
    # complete spec-compliant pipeline back.
    SKIP_PEER_RANK = True   # -1.85 min/round; chairman uses default MRR
    SKIP_STOP_VOTE = True   # -8s/round; orchestrator ignores output anyway

    def run_round(self, ctx: RoundContext) -> dict[str, Any]:
        assert ctx.round_num >= 1
        ctx.artifacts_dir.mkdir(parents=True, exist_ok=True)

        proposals_meta = self._step1_offensive_ideation(ctx)
        proposals_text = {k: v["text"] for k, v in proposals_meta.items()}

        if self.SKIP_PEER_RANK:
            # Default MRR — all proposers equal weight. Chairman still has
            # both critiques to distinguish proposal quality.
            peer_rank = {
                "mrr_by_proposer": {k: 0.5 for k in proposals_text},
                "rank_variance": 0.0,
                "raw_rankings": [],
                "rankers_responded": 0,
                "_skipped": True,
            }
        else:
            peer_rank = self._step15_peer_rank(
                scenario_markdown=ctx.scenario_markdown,
                proposals=proposals_text,
                artifacts_dir=ctx.artifacts_dir,
            )

        critiques = self._step2_critiques(
            scenario_markdown=ctx.scenario_markdown,
            proposals=proposals_text,
            artifacts_dir=ctx.artifacts_dir,
            round_num=ctx.round_num,
        )

        safety = self._step25_safety_filter(
            claude_critique=critiques["claude_raw"],
            artifacts_dir=ctx.artifacts_dir,
        )
        critique_degraded = safety["count"] > 2

        chairman = self._step3_chairman(
            scenario_markdown=ctx.scenario_markdown,
            proposals=proposals_text,
            peer_rank=peer_rank,
            local_critique=critiques["local"],
            defender_critique=critiques["claude"],
            defender_critique_filtered=safety["filtered_critique"],
            critique_degraded=critique_degraded,
            harness_history=ctx.prior_rounds,
            library_top3=[],
            artifacts_dir=ctx.artifacts_dir,
        )

        accepted = chairman["accepted_proposals"]
        is_noop = (not accepted) and chairman["delta_score"] < 0.05

        reproduction = {"ambiguity_score": None, "novelty": None}
        harness = {"extractable": ctx.extractable, "runs": []}
        # Skip-when-null (spec I10) only skips step 4 (reproducer) — we ALWAYS
        # fire the harness on extractable scenarios so we get empirical data
        # even when the chairman reports no change (we may be iterating on a
        # strong-baseline scenario where small tweaks compound over rounds).
        if not is_noop:
            reproduction = self._step4_reproduction_and_novelty(
                chairman_draft=chairman["draft"],
                borrowed_technique_ids=chairman["techniques_borrowed_this_round"],
                artifacts_dir=ctx.artifacts_dir,
            )
        if ctx.extractable:
            harness = self._step5_harness(
                scenario_id=ctx.scenario_id,
                chairman_draft=chairman["draft"],
                artifacts_dir=ctx.artifacts_dir,
                resolved_model_ids=ctx.resolved_model_ids,
            )

        if self.SKIP_STOP_VOTE:
            # Orchestrator makes the real stop decision from objective signals.
            # This Claude Sonnet call was advisory-only and its output is
            # overwritten in the orchestrator's post-round processing.
            stop_vote = {"decision": "continue", "reason": "", "rationale": "(step skipped)"}
        else:
            signals = {
                "round_num": ctx.round_num,
                "min_rounds": 20,
                "max_rounds": 100,
                "semantic_diff": None,
                "ci_narrowing": False,
                "ab_signal": False,
                "skeptic_ran": False,
                "skeptic_broke": False,
                "consecutive_no_move": 0,
                "reopen_count": 0,
            }
            stop_vote = self._step6a_stop_vote(
                signals=signals, artifacts_dir=ctx.artifacts_dir
            )

        tech_extracted = None
        if accepted and not is_noop:
            top_label = accepted[0]
            tech_extracted = self._step7_technique_extract(
                scenario_id=ctx.scenario_id,
                round_num=ctx.round_num,
                accepted_proposal=proposals_text.get(top_label),
                source_proposer=proposals_meta.get(top_label, {}).get("model"),
                delta_outcome=chairman["delta_score"],
                harness_lift=0.0,
                artifacts_dir=ctx.artifacts_dir,
            )

        record = {
            "round": ctx.round_num,
            "is_baseline": False,
            "is_noop": is_noop,
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "scenario_id": ctx.scenario_id,
            "proposals": [
                {"label": k, "model": v["model"], "file": v["file"]}
                for k, v in proposals_meta.items()
            ],
            "peer_rank": peer_rank,
            "critiques": {
                "local": "02a-critique-local.md",
                "claude": "02b-critique-claude.md",
                "critique_had_N_redactions": safety["count"],
                "critique_degraded": critique_degraded,
            },
            "safety_redactions": {
                "count": safety["count"],
                "layers_fired": safety["layers_fired"],
            },
            "chairman": {
                "delta_score": chairman["delta_score"],
                "accepted_proposals": chairman["accepted_proposals"],
                "techniques_borrowed_this_round": chairman[
                    "techniques_borrowed_this_round"
                ],
                "rationale": chairman["rationale"],
                "draft": chairman["draft"],
            },
            "reproduction": reproduction,
            "novelty": reproduction.get("novelty"),
            "harness": harness,
            "stop": stop_vote,
            "technique_extracted": tech_extracted,
        }
        (ctx.artifacts_dir / "round-summary.json").write_text(
            json.dumps({k: v for k, v in record.items() if k != "chairman"}
                       | {"chairman_delta": record["chairman"]["delta_score"]},
                       indent=2)
        )
        return record

    # --- Step implementations -------------------------------------------

    def _step1_offensive_ideation(
        self, ctx: RoundContext
    ) -> dict[str, dict]:
        """4 offensive proposers, serial. Per-proposer timeouts are
        tolerated — as long as >=1 proposer returns text, the round
        continues with whichever labels succeeded."""
        tmpl = load_prompt(self.prompts_dir, "offensive_proposer", "v1")
        harness_history = _format_harness_history(ctx.prior_rounds[-3:])
        library_top3 = ""

        proposals: dict[str, dict] = {}
        labels = ["A", "B", "C", "D"]
        ctx.artifacts_dir.mkdir(parents=True, exist_ok=True)
        for label, model in zip(labels, OLLAMA_PROPOSERS):
            prompt = tmpl.render(
                scenario_markdown=ctx.scenario_markdown,
                harness_history=harness_history,
                library_top3=library_top3,
            )
            out_file = ctx.artifacts_dir / f"01-proposal-{_slug(model)}.md"
            try:
                resp = self.ollama.generate(
                    model=model,
                    prompt=prompt,
                    reason_for_use="council offensive proposer step 1",
                    source_file=f"scenario {ctx.scenario_id}",
                )
                out_file.write_text(resp.response)
                proposals[label] = {
                    "model": model,
                    "file": str(out_file),
                    "text": resp.response,
                    "transcript": str(resp.transcript_path),
                }
            except TimeoutError as e:
                # Proposer timed out — record skip, continue to next.
                out_file.write_text(f"(timed out: {e})")
                proposals[label] = {
                    "model": model,
                    "file": str(out_file),
                    "text": "",
                    "transcript": "",
                    "timed_out": True,
                }
        if not any(p.get("text") for p in proposals.values()):
            raise RuntimeError(
                "step 1: all 4 offensive proposers timed out or returned empty"
            )
        return proposals

    def _step15_peer_rank(
        self,
        scenario_markdown: str,
        proposals: dict[str, str],
        artifacts_dir: Path,
    ) -> dict[str, Any]:
        """Peer-rank is tolerant of individual ranker timeouts — we just
        compute MRR over whichever rankers returned."""
        tmpl = load_prompt(self.prompts_dir, "peer_rank", "v1")
        rankings: list[list[str]] = []
        candidates = list(proposals.keys())
        for model in OLLAMA_PROPOSERS:
            prompt = tmpl.render(
                scenario_markdown=scenario_markdown,
                proposal_A=proposals.get("A", ""),
                proposal_B=proposals.get("B", ""),
                proposal_C=proposals.get("C", ""),
                proposal_D=proposals.get("D", ""),
            )
            try:
                resp = self.ollama.generate(
                    model=model,
                    prompt=prompt,
                    reason_for_use="council peer-rank step 1.5",
                    source_file="peer rank",
                )
            except TimeoutError:
                continue
            parsed = _parse_json_from_response(resp.response)
            ranking = parsed.get("ranking") or []
            if isinstance(ranking, list) and all(
                isinstance(r, str) for r in ranking
            ):
                rankings.append([r for r in ranking if r in candidates])

        mrr = mean_reciprocal_rank(rankings, candidates)
        variance = rank_variance(rankings, candidates)
        out = {
            "mrr_by_proposer": mrr,
            "rank_variance": variance,
            "raw_rankings": rankings,
            "rankers_responded": len(rankings),
        }
        (artifacts_dir / "015-peer-rank.json").write_text(json.dumps(out, indent=2))
        return out

    def _step2_critiques(
        self,
        scenario_markdown: str,
        proposals: dict[str, str],
        artifacts_dir: Path,
        round_num: int,
    ) -> dict[str, Any]:
        local_model = (
            OLLAMA_CRITIC_EVEN if round_num % 2 == 0 else OLLAMA_CRITIC_ODD
        )
        proposals_blob = "\n\n".join(
            f"### {k}\n{v}" for k, v in proposals.items()
        )

        local_tmpl = load_prompt(self.prompts_dir, "balanced_critic_local", "v1")
        local_prompt = local_tmpl.render(
            scenario_markdown=scenario_markdown,
            proposals=proposals_blob,
        )
        try:
            local_resp = self.ollama.generate(
                model=local_model,
                prompt=local_prompt,
                reason_for_use="council balanced critic step 2a",
                source_file="critique",
            )
            local_raw = local_resp.response
            local_json = _parse_json_from_response(local_raw)
        except TimeoutError as e:
            local_raw = f"(local critic timed out: {e})"
            local_json = {"new_weakness_found": False, "_timed_out": True}
        (artifacts_dir / "02a-critique-local.md").write_text(local_raw)

        claude_tmpl = load_prompt(self.prompts_dir, "defender_critic_claude", "v1")
        claude_prompt = claude_tmpl.render(
            scenario_markdown=scenario_markdown,
            proposals=proposals_blob,
        )
        claude_resp = self.claude.invoke(
            model="sonnet", prompt=claude_prompt, system_prompt=None
        )
        claude_json = _parse_json_from_response(claude_resp.stdout)
        (artifacts_dir / "02b-critique-claude.md").write_text(claude_resp.stdout)

        return {
            "local": local_json,
            "claude": claude_json,
            "claude_raw": claude_resp.stdout,
        }

    def _step25_safety_filter(
        self,
        claude_critique: str,
        artifacts_dir: Path,
    ) -> dict[str, Any]:
        filtered, events = self.safety.redact(claude_critique)
        with (artifacts_dir / "025-safety-redactions.jsonl").open("w") as f:
            for e in events:
                f.write(
                    json.dumps({"kind": e.kind, "matched": e.matched, "layer": e.layer})
                    + "\n"
                )
        return {
            "count": len(events),
            "filtered_critique": filtered,
            "layers_fired": sorted({e.layer for e in events}),
        }

    def _step3_chairman(
        self,
        scenario_markdown: str,
        proposals: dict[str, str],
        peer_rank: dict,
        local_critique: dict,
        defender_critique: dict,
        defender_critique_filtered: str,
        critique_degraded: bool,
        harness_history: list[dict],
        library_top3: list,
        artifacts_dir: Path,
    ) -> dict[str, Any]:
        tmpl = load_prompt(self.prompts_dir, "chairman_synthesizer", "v1")
        proposals_with_mrr = json.dumps({
            k: {"text": v, "mrr": peer_rank.get("mrr_by_proposer", {}).get(k, 0.0)}
            for k, v in proposals.items()
        }, indent=2)
        prompt = tmpl.render(
            scenario_markdown=scenario_markdown,
            proposals_with_mrr=proposals_with_mrr,
            local_critique_json=json.dumps(local_critique),
            defender_critique_json=json.dumps(defender_critique),
            harness_history=_format_harness_history(harness_history[-3:]),
            library_top3=json.dumps(library_top3),
            critique_degraded=str(critique_degraded).lower(),
        )
        resp = self.claude.invoke(model="opus", prompt=prompt, system_prompt=None)
        raw = resp.stdout
        # Chairman now emits JSON-first (survives output truncation).
        # Extract the FIRST JSON block (decision metadata), then the rest
        # is the improved scenario markdown.
        parsed_json = _parse_first_json_from_response(raw)
        # Remove the first JSON block from draft; keep the scenario text.
        draft = _strip_first_json_block(raw).strip()
        if not draft:
            # Truncation swallowed the markdown entirely — fall back to input
            draft = scenario_markdown
        if RESEARCH_BANNER not in draft:
            draft = f"{RESEARCH_BANNER}\n\n{draft}"

        (artifacts_dir / "03-chairman-draft.md").write_text(draft)
        (artifacts_dir / "03-chairman-return.json").write_text(
            json.dumps(parsed_json, indent=2)
        )

        return {
            "draft": draft,
            "delta_score": float(parsed_json.get("delta_score", 0.0)),
            "accepted_proposals": parsed_json.get("accepted_proposals", []),
            "techniques_borrowed_this_round": parsed_json.get(
                "techniques_borrowed_this_round", []
            ),
            "rationale": parsed_json.get("rationale", ""),
        }

    def _step4_reproduction_and_novelty(
        self,
        chairman_draft: str,
        borrowed_technique_ids: list[str],
        artifacts_dir: Path,
    ) -> dict[str, Any]:
        tmpl = load_prompt(self.prompts_dir, "cold_reproducer", "v1")
        prior_art = "(promptfoo index not loaded — novelty scoring skipped)"
        # I1: if a promptfoo index is configured, compute nearest-neighbor
        # context so the reproducer has grounded prior art to reason over.
        if self.promptfoo is not None:
            try:
                embed_fn = getattr(self.promptfoo, "embed_fn", None)
                if embed_fn is not None:
                    vec = embed_fn(chairman_draft[:4000])
                    matches = self.promptfoo.nearest_k(
                        query_embedding=vec, k=5
                    )
                    prior_art = "\n".join(
                        f"- {m.hash_prefix} ({m.category}) distance={m.distance:.3f}"
                        for m in matches
                    ) or prior_art
            except Exception:  # noqa: BLE001
                pass
        prompt = tmpl.render(
            scenario_markdown=chairman_draft,
            prior_art_neighbors=prior_art,
        )
        resp = self.claude.invoke(model="sonnet", prompt=prompt, system_prompt=None)
        parsed = _parse_json_from_response(resp.stdout)

        reproduction = parsed.get("reproduction", "")
        ambiguity = float(parsed.get("ambiguity_score", 0.5))
        novelty = {
            "score_against_promptfoo_only": float(
                parsed.get("score_against_promptfoo_only", 0.5)
            ),
            "score_against_all": float(parsed.get("score_against_all", 0.5)),
            "closest_technique_id": parsed.get("closest_technique_id"),
            "closest_distance": (
                float(parsed["closest_distance"])
                if "closest_distance" in parsed
                else None
            ),
            "exceeds_reference": bool(parsed.get("exceeds_reference", False)),
            "library_borrows_excluded": list(borrowed_technique_ids),
        }
        (artifacts_dir / "04-reproduction.md").write_text(reproduction)
        (artifacts_dir / "04-novelty.json").write_text(json.dumps(novelty, indent=2))
        return {"ambiguity_score": ambiguity, "novelty": novelty, "raw": resp.stdout}

    def _step5_harness(
        self,
        scenario_id: str,
        chairman_draft: str,
        artifacts_dir: Path,
        resolved_model_ids: dict[str, str],
    ) -> dict[str, Any]:
        breach = self.cost.check_caps(scenario_id)
        if breach is not None:
            return {
                "extractable": True,
                "degraded": "cost-cap",
                "breach": {"which": breach.which},
            }

        attempt_dir = artifacts_dir / "harness-attempt"
        attempt_dir.mkdir(exist_ok=True)
        payload_dir = attempt_dir / "payload"
        payload_dir.mkdir(exist_ok=True)
        # Extract just the Payload section from the chairman draft — firing
        # the whole scenario doc (which includes detection signals + mitigation
        # hooks + citations) would give the target Claude so much defender
        # context it wouldn't fall for the attack. The real attack content
        # lives under `**Payload (example):**` in a code block.
        payload_text = _extract_payload_section(chairman_draft)
        if not payload_text:
            # Fallback: no payload block found — this scenario isn't truly
            # harness-extractable. Mark and return without firing.
            return {
                "extractable": False,
                "degraded": "no-payload-block",
                "runs": [],
            }
        (payload_dir / "user_prompt.txt").write_text(payload_text)
        (payload_dir / "full-chairman-draft.md").write_text(chairman_draft)

        runs_by_tier = []
        for tier in HARNESS_TIERS:
            model_id = resolved_model_ids.get(tier, tier)
            priors: list[tuple[str, float, bool]] = []
            firings: list[dict] = []
            while True:
                stop, _ = should_stop(priors)
                if stop:
                    break
                plan = plan_next_firing(priors)
                sysprompt = HARNESS_SYSPROMPTS[plan.sysprompt_variant]
                r = self.harness.fire(
                    attempt_dir=attempt_dir,
                    tier=tier,
                    model_id=model_id,
                    temp=plan.temp,
                    sysprompt=sysprompt,
                )
                firings.append({
                    "run_idx": plan.run_idx,
                    "temp": plan.temp,
                    "sysprompt_variant": plan.sysprompt_variant,
                    "success": r.success,
                    "replicate": plan.replicate,
                    "verdict_caveat": r.verdict_caveat,
                })
                priors.append((plan.sysprompt_variant, plan.temp, r.success))
                self.cost.record_firing(scenario_id, tier, HARNESS_PER_FIRING_USD)
                if self.cost.check_caps(scenario_id) is not None:
                    break

            successes = sum(1 for _, _, ok in priors if ok)
            lo, hi = wilson_95_ci(successes, len(priors))
            runs_by_tier.append({
                "tier": tier,
                "runs": len(priors),
                "successes": successes,
                "wilson_ci_95": [lo, hi],
                "ci_width": hi - lo,
                "firings": firings,
                "factorial_partial": len(priors) < 9,
                "factorial_coverage": _factorial_coverage(priors),
            })
        return {
            "extractable": True,
            "runs": runs_by_tier,
            "cost_usd_round": HARNESS_PER_FIRING_USD
            * sum(r["runs"] for r in runs_by_tier),
            "cost_usd_cumulative_scenario": self.cost.scenario_spend(scenario_id),
        }

    def _step6a_stop_vote(
        self, signals: dict, artifacts_dir: Path
    ) -> dict[str, Any]:
        tmpl = load_prompt(self.prompts_dir, "stop_vote", "v1")
        prompt = tmpl.render(**signals)
        resp = self.claude.invoke(model="sonnet", prompt=prompt, system_prompt=None)
        parsed = _parse_json_from_response(resp.stdout)
        out = {
            "decision": parsed.get("decision", "continue"),
            "reason": parsed.get("reason", ""),
            "rationale": parsed.get("rationale", ""),
        }
        (artifacts_dir / "06a-stop-vote.json").write_text(json.dumps(out, indent=2))
        return out

    def _step6c_skeptic(
        self, scenario_markdown: str, artifacts_dir: Path
    ) -> dict[str, Any]:
        tmpl = load_prompt(self.prompts_dir, "adversarial_skeptic", "v1")
        prompt = tmpl.render(scenario_markdown=scenario_markdown)
        resp = self.claude.invoke(model="opus", prompt=prompt, system_prompt=None)
        parsed = _parse_json_from_response(resp.stdout)
        out = {
            "broke": bool(parsed.get("broke", False)),
            "findings": parsed.get("findings", []),
        }
        (artifacts_dir / "06c-skeptic.md").write_text(resp.stdout)
        return out

    def _step7_technique_extract(
        self,
        scenario_id: str,
        round_num: int,
        accepted_proposal: str | None,
        source_proposer: str | None,
        delta_outcome: float,
        harness_lift: float,
        artifacts_dir: Path,
    ) -> dict[str, Any] | None:
        if not accepted_proposal:
            return None
        tmpl = load_prompt(self.prompts_dir, "technique_extractor", "v1")
        prompt = tmpl.render(
            accepted_proposal=accepted_proposal,
            scenario_id=scenario_id,
            injection_channel="",
            attacker_goal="",
            pivot_mechanism="",
        )
        resp = self.claude.invoke(model="sonnet", prompt=prompt, system_prompt=None)
        parsed = _parse_json_from_response(resp.stdout)
        if not parsed.get("technique_summary"):
            return None
        tech = self.library.append_from_dict(
            scenario_id=scenario_id,
            round=round_num,
            source_proposer=source_proposer or "unknown",
            summary=parsed["technique_summary"],
            injection_channel_tag=parsed.get("injection_channel_tag", ""),
            attacker_goal_tag=parsed.get("attacker_goal_tag", ""),
            pivot_mechanism_tag=parsed.get("pivot_mechanism_tag", ""),
            delta_outcome=delta_outcome,
            harness_lift=harness_lift,
            embedding=[0.0] * 8,
        )
        out = {"id": tech.technique_id, "summary": tech.summary}
        (artifacts_dir / "07-technique-extracted.json").write_text(
            json.dumps(out, indent=2)
        )
        return out
