# Adaptive Tool-Disguised Jailbreak

**Promptfoo CVE ID:** `a3c00f58`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-20T23:39:43.830Z  
**Source paper:** [Jailbreaking Large Language Models through Iterative Tool-Disguised Attacks via Reinforcement Learning](https://arxiv.org/abs/2601.05466)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `agent`, `api`, `safety`  
**Affected models (as reported):** Llama 3.1 8B, DeepSeek-V3 671B

## Description

Large Language Models (LLMs) supporting function calling (tool use) are vulnerable to a jailbreak attack known as iMIST (interactive Multi-step Progressive Tool-disguised Jailbreak Attack). The vulnerability stems from a disparity in alignment training: while models are heavily aligned to refuse harmful natural language generation, they lack sufficient alignment regarding the generation of harmful content within structured data (JSON) used for tool parameters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
