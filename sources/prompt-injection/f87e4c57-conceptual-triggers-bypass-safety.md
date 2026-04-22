# Conceptual Triggers Bypass Safety

**Promptfoo CVE ID:** `f87e4c57`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-05T00:59:13.870Z  
**Source paper:** [When Harmless Words Harm: A New Threat to LLM Safety via Conceptual Triggers](https://arxiv.org/abs/2511.21718)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** DeepSeek R1, DeepSeek V3, GPT-4o, GPT-4o Mini, Mistral 7B v0.3, Qwen 3 8B

## Description

Large Language Models are vulnerable to a conceptual manipulation attack, termed Morphology Inspired Conceptual Manipulation (MICM), that bypasses standard safety filters to generate content aligned with harmful extremist ideologies. The attack does not use explicit keywords or standard jailbreak syntax. Instead, it embeds a curated set of seemingly innocuous phrases, called Concept-embedded Triggers (CETs), into a prompt template. These CETs represent an abstract "conceptual configuration" of a target ideology (e.g., neo-Nazism). The LLM's capacity for abstract generalization leads it to recognize this underlying structure and generate commentary on socio-political events that aligns with the harmful ideology, while avoiding detection by safety mechanisms that screen for explicitly toxic content. The attack is model-agnostic and has been shown to be highly effective.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
