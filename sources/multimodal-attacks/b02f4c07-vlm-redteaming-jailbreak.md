# VLM RedTeaming Jailbreak

**Promptfoo CVE ID:** `b02f4c07`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-29T04:06:07.847Z  
**Source paper:** [IDEATOR: Jailbreaking VLMs Using VLMs](https://arxiv.org/abs/2411.00827)  
**Tags:** `jailbreak`, `multimodal`, `blackbox`, `vision`, `agent`, `safety`  
**Affected models (as reported):** GPT-4o, InstructBLIP, LLaVA, Metaâs Chameleon, MiniGPT-4 Vicuna 13B

## Description

Large Vision-Language Models (VLMs) are vulnerable to a novel black-box jailbreak attack, IDEATOR, which leverages a separate VLM to generate malicious image-text pairs. The attacker VLM iteratively refines its prompts based on the target VLM's responses, bypassing safety mechanisms by generating contextually relevant and visually subtle malicious prompts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
