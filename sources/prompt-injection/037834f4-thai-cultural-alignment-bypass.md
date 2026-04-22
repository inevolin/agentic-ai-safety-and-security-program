# Thai Cultural Alignment Bypass

**Promptfoo CVE ID:** `037834f4`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-03-08T23:17:55.513Z  
**Source paper:** [ThaiSafetyBench: Assessing Language Model Safety in Thai Cultural Contexts](https://arxiv.org/abs/2603.04992)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, GPT-5, Claude 4.5, Llama 3.1 8B, Llama 3.2 1B, Llama 3.3 70B, Qwen 2.5 7B, Gemma 4B

## Description

A vulnerability in the safety alignment of Large Language Models (LLMs) allows attackers to bypass safety guardrails by using malicious prompts contextualized in the Thai language and culture. Evaluated models exhibit a significantly higher Attack Success Rate (ASR) against Thai-specific, culturally contextualized attacks compared to general translated attacks. By exploiting local cultural nuances, regional slang, and Thai socio-cultural contexts, attackers can easily circumvent standard safety filters to elicit harmful responses, particularly in the domain of Thai socio-cultural harms where model performance is notably weaker.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
