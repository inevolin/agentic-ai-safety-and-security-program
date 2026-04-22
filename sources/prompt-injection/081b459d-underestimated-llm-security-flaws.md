# Underestimated LLM Security Flaws

**Promptfoo CVE ID:** `081b459d`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-12-30T20:37:08.413Z  
**Source paper:** [Towards reliable and practical LLM security evaluations via Bayesian modelling](https://arxiv.org/abs/2510.05709)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `extraction`, `hallucination`, `blackbox`, `reliability`, `safety`  
**Affected models (as reported):** Llama 3.2 3B, Falcon 7B

## Description

Mamba-2 and hybrid Transformer-Mamba-2 distilled Large Language Model (LLM) architectures exhibit a distinct architectural susceptibility to Latent Injection and ANSI Escape sequence prompt injection attacks. Comparative analysis reveals that models incorporating Mamba state-space components (specifically distilled variants like Llamba-3B and base Mamba models) fail to maintain adversarial robustness levels comparable to pure Transformer baselines (such as Llama-3.2) when subjected to indirect or obfuscated instruction injection. This vulnerability allows attackers to bypass safety guardrails by embedding malicious directives within latent prompt structures or non-printable character sequences that the state-space model processes as valid context.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
