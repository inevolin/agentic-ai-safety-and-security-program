# Breaking the LLM Reviewer

**Promptfoo CVE ID:** `6df5d2d0`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-12-09T02:35:09.672Z  
**Source paper:** [Breaking the Reviewer: Assessing the Vulnerability of Large Language Models in Automated Peer Review Under Textual Adversarial Attacks](https://arxiv.org/abs/2506.11113)  
**Tags:** `model-layer`, `prompt-layer`, `blackbox`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4o, Llama 3.3 70B, Mistral Large

## Description

Large Language Models (LLMs) deployed in automated peer review workflows are vulnerable to targeted textual adversarial attacks. By employing a technique defined as "Attack Focus Localization," an attacker can identify critical document segments via Longest Common Subsequence (LCS) matching between the original text and an initial LLM-generated review. Injecting semantic-preserving perturbationsâsuch as character-level noise, synonym substitution (e.g., TextFooler), or stylistic transfer (e.g., StyleAdv)âinto these localized segments causes the LLM to statistically significantly inflate quality scores (e.g., boosting "Soundness" or "Originality" ratings) and suppress negative aspect tags. This vulnerability bypasses standard AI-text detectors and allows manipulated manuscripts to receive favorable automated assessments without altering the paper's actual scientific contribution.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
