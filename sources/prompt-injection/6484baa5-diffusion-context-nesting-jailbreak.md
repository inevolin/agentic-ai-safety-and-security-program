# Diffusion Context Nesting Jailbreak

**Promptfoo CVE ID:** `6484baa5`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-21T00:28:47.718Z  
**Source paper:** [A Fragile Guardrail: Diffusion LLM's Safety Blessing and Its Failure Mode](https://arxiv.org/abs/2602.00388)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o

## Description

Diffusion Large Language Models (D-LLMs) are vulnerable to a "Context Nesting" attack that bypasses safety alignment mechanisms. While D-LLMs typically utilize a stepwise reduction effect during the iterative denoising process to suppress harmful content, this mechanism fails when harmful requests are embedded within benign, structured contexts. By wrapping a malicious query inside high-level structural templates (such as code completion, table filling, JSON, or YAML formats), an attacker can force the model to prioritize the structural scaffold over safety constraints. This results in the model refining the harmful content as part of the structure rather than suppressing it, successfully generating prohibited content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
