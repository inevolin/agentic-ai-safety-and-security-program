# Improved LLM Jailbreak Transferability

**Promptfoo CVE ID:** `818b44af`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-03-19T19:32:20.994Z  
**Source paper:** [Guiding not Forcing: Enhancing the Transferability of Jailbreaking Attacks on LLMs via Removing Superfluous Constraints](https://arxiv.org/abs/2503.01865)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** Gemma 7B IT, GPT-3.5 Turbo, GPT-4 Turbo, Llama 2 7B Chat, Llama 3 8B Instruct, Qwen 2 7B, Vicuna 7B v1.5, Yi 1.5 9B Chat

## Description

Large Language Models (LLMs) employing gradient-based optimization for jailbreaking defense are vulnerable to enhanced transferability attacks due to superfluous constraints in their objective functions.  Specifically, the "response pattern constraint" (forcing a specific initial response phrase) and the "token tail constraint" (penalizing variations in the response beyond a fixed prefix) limit the search space and reduce the effectiveness of attacks across different models. Removing these constraints significantly increases the success rate of attacks transferred to target models.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
