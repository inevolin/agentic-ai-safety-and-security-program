# LLM Safety Geometry Fragility

**Promptfoo CVE ID:** `32608f0f`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T21:36:28.306Z  
**Source paper:** [Revisiting Robustness for LLM Safety Alignment via Selective Geometry Control](https://arxiv.org/abs/2602.07340)  
**Tags:** `model-layer`, `poisoning`, `jailbreak`, `fine-tuning`, `whitebox`, `safety`, `reliability`  
**Affected models (as reported):** Llama 3 8B, Llama 3.2 3B, Qwen 2.5 7B

## Description

Large Language Models (LLMs) aligned via standard preference-based optimization methods (e.g., DPO, RLHF) are vulnerable to safety degradation due to optimization-induced fragility. The vulnerability arises from sharp minima in the alignment loss landscape, specifically within a small, localized subspace of safety-critical parameters (approximately 0.5% of neurons account for >80% of worst-case alignment loss). Standard alignment algorithms enforce uniform constraints or fail to control the geometry of these critical subspaces, resulting in anisotropic sensitivity. Consequently, models that appear safe on in-distribution data can be easily jailbroken via domain shifts (out-of-distribution inputs) or subtle noise in preference supervision (label flipping), bypassing safety guardrails to generate harmful content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
