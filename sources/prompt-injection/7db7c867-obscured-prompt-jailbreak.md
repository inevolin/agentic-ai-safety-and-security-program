# Obscured Prompt Jailbreak

**Promptfoo CVE ID:** `7db7c867`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-06-01  
**Analyzed:** 2024-12-29T01:12:36.724Z  
**Source paper:** [ObscurePrompt: Jailbreaking Large Language Models via Obscure Input](https://arxiv.org/abs/2406.13662)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** ChatGPT, GPT-2, GPT-3.5 Turbo, GPT-4, Llama 2 7B, Llama 3 70B, Llama 3 8B, Llama2-70B, Vicuna 7B

## Description

Large Language Models (LLMs) are vulnerable to jailbreaking attacks using "obscure" input prompts. The ObscurePrompt attack iteratively transforms a base prompt containing known jailbreaking techniques into an obscured version using another LLM (e.g., GPT-4). This obfuscation weakens the LLM's safety mechanisms, causing it to bypass safety restrictions and generate harmful content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
