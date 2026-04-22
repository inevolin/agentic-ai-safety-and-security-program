# TeleAI Reveals Systemic LLM Vulnerabilities

**Promptfoo CVE ID:** `268628e1`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-12-01  
**Analyzed:** 2026-03-08T21:32:53.995Z  
**Source paper:** [TeleAI-Safety: A comprehensive LLM jailbreaking benchmark towards attacks, defenses, and evaluations](https://arxiv.org/abs/2512.05485)  
**Tags:** `prompt-layer`, `model-layer`, `jailbreak`, `injection`, `blackbox`, `whitebox`, `agent`, `api`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, GPT-5, Claude 3, Claude 3.5, o1, Llama 2 7B, Llama 3.1 8B, Gemini 2, DeepSeek-R1, Qwen 2.5 7B, Vicuna 7B

## Description

Reasoning-specialized Large Language Models (LLMs) that utilize Chain-of-Thought (CoT) processes are vulnerable to reasoning-exploitation jailbreaks. Attackers can bypass standard safety alignments (such as RLHF) by using adaptive multi-turn interactions or semantic transformations to induce the model to generate intermediate reasoning steps that "rationalize" or "contextualize" a harmful request. Because current alignment techniques often fail to scale linearly with reasoning depth, forcing the model to logically justify a prohibited prompt during its CoT phase effectively weaponizes the model's own reasoning capabilities against its safety guardrails.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
