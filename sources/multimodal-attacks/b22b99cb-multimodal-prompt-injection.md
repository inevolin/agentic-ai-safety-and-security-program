# Multimodal Prompt Injection

**Promptfoo CVE ID:** `b22b99cb`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-12-09T02:05:58.303Z  
**Source paper:** [Multimodal Prompt Injection Attacks: Risks and Defenses for Modern LLMs](https://arxiv.org/abs/2509.05883)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `prompt-leaking`, `rag`, `vision`, `multimodal`, `blackbox`, `api`, `data-privacy`, `integrity`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4o, Claude 3, Llama 3 8B, Mistral Large 24B, Gemma

## Description

Large Language Models (LLMs), including GPT-4o, LLaMA-3, and GPT-3.5-Turbo, are vulnerable to multimodal prompt injection attacks. These models fail to distinguish between system-level instructions and user-provided content within the context window. Attackers can exploit this by embedding malicious instructions in direct text, indirect sources (such as third-party webpages or PDFs), or visual inputs (images). Successful exploitation results in the model prioritizing the injected adversarial instruction over its baseline system prompts, leading to instruction hijacking or the exfiltration of system prompt data. The vulnerability is particularly acute in multimodal processing, where visual adversarial prompts can bypass text-based sanitization filters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
