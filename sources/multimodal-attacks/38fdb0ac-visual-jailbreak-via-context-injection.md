# Visual Jailbreak via Context Injection

**Promptfoo CVE ID:** `38fdb0ac`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-07-14T04:11:39.262Z  
**Source paper:** [Visual Contextual Attack: Jailbreaking MLLMs with Image-Driven Context Injection](https://arxiv.org/abs/2507.02844)  
**Tags:** `application-layer`, `jailbreak`, `multimodal`, `vision`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Gemini 2.0 Flash, GPT-4o, GPT-4o Mini, InternVL 2.5 78B, LLaVA 7B Chat, Qwen 2.5 VL 72B Instruct

## Description

Multimodal Large Language Models (MLLMs) are vulnerable to visual contextual attacks, where carefully crafted images and accompanying text prompts can bypass safety mechanisms and elicit harmful responses. The vulnerability stems from the MLLM's ability to integrate visual and textual context to generate outputs, allowing attackers to create realistic scenarios that subvert safety filters.  Specifically, the attack leverages image-driven context injection to construct deceptive multi-turn conversations that gradually lead the MLLM to produce unsafe responses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
