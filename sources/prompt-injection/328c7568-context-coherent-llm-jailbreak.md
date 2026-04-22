# Context-Coherent LLM Jailbreak

**Promptfoo CVE ID:** `328c7568`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-04T19:28:15.412Z  
**Source paper:** [CCJA: Context-Coherent Jailbreak Attack for Aligned Large Language Models](https://arxiv.org/abs/2502.11379)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `injection`, `safety`, `integrity`  
**Affected models (as reported):** Guanaco 13B, Llama 2 7B Chat, Llama 3 8B Instruct, Mistral 7B Instruct v0.2, Mistral 7B Instruct v0.3, Vicuna 13B v1.5, Vicuna 7B v1.5

## Description

A context-coherent jailbreak attack (CCJA) allows bypassing safety mechanisms in aligned large language models (LLMs) by optimizing perturbations in the continuous word embedding space of a masked language model (MLM). The attack leverages the MLM's ability to reconstruct text from hidden states to generate semantically coherent yet malicious prompts that induce the target LLM to produce unsafe outputs, even with strong safety alignment. The attack's effectiveness is enhanced by using a seed prompt to generate an instruction-following prefix, which guides the LLM towards affirmative responses to harmful queries.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
