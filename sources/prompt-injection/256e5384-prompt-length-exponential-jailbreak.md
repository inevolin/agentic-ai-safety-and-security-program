# Prompt Length Exponential Jailbreak

**Promptfoo CVE ID:** `256e5384`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T20:29:28.403Z  
**Source paper:** [Jailbreak Scaling Laws for Large Language Models: Polynomial-Exponential Crossover](https://arxiv.org/abs/2603.11331)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `whitebox`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4, Claude 3.5, Claude 4.5, Llama 3 8B, Llama 3.2 3B, Mistral 7B, Vicuna 7B

## Description

A vulnerability in safety-aligned Large Language Models (LLMs) allows attackers to achieve an exponentially scaling Attack Success Rate (ASR) for jailbreaks by combining adversarial prompt injection with repeated inference-time sampling. While ASR against un-injected prompts scales polynomially with the number of generated samples ($k$), introducing a long adversarial suffix acts as a strong "misalignment field." This shifts the model's generation distribution into a replica-symmetric ordered phase, yielding exponential scaling of the jailbreak success rate $\Pi_k$. Consequently, attackers can reliably bypass safety guardrails and force compliance by simply appending a universal adversarial suffix and drawing multiple inference-time responses for a single prompt.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
