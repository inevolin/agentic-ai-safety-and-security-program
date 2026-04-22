# VLM Latent Boundary Crossing

**Promptfoo CVE ID:** `4c1ad06b`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-30T18:05:29.901Z  
**Source paper:** [JailBound: Jailbreaking Internal Safety Boundaries of Vision-Language Models](https://arxiv.org/abs/2505.19610)  
**Tags:** `model-layer`, `jailbreak`, `multimodal`, `vision`, `whitebox`, `safety`  
**Affected models (as reported):** GPT-4o, Claude 3.5, Llama 3.2 11B, Gemini 2, Qwen 2.5 7B

## Description

Vision-Language Models (VLMs) contain a vulnerability in their multimodal fusion layers where safety-relevant information is linearly separable in the latent space. This allows for a "JailBound" attack, which exploits the implicit internal safety decision boundary. The attack proceeds in two stages: (1) Safety Boundary Probing, where attackers approximate the internal decision hyperplane by training layer-wise logistic regression classifiers on the fusion representations of safe versus unsafe inputs; and (2) Safety Boundary Crossing, where attackers jointly optimize adversarial perturbations for both the input image (continuous pixel manipulation) and the text prompt (discrete token suffix optimization). By steering the modelâs internal fused representation across the probed boundary while minimizing geometric and semantic deviation, attackers can bypass safety alignment mechanisms and elicit policy-violating responses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
