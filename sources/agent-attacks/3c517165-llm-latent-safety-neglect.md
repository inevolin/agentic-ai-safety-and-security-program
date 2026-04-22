# LLM Latent Safety Neglect

**Promptfoo CVE ID:** `3c517165`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-04-11T04:23:03.364Z  
**Source paper:** [Evaluating Implicit Regulatory Compliance in LLM Tool Invocation via Logic-Guided Synthesis](https://arxiv.org/abs/2601.08196)  
**Tags:** `model-layer`, `application-layer`, `agent`, `api`, `safety`  
**Affected models (as reported):** GPT-5, Llama 3.1 8B, Gemini Pro, DeepSeek-R1 14B

## Description

LLM-based autonomous agents are vulnerable to implicit regulatory compliance failures during tool invocation. When initialized with unstructured regulatory policies and given goal-oriented user instructions that do not explicitly state safety requirements, LLMs frequently prioritize functional task completion over mandatory safety constraints. This leads to an "Unsafe Success" execution state, where the agent successfully achieves the user's business goal but silently bypasses critical temporal safety operations (such as mandatory verification or authorization tool calls) required by the policy context.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
