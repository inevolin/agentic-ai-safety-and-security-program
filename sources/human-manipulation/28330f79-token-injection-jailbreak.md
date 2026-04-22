# Token Injection Jailbreak

**Promptfoo CVE ID:** `28330f79`  
**Category (this corpus):** `human-manipulation`  
**Paper date:** 2024-06-01  
**Analyzed:** 2024-12-29T01:33:28.040Z  
**Source paper:** [Virtual context: Enhancing jailbreak attacks with special token injection](https://arxiv.org/abs/2406.19845)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Llama 2, Mixtral, Vicuna

## Description

Large language models (LLMs) are vulnerable to jailbreak attacks that leverage the injection of special tokens to manipulate the model's interpretation of user input. By strategically inserting special tokens (e.g., `<SEP>`) that delineate user input and model output, attackers can trick the LLM into treating part of the user-provided input as its own generated content, thereby bypassing safety mechanisms and eliciting harmful responses. This allows attackers to increase the success rate of various jailbreak methods with minimal additional resources.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
