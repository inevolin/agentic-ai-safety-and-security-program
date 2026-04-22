# Autonomous Agent Prompt Reveal

**Promptfoo CVE ID:** `4c1502d7`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T03:12:16.288Z  
**Source paper:** [Just Ask: Curious Code Agents Reveal System Prompts in Frontier LLMs](https://arxiv.org/abs/2601.21233)  
**Tags:** `prompt-layer`, `application-layer`, `extraction`, `jailbreak`, `prompt-leaking`, `agent`, `chain`, `blackbox`, `api`, `data-security`, `safety`  
**Affected models (as reported):** GPT-4o, Claude 4.5, Llama 4, Gemini 2, Mistral 7B, DeepSeek-V3, Qwen 2.5, Phi-4

## Description

A vulnerability exists in Large Language Model (LLM) deployments and multi-agent systems where an autonomous attacker agent can systematically extract hidden system prompts through self-evolving interaction strategies. The vulnerability leverages a "JustAsk" framework which utilizes Upper Confidence Bound (UCB) exploration to dynamically select and refine attack vectors from a hierarchical taxonomy of 14 atomic skills (e.g., structural formatting, authority appeals) and 14 multi-turn orchestration patterns (e.g., semantic progression, foot-in-the-door). By treating prompt extraction as an online exploration problem, the attacker agent can bypass standard safety guardrails and "do not reveal" instructions, recovering proprietary system instructions, safety constraints, and sub-agent configurations with a high success rate (100% across 41 tested models).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
