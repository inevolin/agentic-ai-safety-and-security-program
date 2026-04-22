# Semantic Intention Obfuscation

**Promptfoo CVE ID:** `31ab9c11`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-08T22:29:28.635Z  
**Source paper:** [KG-DF: A Black-box Defense Framework against Jailbreak Attacks Based on Knowledge Graphs](https://arxiv.org/abs/2511.07480)  
**Tags:** `prompt-layer`, `jailbreak`, `rag`, `embedding`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** GPT-3.5, GPT-4, Llama 2 7B, Vicuna 7B

## Description

The KG-DF (Knowledge Graph Defense Framework) contains a logic vulnerability in its Semantic Parsing Module, specifically within the keyword extraction phase defined as $K_{core} = \text{LLM}(P_{prompt})$. The framework relies on a Large Language Model (e.g., GPT-3.5-turbo) to distill user input into keywords ($K_{core}$), which are then embedded to retrieve security warning triples ($T_{match}$) from a Knowledge Graph.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
