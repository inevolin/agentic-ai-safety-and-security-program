# Code Agent Executable Jailbreaks

**Promptfoo CVE ID:** `33af2f7c`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-10-13T13:06:23.349Z  
**Source paper:** [Breaking the Code: Security Assessment of AI Code Agents Through Systematic Jailbreaking Attacks](https://arxiv.org/abs/2510.01359)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `agent`, `chain`, `safety`, `integrity`, `data-security`  
**Affected models (as reported):** Claude 3.7 Sonnet, DeepSeek R1, Dolphin Mistral 24B Venice, GPT-4.1, Llama 3 8B, Llama 3.1 70B, Mistral Large 2.1, o1, Qwen 3 235B

## Description

AI code agents are vulnerable to jailbreaking attacks that cause them to generate or complete malicious code. The vulnerability is significantly amplified when a base Large Language Model (LLM) is integrated into an agentic framework that uses multi-step planning and tool-use. Initial safety refusals by the LLM are frequently overturned during subsequent planning or self-correction steps within the agent's reasoning loop.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
