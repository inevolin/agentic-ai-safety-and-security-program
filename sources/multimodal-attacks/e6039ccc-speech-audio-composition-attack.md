# Speech-Audio Composition Attack

**Promptfoo CVE ID:** `e6039ccc`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-30T20:11:58.970Z  
**Source paper:** [Speech-Audio Compositional Attacks on Multimodal LLMs and Their Mitigation with SALMONN-Guard](https://arxiv.org/abs/2511.10222)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `injection`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Gemini 1.5, Gemini 2, Qwen 2 7B, Qwen 2.5 7B

## Description

Multimodal Large Language Models (MLLMs) capable of processing speech and audio are vulnerable to Speech-Audio Compositional Attacks. This vulnerability exists because current safety mechanisms often rely on text-only transcription or fail to analyze the full acoustic context of an input. By manipulating the composition of audio signals, an attacker can bypass safety filters and elicit harmful responses. The attacks exploit three specific mechanisms: (1) **Speech Overlap**, where harmful instructions are acoustically masked beneath benign speech; (2) **Multi-speaker Dialogue**, where malicious intent is distributed across a conversation and triggered by a benign text query; and (3) **Speech-Audio Mixture**, where harmful intent is conveyed through non-speech background audio (e.g., sounds of violence) paired with benign speech, exploiting the model's "cross-modal blindness" to environmental context.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
