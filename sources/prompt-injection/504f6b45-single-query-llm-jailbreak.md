# Single-Query LLM Jailbreak

**Promptfoo CVE ID:** `504f6b45`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T05:21:05.740Z  
**Source paper:** [Exploring Jailbreak Attacks on LLMs through Intent Concealment and Diversion](https://arxiv.org/abs/2505.14316)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 1, Claude 2, Claude 3, ERNIE 3.5 Turbo, GPT-3.5 Turbo, GPT-4, Llama 2 13B Chat, Llama 3 70B, Llama 3.1 405B, Qwen Max

## Description

Large Language Models (LLMs) are vulnerable to a novel jailbreak attack, termed ICE (Intent Concealment and Diversion), which leverages hierarchical prompt decomposition and semantic expansion to bypass safety filters.  ICE achieves high attack success rates with single queries, exploiting the models' limitations in multi-step reasoning.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
