# Variational Jailbreak Inference

**Promptfoo CVE ID:** `eb496d44`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-07-14T04:06:32.154Z  
**Source paper:** [VERA: Variational Inference Framework for Jailbreaking Large Language Models](https://arxiv.org/abs/2506.22666)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `api`  
**Affected models (as reported):** Baichuan 2 7B, Gemini Pro, GPT-3.5 Turbo, Llama 2 13B, Llama 2 13B Chat, Llama 2 7B Chat, Llama 3 8B, Mistral 7B, Orca 2 7B, Vicuna 7B, Zephyr 7B

## Description

VERA, a variational inference framework, enables the generation of diverse and fluent adversarial prompts that bypass safety mechanisms in large language models (LLMs).  The attacker model, trained through a variational objective, learns a distribution of prompts likely to elicit harmful responses, effectively jailbreaking the target LLM.  This allows for the generation of novel attacks that are not based on pre-existing, manually crafted prompts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
