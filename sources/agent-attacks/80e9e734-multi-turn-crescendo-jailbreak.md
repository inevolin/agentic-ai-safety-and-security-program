# Multi-Turn Crescendo Jailbreak

**Promptfoo CVE ID:** `80e9e734`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-04-01  
**Analyzed:** 2024-12-28T23:22:25.075Z  
**Source paper:** [Great, now write an article about that: The crescendo multi-turn llm jailbreak attack](https://arxiv.org/abs/2404.01833)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `agent`  
**Affected models (as reported):** Anthropic Chat, ChatGPT, Claude 2, Claude 3, Claude 3.5 Sonnet, Gemini Pro, Gemini-ultra, GPT-3.5 Turbo, GPT-4, Llama-2 70B, Llama-3 70B Chat

## Description

Large Language Models (LLMs) are vulnerable to the "Crescendo" multi-turn jailbreak attack. This attack uses a series of benign, escalating prompts to gradually lead the LLM into generating harmful or disallowed content, bypassing built-in safety mechanisms. The attack leverages the LLM's tendency to follow conversational patterns and build upon previous responses, making it difficult to detect based solely on individual prompts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
