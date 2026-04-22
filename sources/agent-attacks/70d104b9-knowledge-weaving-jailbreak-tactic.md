# Knowledge Weaving Jailbreak Tactic

**Promptfoo CVE ID:** `70d104b9`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-12-01  
**Analyzed:** 2025-12-05T00:53:51.714Z  
**Source paper:** [A Wolf in Sheep's Clothing: Bypassing Commercial LLM Guardrails via Harmless Prompt Weaving and Adaptive Tree Search](https://arxiv.org/abs/2512.01353)  
**Tags:** `model-layer`, `injection`, `jailbreak`, `blackbox`, `agent`, `chain`, `safety`, `integrity`  
**Affected models (as reported):** Circuit Breaker, Claude 3.5 Haiku, Gemini 2.5 Flash, Gemini 2.5 Pro, Gemma 2B, GPT-5 Mini, GPT-OSS 120B, Llama 2 13B, Llama Guard 3, Qwen 3 32B

## Description

A vulnerability exists in large language models where safety guardrails can be bypassed by decomposing a single harmful objective into a sequence of individually innocuous sub-queries. An attacker agent can use an adaptive tree search algorithm (Correlated Knowledge Attack Agent - CKA-Agent) to explore the target model's internal correlated knowledge. The agent issues benign queries, uses the model's responses to guide exploration along multiple reasoning paths, and aggregates the collected information to fulfill the original harmful request. This method does not require the attacker to have prior domain expertise, as it uses the target LLM as a "knowledge oracle" to dynamically construct the attack plan. The core vulnerability is the failure of safety systems to aggregate intent across a series of interactions, as they primarily focus on detecting maliciousness within a single prompt.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
