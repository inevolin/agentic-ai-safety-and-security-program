# Guardrail Policy Extraction

**Promptfoo CVE ID:** `094c9f3a`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-11-01  
**Analyzed:** 2026-02-21T02:18:55.002Z  
**Source paper:** [Black-Box Guardrail Reverse-engineering Attack](https://arxiv.org/abs/2511.04215)  
**Tags:** `model-layer`, `extraction`, `prompt-leaking`, `blackbox`, `api`, `safety`, `data-security`  
**Affected models (as reported):** GPT-4o, Llama 3.1 8B

## Description

A black-box guardrail reverse-engineering vulnerability exists in Large Language Model (LLM) serving systems that employ output filtering mechanisms. The vulnerability allows remote attackers to replicate the proprietary decision-making policy and rule sets of the target's safety guardrail without direct access to model parameters. This is achieved through a technique termed Guardrail Reverse-engineering Attack (GRA), which utilizes a reinforcement learning framework combined with genetic algorithm-driven data augmentation (mutation and crossover). By iteratively querying the target system and analyzing the "purified" outputs or refusals, the attacker trains a local surrogate model. The attack prioritizes "divergence cases"âinputs where the surrogate and victim disagreeâto map the victim's hidden decision boundaries. This results in a high-fidelity extraction of the safety policy (achieving >0.92 rule matching rate in testing), enabling the attacker to perform offline attacks to discover bypasses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
