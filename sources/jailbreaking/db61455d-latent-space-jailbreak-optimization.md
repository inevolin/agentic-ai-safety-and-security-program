# Latent-Space Jailbreak Optimization

**Promptfoo CVE ID:** `db61455d`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T05:27:10.295Z  
**Source paper:** [LARGO: Latent Adversarial Reflection through Gradient Optimization for Jailbreaking LLMs](https://arxiv.org/abs/2505.10838)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Llama 2 13B Chat, Llama 2 7B Chat, Phi 3 Mini, Qwen 2.5 14B

## Description

The LARGO attack exploits a vulnerability in Large Language Models (LLMs) allowing attackers to bypass safety mechanisms through the generation of "stealthy" adversarial prompts.  The attack leverages gradient optimization in the LLM's continuous latent space to craft seemingly innocuous natural language suffixes which, when appended to harmful prompts, elicit unsafe responses.  The vulnerability stems from the LLM's inability to reliably distinguish between benign and maliciously crafted latent representations that are then decoded into natural language.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
