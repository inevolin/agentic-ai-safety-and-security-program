# Adversarial LLM Jailbreak

**Promptfoo CVE ID:** `5aafa2a2`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-02-16T19:35:06.004Z  
**Source paper:** [Adversarial Reasoning at Jailbreaking Time](https://arxiv.org/abs/2502.01633)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, Cygnet, Gemini 1.5 Pro, GPT-4, Llama 2 7B, Llama 3 8B, Llama 3.1 405B, Mixtral 8x7B, o1-preview, R2D2, Vicuna 13B v1.5

## Description

A vulnerability in Large Language Models (LLMs) allows adversarial reasoning attacks to bypass safety mechanisms and elicit harmful responses. The vulnerability stems from the insufficient robustness of existing LLM safety measures against iterative prompt refinement guided by a loss function that measures the LLM's proximity to generating a target harmful response.  This allows an attacker to effectively navigate the prompt space, even against adversarially trained models, resulting in successful jailbreaks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
