# Language Game Jailbreaks

**Promptfoo CVE ID:** `1882e0a3`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-11-01  
**Analyzed:** 2025-01-26T18:23:57.970Z  
**Source paper:** [Playing Language Game with LLMs Leads to Jailbreaking](https://arxiv.org/abs/2411.12762)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, GPT-4o, GPT-4o Mini, Llama 3.1 70B

## Description

Large Language Models (LLMs) are vulnerable to jailbreak attacks using language games, which manipulate input prompts through structured linguistic alterations (e.g., Ubbi Dubbi, custom letter insertion rules) to bypass safety mechanisms.  These games obfuscate malicious intent while maintaining human readability, causing LLMs to generate unsafe content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
