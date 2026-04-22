# Macaronic T2I Jailbreak

**Promptfoo CVE ID:** `37ceb240`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-08T22:04:39.658Z  
**Source paper:** [MacPrompt: Maraconic-guided Jailbreak against Text-to-Image Models](https://arxiv.org/abs/2601.07141)  
**Tags:** `prompt-layer`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** DALL-E, Stable Diffusion

## Description

Text-to-Image (T2I) models and their associated safety filters are vulnerable to MacPrompt, a black-box jailbreak technique that exploits cross-lingual embedding alignments. Attackers can bypass input text filters, latent representation filters, and model-level concept removal defenses by replacing sensitive keywords with "macaronic" substitutes. These substitutes are constructed by extracting and recombining character-level substrings from translations of the target word across multiple languages. Because the resulting strings are lexically obfuscated and exploit non-invertible tokenization, they evade text-based safety classifiers and keyword blacklists while still successfully mapping to the target visual concepts in the model's embedding space.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
