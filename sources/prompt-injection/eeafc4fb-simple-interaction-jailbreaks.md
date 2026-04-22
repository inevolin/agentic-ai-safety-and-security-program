# Simple Interaction Jailbreaks

**Promptfoo CVE ID:** `eeafc4fb`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:35:28.635Z  
**Source paper:** [Speak Easy: Eliciting Harmful Jailbreaks from LLMs with Simple Interactions](https://arxiv.org/abs/2502.04322)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-4o, Llama 3.1 8B Instruct, Llama 3.3 70B Instruct, Qwen 2 72B Instruct

## Description

Large Language Models (LLMs) are vulnerable to a novel jailbreak attack, "Speak Easy," which leverages common multi-step and multilingual interaction patterns to elicit harmful and actionable responses.  The attack decomposes a malicious query into multiple seemingly innocuous sub-queries, translates them into various languages, and then selects the most actionable and informative responses from the LLM's output across languages. This bypasses existing safety mechanisms more effectively than single-step, monolingual attacks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
