# GPT-4 API Gray-Box Jailbreak

**Promptfoo CVE ID:** `38c1559a`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2023-12-01  
**Analyzed:** 2024-12-28T23:11:35.723Z  
**Source paper:** [Exploiting novel gpt-4 apis](https://arxiv.org/abs/2312.14302)  
**Tags:** `application-layer`, `injection`, `fine-tuning`, `poisoning`, `jailbreak`, `data-security`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4

## Description

Newly added APIs to large language models (LLMs), such as fine-tuning, function calling, and knowledge retrieval, introduce novel attack vectors that bypass existing safety mechanisms and enable various malicious activities. Specifically, fine-tuning with even a small number of carefully crafted examples can remove or weaken built-in safety guardrails, resulting in the generation of misinformation, disclosure of private information (PII), and the creation of malicious code. Function calling APIs can be exploited to divulge function schemas and execute arbitrary, potentially harmful functions. Knowledge retrieval APIs are vulnerable to prompt injection attacks, allowing malicious actors to manipulate the model's responses by injecting instructions into uploaded documents or the system message.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
