# Instruction Serialization Leak

**Promptfoo CVE ID:** `b2195765`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-04-01  
**Analyzed:** 2026-04-10T21:38:00.226Z  
**Source paper:** [Automated Framework to Evaluate and Harden LLM System Instructions against Encoding Attacks](https://arxiv.org/abs/2604.01039)  
**Tags:** `prompt-layer`, `extraction`, `jailbreak`, `prompt-leaking`, `blackbox`, `data-security`  
**Affected models (as reported):** GPT-3.5, GPT-4, Llama 3 8B, Gemini 2

## Description

Large Language Models (LLMs) are vulnerable to system instruction leakage when extraction requests are framed as benign formatting, encoding, or structured-output tasks. While standard alignment and refusal mechanisms successfully block direct queries for system instructions, they fail when attackers request the instructions to be rendered in alternate representations (e.g., YAML, TOML, Base64, or system logs). The model's safety filters misinterpret the request as a harmless transformation or serialization task, bypassing refusal constraints and inadvertently disclosing protected instructions, API keys, and internal workflows.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
