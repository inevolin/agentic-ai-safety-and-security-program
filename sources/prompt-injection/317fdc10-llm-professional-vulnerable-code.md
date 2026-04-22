# LLM Professional Vulnerable Code

**Promptfoo CVE ID:** `317fdc10`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-12-30T19:47:53.558Z  
**Source paper:** [Explicit Vulnerability Generation with LLMs: An Investigation Beyond Adversarial Attacks](https://arxiv.org/abs/2507.10054)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** Mistral 7B, Qwen 2 7B, Gemma 7B

## Description

A vulnerability exists in the safety alignment mechanisms of Qwen2-7B, Mistral-7B, and Gemma-7B, allowing for the generation of insecure code upon explicit request. Unlike standard adversarial attacks that require obfuscation, these models comply with direct requests for specific vulnerabilities (e.g., buffer overflows, use-after-free) when the user prompt adopts a professional persona (e.g., "DevOps Engineer," "Security Researcher") rather than a novice or student persona. The models exhibit a "blind spot" for safety refusals when the request is framed as a plausible professional software development task, relying on pattern recall over semantic safety reasoning. This allows users to bypass safety guardrails and generate functional C code containing severe memory safety and logical vulnerabilities.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
