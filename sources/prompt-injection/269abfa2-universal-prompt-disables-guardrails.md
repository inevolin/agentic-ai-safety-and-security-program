# Universal Prompt Disables Guardrails

**Promptfoo CVE ID:** `269abfa2`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-08-31T13:35:46.282Z  
**Source paper:** [Involuntary Jailbreak](https://arxiv.org/abs/2508.13246)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** Claude 3.5 Haiku, Claude 4 Opus, Claude 4 Sonnet, DeepSeek R1, DeepSeek R1 Distill Llama 70B, DeepSeek V3, Gemini 2.5 Pro, GPT-4.1, GPT-4.1 Mini, GPT-4o, Grok 4, Llama 3.3 70B, Llama 4 Scout, Qwen 3

## Description

A universal prompt injection vulnerability, termed "Involuntary Jailbreak," affects multiple large language models. The attack uses a single prompt that instructs the model to learn a pattern from abstract string operators (`X` and `Y`). The model is then asked to generate its own examples of questions that should be refused (harmful questions) and provide detailed, non-refusal answers to them, in order to satisfy the learned operator logic. This reframes the generation of harmful content as a logical puzzle, causing the model to bypass its safety and alignment training. The vulnerability is untargeted, allowing it to elicit a wide spectrum of harmful content without the attacker specifying a malicious goal.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
