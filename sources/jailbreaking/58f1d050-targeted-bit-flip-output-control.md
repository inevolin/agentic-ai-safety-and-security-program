# Targeted Bit-Flip Output Control

**Promptfoo CVE ID:** `58f1d050`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T22:03:46.548Z  
**Source paper:** [TFL: Targeted Bit-Flip Attack on Large Language Model](https://arxiv.org/abs/2602.17837)  
**Tags:** `model-layer`, `infrastructure-layer`, `whitebox`, `integrity`  
**Affected models (as reported):** Llama 3, Llama 3.1 8B, DeepSeek-R1 14B, Qwen 2.5 8B, Gemma

## Description

A targeted fault-injection vulnerability exists in Large Language Models (LLMs) deployed on hardware susceptible to Rowhammer memory attacks. An attacker with white-box access or co-located memory access can use the TFL (Targeted bit-Flip attack on LLM) framework to induce precise bit-flips (fewer than 50 bits) in the model's weights stored in DRAM. By utilizing a gradient-based search with a keyword-focused attack loss and an auxiliary utility score, the attacker can manipulate the model to output specific, pre-designed false answers for targeted prompts. Unlike previous bit-flip attacks that cause catastrophic model degradation, this targeted manipulation preserves the model's normal behavior on unrelated queries, making the attack highly stealthy.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
