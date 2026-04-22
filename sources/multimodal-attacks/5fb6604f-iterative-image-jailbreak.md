# Iterative Image Jailbreak

**Promptfoo CVE ID:** `5fb6604f`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T03:02:43.878Z  
**Source paper:** [Chain-of-Jailbreak Attack for Image Generation Models via Editing Step by Step](https://arxiv.org/abs/2410.03869)  
**Tags:** `application-layer`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** Gemini 1.5, Gemini 1.5 Pro, GPT-4o, GPT-4V, Midjourney, Stable Diffusion

## Description

A Chain-of-Jailbreak (CoJ) attack allows bypassing safety mechanisms in image generation models by iteratively editing images based on a sequence of sub-queries. The attack decomposes a malicious query into multiple, seemingly benign sub-queries, each causing the model to generate and modify an image, ultimately producing harmful content. Successful attacks leverage various editing operations (insert, delete, change) on different elements (words, characters, images).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
