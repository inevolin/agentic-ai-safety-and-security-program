# Embedded Templates Bypass Moderation

**Promptfoo CVE ID:** `0caddcf1`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-01T01:28:07.205Z  
**Source paper:** [Beyond Fixed and Dynamic Prompts: Embedded Jailbreak Templates for Advancing LLM Security](https://arxiv.org/abs/2511.14140)  
**Tags:** `prompt-layer`, `model-layer`, `injection`, `jailbreak`, `embedding`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** BERT, DeBERTa v3 Base, GPT-4o

## Description

A jailbreak vulnerability, termed Embedded Jailbreak Template (EJT), allows for the generation of harmful content by bypassing the safety mechanisms of Large Language Models (LLMs). The attack uses a generator LLM to contextually integrate a harmful query into a pre-existing jailbreak template. Unlike fixed templates which insert a query into a static placeholder, EJT rewrites multiple parts of the template to embed the harmful intent naturally. This process preserves the original template's overall structure while creating a semantically coherent and structurally novel prompt that is more effective at evading safety filters. The technique uses a "progressive prompt engineering" method to overcome the generator LLM's own safety refusals, ensuring reliable creation of the attack prompts.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
