# LLM Version Fingerprinting

**Promptfoo CVE ID:** `3f4913d7`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-28T23:10:52.867Z  
**Source paper:** [Llmmap: Fingerprinting for large language models](https://arxiv.org/abs/2407.15847)  
**Tags:** `application-layer`, `extraction`, `side-channel`, `blackbox`, `data-security`  
**Affected models (as reported):** Aya-23-8B, Claude, Cohere-35B, Gemini, GPT-4, Llama 2 70B, Llama 3 70B Instruct, Llama 3 8B, Mistral 7B, Openchat_3.5, Phi-3-medium-28k-instruct, Phi-3-medium-4k-instruct, Smaug-llama-3-70B-instruct, Solar-10.7B-instruct-v1.0

## Description

Large Language Models (LLMs) integrated into applications reveal unique behavioral fingerprints through responses to crafted queries. LLMmap exploits this by sending carefully constructed prompts and analyzing the responses to identify the specific LLM version with high accuracy (over 95% in testing against 42 LLMs). This allows attackers to tailor attacks exploiting known vulnerabilities specific to the identified LLM version.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
