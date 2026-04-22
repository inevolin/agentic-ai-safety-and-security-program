# VLM Text Overrides Image

**Promptfoo CVE ID:** `1deb1200`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T17:29:56.231Z  
**Source paper:** [Do Images Speak Louder than Words? Investigating the Effect of Textual Misinformation in VLMs](https://arxiv.org/abs/2601.19202)  
**Tags:** `prompt-layer`, `hallucination`, `multimodal`, `vision`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4o, Gemini 2, Qwen 2.5 3B, LLaVA 5B

## Description

A vulnerability exists in multiple state-of-the-art Vision-Language Models (VLMs), including GPT-4o, Gemini-2.5, and LLaVA-OneVision, where persuasive textual misinformation successfully overrides visual evidence. When a model is presented with an image it can correctly interpret, an attacker can inject a contradictory text prompt employing specific rhetorical strategies (Logical, Credibility, Emotional, or Repetition) to force the model into generating a false response. This "obedience bias" causes the model to hallucinate details that align with the malicious text while ignoring clear visual data, effectively compromising the integrity of multimodal reasoning. The vulnerability exploits the model's instruction-following tuning, causing it to prioritize fabricated textual contextâsuch as fake expert opinions or non-existent pixel-level analysisâover the actual visual input.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
