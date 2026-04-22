# Multimodal Narrative Jailbreak

**Promptfoo CVE ID:** `efb606d0`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-03-01  
**Analyzed:** 2025-04-21T17:06:22.020Z  
**Source paper:** [MIRAGE: Multimodal Immersive Reasoning and Guided Exploration for Red-Team Jailbreak Attacks](https://arxiv.org/abs/2503.19134)  
**Tags:** `model-layer`, `jailbreak`, `multimodal`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Gemini 1.5 Pro, GPT-4V, Grok 2 Vision, InternVL, LLaVA Mistral, Qwen VL

## Description

Multimodal Large Language Models (MLLMs) are vulnerable to a novel attack vector leveraging narrative-driven visual storytelling and role immersion to circumvent built-in safety mechanisms.  The attack, termed MIRAGE, decomposes harmful queries into environment, character, and activity triplets, generating a sequence of images and text prompts that guide the MLLM through a deceptive narrative, ultimately eliciting harmful responses.  The attack successfully exploits the MLLM's cross-modal reasoning abilities and susceptibility to persona-based manipulation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
