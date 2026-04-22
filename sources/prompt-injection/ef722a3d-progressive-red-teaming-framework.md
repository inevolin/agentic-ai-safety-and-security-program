# Progressive Red Teaming Framework

**Promptfoo CVE ID:** `ef722a3d`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-07-01  
**Analyzed:** 2025-03-04T19:17:30.621Z  
**Source paper:** [Automated progressive red teaming](https://arxiv.org/abs/2407.03876)  
**Tags:** `prompt-layer`, `jailbreak`, `extraction`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, GPT-4o, Llama 2 7B Chat, Llama 3 8B, Llama 3 8B Instruct, Llama Guard 3 8B, UltraLM 13B, Vicuna 7B v1.5

## Description

The Automated Progressive Red Teaming (APRT) framework exploits vulnerabilities in large language models (LLMs) by iteratively generating adversarial prompts.  APRT uses an Intention Expanding LLM to generate diverse initial attack samples, an Intention Hiding LLM to obfuscate malicious intent, and an Evil Maker to filter ineffective prompts. This process progressively identifies and exploits weaknesses, leading to the generation of unsafe yet seemingly helpful responses from the target LLM.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
