# LAM Speech Style Jailbreak

**Promptfoo CVE ID:** `7fc0682b`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-08T22:37:48.698Z  
**Source paper:** [StyleBreak: Revealing Alignment Vulnerabilities in Large Audio-Language Models via Style-Aware Audio Jailbreak](https://arxiv.org/abs/2511.10692)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Llama 3.1 8B, Qwen 2 7B, Qwen 2.5 7B

## Description

Large Audio-Language Models (LAMs) are vulnerable to style-aware audio jailbreak attacks that bypass safety alignment mechanisms. This vulnerability exists because current safety alignment strategies often overlook the expressive variations of human speech. Attackers can exploit this by manipulating three specific attributes of the audio input: linguistic (rewriting text with emotional semantics), paralinguistic (modulating emotional acoustic tone), and extralinguistic (altering speaker age and gender). Research indicates that LAMs are significantly more likely to comply with harmful queries when they are spoken in lower-pitched voices (e.g., male, elderly) or specific emotional tones (e.g., surprise, happiness), as opposed to neutral, child, or female voices. By utilizing a controllable Text-to-Speech (TTS) system to synthesize these specific voice profiles, an attacker can induce the model to generate objectionable content that would be refused if presented as text or neutral speech.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
