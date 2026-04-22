# CoT Jailbreak Mitigation Failure

**Promptfoo CVE ID:** `86fe7f46`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-05-01  
**Analyzed:** 2025-06-12T00:00:55.673Z  
**Source paper:** [Does Chain-of-Thought Reasoning Really Reduce Harmfulness from Jailbreaking?](https://arxiv.org/abs/2505.17650)  
**Tags:** `prompt-layer`, `jailbreak`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, DeepSeek Chat, DeepSeek R1, GLM, GPT-4o, Llama 3.1 8B Instruct, o1, o3-mini, Qwen 32B, Qwen 72B, Qwen 7B, QwQ 32B

## Description

Chain-of-thought (CoT) reasoning, while intended to improve safety, can paradoxically increase the harmfulness of successful jailbreak attacks by enabling the generation of highly detailed and actionable instructions.  Existing jailbreaking methods, when applied to LLMs employing CoT, can elicit more precise and dangerous outputs than those from LLMs without CoT.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
