# Faster GCG LLM Jailbreak

**Promptfoo CVE ID:** `a907b2a2`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T04:10:09.922Z  
**Source paper:** [Faster-GCG: Efficient discrete optimization jailbreak attacks against aligned large language models](https://arxiv.org/abs/2410.15362)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4 Turbo, Llama 2 7B Chat, Vicuna 13B v1.5

## Description

Faster-GCG is an optimized jailbreak attack that exploits vulnerabilities in aligned Large Language Models (LLMs) by efficiently finding adversarial prompt suffixes. The attack leverages gradient information to iteratively refine a harmful prompt, overcoming limitations of prior methods like GCG by incorporating a regularization term to improve gradient approximation, using deterministic greedy sampling, and preventing self-looping during optimization. This allows for significantly higher attack success rates with reduced computational cost.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
