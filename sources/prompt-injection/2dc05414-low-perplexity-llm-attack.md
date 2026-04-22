# Low-Perplexity LLM Attack

**Promptfoo CVE ID:** `2dc05414`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-07-01  
**Analyzed:** 2025-07-14T03:48:43.760Z  
**Source paper:** [ASTPrompter: Weakly Supervised Automated Language Model Red-Teaming to Identify Low-Perplexity Toxic Prompts](https://arxiv.org/abs/2407.09447)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Llama 3.1 8B, Mistral 7B, Qwen 7B, TinyLlama 1.1

## Description

Large Language Models (LLMs) are vulnerable to adversarial attacks that utilize low-perplexity prompts to elicit unsafe content.  These prompts, while statistically likely to occur in normal conversation, can trigger the generation of harmful or toxic outputs that evade standard safety filters.  The vulnerability stems from the model's inability to reliably distinguish between benign and malicious intents within the statistical distribution of natural language.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
