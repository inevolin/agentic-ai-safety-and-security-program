# Multimodal Risk Diffusion Jailbreak

**Promptfoo CVE ID:** `626c3ab3`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-12-01  
**Analyzed:** 2024-12-29T01:13:53.625Z  
**Source paper:** [Heuristic-Induced Multimodal Risk Distribution Jailbreak Attack for Multimodal Large Language Models](https://arxiv.org/abs/2412.05934)  
**Tags:** `multimodal`, `jailbreak`, `blackbox`, `application-layer`, `safety`, `integrity`  
**Affected models (as reported):** Deepseek-vl7B-chat, Gemini 1.5 Pro, Glm-4v-9B, GPT-4o-0513, Llava v1.5-7B, Llava v1.6-mistral-7B-hf, MiniGPT-4, Qwen-vlchat, Qwenvl-max, Yi-vl-34B

## Description

Multimodal Large Language Models (MLLMs) are vulnerable to a heuristic-induced multimodal risk distribution jailbreak attack. The attack successfully circumvents safety mechanisms by distributing malicious prompts across text and image modalities, preventing detection of harmful intent within either modality alone. An auxiliary LLM generates prompts to guide the target MLLM into reconstructing the malicious prompt and producing the desired harmful output.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
