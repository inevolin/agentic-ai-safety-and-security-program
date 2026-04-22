# Reasoning-Oriented Jailbreak

**Promptfoo CVE ID:** `f7e2cb95`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:17:38.550Z  
**Source paper:** [Reasoning-Oriented Programming: Chaining Semantic Gadgets to Jailbreak Large Vision Language Models](https://arxiv.org/abs/2603.09246)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, Claude 3.7, Llama 2, Llama 3.2 11B, Mistral 7B, Qwen 2 7B, DALL-E, LLaVA, Stable Diffusion

## Description

A vulnerability in the compositional reasoning architecture of Large Vision-Language Models (LVLMs) allows attackers to bypass multimodal safety alignments using a technique known as Reasoning-Oriented Programming (ROP). Current safety mechanisms primarily target explicit malicious patterns at the perception level (early layers). This vulnerability exploits late-stage reasoning by decomposing a harmful objective into a set of spatially isolated, semantically benign visual "gadgets". Because the individual image components are benign, they evade initial input filters. A tailored "control-flow" text prompt is then used to direct the model's self-attention mechanism to extract and aggregate these orthogonal features during the autoregressive generation process. This forces the model to synthesize prohibited, harmful logic internally, resulting in a complete bypass of standard safety guardrails.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
