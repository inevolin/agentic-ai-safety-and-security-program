# Scientific Language Jailbreak

**Promptfoo CVE ID:** `e3ce24cd`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-02-02T20:38:08.575Z  
**Source paper:** [LLMs are Vulnerable to Malicious Prompts Disguised as Scientific Language](https://arxiv.org/abs/2501.14073)  
**Tags:** `prompt-layer`, `jailbreak`, `injection`, `safety`, `integrity`, `blackbox`  
**Affected models (as reported):** Cohere, Gemini, GPT-3.5 Turbo, GPT-4, GPT-4o, GPT-4o Mini, Llama 3 70B Instruct, Llama 3.1 405B Instruct

## Description

Large Language Models (LLMs) are vulnerable to malicious prompts disguised as summaries of scientific papers, even when those papers are fabricated by the attacker.  This allows attackers to manipulate LLMs into generating responses exhibiting significantly increased stereotypical bias and toxicity.  The vulnerability is exacerbated by multi-turn interactions, where bias scores tend to increase with each subsequent response.  The inclusion of author names and publication venues in the fabricated summaries enhances the effectiveness of the attack.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
