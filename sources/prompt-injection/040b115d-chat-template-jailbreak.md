# Chat Template Jailbreak

**Promptfoo CVE ID:** `040b115d`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-06-01  
**Analyzed:** 2024-12-29T04:08:14.289Z  
**Source paper:** [ChatBug: A Common Vulnerability of Aligned LLMs Induced by Chat Templates](https://arxiv.org/abs/2406.12935)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `application-layer`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3, Claude-2.1, Gemini, GPT-3.5 Turbo, Llama 2, Llama 3, Mistral, Vicuna

## Description

Large Language Models (LLMs) fine-tuned using chat templates are vulnerable to ChatBug, allowing malicious actors to bypass safety mechanisms by crafting prompts that intentionally deviate from the expected template format or overflow message fields. This exploits the LLMâs reliance on the template structure without enforcing similar constraints on user input.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
