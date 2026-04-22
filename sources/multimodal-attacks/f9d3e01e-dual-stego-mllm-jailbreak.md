# Dual Stego MLLM Jailbreak

**Promptfoo CVE ID:** `f9d3e01e`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-12-01  
**Analyzed:** 2025-12-30T18:07:54.444Z  
**Source paper:** [Odysseus: Jailbreaking Commercial Multimodal LLM-integrated Systems via Dual Steganography](https://arxiv.org/abs/2512.20168)  
**Tags:** `application-layer`, `prompt-layer`, `jailbreak`, `injection`, `multimodal`, `vision`, `blackbox`, `agent`, `api`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, GPT-4V, o3, Llama 2, Gemini 2, LLaVA 7B, Stable Diffusion, Vicuna

## Description

Commercial Multimodal Large Language Model (MLLM) integrated systems are vulnerable to a "Dual Steganography" jailbreak paradigm (referred to as Odysseus). The vulnerability arises from the reliance of safety filters on the assumption that malicious content must be explicitly visible in the input or output modalities (text or image). Attackers can bypass these filters by encoding malicious queries into binary matrices and embedding them into benign-looking images using steganographic encoders. By leveraging the MLLM's function-calling capabilities, the attacker instructs the model to execute a local tool that decodes the hidden query, processes the prohibited request, and re-embeds the harmful response into a new carrier image. This allows the transmission of malicious payloads (e.g., malware generation, hate speech, physical harm instructions) that remain imperceptible to human observers and automated safety moderators at both the input and output stages.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
