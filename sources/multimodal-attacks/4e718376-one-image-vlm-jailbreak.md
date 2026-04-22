# One-Image VLM Jailbreak

**Promptfoo CVE ID:** `4e718376`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-03-01  
**Analyzed:** 2025-01-26T18:26:52.875Z  
**Source paper:** [ImgTrojan: Jailbreaking Vision-Language Models with ONE Image](https://arxiv.org/abs/2403.02910)  
**Tags:** `poisoning`, `jailbreak`, `vision`, `multimodal`, `data-security`, `safety`  
**Affected models (as reported):** LLaVA 1.5 13B, LLaVA 1.5 7B

## Description

A data poisoning attack, termed ImgTrojan, allows adversaries to bypass safety mechanisms in Vision-Language Models (VLMs) by injecting a small number of maliciously crafted image-caption pairs into the training dataset.  These poisoned pairs associate seemingly benign images with jailbreak prompts, causing the VLM to generate unsafe outputs when presented with the poisoned images at inference time.  The attack's success rate is notably high even with a very low poison ratio (e.g., one poisoned image in 10,000).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
