# LLM Fuzz-Based Jailbreak

**Promptfoo CVE ID:** `b172588d`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-03-19T19:29:54.778Z  
**Source paper:** [JBFuzz: Jailbreaking LLMs Efficiently and Effectively Using Fuzzing](https://arxiv.org/abs/2503.08990)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** DeepSeek Chat, DeepSeek R1, Gemini 1.5 Flash, Gemini 2.0 Flash, GPT-3.5 Turbo, GPT-4o, GPT-4o Mini, Llama 2 7B Chat, Llama 3.1 8B Instruct

## Description

Large Language Models (LLMs) are vulnerable to jailbreak attacks by crafted prompts that bypass safety mechanisms, causing the model to generate harmful or unethical content.  This vulnerability stems from the inherent tension between the LLM's instruction-following and safety constraints. The JBFuzz technique demonstrates the ability to efficiently and effectively discover such prompts through a fuzzing-based approach leveraging novel seed prompt templates and a synonym-based mutation strategy.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
