# Evolutionary LLM Jailbreak

**Promptfoo CVE ID:** `d8228765`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-01-26T18:21:14.293Z  
**Source paper:** [LLM-Virus: Evolutionary Jailbreak Attack on Large Language Models](https://arxiv.org/abs/2501.00055)  
**Tags:** `jailbreak`, `blackbox`, `application-layer`, `model-layer`, `whitebox`  
**Affected models (as reported):** Claude 2, Claude 3.5 Haiku, Gemini, Gemma 2, GPT-3.5 Turbo, GPT-4, GPT-4o, Llama, Llama 2 13B, Llama 3.1 70B, Llama 3.1 8B, Vicuna

## Description

This vulnerability allows an attacker to bypass the safety mechanisms of Large Language Models (LLMs) by using an evolutionary algorithm to generate effective jailbreak prompts. The algorithm leverages the LLM's capabilities to iteratively refine prompts, increasing the likelihood of eliciting harmful responses to otherwise disallowed queries.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
