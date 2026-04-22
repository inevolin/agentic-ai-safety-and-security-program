# Agent Tool Metadata Lure

**Promptfoo CVE ID:** `8303194d`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-08-01  
**Analyzed:** 2026-02-22T01:04:27.243Z  
**Source paper:** [Attractive Metadata Attack: Inducing LLM Agents to Invoke Malicious Tools](https://arxiv.org/abs/2508.02110)  
**Tags:** `application-layer`, `prompt-layer`, `jailbreak`, `prompt-leaking`, `agent`, `blackbox`, `api`, `data-privacy`, `safety`, `integrity`  
**Affected models (as reported):** GPT-4o, Llama 3.3 70B, Qwen 2.5 32B, Gemma 27B

## Description

A vulnerability exists in the tool selection mechanisms of Large Language Model (LLM) agents, identified as the "Attractive Metadata Attack" (AMA). This flaw allows an adversary to manipulate the metadata (names, descriptions, and parameter schemas) of malicious external tools to statistically maximize the likelihood of their selection by the agent, without requiring prompt injection or access to model internals. The vulnerability exploits the agentâs semantic scoring function used to map user queries to tools. By utilizing a black-box, state-action-value optimization framework based on in-context learning, an attacker can iteratively refine tool metadata to become "deceptively attractive" to the LLM. This results in the agent preferentially invoking malicious tools over benign alternatives during standard task execution, bypassing prompt-level sanitization, instruction filtering, and structured protocols like the Model Context Protocol (MCP).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
