# TurboFuzzLLM Jailbreak Templates

**Promptfoo CVE ID:** `c905220b`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:37:14.574Z  
**Source paper:** [TurboFuzzLLM: Turbocharging Mutation-based Fuzzing for Effectively Jailbreaking Large Language Models in Practice](https://arxiv.org/abs/2502.18504)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** Gemini, GPT-3.5 Turbo, GPT-4, GPT-4 Turbo, GPT-4o, Llama 2 13B, Mistral Large 2, R2D2, Zephyr 7B

## Description

Large Language Models (LLMs) are vulnerable to jailbreaking attacks leveraging mutation-based fuzzing techniques.  The TurboFuzzLLM framework efficiently generates adversarial prompts, combining mutated templates with harmful questions to elicit unauthorized or malicious responses. This vulnerability allows bypassing built-in safeguards and obtaining harmful outputs through black-box API access.  The effectiveness stems from advanced mutation strategies (including refusal suppression, prefix injection, and LLM-based mutations) and efficient search algorithms that significantly improve the attack success rate compared to previous techniques.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
