# Audio Narrative Jailbreak

**Promptfoo CVE ID:** `967e6ce8`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T05:27:30.909Z  
**Source paper:** [Now You Hear Me: Audio Narrative Attacks Against Large Audio-Language Models](https://arxiv.org/abs/2601.23255)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Gemini 2, Qwen 2.5 7B

## Description

End-to-end Large Audio-Language Models (LALMs) are vulnerable to paralinguistic jailbreak attacks where the acoustic delivery style of an inputâspecifically tone, prosody, and emotional framingâoverrides safety alignment mechanisms. Unlike adversarial perturbations that inject noise, this vulnerability exploits the model's personification bias by utilizing standard Text-to-Speech (TTS) synthesis to render prohibited instructions in psychologically manipulative vocal styles (e.g., authoritative, therapeutic, or urgent). Because current safety frameworks are primarily calibrated for textual semantics or neutral speech, the embedding of paralinguistic signals (such as low pitch for authority or rapid tempo for urgency) shifts the modelâs internal representation of speaker intent, causing it to comply with malicious requests (e.g., malware creation, hate speech) that are otherwise refused in text-only or neutral-audio contexts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
