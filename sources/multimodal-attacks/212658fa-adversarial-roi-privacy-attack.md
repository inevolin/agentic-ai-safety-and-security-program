# Adversarial ROI Privacy Attack

**Promptfoo CVE ID:** `212658fa`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-12-30T21:02:02.166Z  
**Source paper:** [VIP: Visual Information Protection through Adversarial Attacks on Vision-Language Models](https://arxiv.org/abs/2507.08982)  
**Tags:** `model-layer`, `vision`, `multimodal`, `whitebox`, `data-privacy`, `integrity`  
**Affected models (as reported):** InstructBLIP, LLaVA, Vicuna 7B

## Description

Vision-Language Models (VLMs) utilizing Transformer-based visual encoders (specifically CLIP and EVA-CLIP variants) are vulnerable to a targeted adversarial attack dubbed "VIP" (Visual Information Protection). This vulnerability allows an attacker to manipulate the model's internal attention mechanism to create a "blind spot" within a specific Region of Interest (ROI) of an input image. By optimizing an additive image perturbation ($\delta$), the attack minimizes the attention weights and value matrix norms assigned to image patches within the target ROI in the early Multi-Head Attention (MHA) blocks of the visual encoder. This effectively prevents the propagation of semantic information from the targeted region to subsequent layers. Consequently, the VLM fails to detect, describe, or answer questions regarding objects located within the ROI (achieving up to 98% reduction in detection accuracy), while the visual quality and semantic interpretation of the surrounding non-targeted regions remain intact.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
