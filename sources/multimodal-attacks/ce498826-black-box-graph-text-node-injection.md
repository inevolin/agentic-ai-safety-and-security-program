# Black-Box Graph-Text Node Injection

**Promptfoo CVE ID:** `ce498826`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-11-01  
**Analyzed:** 2026-02-21T05:35:14.791Z  
**Source paper:** [GRAPHTEXTACK: A Realistic Black-Box Node Injection Attack on LLM-Enhanced GNNs](https://arxiv.org/abs/2511.12423)  
**Tags:** `model-layer`, `poisoning`, `multimodal`, `embedding`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** Llama 2 7B

## Description

LLM-enhanced Graph Neural Networks (GNNs), which integrate Large Language Model (LLM) feature encoders with graph message-passing architectures, are vulnerable to a black-box node injection attack known as "GraphTextack." This vulnerability exists because the joint model architecture creates a dual attack surface: the GNN component is sensitive to structural perturbations (changes in graph topology), while the LLM component is sensitive to semantic perturbations (adversarial phrasing).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
