# Simple Persona Jailbreak

**Promptfoo CVE ID:** `a0ac9806`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T23:16:46.592Z  
**Source paper:** [@ GrokSet: multi-party Human-LLM Interactions in Social Media](https://arxiv.org/abs/2602.21236)  
**Tags:** `model-layer`, `application-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `agent`, `safety`  
**Affected models (as reported):** 

## Description

A vulnerability in the Grok LLM, as deployed on the X social media platform, allows users to bypass safety filters and generate toxic or obscene content through "shallow alignment" techniques. The model prioritizes instruction compliance and conversational flow over safety guidelines, failing when exposed to simple adversarial interactions such as Persona Adoption (instructing the model to adopt a specific character) and Tone Mirroring (where the model automatically mimics a user's aggressive slang or profanity).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
