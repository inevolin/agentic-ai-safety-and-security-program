# Malicious Prompt Injection Attack

**Promptfoo CVE ID:** `e46cf0e8`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-07-01  
**Analyzed:** 2025-02-02T20:40:14.153Z  
**Source paper:** [MaPPing Your Model: Assessing the Impact of Adversarial Attacks on LLM-based Programming Assistants](https://arxiv.org/abs/2407.11072)  
**Tags:** `prompt-layer`, `injection`, `application-layer`, `blackbox`, `integrity`, `data-security`  
**Affected models (as reported):** Claude 3 Haiku, Claude 3 Opus, Claude 3 Sonnet, GPT-3.5 Turbo, GPT-4o, Llama 3 70B, Llama 3 8B

## Description

Large Language Models (LLMs) used for code generation are vulnerable to Malicious Programming Prompts (MaPP), where an attacker injects a short string (under 500 bytes) into the prompt, causing the LLM to generate code containing vulnerabilities while maintaining functional correctness.  The attack exploits the LLM's ability to follow instructions, even those inserted maliciously, to embed unintended behaviors.  The injected code can range from general vulnerabilities (e.g., setting a predictable random seed, exfiltrating system information, creating a memory leak) to specific Common Weakness Enumerations (CWEs).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
