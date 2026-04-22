# Natural Language Disguise Bypass

**Promptfoo CVE ID:** `cf1dcb4e`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-09T04:38:03.945Z  
**Source paper:** [CIBER: A Comprehensive Benchmark for Security Evaluation of Code Interpreter Agents](https://arxiv.org/abs/2602.19547)  
**Tags:** `model-layer`, `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `agent`, `blackbox`, `data-security`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4o, GPT-5

## Description

LLM-based Code Interpreter Agents, including OpenInterpreter and OpenCodeInterpreter, are vulnerable to sandbox evasion and arbitrary code execution via Natural Language Disguise and Contextual Channel Injection. Attackers can bypass Abstract Syntax Tree (AST) static analysis and explicit input guardrails by transforming malicious code logic into descriptive natural language instructions (Code Descriptions), which successfully evade syntax-layer blocks. Additionally, attackers can bypass input filters by injecting payloads into implicitly trusted data streams, specifically tool outputs (Indirect Prompt Injection) and conversation history (Memory Poisoning). This allows an attacker to execute unauthorized commands, exfiltrate sensitive data, and manipulate the underlying operating system environment.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
