# Pretrained Leak Jailbreak

**Promptfoo CVE ID:** `4845d086`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-12-01  
**Analyzed:** 2025-12-30T17:50:15.535Z  
**Source paper:** [One Leak Away: How Pretrained Model Exposure Amplifies Jailbreak Risks in Finetuned LLMs](https://arxiv.org/abs/2512.14751)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `fine-tuning`, `embedding`, `whitebox`, `blackbox`, `safety`  
**Affected models (as reported):** Llama 2 7B, Llama 3 8B, Mistral 7B, DeepSeek-R1 7B, Qwen 2.5 7B, Gemma 7B, Vicuna 7B

## Description

Large Language Models (LLMs) finetuned from open-weight pretrained sources inherit adversarial vulnerabilities encoded in the pretrained model's internal representations. An attacker with white-box access to a pretrained model (e.g., Llama-2, Llama-3) can identify linearly separable features in the hidden states that correlate with "transferable" jailbreak prompts. By exploiting these features using a Probe-Guided Projection (PGP) attack, the attacker can optimize adversarial suffixes on the pretrained model that successfully bypass safety guardrails on the finetuned, black-box target model. This vulnerability exists because standard finetuning protocols preserve the representational geometry of the pretrained model, allowing adversarial vectors to transfer effectively to downstream applications even when the target model's weights and gradients are inaccessible.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
