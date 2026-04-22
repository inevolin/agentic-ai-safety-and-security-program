# Best-of-N Risk Amplification

**Promptfoo CVE ID:** `36b89c19`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-08T21:56:23.211Z  
**Source paper:** [Statistical Estimation of Adversarial Risk in Large Language Models under Best-of-N Sampling](https://arxiv.org/abs/2601.22636)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Llama 3.1 8B

## Description

Safety-aligned Large Language Models (LLMs) are vulnerable to Best-of-N (BoN) sampling attacks, where adversaries bypass safety guardrails by systematically executing large-scale, parallel queries with prompt variations until a harmful response is elicited. The scaling behavior of attack success rates (ASR) demonstrates that models appearing robust under standard single-shot or low-budget evaluations experience rapid, non-linear risk amplification under parallel adversarial pressure. Because LLM inference is non-deterministic and per-sample vulnerability follows a heterogeneous Beta distribution, attackers can reliably force alignment failures simply by expanding their sampling budget.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
