# Semantic Intent Fragmentation

**Promptfoo CVE ID:** `500bdc62`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T20:28:00.760Z  
**Source paper:** [Structured Semantic Cloaking for Jailbreak Attacks on Large Language Models](https://arxiv.org/abs/2603.16192)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, GPT-5, Claude 3.7, Llama 3 8B, Llama 3.3 70B, Gemini 2, DeepSeek-R1, DeepSeek-V3, Qwen 2.5 72B, Gemma 2 4B, Phi-4

## Description

A structural vulnerability in the safety alignment of Large Language Models (LLMs) allows attackers to bypass guardrails by manipulating when and how malicious intent is reconstructed during inference. This vulnerability, exploited via Structured Semantic Cloaking (S2C), takes advantage of safety mechanisms that rely on the coherent, explicit surface realization of harmful semantics at early generation stages. By structurally fragmenting malicious queries across disjoint prompt segments and applying recoverable obfuscation (e.g., character noise, ciphers) to key terms, the attacker delays intent consolidation. The target model is forced to perform long-range co-reference resolution and multi-step reasoning to decode the prompt. This delayed, distributed semantic reconstruction successfully evades both input-level content filters and generation-level refusal heuristics.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
