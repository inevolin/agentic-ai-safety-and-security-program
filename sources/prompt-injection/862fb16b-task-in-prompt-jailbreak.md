# Task-in-Prompt Jailbreak

**Promptfoo CVE ID:** `862fb16b`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-12-09T03:51:07.621Z  
**Source paper:** [The TIP of the Iceberg: Revealing a Hidden Class of Task-in-Prompt Adversarial Attacks on LLMs](https://arxiv.org/abs/2501.18626)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** 

## Description

Large Language Models (LLMs) including GPT-4o, LLaMA 3.2, and others exhibit a vulnerability to "Task-in-Prompt" (TIP) adversarial attacks. This vulnerability allows attackers to bypass safety alignment and content filtering mechanisms by embedding prohibited instructions within benign sequence-to-sequence tasks (such as ciphers, riddles, code execution, or text transformation). The model implicitly decodes the obfuscated content via self-attention mechanisms during token generation, effectively "understanding" the restricted query without explicit external decoding steps, and subsequently generates the prohibited output (e.g., hate speech, illegal instructions). Standard keyword-based filters and current defense models (e.g., Llama Guard 3) fail to detect these attacks because the input appears benign or nonsensical to the filter.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
