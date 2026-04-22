# MCP Server-Side Injection

**Promptfoo CVE ID:** `83f58e08`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T04:59:19.432Z  
**Source paper:** [Breaking the Protocol: Security Analysis of the Model Context Protocol Specification and Prompt Injection Vulnerabilities in Tool-Integrated LLM Agents](https://arxiv.org/abs/2601.17549)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `extraction`, `poisoning`, `agent`, `chain`, `api`, `blackbox`, `data-security`, `safety`  
**Affected models (as reported):** GPT-4o, Claude 3.5, Llama 3.1 70B

## Description

The Model Context Protocol (MCP) specification v1.0 contains fundamental architectural vulnerabilities enabling server-side prompt injection and privilege escalation. The protocol relies on bidirectional sampling (`sampling/createMessage`) without cryptographic origin authentication or UI distinction, allowing connected servers to inject content that the LLM backend interprets as legitimate user input. Additionally, the protocol lacks isolation boundaries between concurrent server connections, allowing a single compromised server to manipulate the LLM into invoking tools on unrelated, trusted servers without user consent. These architectural choices amplify attack success rates by 23â41% compared to non-MCP integrations.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
