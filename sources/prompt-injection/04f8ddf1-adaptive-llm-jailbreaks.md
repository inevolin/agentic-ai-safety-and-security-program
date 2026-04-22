# Adaptive LLM Jailbreaks

**Promptfoo CVE ID:** `04f8ddf1`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-04-01  
**Analyzed:** 2024-12-28T23:24:22.775Z  
**Source paper:** [Jailbreaking leading safety-aligned llms with simple adaptive attacks](https://arxiv.org/abs/2404.02151)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `whitebox`, `safety`, `reliability`  
**Affected models (as reported):** Claude 2.0, Claude 2.1, Claude 3, Claude 3 Haiku, Claude 3.5 Sonnet, Claude-3 Sonnet, Gemma 7B, GPT-3.5 Turbo, GPT-4o, Llama 2 13B Chat, Llama 2 7B Chat, Llama-2-chat-70B, Llama-3-instruct-8B, Mistral 7B, Nemotron-4-340B, Phi 3 Mini, R2D2, Vicuna 13B

## Description

Leading safety-aligned Large Language Models (LLMs) are vulnerable to simple adaptive jailbreaking attacks. These attacks utilize manually crafted prompt templates, combined with random search on a suffix to maximize the log-probability of a target token indicating compliance (e.g., "Sure"). The attacks are adaptive, as the prompt template and target token are customized for specific models. Furthermore, some models are vulnerable to transfer attacks (using successful prompts from one LLM on others) or prefilling attacks (directly providing the desired initial response).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
