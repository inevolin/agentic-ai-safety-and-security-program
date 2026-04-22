# Latent Fusion Jailbreak Attack

**Promptfoo CVE ID:** `542c8629`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-08-31T13:28:19.915Z  
**Source paper:** [Latent Fusion Jailbreak: Blending Harmful and Harmless Representations to Elicit Unsafe LLM Outputs](https://arxiv.org/abs/2508.10029)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `integrity`, `safety`  
**Affected models (as reported):** BERT, DeepSeek V3, GPT-3.5 Turbo, Guanaco 7B, Llama 2 7B Chat, Llama 3 70B, Mistral 7B Instruct, Vicuna 7B

## Description

A vulnerability, known as Latent Fusion Jailbreak (LFJ), exists in certain Large Language Models that allows an attacker with white-box access to bypass safety alignments. The attack interpolates the internal hidden state representations of a harmful query and a thematically similar benign query. By using gradient-guided optimization to identify and modify influential layers and tokens, a fused hidden state is created that causes the model to generate prohibited content in response to the harmful query, bypassing refusal mechanisms. The attack does not require modification of the input prompt, making it stealthy at the input level.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
