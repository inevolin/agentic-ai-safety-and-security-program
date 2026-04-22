# Embedding-Translated Adversarial Suffixes

**Promptfoo CVE ID:** `c6628269`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-29T04:35:22.880Z  
**Source paper:** [From Noise to Clarity: Unraveling the Adversarial Suffix of Large Language Model Attacks via Translation of Text Embeddings](https://arxiv.org/abs/2402.16006)  
**Tags:** `model-layer`, `jailbreak`, `injection`, `blackbox`, `whitebox`, `safety`, `integrity`, `data-security`  
**Affected models (as reported):** Alpaca 7B, ChatGLM3 6B, ChatGPT, Gemini, GPT-3.5 Turbo, Llama 2 13B Chat, Llama 2 7B Chat, Mistral 7B, Vicuna 13B v1.5, Vicuna 7B v1.5

## Description

A novel adversarial suffix embedding translation framework (ASETF) enables efficient and highly successful attacks against large language models (LLMs). ASETF optimizes continuous adversarial suffix embeddings, then translates these embeddings into coherent, human-readable text. This bypasses existing defenses which rely on detecting unusual or nonsensical suffixes. The attack achieves a high success rate across multiple LLMs, including both open-source and black-box models.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
