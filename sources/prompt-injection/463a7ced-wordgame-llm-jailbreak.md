# WordGame LLM Jailbreak

**Promptfoo CVE ID:** `463a7ced`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-28T23:23:21.701Z  
**Source paper:** [WordGame: Efficient & Effective LLM Jailbreak via Simultaneous Obfuscation in Query and Response](https://arxiv.org/abs/2405.14023)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3, Gemini Pro, GPT-3.5 Turbo, GPT-4, Llama 2, Llama 3

## Description

Large Language Models (LLMs) are vulnerable to a novel jailbreaking attack, "WordGame," which leverages simultaneous query and response obfuscation to bypass safety mechanisms. The attack replaces malicious words with word games in the query, forcing the LLM to reason through the game before addressing the original malicious intent. This, coupled with auxiliary tasks or questions (WordGame+), creates a context absent in the LLM's safety training data, enabling the generation of harmful content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
