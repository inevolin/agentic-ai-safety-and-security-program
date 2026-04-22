# Automated LLM Jailbreak

**Promptfoo CVE ID:** `dd8af14c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-10-01  
**Analyzed:** 2024-12-28T23:29:34.979Z  
**Source paper:** [Jailbreaking black box large language models in twenty queries](https://arxiv.org/abs/2310.08419)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** Gemini, GPT-3.5/4, Vicuna

## Description

Large Language Models (LLMs) are vulnerable to prompt-based jailbreaks, allowing adversaries to bypass safety guardrails and elicit undesirable outputs. The Prompt Automatic Iterative Refinement (PAIR) algorithm efficiently generates these jailbreaks using a limited number of black-box queries to the target LLM. The vulnerability stems from the LLM's inability to robustly handle adversarial prompts crafted through iterative refinement, even without white-box access to its internal mechanisms.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
