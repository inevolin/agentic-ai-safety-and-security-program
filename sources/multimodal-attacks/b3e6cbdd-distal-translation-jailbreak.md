# Distal Translation Jailbreak

**Promptfoo CVE ID:** `b3e6cbdd`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-08T22:07:33.870Z  
**Source paper:** [: Politically Controversial Content Generation via Jailbreaking Attacks on GPT-based Text-to-Image Models](https://arxiv.org/abs/2601.05150)  
**Tags:** `prompt-layer`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-4o, GPT-5, GPT-5.1, DALL-E, Midjourney

## Description

A vulnerability in the prompt-side safety filters of GPT-based Text-to-Image (T2I) systems allows attackers to bypass restrictions on Politically Sensitive Content (PSC). By utilizing a technique called Identity-Preserving Descriptive Mapping (IPDM) combined with Geopolitically Distal Translation, an attacker can obfuscate explicit political entities into neutral descriptive phrases translated across multiple low-resource languages. This induces semantic fragmentation, preventing the safety pre-filter from detecting the toxic relationship between the entities. However, the translated descriptions still provide sufficient cues for the backend image generation model to accurately reconstruct the identities, resulting in the successful synthesis of photorealistic, policy-violating images of real public figures.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
