# Agent Policy Hacking

**Promptfoo CVE ID:** `0b2e097d`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-09-07T14:03:14.989Z  
**Source paper:** [Security challenges in ai agent deployment: Insights from a large scale public competition](https://arxiv.org/abs/2507.20526)  
**Tags:** `application-layer`, `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `extraction`, `rag`, `blackbox`, `agent`, `chain`, `data-privacy`, `integrity`, `safety`  
**Affected models (as reported):** Claude 3.5 Sonnet, Claude 3.7 Sonnet, Command R, Command R+, Gemini 1.5 Flash, Gemini 1.5 Pro, Gemini 2.0 Flash, Gemini 2.5 Pro, GPT-4.5, GPT-4o, Llama 3.3 70B, o3, o3-mini, o4-mini

## Description

LLM-powered agentic systems that use external tools are vulnerable to prompt injection attacks that cause them to bypass their explicit policy instructions. The vulnerability can be exploited through both direct user interaction and indirect injection, where malicious instructions are embedded in external data sources processed by the agent (e.g., documents, API responses, webpages). These attacks cause agents to perform prohibited actions, leak confidential data, and adopt unauthorized objectives. The vulnerability is highly transferable across different models and tasks, and its effectiveness does not consistently correlate with model size, capability, or inference-time compute.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
