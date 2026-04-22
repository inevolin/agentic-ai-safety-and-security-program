# Alignment Override Unlearnable Data

**Promptfoo CVE ID:** `47a02815`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-08T22:28:25.962Z  
**Source paper:** [Rendering Data Unlearnable by Exploiting LLM Alignment Mechanisms](https://arxiv.org/abs/2601.03401)  
**Tags:** `model-layer`, `poisoning`, `fine-tuning`, `data-privacy`, `integrity`  
**Affected models (as reported):** GPT-5.1, Llama 3 8B

## Description

A data poisoning vulnerability in safety-aligned Large Language Models (LLMs) allows attackers to disrupt model fine-tuning via "Disclaimer Injection." By appending or prepending short, legal-style safety or liability disclaimers to ordinary training data, an attacker can reliably trigger the model's internal alignment mechanisms. This forces the model to route the training inputs through specialized safety and refusal pathways rather than standard task-learning layers. Consequently, the model fails to acquire the underlying semantic knowledge, leading to severe and systematic degradation in downstream task performance. The attack operates entirely black-box, requires no access to model parameters, and is highly robust to semantic paraphrasing and varied optimization regimes (e.g., LoRA, full fine-tuning).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
