# Semantic Mirror Jailbreak

**Promptfoo CVE ID:** `09d55afd`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-28T23:27:44.950Z  
**Source paper:** [Semantic Mirror Jailbreak: Genetic Algorithm Based Jailbreak Prompts Against Open-source LLMs](https://arxiv.org/abs/2402.14872)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Guanaco 7B, Llama 2 7B Chat, Vicuna 7B

## Description

Large Language Models (LLMs) are vulnerable to a novel semantic mirror jailbreak attack. This attack leverages a genetic algorithm to generate jailbreak prompts that are semantically similar to benign prompts, evading defenses based on semantic similarity metrics. The attack achieves this by optimizing for both semantic similarity to the original question and the ability to elicit harmful responses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
