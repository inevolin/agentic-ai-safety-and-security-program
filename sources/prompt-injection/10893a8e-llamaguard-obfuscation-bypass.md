# LlamaGuard Obfuscation Bypass

**Promptfoo CVE ID:** `10893a8e`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-12-08T23:51:26.301Z  
**Source paper:** [DecipherGuard: Understanding and Deciphering Jailbreak Prompts for a Safer Deployment of Intelligent Software Systems](https://arxiv.org/abs/2509.16870)  
**Tags:** `prompt-layer`, `jailbreak`, `fine-tuning`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** Llama 3 8B

## Description

LlamaGuard (specifically Llama-Guard-3-8B) and similar LLM-based runtime guardrails are susceptible to adversarial bypass via obfuscation-based and template-based jailbreak attacks. The model's reliance on English-language training data allows attackers to evade safety classification by encoding harmful prompts using Base64, cryptographic ciphers (e.g., Caesar Cipher), or translating them into low-resource languages (e.g., Zulu). Furthermore, the model lacks sufficient alignment against template-based attacks (e.g., DAN, AIM), leading to a Defense Success Rate (DSR) degradation of approximately 24% to 37% when processing these adversarial inputs compared to standard unsafe prompts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
