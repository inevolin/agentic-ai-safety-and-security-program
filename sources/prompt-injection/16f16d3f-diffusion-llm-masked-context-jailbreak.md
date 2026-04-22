# Diffusion LLM Masked Context Jailbreak

**Promptfoo CVE ID:** `16f16d3f`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-08-16T04:27:48.766Z  
**Source paper:** [The Devil behind the mask: An emergent safety vulnerability of Diffusion LLMs](https://arxiv.org/abs/2507.11097)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** DREAM v0 Instruct 7B, LLaDA 1.5, LLaDA 8B Instruct, MMaDA 8B MixCoT

## Description

A vulnerability exists in Diffusion-based Large Language Models (dLLMs) that allows for bypassing safety alignment mechanisms through interleaved mask-text prompts. The vulnerability stems from two core architectural features of dLLMs: bidirectional context modeling and parallel decoding. The model's drive to maintain contextual consistency forces it to fill masked tokens with content that aligns with the surrounding, potentially malicious, text. The parallel decoding process prevents dynamic content filtering or rejection sampling during generation, which are common defense mechanisms in autoregressive models. This allows an attacker to elicit harmful or policy-violating content by explicitly stating a malicious request and inserting mask tokens where the harmful output should be generated.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
