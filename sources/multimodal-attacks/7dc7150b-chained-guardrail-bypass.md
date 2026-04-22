# Chained Guardrail Bypass

**Promptfoo CVE ID:** `7dc7150b`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-12-30T19:12:32.198Z  
**Source paper:** [Doomarena: A framework for testing ai agents against evolving security threats](https://arxiv.org/abs/2504.14064)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `extraction`, `jailbreak`, `agent`, `vision`, `multimodal`, `rag`, `blackbox`, `data-privacy`, `safety`  
**Affected models (as reported):** GPT-4o, Claude 3.5, Claude 3.7

## Description

Large Language Model (LLM) agents operating in stateful environments (web browsers, operating systems, and tool-use contexts) are vulnerable to indirect prompt injection and multi-modal adversarial attacks. These vulnerabilities arise when agents process untrusted environmental observationsâsuch as web accessibility trees, screen screenshots, or database query resultsâthat contain concealed malicious instructions. Specifically, attackers can embed prompt injections into HTML accessibility attributes (`alt`, `aria-label`), inject malicious entries into product catalogs/databases, or overlay visual pop-ups on desktop screenshots. These inputs bypass standard safety guardrails (including LlamaGuard), causing the agent to execute unauthorized actions, leak Personally Identifiable Information (PII), or deviate from user-assigned tasks. The vulnerability stems from the agent's inability to distinguish between system instructions and untrusted state observations.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
