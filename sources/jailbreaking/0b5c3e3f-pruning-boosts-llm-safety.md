# Pruning Boosts LLM Safety

**Promptfoo CVE ID:** `0b5c3e3f`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-01-01  
**Analyzed:** 2024-12-29T01:15:54.479Z  
**Source paper:** [Pruning for protection: Increasing jailbreak resistance in aligned llms without fine-tuning](https://arxiv.org/abs/2401.10862)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 2 Chat, Mistral 7B Instruct v0.2, Vicuna v1.3

## Description

Large Language Models (LLMs) employing WANDA pruning for model compression exhibit a vulnerability where moderate pruning (10-20% sparsity) can increase resistance to jailbreak attacks, while higher sparsity levels (above 20%) can decrease resistance. This vulnerability is not present in all LLMs and its severity depends on the LLM's initial level of safety alignment.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
