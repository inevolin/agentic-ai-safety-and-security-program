# Self-Evolving Red-Team Agents

**Promptfoo CVE ID:** `ff47413a`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-08T22:17:50.982Z  
**Source paper:** [AgenticRed: Optimizing Agentic Systems for Automated Red-teaming](https://arxiv.org/abs/2601.13518)  
**Tags:** `prompt-layer`, `jailbreak`, `agent`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4o, GPT-5, Claude 3.5, Llama 2 7B, Llama 3 8B, DeepSeek-R1, Mixtral 8x7B 8X7B, Vicuna 13B

## Description

A vulnerability in the safety alignment of several major Large Language Models (LLMs) allows attackers to bypass content filters using complex, automatically generated adversarial prompts. Discovered via the AgenticRed evolutionary framework, the flaw is exploited by wrapping malicious intents in structured formats (such as strict JSON output contracts), combined with prefix injection and refusal suppression. By explicitly commanding the model to begin its response with a compliant prefix and blacklisting standard refusal tokens (e.g., "I cannot," "policy," "sorry"), the model's safety guardrails are overridden, forcing it to generate restricted or harmful content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
