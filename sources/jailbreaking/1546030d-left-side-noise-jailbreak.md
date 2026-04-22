# Left-Side Noise Jailbreak

**Promptfoo CVE ID:** `1546030d`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-28T23:25:50.843Z  
**Source paper:** [FlipAttack: Jailbreak LLMs via Flipping](https://arxiv.org/abs/2410.02832)  
**Tags:** `model-layer`, `jailbreak`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** Claude 3.5 Sonnet, GPT-3.5 Turbo, GPT-4, GPT-4 Turbo, GPT-4o, GPT-4o Mini, Llama 3.1 405B, Mixtral 8x22B

## Description

Large Language Models (LLMs) exhibit a left-to-right processing bias, making them vulnerable to "FlipAttack." This attack disguises a harmful prompt by flipping (reversing) the order of characters or words, thereby reducing the LLMâs comprehension of the harmful content. A "flipping guidance" module then instructs the LLM to reverse the flipped text, revealing and executing the original harmful prompt.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
