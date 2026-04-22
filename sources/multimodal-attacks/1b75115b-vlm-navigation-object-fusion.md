# VLM Navigation Object Fusion

**Promptfoo CVE ID:** `1b75115b`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-30T19:59:09.535Z  
**Source paper:** [Disrupting Vision-Language Model-Driven Navigation Services via Adversarial Object Fusion](https://arxiv.org/abs/2505.23266)  
**Tags:** `model-layer`, `vision`, `multimodal`, `embedding`, `agent`, `whitebox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** LLaVA

## Description

The Vision-Language Model (VLM) perception module in Vision-and-Language Navigation (VLN) agents is vulnerable to adversarial 3D object injection via the Adversarial Object Fusion (AdvOF) framework. An attacker can generate physically plausible 3D objects with adversarial perturbations capable of deceiving the agent's VLM across multiple viewing angles and distances. The vulnerability exists due to a misalignment between 3D physical manipulations and the agent's 2D image perception, combined with a lack of robustness in the cross-modal alignment between visual features and textual embeddings. By utilizing Aligned Object Rendering and Adversarial Collaborative Optimization, an attacker can force the agent to consistently misclassify a specific object (e.g., perceiving a chair as a table) regardless of the camera trajectory. This poisons the agent's semantic map, leading to incorrect object localization and navigation failures.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
