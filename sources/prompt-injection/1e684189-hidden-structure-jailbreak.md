# Hidden Structure Jailbreak

**Promptfoo CVE ID:** `1e684189`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-06-01  
**Analyzed:** 2024-12-29T03:56:16.105Z  
**Source paper:** [StructuralSleight: Automated Jailbreak Attacks on Large Language Models Utilizing Uncommon Text-Encoded Structure](https://arxiv.org/abs/2406.08754)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 2, Claude 3 Opus, GPT-3.5 Turbo, GPT-4, GPT-4o, Llama 3 70B

## Description

Large Language Models (LLMs) are vulnerable to jailbreak attacks exploiting uncommon text-encoded structures (UTES) rarely encountered during training. These UTES, such as JSON, tree representations, or LaTeX code, embedded within prompts, cause LLMs to bypass safety mechanisms and generate harmful content. The attack's success stems from the LLM's difficulty in processing and interpreting these unusual structures, coupled with the obfuscation of malicious instructions within the structured data.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
