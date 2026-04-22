# Untargeted Gradient Jailbreak

**Promptfoo CVE ID:** `7f8600f2`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-10-13T13:02:08.110Z  
**Source paper:** [Untargeted Jailbreak Attack](https://arxiv.org/abs/2510.02999)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `whitebox`, `integrity`, `safety`  
**Affected models (as reported):** DeepSeek R1, GPT-2 Large, GPT-4, GPT-4o, Llama 2 13B, Llama 3 70B Instruct, Llama 3 8B Instruct, Llama 3.1 8B Instruct, Llama Guard 3, Mistral 7B Instruct v0.3, Qwen 2.5 7B Instruct, Qwen 3 8B Instruct, RoBERTa, Vicuna 7B v1.5

## Description

A vulnerability exists in certain safety-aligned Large Language Models (LLMs) due to an untargeted, gradient-based optimization attack method called Untargeted Jailbreak Attack (UJA). Unlike previous targeted attacks (e.g., GCG) that optimize a prompt to elicit a predefined string (e.g., "Sure, here is..."), UJA optimizes for a general objective: maximizing the `unsafety` probability of the model's response, as quantified by an external judge model.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
