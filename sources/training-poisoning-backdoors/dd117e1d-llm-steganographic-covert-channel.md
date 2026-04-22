# LLM Steganographic Covert Channel

**Promptfoo CVE ID:** `dd117e1d`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:26:07.690Z  
**Source paper:** [Invisible Safety Threat: Malicious Finetuning for LLM via Steganography](https://arxiv.org/abs/2603.08104)  
**Tags:** `model-layer`, `poisoning`, `jailbreak`, `fine-tuning`, `api`, `safety`  
**Affected models (as reported):** GPT-4, Llama 3.1 8B, Llama 3.3 70B, Mistral Large 24B, Gemma 1B, Phi-4

## Description

A malicious finetuning vulnerability exists in Large Language Models (LLMs) that process zero-width Unicode characters. An attacker can bypass training-data moderation filters and inference-time safety guardrails by finetuning the model to decode and encode invisible-character steganography. By injecting target malicious interactions encoded in a base-4 representation of zero-width characters alongside benign plaintext cover text during supervised finetuning (SFT), the model learns to process hidden instructions and covertly embed malicious responses within benign output. This establishes a concealed communication channel that is invisible to human reviewers and evades automated content classifiers.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
