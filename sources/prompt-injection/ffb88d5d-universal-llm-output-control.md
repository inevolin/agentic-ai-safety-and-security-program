# Universal LLM Output Control

**Promptfoo CVE ID:** `ffb88d5d`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-29T04:31:41.340Z  
**Source paper:** [Universal and Context-Independent Triggers for Precise Control of LLM Outputs](https://arxiv.org/abs/2411.14738)  
**Tags:** `model-layer`, `injection`, `jailbreak`, `whitebox`, `integrity`, `safety`  
**Affected models (as reported):** Llama-3 (70B-instruct), Llama-3 (8B-instruct), Llama-3.1 (70B-instruct), Llama-3.1 (8B-instruct), Llama-3.2 (3B-instruct), Qwen-2 (57B-a14B-instruct), Qwen-2 (72B-instruct), Qwen-2 (7B-instruct), Qwen-2.5 (14B-instruct), Qwen-2.5 (7B-instruct)

## Description

Large Language Models (LLMs) are vulnerable to a novel prompt injection attack using universal and context-independent triggers. These triggers, once discovered for a specific LLM, allow precise control over the model's output regardless of the prompt context or desired output content, enabling adversaries to force the generation of arbitrary text. The attack utilizes a gradient-based optimization technique to discover these triggers.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
