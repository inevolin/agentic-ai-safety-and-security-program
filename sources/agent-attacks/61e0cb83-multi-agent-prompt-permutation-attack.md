# Multi-Agent Prompt Permutation Attack

**Promptfoo CVE ID:** `61e0cb83`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-04-12T00:41:13.680Z  
**Source paper:** [$$	extit {Agents Under Siege} $: Breaking Pragmatic Multi-Agent LLM Systems with Optimized Prompt Attacks](https://arxiv.org/abs/2504.00218)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `agent`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** DeepSeek R1 Distill, Gemma 2 9B, Llama 2 7B, Llama 3.1 8B, Llama Guard, Llama Guard 2 8B, Llama Guard 3 1B, Llama Guard 3 8B, Mistral 7B, Prompt Guard

## Description

A vulnerability in multi-agent Large Language Model (LLM) systems allows for a permutation-invariant adversarial prompt attack.  By strategically partitioning adversarial prompts and routing them through a network topology, an attacker can bypass distributed safety mechanisms, even those with token bandwidth limitations and asynchronous message delivery. The attack optimizes prompt propagation as a maximum-flow minimum-cost problem, maximizing success while minimizing detection.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
