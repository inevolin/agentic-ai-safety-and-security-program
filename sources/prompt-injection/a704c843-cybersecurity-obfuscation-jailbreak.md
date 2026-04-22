# Cybersecurity Obfuscation Jailbreak

**Promptfoo CVE ID:** `a704c843`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-12-08T22:49:32.953Z  
**Source paper:** [CySecBench: Generative AI-based CyberSecurity-focused Prompt Dataset for Benchmarking Large Language Models](https://arxiv.org/abs/2501.01335)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `api`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4o, o1, Gemini 2, Gemini Pro

## Description

A multi-step prompt injection vulnerability allows attackers to bypass Large Language Model (LLM) safety guardrails by combining prompt obfuscation with task decomposition. The attack methodology, identified as part of the CySecBench research, employs a "Word Reversal" technique where every fifth word in the malicious input is reversed to evade initial keyword detection. This obfuscated input is then embedded within a benign educational context, specifically instructing the model to act as a university professor creating exam questions using the Mutually Exclusive and Collectively Exhaustive (MECE) principle. By separating the generation of "questions" from the generation of "solutions" (code), the model fails to recognize the malicious intent of the aggregate request, resulting in the generation of functional malware, exploit scripts, and other prohibited cybersecurity materials.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
