# MCP Description-Code Inconsistency

**Promptfoo CVE ID:** `5b809f07`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-22T00:32:48.593Z  
**Source paper:** [Don't believe everything you read: Understanding and Measuring MCP Behavior under Misleading Tool Descriptions](https://arxiv.org/abs/2602.03580)  
**Tags:** `application-layer`, `prompt-layer`, `denial-of-service`, `agent`, `api`, `data-privacy`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** 

## Description

The Model Context Protocol (MCP) architecture lacks a semantic verification mechanism to enforce consistency between a tool's documented behavior (exposed to the Large Language Model via JSON schemas) and its actual executable logic. This design gap allows MCP Servers to present benign, read-only, or limited-scope descriptions to the LLM agent while implementing undocumented, privileged, or state-mutating functionality in the underlying code. An attacker can exploit this descriptionâcode inconsistency to trick LLM agents into executing high-risk operationsâsuch as system process termination, financial transactions, or data modificationâthat are invisible to the model's reasoning process and the user's authorization context.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
