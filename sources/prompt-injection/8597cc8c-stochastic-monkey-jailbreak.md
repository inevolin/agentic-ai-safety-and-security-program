# Stochastic Monkey Jailbreak

**Promptfoo CVE ID:** `8597cc8c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-29T04:29:28.239Z  
**Source paper:** [Stochastic Monkeys at Play: Random Augmentations Cheaply Break LLM Safety Alignment](https://arxiv.org/abs/2411.02785)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o, Llama 2 13B Chat, Llama 2 7B Chat, Llama 3 8B Instruct, Llama 3.1 8B Instruct, Mistral 7B Instruct v0.2, Phi 3 Medium 4k Instruct, Phi 3 Mini 4k Instruct, Phi 3 Small 8k Instruct, Qwen 2 0.5B, Qwen 2 1.5B, Qwen 2 7B, Vicuna 13B v1.5, Vicuna 7B v1.5, Zephyr 7B Beta

## Description

Large Language Models (LLMs) employing safety alignment mechanisms are vulnerable to a bypass attack using simple, stochastic random augmentations of input prompts. The attack leverages the inherent brittleness of safety alignment to minor, randomly introduced modifications in the input, causing the LLM to generate unsafe outputs despite its safety training. Character-level augmentations prove significantly more effective than string insertions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
