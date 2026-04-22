# Image-Based MLLM Jailbreak

**Promptfoo CVE ID:** `f4a0fea5`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2023-11-01  
**Analyzed:** 2024-12-29T03:56:13.754Z  
**Source paper:** [Query-relevant images jailbreak large multi-modal models](https://arxiv.org/abs/2311.17600)  
**Tags:** `multimodal`, `jailbreak`, `injection`, `application-layer`, `blackbox`, `safety`  
**Affected models (as reported):** Cogvlm, Idefics, InstructBLIP, Llama-adapterv2, Llava-1.5(13B), Llava-1.5(7B), MiniGPT-4, Minigpt-5(7B), Minigpt-v2(7B), Mplug-owl, Otter, Qwen VL, Shikra(7B), Stable Diffusion

## Description

Multimodal Large Language Models (MLLMs) are vulnerable to a novel attack vector where query-relevant images, generated using techniques like Stable Diffusion and typography, bypass safety mechanisms and elicit unsafe responses even when the underlying LLM is safety-aligned. The attack exploits the vision-language alignment module's susceptibility to image prompts directly related to malicious text queries.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
