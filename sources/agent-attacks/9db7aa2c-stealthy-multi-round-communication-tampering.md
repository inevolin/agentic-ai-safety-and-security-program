# Stealthy Multi-Round Communication Tampering

**Promptfoo CVE ID:** `9db7aa2c`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-08-16T04:13:54.772Z  
**Source paper:** [Attack the Messages, Not the Agents: A Multi-round Adaptive Stealthy Tampering Framework for LLM-MAS](https://arxiv.org/abs/2508.03125)  
**Tags:** `application-layer`, `injection`, `fine-tuning`, `agent`, `chain`, `blackbox`, `integrity`  
**Affected models (as reported):** Gemini 2.5 Pro, GPT-4o, Llama 3.1 70B Instruct, Llama 3.1 8B Instruct, Mistral 7B Instruct v0.3, Qwen 3 8B

## Description

A vulnerability exists in LLM-based Multi-Agent Systems (LLM-MAS) where an attacker with control over the communication network can perform a multi-round, adaptive, and stealthy message tampering attack. By intercepting and subtly modifying inter-agent messages over multiple conversational turns, an attacker can manipulate the system's collective reasoning process. The attack (named MAST in the reference paper) uses a fine-tuned policy model to generate a sequence of small, context-aware perturbations that are designed to evade detection by remaining semantically and stylistically similar to the original messages. The cumulative effect of these modifications can steer the entire system toward an attacker-defined goal, causing it to produce incorrect, malicious, or manipulated outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
