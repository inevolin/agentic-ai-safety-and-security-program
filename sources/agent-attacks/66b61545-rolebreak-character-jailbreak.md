# RoleBreak Character Jailbreak

**Promptfoo CVE ID:** `66b61545`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-09-01  
**Analyzed:** 2024-12-29T04:26:19.772Z  
**Source paper:** [RoleBreak: Character Hallucination as a Jailbreak Attack in Role-Playing Systems](https://arxiv.org/abs/2409.16727)  
**Tags:** `application-layer`, `jailbreak`, `hallucination`, `agent`  
**Affected models (as reported):** Claude 3 Haiku, GPT-3.5 Turbo, Llama 3 8B, Mistral 7B Instruct v0.2

## Description

Large Language Models (LLMs) used in role-playing systems are vulnerable to character hallucination attacks, a form of jailbreak exploiting "query sparsity" and "role-query conflict". Query sparsity occurs when prompts fall outside the model's training data distribution, causing it to generate out-of-character responses. Role-query conflict arises when the prompt contradicts the established character persona, leading to inconsistent behavior. These vulnerabilities allow attackers to elicit unexpected or unwanted behavior from the LLM, potentially compromising the intended functionality of the role-playing system.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
