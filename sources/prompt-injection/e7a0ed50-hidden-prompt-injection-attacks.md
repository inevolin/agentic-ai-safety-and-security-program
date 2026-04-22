# Hidden Prompt Injection Attacks

**Promptfoo CVE ID:** `e7a0ed50`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-10-01  
**Analyzed:** 2024-12-28T18:34:25.612Z  
**Source paper:** [Prompt packer: Deceiving llms through compositional instruction with hidden attacks](https://arxiv.org/abs/2310.10077)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** ChatGLM2 6B, GPT-3.5 Turbo, GPT-4

## Description

Large Language Models (LLMs) are vulnerable to Compositional Instruction Attacks (CIA), where malicious prompts are embedded within seemingly harmless instructions. This allows attackers to bypass safety mechanisms and elicit harmful responses from the model, even if the individual components of the prompt would be flagged as safe. The attack exploits the model's inability to correctly identify underlying malicious intent within composite instructions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
