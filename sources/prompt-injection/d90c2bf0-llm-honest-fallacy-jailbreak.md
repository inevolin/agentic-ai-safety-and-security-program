# LLM Honest Fallacy Jailbreak

**Promptfoo CVE ID:** `d90c2bf0`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-29T03:35:18.907Z  
**Source paper:** [Large Language Models Are Involuntary Truth-Tellers: Exploiting Fallacy Failure for Jailbreak Attacks](https://arxiv.org/abs/2407.00869)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Gemini Pro, GPT-3.5 Turbo, GPT-4, Llama 3, Vicuna v1.5

## Description

Large Language Models (LLMs) struggle to generate genuinely fallacious reasoning. When prompted to create a false procedure for a harmful task, the LLMs instead leak the correct, harmful procedure while incorrectly claiming it's false. This vulnerability allows bypassing safety mechanisms and eliciting harmful outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
