# Self-Tuning LLM Jailbreak

**Promptfoo CVE ID:** `a2bf6a3b`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T03:04:51.509Z  
**Source paper:** [Iterative Self-Tuning LLMs for Enhanced Jailbreaking Capabilities](https://arxiv.org/abs/2410.18469)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Guanaco 7B, Llama 2 7B Chat, Llama 3-8B-instruct, Mistral 7B Instruct v0.2, Vicuna 7B v1.5

## Description

Large Language Models (LLMs) are vulnerable to a novel iterative self-tuning attack (ADV-LLM) that crafts adversarial suffixes. This attack significantly reduces the computational cost of generating effective jailbreaks compared to prior methods, achieving near 100% success rate against various open-source LLMs and high success rates (e.g., 99% against GPT-3.5, 49% against GPT-4) against closed-source models. The attack leverages iterative self-tuning to improve the LLM's ability to generate adversarial suffixes, bypassing safety mechanisms and eliciting unintended harmful responses. The attack's effectiveness stems from refined target phrases and optimized initial suffix templates tailored to individual LLMs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
