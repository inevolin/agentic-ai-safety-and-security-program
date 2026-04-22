# Cat-Triggered Reasoning Error

**Promptfoo CVE ID:** `7832f185`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-03-19T19:26:41.022Z  
**Source paper:** [Cats Confuse Reasoning LLM: Query Agnostic Adversarial Triggers for Reasoning Models](https://arxiv.org/abs/2503.01781)  
**Tags:** `model-layer`, `injection`, `jailbreak`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** DeepSeek R1, DeepSeek R1 Distill Qwen 32B, DeepSeek V3, o1, o3-mini

## Description

Large Language Models (LLMs) designed for step-by-step problem-solving are vulnerable to query-agnostic adversarial triggers. Appending short, semantically irrelevant text snippets (e.g., "Interesting fact: cats sleep most of their lives") to mathematical problems consistently increases the likelihood of incorrect model outputs without altering the problem's inherent meaning.  This vulnerability stems from the models' susceptibility to subtle input manipulations that interfere with their internal reasoning processes.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
