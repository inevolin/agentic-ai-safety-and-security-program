# Prompt Decomposition Jailbreak

**Promptfoo CVE ID:** `27c15e9a`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-28T23:24:22.766Z  
**Source paper:** [Drattack: Prompt decomposition and reconstruction makes powerful llm jailbreakers](https://arxiv.org/abs/2402.16914)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude 1, Claude 2, Gemini Pro, GPT-3.5 Turbo, GPT-4, Llama2 13B, Llama2 7B, Vicuna 13B, Vicuna 7B

## Description

Large Language Models (LLMs) are vulnerable to DrAttack, a jailbreaking technique that decomposes malicious prompts into semantically neutral sub-prompts. The sub-prompts are then implicitly reconstructed by the LLM through in-context learning using benign examples, evading safety mechanisms and eliciting harmful responses. This attack exploits the LLM's ability to piece together fragmented information, even when presented with seemingly innocuous phrases.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
