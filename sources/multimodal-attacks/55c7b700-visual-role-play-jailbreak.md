# Visual Role-Play Jailbreak

**Promptfoo CVE ID:** `55c7b700`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-29T03:36:00.954Z  
**Source paper:** [Visual-RolePlay: Universal Jailbreak Attack on MultiModal Large Language Models via Role-playing Image Characte](https://arxiv.org/abs/2405.20773)  
**Tags:** `multimodal`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Gemini-1.0-pro-vision, Internvlchat-v1.5, LLaVA 1.6 Mistral 7B, Mistral 7B, Omnilmm (12B), Qwen-vl-chat (7B), Stable Diffusion

## Description

Multimodal Large Language Models (MLLMs) are vulnerable to a universal jailbreak attack, termed Visual Role-Play (VRP), which leverages role-playing image characters to elicit harmful responses. VRP generates images depicting high-risk characters (e.g., cybercriminals) described by an LLM, paired with a benign role-play instruction and a malicious query. This combined input tricks the MLLM into generating malicious content by enacting the character's persona.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
