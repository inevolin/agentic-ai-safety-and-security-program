# Covert Grade Manipulation

**Promptfoo CVE ID:** `f90c078a`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-22T03:58:55.314Z  
**Source paper:** [GradingAttack: Attacking Large Language Models Towards Short Answer Grading Ability](https://arxiv.org/abs/2602.00979)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `injection`, `whitebox`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o, Llama 3.1 8B, Mistral 7B, Qwen 2.5 7B

## Description

Large Language Models (LLMs) utilized for Automatic Short Answer Grading (ASAG) are vulnerable to the "GradingAttack" framework, which employs fine-grained adversarial manipulation to alter grading outcomes. Attackers can leverage two distinct strategies: (1) Prompt-level attacks using role-play injection strings that instruct the model to pretend an answer is correct regardless of factual accuracy, and (2) Token-level attacks utilizing gradient-based optimization (similar to Greedy Coordinate Gradient) to append adversarial suffixes. These attacks are designed to be "camouflaged," meaning they flip specific targeted labels (e.g., changing an incorrect grade to correct) while maintaining the model's overall grading accuracy on benign samples to evade detection mechanisms based on performance degradation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
