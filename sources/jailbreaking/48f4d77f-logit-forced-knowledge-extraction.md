# Logit-Forced Knowledge Extraction

**Promptfoo CVE ID:** `48f4d77f`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2023-12-01  
**Analyzed:** 2024-12-29T04:25:56.327Z  
**Source paper:** [Make them spill the beans! coercive knowledge extraction from (production) llms](https://arxiv.org/abs/2312.04782)  
**Tags:** `extraction`, `jailbreak`, `prompt-leaking`, `blackbox`, `data-security`, `safety`  
**Affected models (as reported):** Codellama-13B-instruct, Codellama-13B-python, GPT-3.5, GPT-3.5-turbo-instruct, GPT-3.5-turbo-instruct-0914, Llama 2 13B, Llama 2 7B, Llama2-70B, Vicuna 13B, Yi-34B

## Description

Large Language Models (LLMs) with accessible output logits are vulnerable to "coercive interrogation," a novel attack that extracts harmful knowledge hidden in low-ranked tokens. The attack doesn't require crafted prompts; instead, it iteratively forces the LLM to select and output low-probability tokens at key positions in the response sequence, revealing toxic content the model would otherwise suppress.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
