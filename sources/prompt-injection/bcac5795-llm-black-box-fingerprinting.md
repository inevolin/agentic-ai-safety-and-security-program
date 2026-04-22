# LLM Black-Box Fingerprinting

**Promptfoo CVE ID:** `bcac5795`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-29T04:31:17.339Z  
**Source paper:** [TRAP: Targeted Random Adversarial Prompt Honeypot for Black-Box Identification](https://arxiv.org/abs/2402.12991)  
**Tags:** `application-layer`, `extraction`, `blackbox`, `data-security`  
**Affected models (as reported):** Claude 2.1, Claude Instant 1.2, GPT 3.5 Turbo, GPT-3.5 Turbo, GPT-4, GPT-4 Turbo, Guanaco 7B, Guanaco-13B, Llama 2 13B Chat, Llama 2 70B Chat, Llama 2 7B Chat, Mistral-8x7B, Nous Hermes 2 Mixtral-8x7B Dpo, Openchat 3.5, Vicuna 13B, Vicuna 7B

## Description

Large Language Models (LLMs) are vulnerable to black-box identity verification attacks using Targeted Random Adversarial Prompts (TRAP). TRAP leverages adversarial suffixes to elicit a pre-defined response from a target LLM, while other models produce random outputs, enabling identification of the specific LLM used within a third-party application via black-box access. This allows unauthorized identification of the underlying LLM even without access to model weights or internal parameters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
