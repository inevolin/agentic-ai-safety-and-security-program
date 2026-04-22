# Reward Hacking Via Adversarial Imitation

**Promptfoo CVE ID:** `41deb652`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-22T05:40:23.774Z  
**Source paper:** [FAIL: Flow Matching Adversarial Imitation Learning for Image Generation](https://arxiv.org/abs/2602.12155)  
**Tags:** `model-layer`, `fine-tuning`, `vision`, `multimodal`, `whitebox`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** 

## Description

A vulnerability exists in the post-training alignment of Flow Matching models (specifically FLUX.1-dev) when utilizing Visual Foundation Models (VFM) (e.g., DINOv3b) as discriminators or when employing standalone Reward Gradient optimization (e.g., HPSv3). These feedback mechanisms lack sufficient capacity or structural guidance to constrain the generative policy, making the discriminator's gradients susceptible to "reward hacking." Consequently, the generative policy over-optimizes for the discriminator's score rather than true data distribution, resulting in severe degradation of image quality, including oversaturation, unnatural high-frequency artifacts, and mode collapse.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
