# Browser Agent Jailbreak

**Promptfoo CVE ID:** `74f49300`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T04:00:05.254Z  
**Source paper:** [Refusal-Trained LLMs Are Easily Jailbroken As Browser Agents](https://arxiv.org/abs/2410.13886)  
**Tags:** `agent`, `jailbreak`, `application-layer`, `blackbox`, `safety`  
**Affected models (as reported):** Claude 3 Opus, Claude 3.5 Sonnet, Gemini 1.5, GPT-4 Turbo, GPT-4o, Llama 3.1

## Description

Refusal-trained Large Language Models (LLMs) show decreased safety when deployed as browser agents compared to their performance in chatbot settings. Attack methods effective at jailbreaking LLMs in chat contexts also successfully bypass safety mechanisms in browser agents, leading to the execution of harmful behaviors. This vulnerability stems from a lack of generalization of safety training to agentic, real-world interaction scenarios and the increased context available to the agent (browser state, action history).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
