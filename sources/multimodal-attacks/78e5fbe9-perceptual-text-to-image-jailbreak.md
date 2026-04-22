# Perceptual Text-to-Image Jailbreak

**Promptfoo CVE ID:** `78e5fbe9`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-08-01  
**Analyzed:** 2024-12-29T04:04:01.956Z  
**Source paper:** [Perception-guided jailbreak against text-to-image models](https://arxiv.org/abs/2408.10848)  
**Tags:** `jailbreak`, `blackbox`, `application-layer`, `vision`, `prompt-layer`, `safety`  
**Affected models (as reported):** Cogview3, Dall-e 2, DALL-E 3, GPT-3.5 Turbo, GPT-4, Hunyuan, Sdxl, Tongyiwanxiang

## Description

A perception-guided jailbreak (PGJ) attack allows bypassing safety filters in text-to-image models. The attack leverages Large Language Models (LLMs) to identify safe phrases that are perceptually similar to unsafe words but semantically different. This allows the generation of NSFW images using prompts that evade the model's safety mechanisms.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
