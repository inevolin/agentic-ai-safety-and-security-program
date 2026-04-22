# VLM Imperceptible Image Jailbreak

**Promptfoo CVE ID:** `a3b80369`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-12-08T23:39:34.726Z  
**Source paper:** [JaiLIP: Jailbreaking Vision-Language Models via Loss Guided Image Perturbation](https://arxiv.org/abs/2509.21401)  
**Tags:** `model-layer`, `jailbreak`, `multimodal`, `vision`, `whitebox`, `safety`  
**Affected models (as reported):** GPT-4, InstructBLIP, Vicuna 13B

## Description

A vulnerability exists in Vision-Language Models (VLMs) that allows for the bypass of safety alignment mechanisms through loss-guided adversarial image perturbations. This attack, known as JaiLIP, operates entirely in the image space, requiring no textual prompt manipulation. The vulnerability is exploited by optimizing an adversarial image using a joint objective function that minimizes the Mean Squared Error (MSE) between the clean and perturbed image while maximizing the model's loss for generating specific harmful target sequences. By utilizing `tanh`-space reparameterization to constrain pixel values, the attack generates imperceptible visual triggers that force the model to output toxic content, threats, or domain-specific harmful advice.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
