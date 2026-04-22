# Multi-Turn LLM Jailbreak

**Promptfoo CVE ID:** `7a2aaaf6`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-02-02T20:39:23.090Z  
**Source paper:** [Siren: A Learning-Based Multi-Turn Attack Framework for Simulating Real-World Human Jailbreak Behaviors](https://arxiv.org/abs/2501.14250)  
**Tags:** `jailbreak`, `application-layer`, `prompt-layer`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, Gemini 1.5 Pro, GPT-4o, Llama 3 8B, Mistral 7B, Qwen 2.5 7B

## Description

Large Language Models (LLMs) are vulnerable to multi-turn adversarial attacks that skillfully decompose malicious requests into seemingly benign interactions, progressively guiding the dialogue towards harmful outputs. This vulnerability allows attackers to bypass LLM safety mechanisms through a series of strategically crafted prompts, exploiting the model's iterative response generation. The attack's success hinges on dynamically adapting each prompt based on the LLM's previous responses, making simple keyword-based detection ineffective.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
