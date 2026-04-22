# Agent API Goal Divergence

**Promptfoo CVE ID:** `0b3d18fa`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-12-09T04:39:00.678Z  
**Source paper:** [IntenTest: Stress Testing for Intent Integrity in API-Calling LLM Agents](https://arxiv.org/abs/2506.07524)  
**Tags:** `application-layer`, `prompt-layer`, `hallucination`, `agent`, `api`, `blackbox`, `integrity`, `safety`, `reliability`, `data-privacy`  
**Affected models (as reported):** GPT-4o, Claude 3.5, o3, Llama 3.1 8B, Llama 3.3 70B, Gemini 2, DeepSeek-R1 70B, Qwen 2.5 30B, Phi-4

## Description

Large Language Model (LLM) agents capable of invoking external APIs are vulnerable to intent integrity violations. When an agent receives natural language instructions that are ambiguous, underspecified, or contain values not supported by the underlying API schema, the agent frequently fails to preserve user intent. Instead of rejecting the request or asking for clarification, the model may hallucinate parameter values, map unsupported requests to unsafe defaults, or execute actions on incorrect objects. This vulnerability occurs under benign usage conditions and allows for unauthorized actions, unintended data modification, or physical security bypasses depending on the connected tools.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
