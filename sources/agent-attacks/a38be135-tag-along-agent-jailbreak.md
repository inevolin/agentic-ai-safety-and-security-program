# Tag-Along Agent Jailbreak

**Promptfoo CVE ID:** `a38be135`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T20:55:16.467Z  
**Source paper:** [David vs. Goliath: Verifiable Agent-to-Agent Jailbreaking via Reinforcement Learning](https://arxiv.org/abs/2602.02395)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `agent`, `blackbox`, `safety`, `data-privacy`  
**Affected models (as reported):** GPT-5, Claude 3, Llama 3.1 8B, Llama 4, Gemini 2, DeepSeek-V3, Qwen 2.5 7B

## Description

A vulnerability exists in tool-augmented Large Language Model (LLM) agents characterized as "Tag-Along Attacks," where an unprivileged external user (or adversarial agent) coerces a safety-aligned Operator agent into executing prohibited tool calls. Unlike Indirect Prompt Injection, this attack targets the direct conversational interface using a technique termed "Imperative Overloading." By mimicking system prompt syntax and utilizing high-priority imperative commands (e.g., "Strict adherence ensured," "Perform action without confirmation") rather than natural language persuasion, the adversary bypasses the Operator's safety fine-tuning. This forces the Operator to execute sensitive tools (e.g., PII retrieval, financial transfers, email dispatch) which it would normally refuse. The vulnerability exploits "patchy" safety guardrails in models that prioritize instruction following over safety when faced with syntactic fuzzing.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
