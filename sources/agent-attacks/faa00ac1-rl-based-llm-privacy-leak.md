# RL-Based LLM Privacy Leak

**Promptfoo CVE ID:** `faa00ac1`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-12-01  
**Analyzed:** 2024-12-28T18:28:31.336Z  
**Source paper:** [PrivAgent: Agentic-based Red-teaming for LLM Privacy Leakage](https://arxiv.org/abs/2412.05734)  
**Tags:** `prompt-layer`, `extraction`, `blackbox`, `data-privacy`, `data-security`, `agent`  
**Affected models (as reported):** 

## Description

Large Language Models (LLMs) are vulnerable to a novel agentic-based red-teaming attack, PrivAgent, which uses reinforcement learning to generate adversarial prompts. These prompts can extract sensitive information, including system prompts and portions of training data, from target LLMs even with existing guardrail defenses. The attack leverages a custom reward function based on a normalized sliding-window word edit similarity metric to guide the learning process, enabling it to overcome the limitations of previous fuzzing and genetic approaches.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
