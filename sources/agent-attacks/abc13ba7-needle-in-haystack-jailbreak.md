# Needle-in-Haystack Jailbreak

**Promptfoo CVE ID:** `abc13ba7`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-08T23:41:24.978Z  
**Source paper:** [Jailbreaking in the Haystack](https://arxiv.org/abs/2511.04707)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `agent`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, o3, Llama 3.1 8B, Gemini 2, Mistral 7B, Qwen 2.5 7B

## Description

A safety bypass vulnerability, dubbed "Ninja" (Needle-in-a-haystack jailbreak), exists in long-context Large Language Models (LLMs). The vulnerability exploits a degradation in safety alignment that occurs when a harmful goal is embedded within a massive, benign context window. Unlike traditional adversarial attacks that use unintelligible strings or "many-shot" attacks that use harmful examples, this method utilizes thematically relevant but innocuous text (the "haystack"). The attack succeeds by exploiting positional bias: placing the harmful goal at the immediate beginning of the context window prevents the model's safety guardrails from triggering, while the subsequent long, relevant context maintains the model's capability to answer the query. This results in a high Attack Success Rate (ASR) while remaining stealthy against input filters looking for adversarial patterns.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
