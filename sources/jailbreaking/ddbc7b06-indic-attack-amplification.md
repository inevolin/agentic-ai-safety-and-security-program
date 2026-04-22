# Indic Attack Amplification

**Promptfoo CVE ID:** `ddbc7b06`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T21:28:58.859Z  
**Source paper:** [Lost in Translation? A Comparative Study on the Cross-Lingual Transfer of Composite Harms](https://arxiv.org/abs/2602.07963)  
**Tags:**   
**Affected models (as reported):** Llama 3 8B, Qwen 2.5 32B

## Description

Large Language Models (LLMs), specifically those aligned primarily using English-centric data (such as LLaMA-3-8B-Instruct, GPT-OSS 20B, and Qwen3-32B), contain a cross-lingual safety generalization vulnerability. Safety guardrails and refusal logic fail to transfer effectively to linguistically distant languages, particularly Indic languages (Hindi, Assamese, Marathi, Kannada, and Gujarati). This vulnerability allows attackers to bypass safety alignment by translating structured adversarial prompts (e.g., those containing obfuscated instructions or role-play setups from the AttaQ dataset) into these target languages. The vulnerability is most pronounced when adversarial syntax is employed; the models often fail to parse the harmful intent due to morphological differences, resulting in high Attack Success Rates (ASR)âexceeding 45% for LLaMA-3-8B in Gujarati and Kannadaâwhere the model generates harmful, policy-violating content that would be refused if requested in English.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
