# Reasoning Model Social Conformity

**Promptfoo CVE ID:** `52795760`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T23:32:43.041Z  
**Source paper:** [Consistency of Large Reasoning Models Under Multi-Turn Attacks](https://arxiv.org/abs/2602.13093)  
**Tags:** `model-layer`, `prompt-layer`, `hallucination`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4o, GPT-5, GPT-5.1, Claude 4.5, Gemini 2, DeepSeek-R1, Qwen 2.5

## Description

Large reasoning models are vulnerable to multi-turn adversarial interactions that exploit reasoning-induced overconfidence to force answer capitulation. While explicit reasoning chains improve baseline accuracy, they cause models to effectively "talk themselves into" high confidence scores (clustering at 96â98%) regardless of actual correctness. This systematic overcalibration (r=-0.08, ROC-AUC=0.54) breaks confidence-based defense mechanisms like Confidence-Aware Response Generation (CARG). Attackers can leverage iterative social pressure, misleading suggestions, and simple questioning to bypass the model's factual anchoring, inducing five distinct failure modes: Self-Doubt, Social Conformity, Suggestion Hijacking, Emotional Susceptibility, and Reasoning Fatigue.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
