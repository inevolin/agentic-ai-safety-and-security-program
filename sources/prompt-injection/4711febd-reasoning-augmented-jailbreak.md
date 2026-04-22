# Reasoning-Augmented Jailbreak

**Promptfoo CVE ID:** `4711febd`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:38:31.424Z  
**Source paper:** [Reasoning-Augmented Conversation for Multi-Turn Jailbreak Attacks on Large Language Models](https://arxiv.org/abs/2502.11054)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** DeepSeek R1, Gemini 1.5 Pro, Gemini 2.0 Flash Thinking, Gemma 2 9B, GLM 4 9B Chat, GPT-4, GPT-4o, o1, Qwen 2 7B Instruct

## Description

Large Language Models (LLMs) are vulnerable to multi-turn jailbreak attacks leveraging the model's reasoning capabilities.  The attack, RACE, reformulates harmful queries into benign reasoning tasks, exploiting the LLM's ability to perform complex reasoning to ultimately generate unsafe content.  This bypasses standard safety mechanisms designed to prevent the generation of harmful responses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
