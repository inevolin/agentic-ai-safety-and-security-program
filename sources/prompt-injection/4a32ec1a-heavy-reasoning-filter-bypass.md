# Heavy Reasoning Filter Bypass

**Promptfoo CVE ID:** `4a32ec1a`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T21:31:22.410Z  
**Source paper:** [Analysis of LLMs Against Prompt Injection and Jailbreak Attacks](https://arxiv.org/abs/2602.22242)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** Llama 3.2 1B, Mistral 7B, DeepSeek-R1 5B, Qwen 2.5 7B, Gemma 1B, Phi-3 8B

## Description

Multiple open-source Large Language Models (LLMs) in the 1B to 7B parameter range are vulnerable to safety bypasses via long-form, multi-step reasoning prompt injection and jailbreak attacks. Attackers can evade alignment by embedding malicious instructions within extended contextual narratives, exploiting "attention dilution" and the models' tendency to prioritize contextual coherence over safety constraints (semantic camouflage). These reasoning-heavy attacks consistently bypass standard lightweight inference-time defenses, including prompt risk classification (input filtering), system prompt hardening, and vector-based semantic matching. Additionally, the attacks trigger a hidden failure mode in some models characterized by "silent non-responsiveness," where the model returns an empty response without a formal refusal message due to hard safety gating triggered before decoding.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
