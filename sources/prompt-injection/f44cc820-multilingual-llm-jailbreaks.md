# Multilingual LLM Jailbreaks

**Promptfoo CVE ID:** `f44cc820`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-06-12T00:02:46.638Z  
**Source paper:** [The Tower of Babel Revisited: Multilingual Jailbreak Prompts on Closed-Source Large Language Models](https://arxiv.org/abs/2505.12287)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** DeepSeek R1, Gemini 1.5 Pro, GPT-4o, Qwen Max

## Description

Multilingual prompt injection vulnerability in four closed-source Large Language Models (LLMs): GPT-4o, DeepSeek-R1, Gemini-1.5-Pro, and Qwen-Max.  Attackers can bypass safety restrictions and elicit harmful or disallowed content by crafting prompts in English or Chinese, leveraging specific structural techniques (e.g., "Two Sides" prompting) that exploit inconsistencies in the models' safety alignment across languages and prompt formats.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
