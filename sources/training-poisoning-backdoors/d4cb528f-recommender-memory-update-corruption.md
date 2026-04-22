# Recommender Memory Update Corruption

**Promptfoo CVE ID:** `d4cb528f`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-12-30T20:02:36.295Z  
**Source paper:** [DrunkAgent: Stealthy Memory Corruption in LLM-Powered Recommender Agents](https://arxiv.org/abs/2503.23804)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `poisoning`, `rag`, `blackbox`, `agent`, `integrity`  
**Affected models (as reported):** GPT-4, o1, Llama 3 8B

## Description

Improper input validation in the memory module of Large Language Model (LLM)-powered agentic Recommender Systems (RS) allows remote attackers to perform indirect prompt injection via adversarial item descriptions. By utilizing the "DrunkAgent" framework, an attacker can embed semantic triggers and control characters (such as segmentation tokens and escape characters) into product descriptions. These injections manipulate the agent's memory update mechanism during agent-environment interactions. This results in "memory confusion," where the agent fails to correctly update interaction histories, and "persistent memory corruption," forcing the agent to prioritize the attacker's target item (e.g., ranking it first) in future recommendations for general users, regardless of actual user preferences.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
