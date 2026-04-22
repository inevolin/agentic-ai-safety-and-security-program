# Activation-Guided Local Editing Jailbreak

**Promptfoo CVE ID:** `d99aa770`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-08-16T04:29:43.392Z  
**Source paper:** [Activation-Guided Local Editing for Jailbreaking Attacks](https://arxiv.org/abs/2508.00555)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `whitebox`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, DarkIdol Llama 3.1 8B Instruct, DeepSeek V3, Gemini 2.0 Flash, GLM 4 9B Chat, GPT-4o, Llama 2 7B Chat, Llama 3 8B Instruct, Llama 3.1 8B Instruct, Llama 3.2 3B Instruct, Phi 4 Mini Instruct, Qwen 2.5 7B Instruct

## Description

A vulnerability exists in multiple Large Language Models (LLMs) that allows for safety alignment bypass through a technique named Activation-Guided Local Editing (AGILE). The attack uses white-box access to a source model's internal states (activations and attention scores) to craft a transferable text-based prompt that elicits harmful content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
