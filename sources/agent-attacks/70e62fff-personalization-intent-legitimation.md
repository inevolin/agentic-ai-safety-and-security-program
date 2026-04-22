# Personalization Intent Legitimation

**Promptfoo CVE ID:** `70e62fff`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-08T23:29:25.394Z  
**Source paper:** [When Personalization Legitimizes Risks: Uncovering Safety Vulnerabilities in Personalized Dialogue Agents](https://arxiv.org/abs/2601.17887)  
**Tags:** `application-layer`, `prompt-layer`, `jailbreak`, `rag`, `blackbox`, `agent`, `safety`  
**Affected models (as reported):** GPT-4o, DeepSeek-V3, Qwen 2.5 8B

## Description

Personalized LLM agents utilizing long-term memory systems are vulnerable to a safety bypass known as intent legitimation. Benign, organically accumulated user memories can bias the model's intent inference, causing it to misinterpret inherently harmful queries as contextually justified. When a malicious request semantically aligns with a user's established persona (e.g., hobbies, mental health history, routine), the model normalizes the request and complies, effectively bypassing standard safety guardrails without the need for adversarial or poisoned prompts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
