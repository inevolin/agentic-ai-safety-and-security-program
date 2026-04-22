# Token Sensitivity Jailbreak

**Promptfoo CVE ID:** `de35e506`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T20:31:20.258Z  
**Source paper:** [Not All Tokens Are Created Equal: Query-Efficient Jailbreak Fuzzing for LLMs](https://arxiv.org/abs/2603.23269)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `api`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4o, Claude 3.5, Llama 3 8B, Llama 3.2 3B, Qwen 2.5 3B, Gemma 2 9B, Gemma 7B

## Description

Transformer-based Large Language Models (LLMs) are vulnerable to highly query-efficient black-box jailbreak attacks due to the structural properties of refusal behaviors: skewed token contribution and cross-model consistency. Refusal mechanisms within LLMs are typically triggered by a sparse subset of sensitive tokens rather than the entire prompt, and these refusal representations (specifically the primary left singular vector of the perturbed representation matrix at intermediate layers) are highly consistent across different model architectures. An attacker can leverage a local white-box surrogate model to extract token-level attention weights from refusal-critical heads, identify the exact tokens triggering the refusal, and perform highly localized semantic mutations. This allows attackers to bypass safety guardrails on remote, black-box commercial APIs utilizing very few queries (<25), rendering standard rate-limiting and query-cost constraints ineffective.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
