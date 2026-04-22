# Distilled Jailbreak Attacks

**Promptfoo CVE ID:** `8dd14afd`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-07-14T03:59:53.520Z  
**Source paper:** [Efficient and Stealthy Jailbreak Attacks via Adversarial Prompt Distillation from LLMs to SLMs](https://arxiv.org/abs/2506.17231)  
**Tags:** `prompt-layer`, `jailbreak`, `model-layer`, `blackbox`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** BERT Base, Gemma 2 27B, Gemma 2 2B, GPT-3.5 Turbo, GPT-4, GPT-4o, Llama 2, Llama 2 13B, Llama 2 7B, Llama 3.1, Llama 3.2 1B, Vicuna 13B, Vicuna 7B

## Description

A vulnerability in Large Language Models (LLMs) allows adversarial prompt distillation from a large language model (LLM) to a smaller language model (SLM), enabling efficient and stealthy jailbreak attacks.  The attack leverages knowledge distillation techniques, reinforcement learning, and dynamic temperature control to transfer the LLM's ability to bypass safety mechanisms to a smaller, more easily deployable SLM.  This allows for lower computational cost attacks with a potentially high success rate.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
