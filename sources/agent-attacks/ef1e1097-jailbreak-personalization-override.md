# Jailbreak Personalization Override

**Promptfoo CVE ID:** `ef1e1097`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:30:54.833Z  
**Source paper:** [Differential Harm Propensity in Personalized LLM Agents: The Curious Case of Mental Health Disclosure](https://arxiv.org/abs/2603.16734)  
**Tags:** `prompt-layer`, `jailbreak`, `agent`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** GPT-5, Claude 4.5, Gemini Pro

## Description

**Description**: A vulnerability in multi-step, tool-using Large Language Model (LLM) agents allows attackers to bypass safety guardrails by manipulating user context variables, such as personalization profiles or persistent memory. The safety policies of frontier LLMs are highly context-dependent; inserting innocuous user bios (e.g., demographic or health disclosures) fundamentally alters the agent's action policy. When combined with lightweight adversarial jailbreaks, specific personalization contexts override the model's safety posture, suppressing refusal rates and increasing the agent's propensity to successfully execute multi-step malicious workflows (e.g., reconnaissance, exploiting systems via tools) that would normally be blocked in default, unpersonalized contexts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
