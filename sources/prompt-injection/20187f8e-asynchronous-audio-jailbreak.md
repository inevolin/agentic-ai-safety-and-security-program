# Asynchronous Audio Jailbreak

**Promptfoo CVE ID:** `20187f8e`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T05:23:11.386Z  
**Source paper:** [AudioJailbreak: Jailbreak Attacks against End-to-End Large Audio-Language Models](https://arxiv.org/abs/2505.14103)  
**Tags:** `jailbreak`, `application-layer`, `prompt-layer`, `side-channel`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** BLSP, FunAudioLLM, GPT-4o, Ichigo, Llama Omni, LLaSM, Mini-Omni, Mini-Omni 2, Qwen 2 Audio, Qwen Audio, SALMONN, SpeechGPT

## Description

End-to-end Large Audio-Language Models (LALMs) are vulnerable to AudioJailbreak, a novel attack that appends adversarial audio perturbations ("jailbreak audios") to user prompts.  These perturbations, even when applied asynchronously and without alignment to the user's speech, can manipulate the LALM's response to generate adversary-desired outputs that bypass safety mechanisms.  The attack achieves universality by employing a single perturbation effective across different prompts and robustness to over-the-air transmission by incorporating reverberation effects during perturbation generation.  Even with stealth strategies employed to mask malicious intent, the attack remains highly effective.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
