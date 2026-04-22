# Localized Refusal Ablation

**Promptfoo CVE ID:** `09815299`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-03-08T22:10:56.307Z  
**Source paper:** [Efficient Refusal Ablation in LLM through Optimal Transport](https://arxiv.org/abs/2603.04355)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 2 7B, Llama 3.1 8B, Qwen 2.5 7B

## Description

A vulnerability in safety-aligned open-weights Large Language Models (LLMs) allows attackers to bypass refusal mechanisms during inference via a representation-level jailbreak known as PCA-regularized Gaussian Optimal Transport (PCA-OT). Unlike previous 1D directional ablation methods (e.g., Refusal Feature Ablation), this attack computes a minimal-cost optimal transport map that matches both the mean and covariance of "harmful" activation distributions to "harmless" ones within a low-dimensional subspace (typically top K=1 or 2 principal components). By applying this affine transformation as a forward hook to just 1-2 carefully selected intermediate layers (at 40-60% network depth), an attacker can completely suppress the model's refusal behavior. This localized intervention successfully circumvents RLHF/DPO safeguards while preserving the model's linguistic coherence and reasoning capabilities.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
