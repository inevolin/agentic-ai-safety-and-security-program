# Clinical LLM Feature Evasion

**Promptfoo CVE ID:** `ee712d2c`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T21:36:04.660Z  
**Source paper:** [Detecting Jailbreak Attempts in Clinical Training LLMs Through Automated Linguistic Feature Extraction](https://arxiv.org/abs/2602.13321)  
**Tags:** `prompt-layer`, `application-layer`, `jailbreak`, `injection`, `blackbox`, `safety`  
**Affected models (as reported):** 

## Description

A detection bypass vulnerability in the 2-Sigma clinical training platform allows users to evade the system's two-layer, linguistic-feature-based jailbreak detection mechanism. The detection framework relies heavily on four surface-level linguistic features (Professionalism, Medical Relevance, Ethical Behavior, and Contextual Distraction) to classify malicious inputs. Attackers can bypass these filters by crafting prompts that maintain professional tone and apparent medical relevance but introduce clinically illogical instructions, subtle humorous derailments, or polite workflow bypasses. Because the feature extractors evaluate tone and relevance rather than procedural integrity or medical validity, these adversarial prompts successfully manipulate the LLM into off-task or unsafe behavior without being flagged.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
