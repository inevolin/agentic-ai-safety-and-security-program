# Robotic LLM Jailbreak

**Promptfoo CVE ID:** `9288fcc5`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-28T23:22:56.875Z  
**Source paper:** [Jailbreaking LLM-controlled robots](https://arxiv.org/abs/2410.13691)  
**Tags:** `prompt-layer`, `jailbreak`, `agent`, `blackbox`, `whitebox`, `safety`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, GPT-4o, Nvidia Dolphins Self-driving Llm

## Description

Large language models (LLMs) controlling robots are vulnerable to jailbreaking attacks. The ROBOPAIR algorithm demonstrates that malicious prompts can bypass safety mechanisms, causing robots to perform harmful physical actions. This vulnerability exploits the LLM's reliance on textual prompts and its potential lack of sufficient contextual understanding to prevent unsafe commands. The attack is effective across different access levels.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
