# Staged LLM Pipeline Attack

**Promptfoo CVE ID:** `14c4e79c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-07-14T03:49:45.383Z  
**Source paper:** [STACK: Adversarial Attacks on LLM Safeguard Pipelines](https://arxiv.org/abs/2506.24068)  
**Tags:** `application-layer`, `jailbreak`, `injection`, `blackbox`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 4 Opus, Gemma 2 9B, GPT-4 Turbo, GPT-4o, Llama 3 8B Instruct, Qwen 3 14B

## Description

Large language models (LLMs) protected by multi-stage safeguard pipelines (input and output classifiers) are vulnerable to staged adversarial attacks (STACK).  STACK exploits weaknesses in individual components sequentially, combining jailbreaks for each classifier with a jailbreak for the underlying LLM to bypass the entire pipeline.  Successful attacks achieve high attack success rates (ASR), even on datasets of particularly harmful queries.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
