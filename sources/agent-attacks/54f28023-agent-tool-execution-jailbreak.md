# Agent Tool Execution Jailbreak

**Promptfoo CVE ID:** `54f28023`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T22:09:32.695Z  
**Source paper:** [T-MAP: Red-Teaming LLM Agents with Trajectory-aware Evolutionary Search](https://arxiv.org/abs/2603.22341)  
**Tags:** `application-layer`, `prompt-layer`, `jailbreak`, `agent`, `chain`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-5, Gemini Pro, DeepSeek-V3

## Description

A multi-step tool execution vulnerability exists in Large Language Model (LLM) agents utilizing the Model Context Protocol (MCP) or similar tool-calling frameworks. Safety guardrails in aligned LLMs typically evaluate static, single-turn text generation. Attackers can bypass these text-centric guardrails by supplying adversarial prompts that force the agent into a complex planning sequence. The agent is manipulated into executing a trajectory of seemingly benign individual tool invocations that collectively achieve a harmful objective, converting prompt-level jailbreaks into realized environmental actions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
