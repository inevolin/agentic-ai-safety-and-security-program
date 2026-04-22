# LLM Review Paraphrase Attack

**Promptfoo CVE ID:** `e1fc2e08`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T00:52:53.929Z  
**Source paper:** [Paraphrasing Adversarial Attack on LLM-as-a-Reviewer](https://arxiv.org/abs/2601.06884)  
**Tags:** `application-layer`, `prompt-layer`, `model-layer`, `blackbox`, `agent`, `integrity`, `reliability`, `multimodal`  
**Affected models (as reported):** GPT-4o, Claude 4, Gemini 2

## Description

LLM-as-a-Reviewer systems, which utilize large language models to automate the peer review process, are vulnerable to the Paraphrasing Adversarial Attack (PAA). PAA is a black-box optimization technique that exploits the model's sensitivity to specific input sequences and self-preference bias. By iteratively paraphrasing specific manuscript sections (such as the abstract) using in-context learning (ICL) guided by previous review scores, an attacker can generate adversarial sequences that significantly inflate the review score. Unlike traditional prompt injections or jailbreaks, PAA maintains semantic equivalence (verified via BERTScore) and linguistic naturalness (verified via perplexity thresholds), effectively manipulating the evaluation system without altering the scientific claims or content of the submission.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
