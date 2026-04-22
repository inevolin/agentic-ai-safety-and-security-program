# VLM Visual-Textual Misalignment

**Promptfoo CVE ID:** `0a0e0bf4`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-04-01  
**Analyzed:** 2026-04-11T04:42:38.112Z  
**Source paper:** [PDA: Text-Augmented Defense Framework for Robust Vision-Language Models against Adversarial Image Attacks](https://arxiv.org/abs/2604.01010)  
**Tags:** `model-layer`, `vision`, `multimodal`, `whitebox`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4o, GPT-5, Claude 3.5, Llama 3.1 8B, Gemini 2, DeepSeek-R1 3B, DeepSeek-V3, Qwen 2.5 14B, LLaVA 7B

## Description

Vision-Language Models (VLMs) are vulnerable to pixel-level adversarial image perturbations. An attacker can inject $\ell_p$-bounded, human-imperceptible noise into an input image to manipulate the model's multi-modal embedding space. This reliably causes the VLM to generate incorrect textual responses, hallucinate non-existent objects, or misclassify subjects, effectively decoupling the model's reasoning from the actual visual evidence. The vulnerability is exploitable via both white-box gradient-based attacks (e.g., PGD) and black-box transfer attacks against closed-source APIs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
