# Unified Robustness Gap

**Promptfoo CVE ID:** `694be794`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-09T04:24:12.535Z  
**Source paper:** [Unifying Adversarial Robustness and Training Across Text Scoring Models](https://arxiv.org/abs/2602.00857)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `poisoning`, `jailbreak`, `rag`, `embedding`, `fine-tuning`, `blackbox`, `whitebox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** GPT-5.1, Llama 3.1 8B, Llama 3.2 1B, Qwen 2.5 6B, Gemma 27B

## Description

Text scoring models, including dense retrievers, rerankers, and reward models, are vulnerable to score manipulation attacks via search-based discrete perturbations and content injection. An attacker can systematically modify candidate texts using rudimentary string manipulations, gradient-guided token swaps (e.g., HotFlip), masked language modeling (MLM) swaps, or query/sentence injections to spuriously increase model scores. This structural failure condition allows an irrelevant passage or a rejected, unsafe LLM response to outscore a relevant passage or safe response. Existing adversarial training defenses targeting open-ended generation (like standard PGD or HotFlip training) fail to reliably generalize to content injection threats, leaving NLP scoring pipelines exposed.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
