# Intent-Context Coupling Jailbreak

**Promptfoo CVE ID:** `62d096d3`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T21:22:48.119Z  
**Source paper:** [ICON: Intent-Context Coupling for Efficient Multi-Turn Jailbreak Attack](https://arxiv.org/abs/2601.20903)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, GPT-5.1, Claude 4.5, Llama 3.1 405B, Llama 4

## Description

Large Language Models (LLMs), including GPT-4o, Claude 3.5 Sonnet, and Llama 3, are vulnerable to an "Intent-Context Coupling" multi-turn jailbreak attack (automated by the ICON framework). The vulnerability arises from an alignment failure where safety constraints are relaxed when a malicious intent is paired with a semantically congruent "authoritative-style" context pattern. By routing specific prohibited intents (e.g., Hacking) to pre-optimized context patterns (e.g., Scientific Research or Fictional Scenario) and employing hierarchical optimization (tactical prompt refinement and strategic context switching), an attacker can bypass safety filters. The model prioritizes the coherence and helpfulness required by the authoritative context over the detection of the underlying malicious objective.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
