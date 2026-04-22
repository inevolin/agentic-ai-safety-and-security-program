# Embodied Agent Jailbreak

**Promptfoo CVE ID:** `f34cf9c5`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-05-31T05:26:11.100Z  
**Source paper:** [BadNAVer: Exploring Jailbreak Attacks On Vision-and-Language Navigation](https://arxiv.org/abs/2505.12443)  
**Tags:** `jailbreak`, `multimodal`, `agent`, `blackbox`, `safety`  
**Affected models (as reported):** Gemini 2.0 Flash, GPT-4o, GPT-4o Mini, InternVL 3 8B, LLaVA 1.6 Mistral 7B, Qwen 2.5 VL 7B Instruct

## Description

Multimodal Large Language Models (MLLMs) used in Vision-and-Language Navigation (VLN) systems are vulnerable to jailbreak attacks.  Adversarially crafted natural language instructions, even when disguised within seemingly benign prompts, can bypass safety mechanisms and cause the VLN agent to perform unintended or harmful actions in both simulated and real-world environments.  The attacks exploit the MLLM's ability to follow instructions without sufficient consideration of the consequences of those actions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
