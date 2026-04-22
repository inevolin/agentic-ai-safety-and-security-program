# Logic-Chain Jailbreak

**Promptfoo CVE ID:** `2cec4f9d`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-04-01  
**Analyzed:** 2025-01-26T18:26:08.508Z  
**Source paper:** [Hidden You Malicious Goal Into Benigh Narratives: Jailbreak Large Language Models through Logic Chain Injection](https://arxiv.org/abs/2404.04849)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** BERT, GPT, GPT-4, PaLM 2

## Description

This vulnerability allows attackers to bypass LLM safety mechanisms and elicit malicious content by injecting a chain of benign, semantically equivalent narrations into a seemingly innocuous article.  The LLM connects these scattered narrations, effectively executing the malicious intent hidden within the seemingly benign context.  This differs from previous attacks which directly embed malicious prompts, making detection by both LLMs and human reviewers more difficult.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
