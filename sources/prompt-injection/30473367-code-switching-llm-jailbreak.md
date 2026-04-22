# Code-Switching LLM Jailbreak

**Promptfoo CVE ID:** `30473367`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-06-01  
**Analyzed:** 2024-12-28T18:29:48.351Z  
**Source paper:** [Code-Switching Red-Teaming: LLM Evaluation for Safety and Multilingual Understanding](https://arxiv.org/abs/2406.15481)  
**Tags:** `prompt-layer`, `jailbreak`, `injection`, `blackbox`, `safety`, `reliability`, `integrity`  
**Affected models (as reported):** 

## Description

Large Language Models (LLMs) exhibit increased vulnerability to adversarial prompts employing code-switching techniques, where multiple languages are interwoven within a single query. This vulnerability stems from an unintended correlation between the resource availability of the languages used in the prompt and the LLM's safety alignment. LLMs trained on imbalanced multilingual data are more susceptible to attacks leveraging low-resource languages, resulting in a higher rate of unsafe or undesirable responses compared to monolingual prompts. Intra-sentence code-switching is particularly effective.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
