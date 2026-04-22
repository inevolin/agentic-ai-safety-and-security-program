# In-Context LLM Jailbreak

**Promptfoo CVE ID:** `60109edb`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-10-01  
**Analyzed:** 2024-12-29T01:13:14.605Z  
**Source paper:** [Jailbreak and guard aligned language models with only few in-context demonstrations](https://arxiv.org/abs/2310.06387)  
**Tags:** `prompt-layer`, `jailbreak`, `injection`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-4 0613, Llama 2 7B Chat, Mistral-7B-v2, Mixtral 8x7B, Qwen-7B-v2, Vicuna 13B v1.5, Vicuna 7B v1.5

## Description

Large Language Models (LLMs) are vulnerable to In-Context Attacks (ICA) and susceptible to mitigation via In-Context Defense (ICD). ICA leverages a small number of harmful demonstration examples within a prompt to elicit harmful responses from the LLM, even if it is otherwise safety-aligned. ICD counteracts ICA by prepending safe demonstration examples to the prompt, effectively reducing the likelihood of harmful output. The effectiveness of both ICA and ICD is demonstrated across multiple LLMs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
