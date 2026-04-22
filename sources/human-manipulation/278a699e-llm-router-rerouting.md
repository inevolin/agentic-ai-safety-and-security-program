# LLM Router Rerouting

**Promptfoo CVE ID:** `278a699e`  
**Category (this corpus):** `human-manipulation`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-08T22:12:09.728Z  
**Source paper:** [RerouteGuard: Understanding and Mitigating Adversarial Risks for LLM Routing](https://arxiv.org/abs/2601.21380)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `denial-of-service`, `chain`, `blackbox`, `whitebox`, `safety`, `reliability`, `integrity`  
**Affected models (as reported):** GPT-4, GPT-4o, GPT-5, Llama 3 8B, Mixtral 8x7B 8X7B

## Description

LLM routing systems are vulnerable to adversarial rerouting attacks where malicious triggers prepended to user queries manipulate the router's model-selection mechanism. Because LLM routers function as classifiers evaluating query complexity to balance computational cost and response quality, an attacker can craft adversarial prefixes that distort the query's latent semantic representation. This exploits the router's decision boundaries, forcing the system to misclassify the input and redirect it to a targeted, sub-optimal language model.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
