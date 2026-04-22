# Fine-Tuning Overrides Safety

**Promptfoo CVE ID:** `597d7d9a`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2024-09-01  
**Analyzed:** 2025-02-02T20:35:10.490Z  
**Source paper:** [Overriding Safety protections of Open-source Models](https://arxiv.org/abs/2409.19476)  
**Tags:** `fine-tuning`, `model-layer`, `poisoning`, `injection`, `safety`, `integrity`, `blackbox`  
**Affected models (as reported):** Llama 3.1 8B

## Description

Fine-tuning an open-source Large Language Model (LLM) such as Llama 3.1 8B with a dataset containing harmful content can override existing safety protections.  This allows an attacker to increase the model's rate of generating unsafe responses, significantly impacting its trustworthiness and safety.  The vulnerability affects the model's ability to consistently adhere to safety guidelines implemented during its initial training.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
