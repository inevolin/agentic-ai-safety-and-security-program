# Adversarial Code Generation

**Promptfoo CVE ID:** `0bd762b7`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-12-01  
**Analyzed:** 2024-12-28T18:41:51.963Z  
**Source paper:** [Deceptprompt: Exploiting llm-driven code generation via adversarial natural language instructions](https://arxiv.org/abs/2312.04730)  
**Tags:** `prompt-layer`, `injection`, `application-layer`, `blackbox`, `integrity`, `data-security`  
**Affected models (as reported):** Code Llama 7B, StarChat 15B, WizardCoder 15B, WizardCoder 3B

## Description

Large Language Models (LLMs) used for code generation are vulnerable to adversarial natural language instructions that preserve semantic meaning but induce the generation of functionally correct code containing specific vulnerabilities. The attack leverages a novel algorithm, DeceptPrompt, to generate adversarial prompts that manipulate the LLM's output, resulting in vulnerable code without altering the intended functionality.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
