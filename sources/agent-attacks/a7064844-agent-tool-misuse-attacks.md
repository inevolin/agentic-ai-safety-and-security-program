# Agent Tool Misuse Attacks

**Promptfoo CVE ID:** `a7064844`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T04:08:14.281Z  
**Source paper:** [Imprompter: Tricking LLM Agents into Improper Tool Use](https://arxiv.org/abs/2410.14923)  
**Tags:** `prompt-layer`, `injection`, `agent`, `blackbox`, `data-privacy`, `data-security`  
**Affected models (as reported):** 

## Description

Large Language Model (LLM) agents are vulnerable to obfuscated adversarial prompts that exploit tool misuse. These prompts, crafted through prompt optimization techniques, force the agent to execute tools (e.g., URL fetching, markdown rendering) in a way that leaks sensitive user data (e.g., PII) without the user's knowledge. The prompts are designed to be visually indistinguishable from benign prompts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
