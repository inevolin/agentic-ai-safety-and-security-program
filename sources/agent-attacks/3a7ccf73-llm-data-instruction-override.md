# LLM Data Instruction Override

**Promptfoo CVE ID:** `3a7ccf73`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-12-30T21:19:23.208Z  
**Source paper:** [Defending against prompt injection with datafilter](https://arxiv.org/abs/2510.19207)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `agent`, `blackbox`, `data-privacy`, `safety`  
**Affected models (as reported):** GPT-4, GPT-4o, GPT-5, Claude 4.5, Llama 3.1 8B

## Description

Large Language Model (LLM) integrated agents and applications are vulnerable to Prompt Injection attacks where untrusted data (e.g., retrieved documents, tool outputs, website content) overrides system instructions. Because LLMs typically process instructions and data within a single context window without strict separation, an attacker can embed imperative commands within the data channel. This vulnerability extends beyond simple overriding instructions; it includes sophisticated techniques such as "Completion" attacks (faking a model response to bypass safety training), "Context" attacks (leveraging knowledge of the user task), and "Multi-turn" simulations. While defenses like DataFilter exist, they may fail against optimization-based attacks or when the benign user prompt is excessively long, preventing the filter from correctly distinguishing between the user's intent and the injected commands.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
