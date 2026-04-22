# Adversarial VLM Jailbreak

**Promptfoo CVE ID:** `6a431e4b`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-12-09T03:45:29.689Z  
**Source paper:** [Adversary-Aware DPO: Enhancing Safety Alignment in Vision Language Models via Adversarial Training](https://arxiv.org/abs/2502.11455)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `multimodal`, `vision`, `embedding`, `fine-tuning`, `whitebox`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** LLaVA 7B

## Description

Vision-Language Models (VLMs), specifically the LLaVA-1.5 and LLaVA-1.6 series, are vulnerable to optimization-based white-box jailbreak attacks despite standard safety alignment measures like Supervised Fine-Tuning (SFT) and Direct Preference Optimization (DPO). Attackers can craft adversarial perturbations in the image space (imperceptible noise) or latent space using Projected Gradient Descent (PGD) to manipulate the model's internal representations. These perturbations maximize the probability of the model generating harmful, toxic, or disallowed content while minimizing the probability of refusal, effectively bypassing the model's safety guardrails. Standard alignment methods fail to defend against these worst-case adversarial manipulations because they rely on learned patterns from benign training data rather than robust min-max optimization against active adversaries.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
