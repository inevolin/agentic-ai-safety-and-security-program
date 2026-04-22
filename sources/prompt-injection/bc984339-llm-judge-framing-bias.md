# LLM Judge Framing Bias

**Promptfoo CVE ID:** `bc984339`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T05:33:14.770Z  
**Source paper:** [When Wording Steers the Evaluation: Framing Bias in LLM judges](https://arxiv.org/abs/2601.13537)  
**Tags:** `model-layer`, `prompt-layer`, `hallucination`, `chain`, `blackbox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, GPT-5, Llama 3.1 8B, Llama 3.2 1B, Llama 3.3 70B, Qwen 2.5 5B, o4-mini

## Description

LLM-based evaluation systems ("LLM-as-a-Judge") exhibit a structural vulnerability termed "Framing Bias," wherein the model produces logically contradictory judgments depending on the syntactic framing of the evaluation prompt. Specifically, when assessing the same content using predicate-positive (P) framing (e.g., "Is this toxic?") versus predicate-negative (Â¬P) framing (e.g., "Is this non-toxic?"), models frequently fail to invert their binary decisions, leading to inconsistency rates significantly higher than stochastic baselines. This vulnerability stems from the model's sensitivity to surface-level wording and inherent acquiescence (agreement) or rejection biases, rendering automated safety evaluations (such as jailbreak detection and toxicity filtering) unreliable.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
