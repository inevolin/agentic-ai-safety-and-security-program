# Universal MLLM Target Matching

**Promptfoo CVE ID:** `5dd46ced`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T01:06:16.370Z  
**Source paper:** [Make Anything Match Your Target: Universal Adversarial Perturbations against Closed-Source MLLMs via Multi-Crop Routed Meta Optimization](https://arxiv.org/abs/2601.23179)  
**Tags:** `model-layer`, `jailbreak`, `multimodal`, `vision`, `embedding`, `blackbox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, Claude 4.5, Gemini 2

## Description

Closed-source Multi-modal Large Language Models (MLLMs) are vulnerable to Universal Targeted Transferable Adversarial Attacks (UTTAA). An attacker can generate a single, image-agnostic adversarial perturbation ($\delta$) that, when added to any arbitrary source image, steers the victim model to output a description or classification matching a specific target image chosen by the attacker. This vulnerability exploits the transferability of adversarial features from open-source surrogate vision encoders (e.g., CLIP, ViT) to proprietary models.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
