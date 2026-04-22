# DoppelgÃ¤nger Agent Hijack

**Promptfoo CVE ID:** `a45dd721`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-12-09T03:33:14.359Z  
**Source paper:** [Doppelg\](https://arxiv.org/abs/2506.14539)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `prompt-leaking`, `agent`, `blackbox`, `integrity`, `data-security`  
**Affected models (as reported):** GPT-4, GPT-4o, o3, Gemini 2

## Description

Large Language Model (LLM) agents are vulnerable to role consistency collapse and privilege escalation via the "DoppelgÃ¤nger Method," a prompt-based transferable adversarial attack. By exploiting the probabilistic nature of LLM reasoning, an attacker can induce the agent to dissociate from its assigned system persona (defined by system instructions $S$, behavior constraints $B$, and background knowledge $R$) and revert to a default "assistant" or hijacked state. This vulnerability allows attackers to bypass behavioral guardrails, leading to the disclosure of proprietary system prompts, internal logic, and backend configuration details (such as API endpoints and plugin architectures). The vulnerability is quantified by the PACAT (Prompt Alignment Collapse under Adversarial Transfer) levels, ranging from role hijacking (Level 1) to sensitive internal information exposure (Level 3).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
