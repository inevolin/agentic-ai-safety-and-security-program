# Metaphor-Based T2I Jailbreak

**Promptfoo CVE ID:** `9d17f3d1`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-04-12T00:39:07.144Z  
**Source paper:** [Metaphor-based Jailbreaking Attacks on Text-to-Image Models](https://arxiv.org/abs/2503.17987)  
**Tags:** `jailbreak`, `application-layer`, `prompt-layer`, `blackbox`, `vision`, `multimodal`, `safety`, `integrity`  
**Affected models (as reported):** DALL-E 3, Flux, Llama 3 8B Instruct, Midjourney, Stable Diffusion v1.4, Stable Diffusion XL

## Description

A vulnerability in text-to-image (T2I) models allows bypassing safety filters through the use of metaphor-based adversarial prompts.  These prompts, crafted using LLMs, indirectly convey sensitive content, exploiting the model's ability to infer meaning from figurative language while circumventing explicit keyword filters and model editing strategies.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
