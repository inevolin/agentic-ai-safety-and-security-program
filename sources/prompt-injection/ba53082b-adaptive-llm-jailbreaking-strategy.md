# Adaptive LLM Jailbreaking Strategy

**Promptfoo CVE ID:** `ba53082b`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-07-14T04:09:01.846Z  
**Source paper:** [Adaptive Jailbreaking Strategies Based on the Semantic Understanding Capabilities of Large Language Models](https://arxiv.org/abs/2505.23404)  
**Tags:** `jailbreak`, `prompt-layer`, `blackbox`, `application-layer`, `safety`, `integrity`  
**Affected models (as reported):** GPT-4o, Llama 2 13B, Llama 2 7B

## Description

Large Language Models (LLMs) are vulnerable to adaptive jailbreaking attacks that exploit their semantic comprehension capabilities. The MEF framework demonstrates that by tailoring attacks to the model's understanding level (Type I or Type II), evasion of input, inference, and output-level defenses is significantly improved.  This is achieved through layered semantic mutations and dual-ended encryption techniques, allowing bypass of security measures even in advanced models like GPT-4o.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
