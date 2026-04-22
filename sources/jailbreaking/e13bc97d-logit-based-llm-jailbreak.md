# Logit-Based LLM Jailbreak

**Promptfoo CVE ID:** `e13bc97d`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-05-01  
**Analyzed:** 2024-12-28T23:33:04.482Z  
**Source paper:** [Lockpicking LLMs: A Logit-Based Jailbreak Using Token-level Manipulation](https://arxiv.org/abs/2405.13068)  
**Tags:** `model-layer`, `jailbreak`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** Gemma 7B IT, Llama 2 13B Chat, Llama 2 7B Chat, Llama 3 8B Instruct, Mistral 7B Instruct

## Description

**Description**: A vulnerability exists in several large language models (LLMs) allowing attackers to manipulate the models' output logits, biasing the probability distribution toward the generation of harmful content. The attack does not involve modifying the input prompt, but rather directly manipulates the internal probability scores assigned to output tokens during the generation process. By strategically increasing the logits of tokens forming a harmful response while decreasing those belonging to safety filters, an adversary can cause the LLM to produce undesired outputs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
