# Semantic Audio Jailbreak

**Promptfoo CVE ID:** `20aa5fed`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-08T22:17:29.337Z  
**Source paper:** [Audio Jailbreak: An Open Comprehensive Benchmark for Jailbreaking Large Audio-Language Models](https://arxiv.org/abs/2505.15406)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o, Gemini 1.5, Gemini 2, DeepSeek-V3, Qwen 2

## Description

Large Audio-Language Models (LAMs) are vulnerable to adversarial signal-level perturbations that allow for the bypass of safety guardrails (jailbreaking). While these models may possess robust text-based safety alignment, they fail to generalize this robustness to the audio modality. Attackers can utilize the Audio Perturbation Toolkit (APT) to apply transformations in the time domain (Energy Distribution Perturbation, Trimming, Fade In/Out), frequency domain (Pitch Shifting, Temporal Scaling), and mixing domain (Extra-auditory Priming, Natural Noise Injection). These perturbations are optimized via Bayesian Optimization to minimize the model's refusal score while maintaining semantic consistency for human listeners (validated via GPTScore and Whisper transcription). When processed, these perturbed audio inputs cause representation shifts that circumvent refusal mechanisms, coercing the model into generating harmful, unethical, or policy-violating content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
