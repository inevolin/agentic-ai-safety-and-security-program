# GPT Tool Misuse

**Promptfoo CVE ID:** `4211c4e4`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-12-01  
**Analyzed:** 2025-12-08T22:56:26.973Z  
**Source paper:** [An Empirical Study on the Security Vulnerabilities of GPTs](https://arxiv.org/abs/2512.00136)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `prompt-leaking`, `poisoning`, `jailbreak`, `rag`, `agent`, `blackbox`, `data-privacy`, `safety`  
**Affected models (as reported):** DALL-E

## Description

A vulnerability exists in OpenAI's Custom GPTs platform where the lack of effective isolation between the system context ("Expert Prompt"), external knowledge retrieval, and user input allows for unauthorized information disclosure and tool misuse. By employing specific prompt injection techniquesâincluding Hex injection, Many-shot prefix attacks, and Knowledge Poisoning (uploading malicious files)âan attacker can bypass safety guardrails. This results in the extraction of proprietary system instructions, the retrieval of raw contents from uploaded Knowledge files (stored in `/mnt/data`), and the reconstruction of backend API schemas defined in the "Actions" module. Furthermore, attackers can leverage the "Knowledge" module as an indirect injection vector (AP5), achieving a 95.4% success rate in bypassing restrictions to trigger unauthorized tool usage.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
