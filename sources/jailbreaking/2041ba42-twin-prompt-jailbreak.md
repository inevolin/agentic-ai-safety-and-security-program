# Twin Prompt Jailbreak

**Promptfoo CVE ID:** `2041ba42`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-07-14T03:56:11.710Z  
**Source paper:** [TwinBreak: Jailbreaking LLM Security Alignments based on Twin Prompts](https://arxiv.org/abs/2506.07596)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** DeepSeek 7B, Gemma 2 27B, Gemma 2 2B, Gemma 2 9B, Gemma 3 1B, Llama 2 13B, Llama 2 70B, Llama 2 7B, Llama 3.1 8B, Llama 3.3 70B, Mistral 7B, Qwen 2.5 14B, Qwen 2.5 32B, Qwen 2.5 3B, Qwen 2.5 72B, Qwen 2.5 7B

## Description

A white-box vulnerability allows attackers with full model access to bypass LLM safety alignments by identifying and pruning parameters responsible for rejecting harmful prompts. The attack leverages a novel "twin prompt" technique to differentiate safety-related parameters from those essential for model utility, performing fine-grained pruning with minimal impact on overall model functionality.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
