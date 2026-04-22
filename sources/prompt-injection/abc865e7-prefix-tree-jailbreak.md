# Prefix-Tree Jailbreak

**Promptfoo CVE ID:** `abc865e7`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:49:45.362Z  
**Source paper:** [Exploiting Prefix-Tree in Structured Output Interfaces for Enhancing Jailbreak Attacking](https://arxiv.org/abs/2502.13527)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `api`, `safety`  
**Affected models (as reported):** DeepSeek R1 Distill Qwen 14B, DeepSeek R1 Distill Qwen 7B, Llama 2 13B, Llama 2 13B Chat, Llama 2 7B Chat, Mistral 7B Instruct, Qwen 14B Chat, Qwen 7B Chat

## Description

Large Language Models (LLMs) with structured output interfaces are vulnerable to jailbreak attacks that exploit the interaction between token-level inference and sentence-level safety alignment.  Attackers can manipulate the model's output by constructing attack patterns based on prefixes of safety refusal responses and desired harmful outputs, effectively bypassing safety mechanisms through iterative API calls and constrained decoding.  This allows the generation of harmful content despite safety measures.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
