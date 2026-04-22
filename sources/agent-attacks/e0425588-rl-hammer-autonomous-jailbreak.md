# RL-Hammer Autonomous Jailbreak

**Promptfoo CVE ID:** `e0425588`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-12-09T01:36:36.834Z  
**Source paper:** [Rl is a hammer and llms are nails: A simple reinforcement learning recipe for strong prompt injection](https://arxiv.org/abs/2510.04885)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `agent`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, GPT-5, Claude 3.5, Claude 4, Llama 3.1 8B, Llama 3.2 3B, Llama 3.3 70B, Gemini 2

## Description

A vulnerability exists in Large Language Model (LLM) agentic systems where automated reinforcement learning (RL) techniques can bypass advanced prompt injection defenses, including Instruction Hierarchy and SecAlign. The specific attack methodology, dubbed "RL-Hammer," utilizes Group Relative Policy Optimization (GRPO) to train an attacker model from scratch without warm-up data. The vulnerability exploits the reward sparsity in robust models by employing a "bag of tricks": removing KL regularization (allowing the attacker policy to diverge significantly from the base model), enforcing restricted output formatting to prevent gibberish, and jointly training on both weak (easy) and robust target models with soft rewards. This allows the attacker to learn universal injection strategies that transfer to black-box commercial models, achieving high attack success rates (e.g., 98% against GPT-4o) while evading perplexity-based filters and dedicated prompt injection detectors.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
