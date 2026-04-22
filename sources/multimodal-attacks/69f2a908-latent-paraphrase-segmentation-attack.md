# Latent Paraphrase Segmentation Attack

**Promptfoo CVE ID:** `69f2a908`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-12-30T19:52:54.101Z  
**Source paper:** [SPARTA: Evaluating Reasoning Segmentation Robustness through Black-Box Adversarial Paraphrasing in Text Autoencoder Latent Space](https://arxiv.org/abs/2510.24446)  
**Tags:** `prompt-layer`, `multimodal`, `vision`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4, Llama 3.1 70B, Qwen 2.5

## Description

Reasoning segmentation models, which generate binary segmentation masks based on implicit text queries, are vulnerable to adversarial paraphrasing. This vulnerability allows an attacker to craft semantically equivalent and grammatically correct text prompts that significantly degrade the model's segmentation performance (measured by Intersection-over-Union, or IoU). The exploit utilizes a black-box, sentence-level optimization method (SPARTA) that operates within the continuous semantic latent space of a text autoencoder (e.g., SONAR). By employing reinforcement learning (Proximal Policy Optimization) to perturb latent vectors, the attack identifies specific phrasings that preserve the original intent but maximize the loss in the target model's mask generation process, bypassing standard semantic robustness checks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
