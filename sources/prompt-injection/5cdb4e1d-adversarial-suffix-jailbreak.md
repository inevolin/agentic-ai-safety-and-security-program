# Adversarial Suffix Jailbreak

**Promptfoo CVE ID:** `5cdb4e1d`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-29T04:07:41.601Z  
**Source paper:** [GASP: Efficient Black-Box Generation of Adversarial Suffixes for Jailbreaking LLMs](https://arxiv.org/abs/2411.14133)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** Falcon 7B Instruct, GPT-3.5 Turbo, GPT-4o, GPT-4o Mini, Llama 2 7B Chat, Llama 3 8B Instruct, Llama 3.1 8B Instruct, Mistral 7B Instruct v0.3

## Description

Large language models (LLMs) are vulnerable to adversarial suffix injection attacks. Maliciously crafted suffixes appended to otherwise benign prompts can cause the LLM to generate harmful or undesired outputs, bypassing built-in safety mechanisms. The attack leverages the model's sensitivity to input perturbations to elicit responses outside its intended safety boundaries.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
