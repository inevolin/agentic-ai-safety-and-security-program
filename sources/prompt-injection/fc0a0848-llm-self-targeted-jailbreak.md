# LLM Self-Targeted Jailbreak

**Promptfoo CVE ID:** `fc0a0848`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-12-08T23:37:29.783Z  
**Source paper:** [Dynamic Target Attack](https://arxiv.org/abs/2510.02422)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `whitebox`, `blackbox`, `safety`  
**Affected models (as reported):** Llama 3 8B, Llama 3.2 1B, Mistral 7B, Qwen 2.5 7B, Gemma 7B, Vicuna 7B

## Description

A security vulnerability exists in the safety alignment mechanisms of Large Language Models (LLMs), specifically susceptible to the "Dynamic Target Attack" (DTA). Unlike traditional gradient-based jailbreaks (e.g., GCG) that optimize adversarial suffixes toward a fixed, low-probability static target (e.g., "Sure, here is..."), DTA exploits the model's own output distribution. The attack iteratively samples candidate responses from the target model using relaxed decoding parameters (high entropy), selects the most harmful response as a temporary dynamic target, and optimizes the adversarial suffix to maximize the likelihood of this model-native target. By anchoring the optimization to high-density regions of the model's conditional distribution, DTA significantly reduces the discrepancy between the target and the model's output space, allowing for the rapid generation of effective adversarial prompts that bypass RLHF and other safety guardrails.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
