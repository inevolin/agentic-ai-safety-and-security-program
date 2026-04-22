# RAG Knowledgebase Exfiltration

**Promptfoo CVE ID:** `5cc4207b`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T15:26:16.611Z  
**Source paper:** [Benchmarking Knowledge-Extraction Attack and Defense on Retrieval-Augmented Generation](https://arxiv.org/abs/2602.09319)  
**Tags:** `application-layer`, `prompt-layer`, `extraction`, `injection`, `jailbreak`, `rag`, `embedding`, `blackbox`, `whitebox`, `data-privacy`  
**Affected models (as reported):** GPT-4o, Llama 3 8B, Qwen 2.5 7B

## Description

Retrieval-Augmented Generation (RAG) systems are vulnerable to iterative knowledge-extraction attacks designed to reconstruct the underlying private knowledge base. The vulnerability exists due to the decoupled optimization of the retrieval and generation phases. Attackers can craft adversarial queries consisting of two distinct components: an "Information" component (optimized via gradient descent or random sampling to steer embeddings toward specific, diverse regions of the vector space) and a "Command" component (prompts instructing the generator to ignore safety guardrails and verbatim reproduce retrieved context). Methods such as Dynamic Greedy Embedding Attack (DGEA) and Implicit Knowledge Extraction Attack (IKEA) exploit this architecture to bypass similarity threshold filters and intent detection classifiers, allowing unauthorized exfiltration of proprietary or sensitive data (e.g., PII, internal communications) stored in the vector index.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
