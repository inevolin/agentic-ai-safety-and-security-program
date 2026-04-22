# LLM Self-Deception Jailbreak

**Promptfoo CVE ID:** `54e57dd9`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2023-08-01  
**Analyzed:** 2024-12-29T03:56:35.161Z  
**Source paper:** [Self-deception: Reverse penetrating the semantic firewall of large language models](https://arxiv.org/abs/2308.11521)  
**Tags:** `model-layer`, `jailbreak`, `safety`  
**Affected models (as reported):** 

## Description

Large language models (LLMs) are vulnerable to a "self-deception" attack, where carefully crafted prompts induce the model to bypass its internal safety mechanisms and generate outputs that would normally be blocked (e.g., harmful, biased, or illegal content). This occurs by exploiting inconsistencies in the model's internal reasoning processes, making it generate outputs that contradict its own safety policies. The attack does not involve direct code injection or data poisoning but rather manipulates the model's semantic understanding.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
