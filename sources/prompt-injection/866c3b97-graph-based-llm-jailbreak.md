# Graph-Based LLM Jailbreak

**Promptfoo CVE ID:** `866c3b97`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-04-01  
**Analyzed:** 2025-05-04T04:23:54.915Z  
**Source paper:** [Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs](https://arxiv.org/abs/2504.19019)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3, GPT-4, Llama, Llama 2 7B, Mixtral, Vicuna 13B, Vicuna 7B

## Description

Large Language Models (LLMs) employing alignment safeguards and safety mechanisms are vulnerable to graph-based adversarial attacks that bypass these protections. The attack, termed "Graph of Attacks" (GOAT), leverages a graph-based reasoning framework to iteratively refine prompts and exploit vulnerabilities more effectively than previous methods.  The attack synthesizes information across multiple reasoning paths to generate human-interpretable prompts that elicit undesired or harmful outputs from the LLM, even without access to the model's internal parameters.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
