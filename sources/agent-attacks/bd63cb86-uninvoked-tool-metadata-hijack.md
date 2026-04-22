# Uninvoked Tool Metadata Hijack

**Promptfoo CVE ID:** `bd63cb86`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T21:31:02.244Z  
**Source paper:** [MCP-ITP: An Automated Framework for Implicit Tool Poisoning in MCP](https://arxiv.org/abs/2601.07395)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `agent`, `api`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4o, o1, Gemini 2, DeepSeek-R1, DeepSeek-V3, Qwen 2.5 32B

## Description

Large Language Model (LLM) agents implementing the Model Context Protocol (MCP) are vulnerable to Implicit Tool Poisoning (ITP). This vulnerability allows an attacker to manipulate agent behavior by embedding malicious instructions within the metadata (specifically the natural language description) of a third-party tool. Unlike explicit tool poisoning, where the agent is tricked into invoking a malicious tool, ITP exploits the agent's contextual reasoning to force the invocation of a distinct, legitimate, high-privilege target tool ($T_G$) when the user intends to use a benign tool ($T_A$). By injecting false dependency constraints (e.g., claiming a compliance check is required before a specific action), the attacker redirects the agent's execution flow without the poisoned tool itself ever being invoked, thereby evading execution-based monitoring systems.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
