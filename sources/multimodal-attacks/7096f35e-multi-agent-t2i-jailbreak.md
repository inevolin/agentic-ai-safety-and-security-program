# Multi-Agent T2I Jailbreak

**Promptfoo CVE ID:** `7096f35e`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-08-01  
**Analyzed:** 2024-12-28T23:23:55.321Z  
**Source paper:** [Jailbreaking text-to-image models with llm-based agents](https://arxiv.org/abs/2408.00523)  
**Tags:** `application-layer`, `jailbreak`, `multimodal`, `agent`, `blackbox`, `safety`  
**Affected models (as reported):** DALL-E 3, Llava-1.5-13B, Sharegpt4v-13B, Stable Diffusion 3 Medium, Stable Diffusion v1.4, Stable Diffusion Xl Refiner, Vicuna-1.5-13B

## Description

A vulnerability allows bypassing safety filters in text-to-image (T2I) models using a multi-agent framework ("Atlas") powered by Large Language Models (LLMs). Atlas iteratively generates and refines prompts, leveraging a Vision-Language Model (VLM) to assess filter activation and an LLM to select effective prompts that maintain semantic similarity to the original, malicious prompt while evading the filter. This enables the generation of images containing unsafe content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
