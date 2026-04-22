# Zeroth-Order MLLM Jailbreak

**Promptfoo CVE ID:** `22e2ff7b`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-29T04:15:11.312Z  
**Source paper:** [Zer0-Jack: A Memory-efficient Gradient-based Jailbreaking Method for Black-box Multi-modal Large Language Models](https://arxiv.org/abs/2411.07559)  
**Tags:** `model-layer`, `jailbreak`, `multimodal`, `blackbox`, `whitebox`, `data-security`, `safety`  
**Affected models (as reported):** GPT-4o, Inf-mllm1, Llama 2, LLaVA 1.5, MiniGPT-4

## Description

A vulnerability in multi-modal large language models (MLLMs) allows attackers to bypass safety mechanisms and elicit harmful responses using a memory-efficient zeroth-order optimization technique. The attack, termed Zer0-Jack, leverages simultaneous perturbation stochastic approximation (SPSA) with patch coordinate descent to generate malicious image inputs, even without access to the model's internal parameters (black-box setting).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
