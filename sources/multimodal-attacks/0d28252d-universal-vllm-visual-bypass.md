# Universal VLLM Visual Bypass

**Promptfoo CVE ID:** `0d28252d`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-09T03:03:04.966Z  
**Source paper:** [Transferable adversarial attacks on black-box vision-language models](https://arxiv.org/abs/2505.01050)  
**Tags:** `model-layer`, `jailbreak`, `hallucination`, `vision`, `multimodal`, `embedding`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4o, GPT-4V, Claude 3.5, Llama 3.2 11B, Gemini 1.5, Qwen 2.5 7B, LLaVA 13B

## Description

A vulnerability exists in Vision-Language Models (VLLMs) that allows for transferable, targeted adversarial attacks. Attackers can generate adversarial image perturbations using an ensemble of open-source surrogate models (primarily CLIP-based visual encoders) which effectively transfer to proprietary, black-box VLLMs. The attack leverages a specific optimization framework that combines a Visual Contrastive Loss with multiple positive/negative visual examples, rather than relying solely on image-text pairs. The transferability is further amplified through model-level regularization (DropPath, PatchDrop) and data-level augmentation (random Gaussian noise, random cropping, and differentiable JPEG compression) during the perturbation generation. This allows an attacker to manipulate the visual input to induce specific, targeted textual responses from the VLLM, independent of the actual image content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
