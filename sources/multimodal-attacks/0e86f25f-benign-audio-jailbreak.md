# Benign Audio Jailbreak

**Promptfoo CVE ID:** `0e86f25f`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-12-09T03:54:39.943Z  
**Source paper:** [When good sounds go adversarial: Jailbreaking audio-language models with benign inputs](https://arxiv.org/abs/2508.03365)  
**Tags:** `model-layer`, `injection`, `jailbreak`, `multimodal`, `whitebox`, `safety`  
**Affected models (as reported):** Qwen 2.5 3B, Phi-4

## Description

Audio-Language Models (ALMs) including Qwen2.5-Omni (3B and 7B) and Phi-4-Multimodal are vulnerable to "WhisperInject," a two-stage adversarial audio attack that bypasses safety guardrails. The vulnerability allows an attacker to inject imperceptible perturbations into benign audio inputs (e.g., a query about the weather) that force the model to generate specific harmful content. The attack utilizes a novel optimization method, Reinforcement Learning with Projected Gradient Descent (RL-PGD), to first discover a "native" harmful responseâa response the model is naturally inclined to generateâthereby circumventing resistance to "foreign" adversarial prompts. In the second stage, this native payload is embedded into a benign carrier audio signal using PGD. To a human listener, the audio remains benign, but the model interprets it as a command to output restricted content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
