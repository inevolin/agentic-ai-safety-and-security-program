# JailFlip Implicit Harm

**Promptfoo CVE ID:** `dfd60742`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-12-08T22:15:12.591Z  
**Source paper:** [Beyond Jailbreaks: Revealing Stealthier and Broader LLM Security Risks Stemming from Alignment Failures](https://arxiv.org/abs/2506.07402)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `hallucination`, `injection`, `multimodal`, `vision`, `blackbox`, `whitebox`, `safety`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4o, Claude 3, Claude 3.7, Gemini 1.5, Gemini 2

## Description

A vulnerability exists in the safety alignment mechanisms of Large Language Models (LLMs) (including GPT-4, Claude 3, Gemini, and Qwen families) leading to "Implicit Harm." Unlike traditional jailbreaks that use overtly harmful queries, this vulnerability allows remote attackers to coerce the model into providing factually incorrect, plausible, and dangerous responses to benign-looking inputs. By employing "JailFlip" techniquesâspecifically constructed affirmative-type or denial-type queries combined with adversarial instruction blocks or suffixesâattackers can flip the model's factual predictions. This causes the model to generate persuasive justification for dangerous actions (e.g., stating one can fly using an umbrella) while bypassing standard refusal training and input filters, which typically rely on detecting explicit harmful intent or keywords.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
