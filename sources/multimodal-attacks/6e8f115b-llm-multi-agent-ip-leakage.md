# LLM Multi-Agent IP Leakage

**Promptfoo CVE ID:** `6e8f115b`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T05:15:38.070Z  
**Source paper:** [IP Leakage Attacks Targeting LLM-Based Multi-Agent Systems](https://arxiv.org/abs/2505.12442)  
**Tags:** `application-layer`, `extraction`, `prompt-leaking`, `blackbox`, `data-privacy`, `data-security`, `integrity`, `multimodal`, `agent`  
**Affected models (as reported):** GPT-4o, GPT-4o Mini, Llama 3.1 70B, Llama 3.1 8B, Qwen 2.5 72B

## Description

Large Language Model (LLM)-based Multi-Agent Systems (MAS) are vulnerable to intellectual property (IP) leakage attacks.  An attacker with black-box access (only interacting via the public API) can craft adversarial queries that propagate through the MAS, extracting sensitive information such as system prompts, task instructions, tool specifications, number of agents, and system topology.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
