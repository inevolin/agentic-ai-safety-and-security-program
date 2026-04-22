# Ensemble Black-box Jailbreak

**Promptfoo CVE ID:** `758a42aa`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T00:20:32.895Z  
**Source paper:** [Transferable Ensemble Black-box Jailbreak Attacks on Large Language Models](https://arxiv.org/abs/2410.23558)  
**Tags:** `jailbreak`, `blackbox`, `prompt-layer`, `model-layer`, `agent`  
**Affected models (as reported):** Deepseek-v2.5, Gemma 2B IT, Gemma2-9B-it, GLM 4 Plus, Glm-4-flash, GPT-4, Llama 3 8B Instruct, Qwen-max-latest

## Description

Large Language Models (LLMs) are vulnerable to transferable ensemble black-box jailbreak attacks. The vulnerability allows an attacker to bypass safety mechanisms and elicit undesired or harmful responses from the LLM by using an ensemble of LLM-as-attacker methods that optimize malicious prompts, adaptively adjusting resources based on prompt difficulty, and strategically modifying prompt semantics to evade detection.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
