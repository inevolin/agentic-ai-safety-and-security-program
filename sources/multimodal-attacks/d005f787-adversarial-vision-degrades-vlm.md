# Adversarial Vision Degrades VLM

**Promptfoo CVE ID:** `d005f787`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-12-01  
**Analyzed:** 2026-01-14T06:49:48.937Z  
**Source paper:** [Adversarial Robustness of Vision in Open Foundation Models](https://arxiv.org/abs/2512.17902)  
**Tags:** `model-layer`, `vision`, `multimodal`, `embedding`, `whitebox`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4V, Llama 2 13B, Llama 3.1 8B, Llama 3.2 8B, LLaVA 7B, Vicuna 13B

## Description

Large Language and Vision Assistant (LLaVA) v1.5-13B and Meta Llama 3.2 Vision-8B-2 are vulnerable to adversarial evasion attacks targeting the visual input modality. An attacker with white-box access (knowledge of model architecture and gradients) can employ Projected Gradient Descent (PGD) to generate adversarial perturbations constrained by an L-infinity norm. By maximizing the model's internal loss function with respect to the input image, the attacker can force the Vision-Language Model (VLM) to generate incorrect, irrelevant, or nonsensical textual outputs for Visual Question Answering (VQA) tasks, effectively bypassing the model's visual understanding capabilities while leaving the text prompt benign.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
