# Agent System Orchestration Hijack

**Promptfoo CVE ID:** `11cbc618`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-03-01  
**Analyzed:** 2026-01-14T15:24:13.681Z  
**Source paper:** [Multi-agent systems execute arbitrary malicious code](https://arxiv.org/abs/2503.12188)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `extraction`, `jailbreak`, `vision`, `multimodal`, `agent`, `chain`, `blackbox`, `data-security`, `data-privacy`, `safety`  
**Affected models (as reported):** GPT-4o, Gemini 1.5

## Description

Multi-agent systems (MAS) utilizing Large Language Model (LLM) orchestration are vulnerable to control-flow hijacking via indirect prompt injection, leading to Remote Code Execution (RCE). This vulnerability arises when a sub-agent (e.g., a file surfer or web surfer) processes untrusted input containing adversarial metadata, such as simulated error messages or administrative instructions. The sub-agent faithfully reproduces this adversarial content in its report to the orchestrator agent. The orchestrator, lacking a mechanism to distinguish between trusted system metadata and untrusted content derived from external inputs, interprets the injected text as a legitimate system directive. Consequently, the orchestrator commands a code-execution agent to run arbitrary malicious code embedded in the input, effectively bypassing safety alignments and performing actions that the user did not explicitly request. This is a "confused deputy" attack where the sub-agent launders the malicious payload.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
