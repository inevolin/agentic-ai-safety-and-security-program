# Emoji Judge Bypass

**Promptfoo CVE ID:** `2d67c17f`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-11-01  
**Analyzed:** 2024-12-29T02:26:34.565Z  
**Source paper:** [Emoji Attack: A Method for Misleading Judge LLMs in Safety Risk Detection](https://arxiv.org/abs/2411.01077)  
**Tags:** `prompt-layer`, `jailbreak`, `model-layer`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Llama Guard, Llama Guard 2, ShieldLM, WildGuard

## Description

Large Language Models (LLMs) used as safety judges are vulnerable to an "Emoji Attack," a prompt injection technique that leverages token segmentation bias. Inserting emojis within tokens alters sub-token embeddings, misleading the judge LLM into classifying harmful content as safe. The attack's effectiveness is amplified by strategically placing emojis to maximize the embedding discrepancy between sub-tokens and the original token.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
