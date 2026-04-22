# GPT-4o Multimodal Jailbreak

**Promptfoo CVE ID:** `c70e8ccc`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-06-01  
**Analyzed:** 2025-03-04T19:29:15.468Z  
**Source paper:** [Unveiling the safety of gpt-4o: An empirical study using jailbreak attacks](https://arxiv.org/abs/2406.06302)  
**Tags:** `model-layer`, `jailbreak`, `blackbox`, `api`, `safety`  
**Affected models (as reported):** GPT-4o, GPT-4V, Llama 2 7B Chat

## Description

GPT-4o exhibits vulnerability to jailbreak attacks via audio prompts, despite enhanced safety against text-based attacks.  Successful jailbreaks can be achieved by converting text prompts, including those optimized for adversarial attacks against other LLMs (demonstrated using GCG, AutoDAN, PAP, and BAP methods), into audio using text-to-speech (TTS) synthesis. This circumvention allows elicitation of unsafe responses from GPT-4o that would otherwise be prevented by its safety mechanisms.  The success rate of these audio-based attacks is comparable to text-based attacks, indicating a significant security weakness in the audio processing pipeline.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
