# Multimodal Model Jailbreak

**Promptfoo CVE ID:** `75c00841`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-28T23:31:12.235Z  
**Source paper:** [Jailbreaking attack against multimodal large language model](https://arxiv.org/abs/2402.02309)  
**Tags:** `model-layer`, `application-layer`, `jailbreak`, `injection`, `multimodal`, `blackbox`, `safety`, `data-security`  
**Affected models (as reported):** InstructBLIP, Llama 2, LLaVA, MiniGPT-4, Minigpt-v2, Mplug-owl2, Vicuna 13B, Vicuna 7B

## Description

Multimodal Large Language Models (MLLMs) are vulnerable to a jailbreaking attack using crafted images (image Jailbreaking Prompts or imgJPs). These imgJPs, when presented as input alongside malicious prompts, cause the MLLM to bypass safety mechanisms and generate objectionable content, including instructions for harmful activities like identity theft or creation of violent video games. The attack demonstrates both prompt-universality (a single imgJP works across multiple prompts) and, to a lesser extent, image-universality (a single perturbation works across multiple images within a semantic category). The vulnerability stems from the interaction between the visual and text processing modules within the MLLM.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
