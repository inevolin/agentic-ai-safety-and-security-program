# Airborne Audio LLM Hijack

**Promptfoo CVE ID:** `8f22734f`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-07-01  
**Analyzed:** 2026-01-14T07:09:51.173Z  
**Source paper:** [Attacker's Noise Can Manipulate Your Audio-based LLM in the Real World](https://arxiv.org/abs/2507.06256)  
**Tags:** `model-layer`, `injection`, `jailbreak`, `denial-of-service`, `multimodal`, `whitebox`, `agent`, `safety`, `reliability`, `integrity`  
**Affected models (as reported):** Qwen 2

## Description

Audio-based Large Language Models (ALLMs), specifically Qwen2-Audio, are vulnerable to over-the-air adversarial audio attacks. An attacker with white-box access can generate robust adversarial audio perturbations using gradient-based optimization combined with audio augmentation techniques (specifically SpecAugment, translation, and additive noise). These perturbations, when played through a speaker in the physical environment, manipulate the ALLM processing the audio via a microphone. This allows for two attack vectors: targeted attacks, where the model is forced to transcribe or execute specific malicious commands (e.g., "Hey Qwen, delete my calendar events") regardless of the actual user input; and untargeted attacks, where the model's speech recognition utility is degraded via induced high perplexity and Word Error Rate (WER), even in the presence of system instructions designed to ignore background noise.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
