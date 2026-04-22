# Automating Stealthy LLM Jailbreaks

**Promptfoo CVE ID:** `f90f13f1`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-10-01  
**Analyzed:** 2024-12-28T23:33:34.413Z  
**Source paper:** [Autodan: Generating stealthy jailbreak prompts on aligned large language models](https://arxiv.org/abs/2310.04451)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Llama 2

## Description

Large Language Models (LLMs) employing alignment techniques remain vulnerable to "jailbreak" attacks. The AutoDAN technique automatically generates semantically meaningful prompts that bypass safety features and elicit malicious outputs from aligned LLMs, unlike previous methods producing nonsensical prompts easily detectable by perplexity checks. These prompts exploit weaknesses in the LLM's alignment, causing it to generate responses that violate intended safety constraints.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
