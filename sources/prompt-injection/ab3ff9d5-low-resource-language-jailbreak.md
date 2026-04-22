# Low-Resource Language Jailbreak

**Promptfoo CVE ID:** `ab3ff9d5`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-10-01  
**Analyzed:** 2024-12-29T04:01:07.333Z  
**Source paper:** [Low-resource languages jailbreak gpt-4](https://arxiv.org/abs/2310.02446)  
**Tags:** `jailbreak`, `prompt-layer`, `blackbox`, `safety`, `application-layer`  
**Affected models (as reported):** GPT-4

## Description

Large Language Models (LLMs), such as GPT-4, exhibit a cross-lingual vulnerability in their safety mechanisms. Translating unsafe English prompts into low-resource languages, using readily available translation APIs like Google Translate, bypasses the LLM's safety filters and elicits harmful responses with a significantly higher success rate than attacks targeting the English language directly. The vulnerability stems from an unequal distribution of safety training data across languages, resulting in poor generalization of safety mechanisms to low-resource languages.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
