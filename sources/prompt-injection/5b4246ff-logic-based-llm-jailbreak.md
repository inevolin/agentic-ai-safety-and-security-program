# Logic-Based LLM Jailbreak

**Promptfoo CVE ID:** `5b4246ff`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T05:23:39.207Z  
**Source paper:** [Logic Jailbreak: Efficiently Unlocking LLM Safety Restrictions Through Formal Logical Expression](https://arxiv.org/abs/2505.13527)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** DeepSeek R1, DeepSeek V3, GPT-3.5 Turbo, GPT-4o Mini, Llama 3 70B, Llama 3 8B, Qwen 2.5 7B

## Description

**Description**: Large Language Models (LLMs) employing safety mechanisms based on token-level distribution analysis are vulnerable to a jailbreak attack exploiting distributional discrepancies between alignment data and formally expressed logical statements.  The vulnerability allows malicious actors to bypass safety restrictions by translating harmful natural language prompts into equivalent first-order logic expressions.  The LLM, trained primarily on natural language, fails to recognize the harmful intent encoded in the logically expressed input which falls outside its expected token distribution.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
