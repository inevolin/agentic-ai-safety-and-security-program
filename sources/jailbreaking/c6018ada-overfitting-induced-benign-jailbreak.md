# Overfitting-induced Benign Jailbreak

**Promptfoo CVE ID:** `c6018ada`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-10-13T13:07:42.715Z  
**Source paper:** [Attack via Overfitting: 10-shot Benign Fine-tuning to Jailbreak LLMs](https://arxiv.org/abs/2510.02833)  
**Tags:** `model-layer`, `jailbreak`, `fine-tuning`, `blackbox`, `api`, `safety`, `integrity`  
**Affected models (as reported):** DeepSeek R1 Distill Llama 8B, GPT-3.5 Turbo, GPT-4.1, GPT-4.1 Mini, GPT-4o, GPT-4o Mini, Llama 2 7B Chat, Llama 3 8B Instruct, Qwen 2.5 7B Instruct, Qwen 3 8B

## Description

A vulnerability exists in Large Language Models (LLMs) that support fine-tuning, allowing an attacker to bypass safety alignments using a small, benign dataset. The attack, "Attack via Overfitting," is a two-stage process. In Stage 1, the model is fine-tuned on a small set of benign questions (e.g., 10) paired with identical, repetitive refusal answers. This induces an overfitted state where the model learns to refuse all prompts, creating a sharp minimum in the loss landscape and making it highly sensitive to parameter changes. In Stage 2, the overfitted model is further fine-tuned on the same benign questions, but with their standard, helpful answers. This second fine-tuning step causes catastrophic forgetting of the general refusal behavior, leading to a collapse of safety alignment and causing the model to comply with harmful and malicious instructions. The attack is highly stealthy as the fine-tuning data appears benign to content moderation systems.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
