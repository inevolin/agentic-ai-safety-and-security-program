# Random Token T2I Jailbreak

**Promptfoo CVE ID:** `3d79a776`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-08-01  
**Analyzed:** 2024-12-29T04:32:44.953Z  
**Source paper:** [Rt-attack: Jailbreaking text-to-image models via random token](https://arxiv.org/abs/2408.13896)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Clip-vit-base-patch32, DALL-E 3, GPT 3.5-turbo-instruct, Safegen, Sld, Stable Diffusion v1.4, Stable Diffusion v1.5

## Description

A heuristic token search attack, termed HTS-Attack, can bypass safety mechanisms in text-to-image (T2I) models, allowing generation of NSFW content. The attack iteratively replaces tokens in a malicious prompt with semantically similar tokens from the model's vocabulary, avoiding detection by prompt and image checkers. The method leverages a surrogate CLIP model to maintain semantic similarity to the target NSFW prompt.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
