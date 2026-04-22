# Multilingual LLM Jailbreak

**Promptfoo CVE ID:** `d9248397`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-29T04:37:11.811Z  
**Source paper:** [Multilingual blending: Llm safety alignment evaluation with language mixture](https://arxiv.org/abs/2407.07342)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4o, Llama 3

## Description

A vulnerability exists in several large language models (LLMs) where the safety alignment mechanisms are susceptible to bypass through "Multilingual Blending." This attack consists of crafting queries and eliciting responses using a mixture of multiple languages, significantly reducing the effectiveness of existing safety filters. The vulnerability stems from the models' ability to process and generate text in multiple languages, which, when combined in specific ways, can confuse the safety systems and lead to the generation of unsafe content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
