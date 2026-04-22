# Agent Confused Deputy Escalation

**Promptfoo CVE ID:** `d1becd4d`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T05:48:11.073Z  
**Source paper:** [Taming Various Privilege Escalation in LLM-Based Agent Systems: A Mandatory Access Control Framework](https://arxiv.org/abs/2601.11893)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `poisoning`, `extraction`, `rag`, `agent`, `chain`, `data-privacy`, `data-security`, `safety`  
**Affected models (as reported):** o1

## Description

Multi-Agent Systems (MAS) orchestrated by Large Language Models (LLMs) are vulnerable to a Confused Deputy privilege escalation attack. This vulnerability arises when an untrusted or low-privilege agent exploits the inter-agent communication channel (e.g., broadcast or peer-to-peer messaging) to manipulate a high-privilege trusted agent into executing sensitive tools on its behalf. The root cause is the lack of mandatory access control policies governing agent-to-agent interactions; trusted agents implicitly trust natural language instructions received from other agents within the system, failing to verify if the originating agent possesses the necessary permissions to request the target action. This allows malicious third-party agents or agents compromised via indirect prompt injection to bypass privilege restrictions and execute unauthorized actions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
