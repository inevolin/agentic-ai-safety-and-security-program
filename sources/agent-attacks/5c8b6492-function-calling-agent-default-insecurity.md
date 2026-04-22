# Function-Calling Agent Default Insecurity

**Promptfoo CVE ID:** `5c8b6492`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T05:21:07.894Z  
**Source paper:** [Blue Teaming Function-Calling Agents](https://arxiv.org/abs/2601.09292)  
**Tags:** `model-layer`, `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `agent`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** Llama 3.2 3B

## Description

A vulnerability exists in the function-calling mechanisms of open-source Large Language Models (LLMs), specifically identified as "Renaming Tool Poisoning" (RTP). This attack vector exploits the model's visibility into both the natural language description and the actual code implementation of available tools. By embedding a two-part adversarial payloadâone in the tool description directing focus to implementation variables, and another within the tool's source code variable assignmentâattackers can decouple the model's reasoning from legitimate tool metadata. This manipulation forces the agent to disregard user intent and system prompts, resulting in the selection and execution of malicious functions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
