# Autonomous Agent Jailbreak

**Promptfoo CVE ID:** `08f22069`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2023-11-01  
**Analyzed:** 2024-12-29T01:09:30.252Z  
**Source paper:** [Evil geniuses: Delving into the safety of llm-based agents](https://arxiv.org/abs/2311.11855)  
**Tags:** `agent`, `jailbreak`, `injection`, `application-layer`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4

## Description

Large Language Model (LLM)-based agents, due to their multi-agent architecture and role-based interactions, are vulnerable to adversarial attacks that exploit the system's design and agent roles. Maliciously crafted prompts, particularly those targeting system-level roles, can cause agents to generate harmful content, bypassing safety mechanisms more effectively than attacks against individual LLMs. The vulnerability stems from a "domino effect" where one compromised agent can trigger harmful behavior in others.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
