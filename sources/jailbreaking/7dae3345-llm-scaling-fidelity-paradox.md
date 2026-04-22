# LLM Scaling Fidelity Paradox

**Promptfoo CVE ID:** `7dae3345`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T23:11:28.060Z  
**Source paper:** [When Less is More: The LLM Scaling Paradox in Context Compression](https://arxiv.org/abs/2602.09789)  
**Tags:** `model-layer`, `hallucination`, `embedding`, `whitebox`, `integrity`, `reliability`  
**Affected models (as reported):** Llama 3 8B, Llama 3.2 90B, Qwen 2.5 6B

## Description

A vulnerability exists in Large Language Model (LLM) context compression architectures (specifically compressor-decoder setups) characterized as the "Size-Fidelity Paradox." When scaling up the parameter count of the compressor model (e.g., beyond 4B parameters in Qwen-3 and LLaMA-3.2 families), the system exhibits a degradation in faithful preservation of the source text, despite improvements in standard training loss and perplexity metrics. This degradation manifests through two primary mechanisms: "Knowledge Overwriting," where the model replaces specific source facts with its own internal parametric knowledge (priors), and "Semantic Drift," where the model paraphrases content in a way that distorts relational structures (e.g., role binding, negation). This issue stems from the increased effective rank of context embeddings and higher conditional entropy in larger models, causing them to prioritize internal generative priors over the rigid fidelity required for lossless context reconstruction.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
