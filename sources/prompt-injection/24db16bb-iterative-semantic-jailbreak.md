# Iterative Semantic Jailbreak

**Promptfoo CVE ID:** `24db16bb`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-07-14T04:13:22.396Z  
**Source paper:** [MIST: Jailbreaking Black-box Large Language Models via Iterative Semantic Tuning](https://arxiv.org/abs/2506.16792)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, GPT-4 Turbo, GPT-4o, GPT-4o Mini, Llama 2 7B Chat, Vicuna 7B v1.5

## Description

The MIST attack exploits a vulnerability in black-box large language models (LLMs) allowing iterative semantic tuning of prompts to elicit harmful responses.  The attack leverages synonym substitution and optimization strategies to bypass safety mechanisms without requiring access to the model's internal parameters or weights.  The vulnerability lies in the susceptibility of the LLM to semantically similar prompts that trigger unsafe outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
