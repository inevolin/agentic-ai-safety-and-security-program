# Unlearning Relearning Attack

**Promptfoo CVE ID:** `8779bb6f`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-12-30T20:08:56.933Z  
**Source paper:** [Towards llm unlearning resilient to relearning attacks: A sharpness-aware minimization perspective and beyond](https://arxiv.org/abs/2502.05374)  
**Tags:** `model-layer`, `jailbreak`, `extraction`, `fine-tuning`, `whitebox`, `data-privacy`, `safety`  
**Affected models (as reported):** Llama 2 7B, Llama 3 8B

## Description

Standard Large Language Model (LLM) unlearning techniques, specifically Negative Preference Optimization (NPO), Gradient Difference (GradDiff), and Representation Misdirection for Unlearning (RMU), fail to sufficiently flatten the loss landscape surrounding the "forgotten" weights. This sharp loss landscape allows for a "Relearning Attack," wherein an attacker can fully restore the unlearned capabilities (such as hazardous knowledge, sensitive data, or copyrighted material) by performing lightweight fine-tuning on the unlearned model. This restoration requires an extremely small number of samples (as few as 20 to 125) from the original forget set or even unrelated datasets, effectively negating the unlearning process.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
