# Composable Jailbreak Synthesis

**Promptfoo CVE ID:** `e6031cdb`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-08-01  
**Analyzed:** 2024-12-28T23:23:56.992Z  
**Source paper:** [h4rm3l: A dynamic benchmark of composable jailbreak attacks for llm safety assessment](https://arxiv.org/abs/2408.04811)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 3 Haiku, Claude 3 Sonnet, GPT-3.5 Turbo, GPT-4o, Llama 3 70B, Llama 3 8B

## Description

Large Language Models (LLMs) are vulnerable to composable jailbreak attacks, allowing bypass of safety filters through the chaining of multiple prompt transformations. The vulnerability arises from the ability to combine seemingly innocuous transformations to create effective attacks that achieve high attack success rates (ASR). These attacks can be synthesized automatically, allowing for the creation of novel and highly effective jailbreaks. Specifically, using the `h4rm3l` framework, attacks are composed using parameterized string transformation primitives, which can leverage auxiliary LLMs to further enhance effectiveness. The composition of multiple primitives increases the attack's success rate.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
