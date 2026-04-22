# Semantic Confusion Jailbreak

**Promptfoo CVE ID:** `a8264644`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-12-01  
**Analyzed:** 2024-12-29T04:23:46.499Z  
**Source paper:** [Antelope: Potent and Concealed Jailbreak Attack Strategy](https://arxiv.org/abs/2412.08156)  
**Tags:** `jailbreak`, `blackbox`, `application-layer`, `prompt-layer`, `vision`, `safety`, `integrity`  
**Affected models (as reported):** GPT-4o, Midjourney, Stable Diffusion, Stable Diffusion v1.4, Stable Diffusion v2.1

## Description

The Antelope attack exploits vulnerabilities in Text-to-Image (T2I) models' safety filters by crafting adversarial prompts. These prompts, while appearing benign, induce the generation of NSFW images by leveraging semantic similarity between harmless and harmful concepts. The attack involves replacing explicit terms in an original prompt with seemingly innocuous alternatives and appending carefully selected suffix tokens. This manipulation bypasses both text-based and image-based filters, generating sensitive content while maintaining a high degree of semantic alignment with the original intent to evade detection.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
