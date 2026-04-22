# Enhanced LVLM Encoder Transfer

**Promptfoo CVE ID:** `716eb21d`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-04-11T04:38:04.601Z  
**Source paper:** [Understanding and Enhancing Encoder-based Adversarial Transferability against Large Vision-Language Models](https://arxiv.org/abs/2602.09431)  
**Tags:** `model-layer`, `vision`, `multimodal`, `blackbox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, GPT-4V, Llama 2 7B, Gemini 2, Qwen 2.5, LLaVA, Stable Diffusion

## Description

Large Vision-Language Models (LVLMs) are vulnerable to zero-query, black-box adversarial image perturbations via Semantic-Guided Multimodal Attacks (SGMA). Unlike traditional attacks that scatter noise or target background pixels, SGMA leverages surrogate models (e.g., CLIP) to anchor imperceptible adversarial perturbations directly onto semantically critical foreground regions. The attack exploits two specific architectural traits of LVLMs: inconsistent visual grounding across models and redundant semantic alignment within models. By jointly optimizing global image-text misalignment and local region-phrase disruption, the perturbations effectively transfer across heterogeneous vision encoders and language modules. This causes the victim LVLM to fail in cross-modal grounding, resulting in confident misclassifications, incorrect image captions, and fabricated visual reasoning.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
