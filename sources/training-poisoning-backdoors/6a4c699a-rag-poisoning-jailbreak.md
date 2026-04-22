# RAG Poisoning Jailbreak

**Promptfoo CVE ID:** `6a4c699a`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-29T03:59:26.197Z  
**Source paper:** [Pandora: Jailbreak gpts by retrieval augmented generation poisoning](https://arxiv.org/abs/2402.08416)  
**Tags:** `rag`, `poisoning`, `jailbreak`, `application-layer`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Mistral 7B

## Description

Large Language Models (LLMs) utilizing Retrieval Augmented Generation (RAG) are vulnerable to a novel attack vector, termed "RAG Poisoning," where malicious content is injected into the external knowledge base accessed by the LLM via prompt manipulation. This allows attackers to elicit undesirable or malicious outputs from the LLM, bypassing its safety filters. The attack exploits the LLM's reliance on the retrieved information during response generation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
