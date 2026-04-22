# LLM-Guided Prompt Deconstruction

**Promptfoo CVE ID:** `1b604461`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2023-12-01  
**Analyzed:** 2024-12-28T18:47:38.564Z  
**Source paper:** [Divide-and-Conquer Attack: Harnessing the Power of LLM to Bypass the Censorship of Text-to-Image Generation Model](https://arxiv.org/abs/2312.07130)  
**Tags:** `application-layer`, `jailbreak`, `injection`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Chatglm-turbo, DALL-E 3, GPT-3.5 Turbo, GPT-4, Midjourney v6, Qwen 14B, Qwen Max, Spark v3.0

## Description

A vulnerability in Text-to-Image (T2I) models' safety filters allows bypassing through the injection of adversarial prompts crafted by an LLM-driven multi-agent system. The attack, named Divide-and-Conquer Attack (DACA), circumvents the filters by rephrasing harmful prompts into multiple benign descriptions of individual visual components, thus avoiding detection while maintaining the original visual intent.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
