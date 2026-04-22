# Kov: MDP-Based LLM Jailbreak

**Promptfoo CVE ID:** `dd5c4d67`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-08-01  
**Analyzed:** 2024-12-29T04:23:50.012Z  
**Source paper:** [Kov: Transferable and Naturalistic Black-Box LLM Attacks using Markov Decision Processes and Tree Search](https://arxiv.org/abs/2408.08899)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** FastChat-T5 3B, GPT-3.5 Turbo, GPT-4, Vicuna 7B

## Description

Large Language Models (LLMs) are vulnerable to naturalistic adversarial attacks crafted using Markov Decision Processes (MDPs) and Monte Carlo Tree Search (MCTS). These attacks generate natural-language prompts that elicit harmful, violent, or discriminatory responses from the LLMs, even those with built-in safety mechanisms. The attacks are transferable across different LLMs, demonstrating a generalized vulnerability.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
