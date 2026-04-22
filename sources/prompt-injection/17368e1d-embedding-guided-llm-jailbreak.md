# Embedding-Guided LLM Jailbreak

**Promptfoo CVE ID:** `17368e1d`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-02-02T20:37:47.341Z  
**Source paper:** [xJailbreak: Representation Space Guided Reinforcement Learning for Interpretable LLM Jailbreaking](https://arxiv.org/abs/2501.16727)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4o, GPT-4o Mini, Llama 3 8B Instruct, Llama 3.1 8B Instruct, Qwen 2.5 7B Instruct

## Description

A vulnerability in several large language models (LLMs), including Qwen2.5-7BInstruct, Llama3.1-8B-Instruct, and GPT-4 variants, allows for black-box jailbreaking via prompt engineering techniques that exploit the proximity of benign and malicious prompt embeddings in the model's representation space.  An attacker can craft prompts leveraging reinforcement learning to manipulate the embedding, causing the model to bypass its safety mechanisms and generate harmful or undesirable outputs while maintaining semantic consistency with the original prompt intent.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
