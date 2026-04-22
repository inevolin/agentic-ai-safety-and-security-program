# Persona Performance Reversal

**Promptfoo CVE ID:** `5bbb3977`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-09T03:58:51.319Z  
**Source paper:** [The Persona Paradox: Medical Personas as Behavioral Priors in Clinical Language Models](https://arxiv.org/abs/2601.05376)  
**Tags:** `prompt-layer`, `blackbox`, `safety`, `reliability`  
**Affected models (as reported):** GPT-5, Llama 3.1 8B, Qwen 2.5 7B, Gemma 2 27B

## Description

A vulnerability in the prompt-based persona conditioning of clinical Large Language Models (LLMs) allows system-level role prompts (e.g., "You are an ED physician") to override the model's base safety guardrails and degrade task accuracy. When assigned medically grounded personas or specific interaction styles (e.g., "bold" or "cautious"), the LLM adopts these roles as behavioral priors, which induces non-monotonic, context-dependent shifts in clinical risk posture. While improving performance in high-acuity emergency tasks, this conditioning inadvertently triggers latent biases and overconfidence in lower-acuity (primary care) and open-ended patient safety scenarios. Consequently, the persona-conditioned model bypasses its default alignment, leading to increased rates of inappropriate triage, factual inaccuracy, and willingness to engage in unlicensed medical practice compared to unconditioned baselines.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
