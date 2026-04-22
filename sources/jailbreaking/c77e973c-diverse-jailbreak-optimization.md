# Diverse Jailbreak Optimization

**Promptfoo CVE ID:** `c77e973c`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-03-01  
**Analyzed:** 2025-03-04T19:31:15.652Z  
**Source paper:** [Enhancing Jailbreak Attacks with Diversity Guidance](https://arxiv.org/abs/2403.00292)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** Alpaca 7B, Gemma 7B IT, GPT-3.5 Turbo, Llama 2 13B Chat, Llama 2 70B Chat, Llama 2 7B Chat, Llama 3 8B, Llama 3 8B Instruct, Mistral 7B, Vicuna 13B, Vicuna 33B, Vicuna 7B, Wizard Vicuna 13B

## Description

Large Language Models (LLMs) are vulnerable to jailbreak attacks that utilize an optimized algorithm to bypass safety mechanisms.  The vulnerability stems from the redundancy in existing trigger-searching algorithms, resulting in inefficient exploration of the prompt space and allowing attackers to elicit harmful responses.  The proposed DPP-based Stochastic Trigger Searching (DSTS) algorithm demonstrates a statistically significant improvement over existing optimization-based attacks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
