# Agent-in-the-Middle Attack

**Promptfoo CVE ID:** `260435d8`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:17:58.691Z  
**Source paper:** [Red-Teaming LLM Multi-Agent Systems via Communication Attacks](https://arxiv.org/abs/2502.14847)  
**Tags:** `application-layer`, `injection`, `integrity`, `safety`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4o

## Description

A vulnerability exists in the communication mechanisms of Large Language Model (LLM)-based Multi-Agent Systems (LLM-MAS) enabling an Agent-in-the-Middle (AiTM) attack.  An attacker can intercept and manipulate messages between agents, causing the victim agent to produce malicious outputs.  The attack does not require compromising individual agents directly; instead, it leverages contextual manipulation of inter-agent communications.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
