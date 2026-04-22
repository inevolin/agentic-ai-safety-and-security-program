# LLM Ranker Jailbreak

**Promptfoo CVE ID:** `87f99b10`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T21:39:33.415Z  
**Source paper:** [The Vulnerability of LLM Rankers to Prompt Injection Attacks](https://arxiv.org/abs/2602.16752)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `rag`, `blackbox`, `integrity`  
**Affected models (as reported):** GPT-4o, Llama 3 8B, Llama 3.3 70B, Qwen 2.5 6B, Gemma 1B

## Description

LLM-based document re-rankers utilizing decoder-only and Mixture-of-Experts (MoE) architectures are vulnerable to candidate-embedded prompt injections during multi-document comparison tasks. By embedding Decision Objective Hijacking (DOH) or Decision Criteria Hijacking (DCH) prompts into candidate documents, attackers can manipulate the model's preference to artificially elevate an injected document to the top rank. The vulnerability exploits the models' instruction-following capabilities and exhibits a distinct scaling vulnerability: larger, more capable LLMs (e.g., 70B parameter models) are significantly more susceptible than smaller counterparts. Furthermore, the vulnerability heavily exploits recency bias in causal decoders during setwise and listwise ranking, where back-of-passage (end-of-document) injections are substantially more disruptive than front-placed ones.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
