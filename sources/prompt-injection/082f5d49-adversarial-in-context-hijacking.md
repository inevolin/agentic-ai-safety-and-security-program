# Adversarial In-Context Hijacking

**Promptfoo CVE ID:** `082f5d49`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-11-01  
**Analyzed:** 2024-12-28T23:09:06.356Z  
**Source paper:** [Hijacking large language models via adversarial in-context learning](https://arxiv.org/abs/2311.09948)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-2 XL, GPT-3.5/4, Llama-7B/13B, Llama/Llama 2, OPT-2.7B/6.7B, Vicuna 7B

## Description

A vulnerability exists in large language models (LLMs) utilizing in-context learning (ICL). Malicious actors can inject imperceptible adversarial suffixes into in-context demonstrations, causing the LLM to generate targeted, unintended outputs, even when the user query is benign. The attack manipulates the LLM's attention mechanism, diverting it towards the adversarial tokens.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
