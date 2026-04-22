# Payment Protocol Whisper Attack

**Promptfoo CVE ID:** `5ff15b4d`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T17:55:24.511Z  
**Source paper:** [Whispers of Wealth: Red-Teaming Google's Agent Payments Protocol via Prompt Injection](https://arxiv.org/abs/2601.22569)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `rag`, `agent`, `chain`, `blackbox`, `data-privacy`, `integrity`  
**Affected models (as reported):** Gemini 2

## Description

The Google Agent Payments Protocol (AP2), specifically within the reference implementation built using the Google Agent Development Kit (ADK) and Gemini models, contains vulnerabilities allowing for both indirect and direct prompt injection. The architecture fails to sufficiently isolate the Large Language Model (LLM) context from untrusted external data sources and user inputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
