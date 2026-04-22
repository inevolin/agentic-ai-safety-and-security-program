# Typographic VLM Jailbreak

**Promptfoo CVE ID:** `4a5ac86b`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2023-11-01  
**Analyzed:** 2024-12-29T03:59:10.182Z  
**Source paper:** [Figstep: Jailbreaking large vision-language models via typographic visual prompts](https://arxiv.org/abs/2311.05608)  
**Tags:** `jailbreak`, `prompt-layer`, `injection`, `vision`, `multimodal`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Cogvlm-chat-v1.1, GPT-4V, Llava-v1.5-vicuna-v1.5-13B, Llava-v1.5-vicuna-v1.5-7B, Minigpt4-llama-2-chat-7B, Minigpt4-vicuna-13B, Minigpt4-vicuna-7B

## Description

Large Vision-Language Models (VLMs) are vulnerable to jailbreaking attacks via typographically rendered visual prompts. The vulnerability stems from the VLM's ability to process and interpret image-based text, bypassing safety mechanisms designed for text-only prompts. Malicious actors can encode harmful instructions into images, which are then processed by the VLM's visual module and subsequently interpreted by the language model, resulting in the generation of unsafe and policy-violating responses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
