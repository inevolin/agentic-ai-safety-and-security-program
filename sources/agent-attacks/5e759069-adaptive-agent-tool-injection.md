# Adaptive Agent Tool Injection

**Promptfoo CVE ID:** `5e759069`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-04-11T04:36:58.212Z  
**Source paper:** [AdapTools: Adaptive Tool-based Indirect Prompt Injection Attacks on Agentic LLMs](https://arxiv.org/abs/2602.20720)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `rag`, `blackbox`, `agent`, `chain`, `api`, `data-privacy`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, GPT-5, Llama 3.1 8B, Gemini 2, Mistral Large 8B, DeepSeek-R1

## Description

Agentic LLMs integrated with external data services (e.g., Model Context Protocol, MCP) are vulnerable to Adaptive Indirect Prompt Injection (IPI) attacks. When an agent queries external servers, attackers can inject malicious payloads into the retrieved content to hijack the agent's reasoning process and force the execution of high-authority tools. Unlike traditional static prompt injections, this vulnerability dynamically exploits the agent's internal logic audit. By using Markovian transition modeling, the attacker predicts the agent's expected benign tool invocation and automatically selects a malicious tool with high semantic similarity to the user's ongoing task context. This semantic alignment prevents the reasoning LLM (Chain-of-Thought) from flagging the instruction as a "Security Risk" or "Unrelated Information," allowing the injected payload to successfully bypass internal safety filters and dynamic defense layers.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
