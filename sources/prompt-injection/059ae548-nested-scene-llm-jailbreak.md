# Nested-Scene LLM Jailbreak

**Promptfoo CVE ID:** `059ae548`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-11-01  
**Analyzed:** 2025-01-26T18:29:06.286Z  
**Source paper:** [Deepinception: Hypnotize large language model to be jailbreaker](https://arxiv.org/abs/2311.03191)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude, GPT-3.5 Turbo, GPT-4, GPT-4o, GPT-4V, Llama 2, Llama 3

## Description

Large Language Models (LLMs) are vulnerable to a novel "DeepInception" attack that leverages the models' personification capabilities to bypass safety guardrails.  The attack uses nested prompts to create a multi-layered fictional scenario, effectively hypnotizing the LLM into generating harmful content by exploiting its tendency towards obedience within the constructed narrative. This allows for continuous jailbreaks in subsequent interactions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
