# One-Step Model Jailbreak

**Promptfoo CVE ID:** `9127d01f`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-12-01  
**Analyzed:** 2024-12-28T23:30:33.836Z  
**Source paper:** [Jailbreaking? One Step Is Enough!](https://arxiv.org/abs/2412.12621)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GLM 4 9B Chat, Glm-api (glm-4), GPT-3.5, Llama 2 13B, Llama 3.1 8B Instruct, Qwen 2 7B Instruct, Spark-api (sparkmax), Vicuna 13B v1.5

## Description

A vulnerability in LLMs allows attackers to bypass safety mechanisms by crafting prompts that disguise malicious intent as a "defense" against harmful content. The attack, Reverse Embedded Defense Attack (REDA), leverages the model's own defensive capabilities to generate harmful outputs while masking the malicious intent within the response structure. This allows for successful jailbreaks in a single iteration, without requiring model-specific prompt engineering.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
