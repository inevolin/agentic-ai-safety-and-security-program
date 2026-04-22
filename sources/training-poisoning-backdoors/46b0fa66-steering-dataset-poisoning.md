# Steering Dataset Poisoning

**Promptfoo CVE ID:** `46b0fa66`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-03-08T23:26:17.211Z  
**Source paper:** [Understanding and Mitigating Dataset Corruption in LLM Steering](https://arxiv.org/abs/2603.03206)  
**Tags:** `model-layer`, `poisoning`, `integrity`, `safety`  
**Affected models (as reported):** Llama 3.2 3B, Mistral 7B

## Description

A vulnerability in contrastive activation steering allows attackers to subvert Large Language Model (LLM) behavior via dataset poisoning. By corrupting >20% of the contrastive pairs used to compute the steering vector, an attacker can degrade the intended steering effect and covertly inject secondary, malicious behaviors. The vulnerability exploits the standard difference-of-means computation used to isolate activation directions. Because the steering vector is calculated as the unweighted difference between the mean of positive and negative high-dimensional activations, coordinated outlier data systematically distorts both the cosine similarity and projected norm of the resulting vector.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
