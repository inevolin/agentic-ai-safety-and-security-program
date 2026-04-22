# Adversarial RAG Context Poisoning

**Promptfoo CVE ID:** `c1df6a36`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-12-09T03:43:24.724Z  
**Source paper:** [Evaluating the Robustness of Retrieval-Augmented Generation to Adversarial Evidence in the Health Domain](https://arxiv.org/abs/2509.03787)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `poisoning`, `rag`, `blackbox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4, GPT-5, Claude 3.5, Llama 3 8B, DeepSeek-R1 32B

## Description

Retrieval-Augmented Generation (RAG) systems in the health domain are vulnerable to corpus poisoning attacks where adversarial documentsâspecifically those generated via "Liar" (fabricated from scratch based on an incorrect stance) and "Few-Shot Adversarial Prompting" (FSAP)âare injected into the retrieval pool. When these adversarial documents are retrieved and presented as context, they successfully override the Large Language Model's (LLM) internal safety alignment and ground-truth knowledge. This vulnerability is exacerbated by "inconsistent" user query framing, where the user's prompt contains presuppositions that contradict established medical consensus. Experiments demonstrate that highly optimized adversarial documents (e.g., Liar strategy) can degrade ground-truth alignment rates from near 90% to approximately 0% in models including GPT-4.1, GPT-5, Claude-3.5-Haiku, and LLaMA-3, causing the system to confidently generate medically harmful misinformation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
