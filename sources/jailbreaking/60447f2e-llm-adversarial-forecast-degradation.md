# LLM Adversarial Forecast Degradation

**Promptfoo CVE ID:** `60447f2e`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-12-01  
**Analyzed:** 2025-12-09T02:25:00.299Z  
**Source paper:** [Adversarial vulnerabilities in large language models for time series forecasting](https://arxiv.org/abs/2412.08099)  
**Tags:** `model-layer`, `blackbox`, `api`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-3.5, GPT-4, Llama 4, Mistral Large

## Description

A vulnerability exists in Large Language Model (LLM)-based time series forecasting architectures, specifically affecting models such as TimeGPT, LLMTime, and TimeLLM. These models are susceptible to a gradient-free, black-box adversarial attack method termed Directional Gradient Approximation (DGA). An attacker can inject imperceptible perturbations into the historical time series input window (lookback window) to manipulate the model's output. By treating the model as a black box and optimizing perturbations to direct predictions toward a random walk (Gaussian White Noise) distribution, the attacker significantly degrades forecasting accuracy and breaks the model's ability to capture temporal dependencies. This attack functions without access to the model's training data, internal parameters (weights/gradients), or future ground truth values.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
