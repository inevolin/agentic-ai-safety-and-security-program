# Copy-Guided Reasoning Corruption

**Promptfoo CVE ID:** `eab4dabd`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-12-30T21:16:42.619Z  
**Source paper:** [When LLMs Copy to Think: Uncovering Copy-Guided Attacks in Reasoning LLMs](https://arxiv.org/abs/2507.16773)  
**Tags:** `prompt-layer`, `injection`, `denial-of-service`, `integrity`, `reliability`, `whitebox`  
**Affected models (as reported):** DeepSeek-R1, o4-mini

## Description

Reasoning-capable Large Language Models (LLMs) are vulnerable to a class of indirect prompt injection known as Copy-Guided Attacks (CGA). This vulnerability exploits the intrinsic behavior of reasoning models to copy tokens from the input prompt (such as variable names, function identifiers, or code snippets) into their intermediate reasoning traces (Chain-of-Thought). By embedding adversarial trigger sequences into external payloadsâspecifically within data the model is expected to analyzeâan attacker can force the model to replicate these triggers during the decoding phase. Due to the autoregressive nature of LLM generation, the presence of these copied triggers in the immediate context biases subsequent token predictions. This allows attackers to hijack the inference process without modifying the user's explicit instructions, leading to deviations in generation length or logic.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
