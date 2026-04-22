# Aggressive Compression Model Theft

**Promptfoo CVE ID:** `2292eb64`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T23:28:14.776Z  
**Source paper:** [Aggressive Compression Enables LLM Weight Theft](https://arxiv.org/abs/2601.01296)  
**Tags:** `model-layer`, `infrastructure-layer`, `extraction`, `fine-tuning`, `whitebox`, `api`, `data-security`  
**Affected models (as reported):** GPT-4, Llama 3 8B, Qwen 2 5B, Qwen 2.5 5B

## Description

Large Language Models (LLMs) hosted on inference servers are vulnerable to high-speed weight exfiltration attacks due to the inherent compressibility of transformer parameters when decompression constraints are relaxed. Adversaries with compromised server access can utilize aggressive lossy compression techniquesâspecifically additive quantization combined with k-means clusteringâto reduce model size by factors of 16x to 100x (e.g., <1 bit per parameter). Unlike standard quantization for inference, this attack vector relies on post-exfiltration fine-tuning to recover model fidelity. This allows attackers to bypass standard data egress limits and Data Loss Prevention (DLP) monitoring, reducing the time required to steal a frontier model from months to days.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
