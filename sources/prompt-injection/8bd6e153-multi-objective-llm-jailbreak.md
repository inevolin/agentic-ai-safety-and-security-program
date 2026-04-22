# Multi-Objective LLM Jailbreak

**Promptfoo CVE ID:** `8bd6e153`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T04:01:05.024Z  
**Source paper:** [BlackDAN: A Black-Box Multi-Objective Approach for Effective and Contextual Jailbreaking of Large Language Models](https://arxiv.org/abs/2410.09804)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Aquilachat-7B, Baichuan 2 13B Chat, Baichuan-7B, GPT-2 XL, Internlm2-chat-7B, Llama 3 8B, Llama-2-13B-hf, Llama-2-7B-hf, Llava-v1.6-mistral-7B-hf, Llava-v1.6-vicuna-7B-hf, Minitron-8B-base, Vicuna 13B v1.5, Vicuna 7B, Vicuna 7B v1.5, Yi 1.5 9B Chat

## Description

Large Language Models (LLMs) are vulnerable to a multi-objective black-box jailbreaking attack (BlackDAN) that optimizes prompts to maximize the likelihood of generating unsafe responses while maintaining contextual relevance and minimizing detectability. The attack leverages a multi-objective evolutionary algorithm (NSGA-II) to balance attack success rate, semantic consistency, and stealthiness, resulting in more effective and less easily detectable jailbreaks than single-objective approaches.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
