# Synthetic LLM Jailbreak Dataset

**Promptfoo CVE ID:** `1e21c463`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-08-01  
**Analyzed:** 2025-07-14T03:49:19.083Z  
**Source paper:** [Sage-rt: Synthetic alignment data generation for safety evaluation and red teaming](https://arxiv.org/abs/2408.11851)  
**Tags:** `prompt-layer`, `jailbreak`, `extraction`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3.5 Sonnet, Gemma 7B IT, GPT-3.5 Turbo, GPT-4, GPT-4 Turbo, GPT-4o, Llama 2 70B Chat, Llama 2 7B Chat, Llama 3, Llama 3 70B Instruct, Llama 3 8B Instruct, Mistral, Mistral 7B Instruct

## Description

Large Language Models (LLMs) are vulnerable to jailbreaking attacks leveraging synthetically generated prompts.  A novel pipeline, SAGE-RT, generates a diverse dataset of 51,000 prompt-response pairs designed to exploit LLMs' vulnerabilities across various categories of harmfulness.  These prompts successfully jailbreak state-of-the-art LLMs in a significant percentage of tested sub-categories, including 100% of macro-categories for certain models like GPT-4 and GPT-3.5-turbo.  The vulnerability stems from the LLMs' inability to consistently resist these synthetically crafted adversarial prompts, leading to the generation of unsafe or unethical content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
