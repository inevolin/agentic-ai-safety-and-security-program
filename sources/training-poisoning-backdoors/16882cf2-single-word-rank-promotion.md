# Single Word Rank Promotion

**Promptfoo CVE ID:** `16882cf2`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T05:49:09.959Z  
**Source paper:** [One Word is Enough: Minimal Adversarial Perturbations for Neural Text Ranking](https://arxiv.org/abs/2601.20283)  
**Tags:** `model-layer`, `poisoning`, `rag`, `embedding`, `whitebox`, `integrity`, `reliability`  
**Affected models (as reported):** 

## Description

Neural Ranking Models (NRMs) utilizing Transformer architectures (specifically BERT and T5-based re-rankers) are vulnerable to minimal adversarial perturbations that artificially promote a target document's rank. The vulnerability allows an attacker to manipulate ranking outcomes by inserting or substituting a single "query center" tokenâa word identified as the semantic centroid of the user's queryâinto the target document. The attack exploits the model's sensitivity to specific semantic triggers and positional embedding weights. Three specific variants facilitate this exploitation: `one_word_start` (prepending the query center), `one_word_sim` (substituting the most semantically similar word in the document), and `one_word_best_grad` (a gradient-guided white-box insertion). This method achieves high attack success rates while modifying fewer than two tokens on average, bypassing semantic drift checks by maintaining high cosine similarity to the original document.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
