# Summary: Beyond Surface Judgments: Human-Grounded Risk Evaluation of LLM-Generated Disinformation

**Source file:** 271-arxiv-2604.06820-beyond-surface-judgments-human-grounded-risk-evaluation-of-llm-generated-disinformation.md
**Paper/post ID:** 271

## Topic & Contribution
Xu, Zheng, Wu, Ma (Fudan / CityU HK / Deakin, arXiv 2604.06820) audit whether LLM-as-a-judge is a valid proxy for human reader responses to LLM-generated disinformation. Using 290 aligned deceptive articles, 2,043 paired human ratings from 392 participants, and eight frontier judges, they evaluate judge-human alignment across overall scoring, item-level ordering, and signal dependence. Core contribution: re-frames disinformation risk evaluation as a proxy-validity problem and shows judges agree with each other far more than with humans.

## Threat Model / Scope
- Concerned with reader-facing disinformation evaluated by automated judges where the outcomes of interest are perceived credibility and willingness to share.
- Scope: English news-like deceptive articles over five public-issue topics mapped to UN SDGs: Health, Environment, Livelihood, Safety, Innovation.
- Generators (attacker simulants): Gemini-3-Pro, Qwen-Plus, Qwen3-32B.
- Judges: eight frontier models in Claude / Gemini / GPT families.
- Not an attack paper per se; a measurement/audit of evaluation pipelines used to estimate disinformation risk.

## Key Technical Content
Benchmark design:
- 290 texts (Environment 60, Health 53, Innovation 60, Livelihood 60, Safety 57) from Reuters Fact-Check scenarios; each scenario supplies an anchor claim plus misleading communicative goal.
- Fixed format/length, no external retrieval at generation time.

Human reference (anchored 1-7 scales):
- Credibility: "Overall, do the main claims in this text feel believable and realistic?"
- Willingness to share: "If you saw this text in daily life, would you personally want to forward or share it with others?"
- 2,043 paired ratings; median 6 ratings per text.

Judge protocol: reader-role prompt ("answer as in daily life, rely on first impression, do not overthink, and do not look the text up online"); integer outputs on same 1-7 scales.

Four textual signals annotated 0-10 by auxiliary LLM annotators:
- emotional intensity
- logical rigour
- authority reliance
- data intensity

Premise checks (distinct from main audit): topic relevance 1-7; goal implementation 0-10; purpose realization 0-10.

Audit metrics:
```
(1) Overall scoring: bias = judge_mean - human_item_mean (negative = harsher)
(2) Item-level ordering: Spearman's rho between judge and human item mean
    (also compared to judge-judge correlations)
(3) Signal dependence: regression of credibility/sharing on the four signal scores
```

Main findings (verbatim):
- "Frontier judges are typically harsher than humans, recover human rankings only weakly, and rely on textual signals differently, despite agreeing strongly with one another and despite analytical-role prompting."
- Judges "place more weight on logical rigour while penalizing emotional intensity more strongly" than humans do.
- "LLM judges form a coherent evaluative group that is much more aligned internally than it is with human readers, indicating that internal agreement is not evidence of validity as a proxy for reader response."
- Gaps persist under an analytical-role prompt ablation.

## Defenses / Mitigations
Paper's prescriptions for anyone using LLM judges in disinformation risk pipelines:
- Do not rely on judge-judge agreement as evidence of validity.
- Anchor stimuli and outcome constructs on reader-facing measures (credibility, sharing intent) rather than abstract quality.
- Collect human reference data (paired ratings, multi-rater per item) for any reader-facing evaluation.
- Audit along three dimensions (scoring, ordering, signal dependence), not just calibration.
- Be aware of judge biases: harsher overall, over-weighting logical rigour, under-crediting emotional appeal - precisely the register disinformation exploits.

## Takeaways for a Defensive Tooling Framework
- Defender pipelines that triage suspected LLM-disinformation with LLM judges should cross-validate against human panels, especially on emotionally-charged stimuli.
- Treat judge under-weighting of emotional intensity as a systematic false-negative risk: emotionally resonant but logically sloppy disinformation is likely most shareable and most missed by judges.
- Build per-signal detectors (emotional intensity, logical rigour, authority reliance, data intensity) to score features independent of a single judge.
- Use Spearman ranking against held-out human-rated items as a routine calibration test when deploying a judge.
- Flag high judge-judge agreement as potentially indicating shared blind spots rather than correctness.
- Use public-issue taxonomy (five SDG-aligned topics) as a default slice for measuring disinformation evaluation coverage.
- For deployment decisions (e.g., "should we auto-remove?"), require dual signals: judge score AND predicted human sharing-intent from a human-calibrated model.
