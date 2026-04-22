# Adaptive Sparse Jailbreak

**Promptfoo CVE ID:** `b76b9647`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-28T23:31:13.507Z  
**Source paper:** [Efficient LLM Jailbreak via Adaptive Dense-to-sparse Constrained Optimization](https://arxiv.org/abs/2405.09113)  
**Tags:** `jailbreak`, `model-layer`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Llama2-chat-7B, Vicuna 7B v1.5, Zephyr 7B Beta, Zephyr 7B R2D2

## Description

A vulnerability in several open-source Large Language Models (LLMs) allows for efficient jailbreaking via Adaptive Dense-to-Sparse Constrained Optimization (ADC). This attack uses a continuous optimization method, progressively increasing sparsity to generate adversarial token sequences that bypass safety measures and elicit harmful responses. The attack is more effective and efficient than prior token-level methods.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
