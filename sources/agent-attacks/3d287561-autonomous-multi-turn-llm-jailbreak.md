# Autonomous Multi-Turn LLM Jailbreak

**Promptfoo CVE ID:** `3d287561`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-03-19T19:25:40.937Z  
**Source paper:** [Siege: Autonomous Multi-Turn Jailbreaking of Large Language Models with Tree Search](https://arxiv.org/abs/2503.10619)  
**Tags:** `jailbreak`, `prompt-layer`, `application-layer`, `blackbox`, `agent`, `safety`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Llama 3.1 70B

## Description

Large Language Models (LLMs) are vulnerable to multi-turn adversarial attacks that exploit incremental policy erosion.  The attacker uses a breadth-first search strategy to generate multiple prompts at each turn, leveraging partial compliance from previous responses to gradually escalate the conversation towards eliciting disallowed outputs.  Minor concessions accumulate, ultimately leading to complete circumvention of safety measures.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
