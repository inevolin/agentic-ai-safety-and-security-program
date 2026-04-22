# Dual Jailbreak via TDI/MTO

**Promptfoo CVE ID:** `3f4248c0`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-05-04T04:24:56.120Z  
**Source paper:** [DualBreach: Efficient Dual-Jailbreaking via Target-Driven Initialization and Multi-Target Optimization](https://arxiv.org/abs/2504.18564)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Llama 3 8B Instruct, Qwen 2.5 7B Instruct

## Description

A vulnerability exists in the combination of Large Language Models (LLMs) and their associated safety guardrails, allowing attackers to bypass both defenses and elicit harmful or unintended outputs from LLMs.  The vulnerability stems from insufficient detection by guardrails against adversarially crafted prompts, which appear benign but contain hidden malicious intent. The attack, dubbed "DualBreach," leverages a target-driven initialization strategy and multi-target optimization to generate these prompts, effectively bypassing both the guardrail and LLM's internal safety mechanisms.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
