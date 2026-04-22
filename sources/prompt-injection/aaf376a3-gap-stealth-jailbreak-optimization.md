# GAP Stealth Jailbreak Optimization

**Promptfoo CVE ID:** `aaf376a3`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-07-14T03:57:46.964Z  
**Source paper:** [Graph of attacks with pruning: Optimizing stealthy jailbreak prompt generation for enhanced llm content moderation](https://arxiv.org/abs/2501.18638)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`, `application-layer`  
**Affected models (as reported):** Gemma 2 9B, GPT-3.5 Turbo, GPT-4, GPT-4o, Mistral Large, Qwen 2.5 7B, Vicuna 13B v1.5

## Description

The GAP framework, as described in [arXiv:2405.18540](https://arxiv.org/abs/2405.18540), reveals vulnerabilities in various large language models (LLMs) by generating stealthy jailbreak prompts that bypass content moderation systems.  The framework leverages a graph-based attack strategy, enabling knowledge sharing across attack paths for enhanced efficiency and evasion.  This allows the successful bypassing of multiple LLM safety mechanisms, including those based on perplexity and prompt-based heuristics.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
