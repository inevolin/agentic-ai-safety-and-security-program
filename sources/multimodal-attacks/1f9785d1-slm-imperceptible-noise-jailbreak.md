# SLM Imperceptible Noise Jailbreak

**Promptfoo CVE ID:** `1f9785d1`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-12-08T22:32:04.349Z  
**Source paper:** [SPIRIT: Patching Speech Language Models against Jailbreak Attacks](https://arxiv.org/abs/2505.13541)  
**Tags:** `model-layer`, `jailbreak`, `multimodal`, `whitebox`, `safety`  
**Affected models (as reported):** Qwen 2 7B

## Description

An adversarial audio perturbation vulnerability exists in open-source Speech Language Models (SLMs), specifically Qwen2-Audio-7B-Instruct and LLaMa-Omni. The vulnerability allows remote attackers to bypass safety alignment mechanisms and jailbreak the model by injecting imperceptible adversarial noise into audio prompts. By utilizing white-box access and Projected Gradient Descent (PGD) optimization, an attacker can manipulate the continuous speech signal to trigger harmful responses (e.g., bomb-making instructions, toxic content) that the underlying text-based Large Language Model (LLM) would typically refuse. The vulnerability exploits the high sensitivity of specific neurons in the audio encoder (Whisper) and language model layers to learned noise patterns.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
