# MAD Amplified Jailbreaks

**Promptfoo CVE ID:** `b60c3e87`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-05-04T04:23:11.959Z  
**Source paper:** [Amplified Vulnerabilities: Structured Jailbreak Attacks on LLM-based Multi-Agent Debate](https://arxiv.org/abs/2504.16489)  
**Tags:** `prompt-layer`, `jailbreak`, `multimodal`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** DeepSeek, GPT-3.5 Turbo, GPT-4, GPT-4o

## Description

Multi-Agent Debate (MAD) frameworks leveraging Large Language Models (LLMs) are vulnerable to amplified jailbreak attacks.  A novel structured prompt-rewriting technique exploits the iterative dialogue and role-playing dynamics of MAD, circumventing inherent safety mechanisms and significantly increasing the likelihood of generating harmful content. The attack succeeds by using narrative encapsulation, role-driven escalation, iterative refinement, and rhetorical obfuscation to guide agents towards progressively elaborating harmful responses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
