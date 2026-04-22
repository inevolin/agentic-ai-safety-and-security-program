# Cross-Image Contagion

**Promptfoo CVE ID:** `3cdbd2fb`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T01:12:27.530Z  
**Source paper:** [LAMP: Learning Universal Adversarial Perturbations for Multi-Image Tasks via Pre-trained Models](https://arxiv.org/abs/2601.21220)  
**Tags:** `model-layer`, `multimodal`, `vision`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** Qwen 2.5, LLaVA

## Description

Multi-modal Large Language Models (MLLMs) capable of processing interleaved image-text sequences are vulnerable to a universal adversarial perturbation (UAP) attack known as LAMP. This vulnerability allows an attacker to generate a single, noise-based perturbation pattern using a surrogate model (e.g., Mantis-CLIP) that transfers effectively to black-box target models. The attack leverages two novel loss functions during perturbation learning: a "contagious" objective that manipulates self-attention to force clean image and text tokens to attend to perturbed tokens, and an "index-attention suppression" objective that decouples visual tokens from their positional text anchors (e.g., "image 1"). Consequently, an attacker can insert a fixed number of perturbed images (e.g., 2) into a sequence of arbitrary length containing clean images, causing the model to misinterpret the entire context, hallucinate content, or produce incorrect answers regardless of the perturbed images' positions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
