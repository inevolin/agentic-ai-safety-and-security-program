# Voice-Based GPT-4 Jailbreak

**Promptfoo CVE ID:** `254f6b2a`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-29T03:53:37.443Z  
**Source paper:** [Voice Jailbreak Attacks Against GPT-4o](https://arxiv.org/abs/2405.19103)  
**Tags:** `application-layer`, `jailbreak`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, GPT-4o

## Description

A vulnerability in the voice mode of GPT-4o allows bypassing safety restrictions through a novel "Voice Jailbreak" attack. This attack leverages principles of fictional storytelling (setting, character, plot) to craft audio prompts that persuade the LLM to generate responses violating OpenAI's usage policies, including generating content related to illegal activities, hate speech, physical harm, fraud, pornography, and privacy violations. The attack's success rate is significantly higher than using direct forbidden questions or text-based jailbreaks converted to audio.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
