# Inaudible Ultrasonic LLM Jailbreak

**Promptfoo CVE ID:** `aafbf2ef`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:12:25.897Z  
**Source paper:** [Sirens' Whisper: Inaudible Near-Ultrasonic Jailbreaks of Speech-Driven LLMs](https://arxiv.org/abs/2603.13847)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** Llama 3.1 8B, Mistral 7B, Qwen 2.5 7B, Gemma 4B

## Description

Speech-driven Large Language Models (LLMs) and end-to-end Large Audio-Language Models (LALMs) are vulnerable to inaudible near-ultrasonic prompt injections, a framework dubbed Sirens' Whisper (SWhisper). By exploiting the non-linear response of commodity microphones, attackers can encode structured, phonetically optimized adversarial prompts into the 17â22 kHz near-ultrasonic band. Using regularized channel-inversion pre-compensation, the attacker shapes the waveform to account for microphone and environmental transfer functions. When played through a commodity speaker, the inaudible signal covertly demodulates into high-fidelity baseband audio inside the victim's microphone, bypassing human perception while successfully delivering duration-compliant jailbreaks or malicious commands directly to the LLM.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
