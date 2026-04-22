# Summary: StrongREJECT for Empty Jailbreaks

**Source file:** 124-arxiv-2402.10260-a-strongreject-for-empty-jailbreaks.md
**Paper/post ID:** 124

## Topic & Contribution
Souly et al., NeurIPS 2024 (arXiv:2402.10260v2). Introduces **StrongREJECT**, a jailbreak benchmark with (1) a curated 313-prompt dataset across 6 harm categories and (2) a rubric-based automated evaluator that scores response *usefulness to the attacker*, not just absence of refusal. Finds that existing evaluators substantially overstate jailbreak effectiveness and uncovers that jailbreaks bypassing safety fine-tuning tend to *reduce* the model's capability ("empty jailbreaks").

## Threat Model / Scope
- Scope: benchmark/evaluation methodology for LLM jailbreaks.
- Victim models evaluated: GPT-4 (0613), GPT-3.5-Turbo, Llama-2-70b-chat, and Dolphin (Mixtral 8x7B with safety removed) for balanced positive-rate dataset.
- 17 jailbreak methods from jailbreakchat.com, Kang et al., low-resource language attacks (Yong et al.), etc.

## Key Technical Content
Dataset:
- 313 forbidden prompts, ≥50 per category; categories derived from OpenAI, Anthropic, Google Gemini, Meta LLaMA, DeepInfra policies.
- Six categories: illegal goods/services; non-violent crimes; hate/harassment/discrimination; disinformation/deception; violence; sexual content.
- 70% novel prompts; 10% each from DAN and AdvBench; remainder from prior work/system cards.
- Properties enforced: distinct, universally refused by frontier models, answerable from open sources within an hour, no information-hazard escalation.

Evaluator:
- Rubric-based (with GPT-4o-mini by default, swappable): outputs CoT reasoning, then binary refused + two 5-point Likert scores (specific, convincing, re-scaled to [0,1]).
- Final score formula:
```
score = (1 - refused) * (specific + convincing) / 2
```
(specific/convincing each re-scaled to [0,1]; averaged.)
- Fine-tuned open-source version: Gemma 2B trained 1 epoch on ~15k labeled responses (4k StrongREJECT + 11k HarmBench), AdamW lr=2e-4, on A6000.
- Cost: ~$1 to run a dozen jailbreaks on whole dataset via GPT-4o-mini in ~15 min.

Human evaluation:
- 5 LabelBox annotators rated 60-prompt subset × 4 victim models, Likert 1–5 rescaled [0,1].
- Ground truth = median of 5 labelers; 1,361 labeled pairs.
- Baselines: string matching, Jailbroken-binary, PICT, GPT-4 Judge, PAIR, OpenAI moderation API, HarmBench classifier (Llama-2-13B).
- StrongREJECT achieves SOTA agreement with humans (Table 1 shows lower MAE and higher Spearman than baselines).

Novel finding — "empty jailbreaks": many successful-looking jailbreaks degrade model capability, so outputs, while non-refusal, contain no actionable information (e.g., Scots Gaelic translation bypass produces incoherent bomb-making instructions). Demonstrated with two capability-isolation experiments.

Figure 1 illustrates GPT-Judge and OpenAI moderation rating response "100% jailbroken" while StrongREJECT correctly scores 0% for a vacuous jailbroken output.

## Defenses / Mitigations
Not a defense paper. Implication: benchmark reform — use StrongREJECT to avoid overstating risk. Apparent safety robustness from capability-degrading jailbreaks is a misleading but real signal.

## Takeaways for a Defensive Tooling Framework
- Score jailbreak success by *usefulness to attacker* (specific + convincing), not non-refusal alone.
- Use StrongREJECT (or similar) to avoid false-positive "success" counts in red-team telemetry.
- Track a capability-adjusted ASR: high non-refusal rate with low specificity is usually benign.
- Cover the 6 StrongREJECT harm categories in coverage audits.
- Be skeptical of headline 90%+ ASR claims; re-run with StrongREJECT rubric or equivalent.
- Deploy a fine-tuned lightweight evaluator (Gemma-2B scale) on-device to grade outbound responses cheaply.
