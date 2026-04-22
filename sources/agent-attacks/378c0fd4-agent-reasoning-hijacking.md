# Agent Reasoning Hijacking

**Promptfoo CVE ID:** `378c0fd4`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-03-19T19:24:20.650Z  
**Source paper:** [UDora: A Unified Red Teaming Framework against LLM Agents by Dynamically Hijacking Their Own Reasoning](https://arxiv.org/abs/2503.01908)  
**Tags:** `agent`, `jailbreak`, `injection`, `application-layer`, `blackbox`, `data-privacy`, `data-security`  
**Affected models (as reported):** Claude 3, GPT-3.5 Turbo, GPT-4, GPT-4o, Llama 3.1 8B, Mistral 7B

## Description

A vulnerability exists in Large Language Model (LLM) agents that allows attackers to manipulate the agent's reasoning process through the insertion of strategically placed adversarial strings.  This allows attackers to induce the agent to perform unintended malicious actions or invoke specific malicious tools, even when the initial prompt or instruction is benign. The attack exploits the agent's reliance on chain-of-thought reasoning and dynamically optimizes the adversarial string to maximize the likelihood of the agent incorporating malicious actions into its reasoning path.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
