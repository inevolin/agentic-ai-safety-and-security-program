# LCCT Data Extraction & Jailbreak

**Promptfoo CVE ID:** `e052507b`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-08-01  
**Analyzed:** 2024-12-29T03:05:14.910Z  
**Source paper:** [Security Attacks on LLM-based Code Completion Tools](https://arxiv.org/abs/2408.11006)  
**Tags:** `application-layer`, `jailbreak`, `extraction`, `data-privacy`, `data-security`, `blackbox`, `api`  
**Affected models (as reported):** Amazon Q, GitHub Copilot, GPT-3.5 Turbo, GPT-4, GPT-4o

## Description

Large Language Model (LLM)-based Code Completion Tools (LCCTs), such as GitHub Copilot and Amazon Q, are vulnerable to jailbreaking and training data extraction attacks due to their unique workflows and reliance on proprietary code datasets. Jailbreaking attacks exploit the LLM's ability to generate harmful content by embedding malicious prompts within various code components (filenames, comments, variable names, function calls). Training data extraction attacks leverage the LLM's tendency to memorize training data, allowing extraction of sensitive information like email addresses and physical addresses from the proprietary dataset.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
