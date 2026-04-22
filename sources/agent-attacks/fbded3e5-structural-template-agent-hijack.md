# Structural Template Agent Hijack

**Promptfoo CVE ID:** `fbded3e5`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T23:20:04.654Z  
**Source paper:** [Automating Agent Hijacking via Structural Template Injection](https://arxiv.org/abs/2602.16958)  
**Tags:** `prompt-layer`, `injection`, `rag`, `blackbox`, `agent`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, DeepSeek-V3

## Description

A vulnerability in LLM-based autonomous agents allows remote attackers to hijack agent execution via Structural Template Injection (STI). The flaw arises from the lack of strict architectural isolation between internal control tokens and untrusted external data during chat-template serialization. By embedding framework-specific special tokens (e.g., `<|im_start|>`, `<|im_end|>`, `<tool_call>`) and delimiter patterns into externally retrieved data sources (such as web pages, emails, or API responses), an attacker can prematurely terminate the agent's current tool-processing frame. The LLM tokenizer flattens this injected input into a unified sequence, successfully synthesizing a fabricated conversation history. This induces role confusion, causing the agent to misinterpret the injected malicious payload as a legitimate user instruction or prior trusted tool output, entirely bypassing semantic safety alignments and system prompt constraints.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
