# Automated LLM Jailbreak Framework

**Promptfoo CVE ID:** `14eef659`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-07-01  
**Analyzed:** 2024-12-28T23:24:21.470Z  
**Source paper:** [Jailbreaker: Automated jailbreak across multiple large language model chatbots](https://arxiv.org/abs/2307.08715)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Bard, Bing Chat, ERNIE, GPT-3.5 Turbo, GPT-4

## Description

The MASTER KEY framework exploits timing-based characteristics of Large Language Model (LLM) chatbot responses to infer internal defense mechanisms and automatically generate jailbreak prompts. This allows bypassing safety restrictions and eliciting responses violating usage policies, including generation of illegal, harmful, privacy-violating, and adult content. The framework utilizes a three-step process: reverse-engineering defenses via time-based analysis, creating proof-of-concept jailbreak prompts, and fine-tuning an LLM to automatically generate effective prompts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
