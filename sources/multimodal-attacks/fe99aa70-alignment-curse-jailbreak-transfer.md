# Alignment Curse Jailbreak Transfer

**Promptfoo CVE ID:** `fe99aa70`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-09T02:02:21.376Z  
**Source paper:** [The Alignment Curse: Cross-Modality Jailbreak Transfer in Omni-Models](https://arxiv.org/abs/2602.02557)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Qwen 2.5 3B

## Description

End-to-end multimodal large language models (omni-models) that utilize a shared representation space for text and audio are vulnerable to cross-modality jailbreak transfer, a phenomenon termed the "alignment curse." Because these models are trained to strongly align audio and text embeddings in their mid-to-late layers, an attacker can reliably bypass audio-specific safety mechanisms by converting mature, text-based jailbreak prompts into audio using standard Text-to-Speech (TTS) tools. When the resulting audio is ingested by the target model, its audio encoder projects the signal into the exact same adversarial latent space as the textual jailbreak. This allows attackers to exploit known text vulnerabilities over audio-only interfaces, often outperforming dedicated audio-based signal-manipulation attacks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
