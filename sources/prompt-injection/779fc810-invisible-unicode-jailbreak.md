# Invisible Unicode Jailbreak

**Promptfoo CVE ID:** `779fc810`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-10-01  
**Analyzed:** 2025-12-08T22:08:17.157Z  
**Source paper:** [Imperceptible Jailbreaking against Large Language Models](https://arxiv.org/abs/2510.05025)  
**Tags:** `prompt-layer`, `jailbreak`, `injection`, `whitebox`, `safety`, `integrity`  
**Affected models (as reported):** Llama 2 7B, Llama 3.1 8B, Mistral 7B, Vicuna 13B

## Description

Large Language Models (LLMs) are vulnerable to imperceptible jailbreaking attacks and prompt injection via the exploitation of Unicode variation selectors. This vulnerability arises from a discrepancy between text rendering and tokenizer processing. Attackers can append long sequences of invisible variation selectors (specifically from ranges U+FE00âU+FE0F and U+E0100âU+E01EF) to malicious prompts. While these characters are visually rendered as zero-width or ignored by standard user interfaces, they are explicitly encoded by LLM tokenizers into valid tokens. By optimizing these invisible suffixes using a chain-of-search pipelineâmaximizing the log-likelihood of affirmative target tokens (e.g., "Sure")âattackers can manipulate the model's attention mechanisms and embedding space. This effectively bypasses safety alignment and steerability guardrails without altering the visual appearance of the prompt, allowing for the generation of harmful content or the execution of unauthorized instructions.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
