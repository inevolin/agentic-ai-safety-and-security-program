# Trojan Prompt Chains in Education

**Promptfoo CVE ID:** `760b7150`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-07-28T19:31:06.220Z  
**Source paper:** [Mitigating Trojanized Prompt Chains in Educational LLM Use Cases: Experimental Findings and Detection Tool Design](https://arxiv.org/abs/2507.14207)  
**Tags:** `prompt-layer`, `application-layer`, `injection`, `jailbreak`, `chain`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** BERT, GPT-3.5 Turbo, GPT-4

## Description

A vulnerability exists in Large Language Models, including GPT-3.5 and GPT-4, where safety guardrails can be bypassed using Trojanized prompt chains within a simulated educational context. An attacker can establish a benign, pedagogical persona (e.g., a curious student) over a multi-turn dialogue. This initial context is then exploited to escalate the conversation toward requests for harmful or restricted information, which the model provides because the session's context is perceived as safe. The vulnerability stems from the moderation system's failure to detect semantic escalation and topic drift within an established conversational context. Two primary methods were identified: Simulated Child Confusion (SCC), which uses a naive persona to ask for dangerous information under a moral frame (e.g., "what not to do"), and Prompt Chain Escalation via Literary Devices (PCELD), which frames harmful concepts as an academic exercise in satire or metaphor.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
