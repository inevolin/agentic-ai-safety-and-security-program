# Semantic Tool Poisoning

**Promptfoo CVE ID:** `274c176d`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-12-01  
**Analyzed:** 2025-12-30T19:45:21.258Z  
**Source paper:** [Securing the Model Context Protocol: Defending LLMs Against Tool Poisoning and Adversarial Attacks](https://arxiv.org/abs/2512.06556)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `agent`, `blackbox`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4

## Description

Large Language Model (LLM) agents utilizing the Model Context Protocol (MCP) are vulnerable to semantic injection attacks via adversarial tool descriptors. The vulnerability arises because MCP implementations inject natural language tool metadata (descriptions, schemas) directly into the model's reasoning context without semantic sanitization or cryptographic binding. This allows unprivileged adversaries to register tools containing hidden imperative instructions within the descriptor text. The LLM interprets these metadata fields as high-priority reasoning directives rather than passive labels, leading to "Tool Poisoning" (forcing unintended execution paths), "Shadowing" (biasing the execution of other trusted tools), or "Rug Pulls" (altering behavior via post-approval descriptor mutation).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
