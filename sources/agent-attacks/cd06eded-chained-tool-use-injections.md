# Chained Tool-Use Injections

**Promptfoo CVE ID:** `cd06eded`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-10-13T13:02:08.167Z  
**Source paper:** [STAC: When Innocent Tools Form Dangerous Chains to Jailbreak LLM Agents](https://arxiv.org/abs/2509.25624)  
**Tags:** `application-layer`, `prompt-layer`, `jailbreak`, `agent`, `chain`, `blackbox`, `integrity`, `safety`, `data-security`  
**Affected models (as reported):** GPT-4.1, GPT-4.1 Mini, Llama 3.1 405B Instruct, Llama 3.3 70B Instruct, Mistral Large, Mistral Small, Qwen 3 32B

## Description

A vulnerability exists in tool-enabled Large Language Model (LLM) agents, termed Sequential Tool Attack Chaining (STAC), where a sequence of individually benign tool calls can be orchestrated to achieve a malicious outcome. An attacker can guide an agent through a multi-turn interaction, with each step appearing harmless in isolation. Safety mechanisms that evaluate individual prompts or actions fail to detect the threat because the malicious intent is distributed across the sequence and only becomes apparent from the cumulative effect of the entire tool chain, typically at the final execution step. This allows the bypass of safety guardrails to execute harmful actions in the agent's environment.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
