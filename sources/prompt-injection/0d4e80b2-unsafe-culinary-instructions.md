# Unsafe Culinary Instructions

**Promptfoo CVE ID:** `0d4e80b2`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-04-01  
**Analyzed:** 2026-04-10T21:36:47.950Z  
**Source paper:** [Cooking Up Risks: Benchmarking and Reducing Food Safety Risks in Large Language Models](https://arxiv.org/abs/2604.01444)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `whitebox`, `safety`  
**Affected models (as reported):** GPT-4o, Claude 3.7, Llama 3.1 8B, Llama 3.3 70B, Qwen 2.5 7B

## Description

State-of-the-art Large Language Models (LLMs) and safety guardrails lack domain-specific safety alignment for food science, making them vulnerable to generating actionable, hazardous food safety instructions. Attackers can exploit this alignment sparsity using canonical jailbreak techniques (such as AutoDAN and Persuasive Adversarial Prompting) or direct adversarial prompting to bypass generic safety filters. This allows malicious actors to elicit harmful guidance that violates fundamental FDA regulations. Evaluations show that models are exceptionally susceptible to generating unsafe advice regarding pest control (64.81% average Attack Success Rate), storage, hygiene, and temperature control. Furthermore, general-purpose LLM guardrails systematically overlook these domain-specific risks, exhibiting false negative rates up to 59.71% when processing food-related threats.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
