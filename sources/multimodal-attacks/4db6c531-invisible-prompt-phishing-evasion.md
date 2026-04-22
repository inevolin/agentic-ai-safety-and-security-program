# Invisible Prompt Phishing Evasion

**Promptfoo CVE ID:** `4db6c531`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T22:00:57.950Z  
**Source paper:** [Clouding the Mirror: Stealthy Prompt Injection Attacks Targeting LLM-based Phishing Detection](https://arxiv.org/abs/2602.05484)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `denial-of-service`, `rag`, `vision`, `multimodal`, `blackbox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** GPT-5, Llama 4

## Description

Multimodal LLM-based phishing detection systems are vulnerable to indirect prompt injection via "perceptual asymmetry." Attackers can embed hidden instructions within a phishing site's HTML, CSS, URLs, or rendered images that remain imperceptible to human victims but are parsed and executed by the evaluating LLM. This vulnerability allows threat actors to manipulate the LLM's contextual understanding, forcing it to misclassify malicious sites as benign (Legitimate Pretexting), trigger safety filters to halt detection (Safety Policy Triggering), or output malformed data to break downstream automated pipelines (Tool/Function Hijacking).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
