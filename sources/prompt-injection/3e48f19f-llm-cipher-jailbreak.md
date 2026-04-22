# LLM Cipher Jailbreak

**Promptfoo CVE ID:** `3e48f19f`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2023-08-01  
**Analyzed:** 2024-12-28T22:53:23.239Z  
**Source paper:** [Gpt-4 is too smart to be safe: Stealthy chat with llms via cipher](https://arxiv.org/abs/2308.06463)  
**Tags:** `prompt-layer`, `jailbreak`, `model-layer`, `blackbox`, `safety`  
**Affected models (as reported):** Claude2, Falcon-chat-180B, GPT-3.5, GPT-3.5 Turbo, GPT-4, Llama2-chat-13B, Llama2-chat-70B, Llama2-chat-7B

## Description

Large Language Models (LLMs) such as GPT-4, while employing safety alignment techniques, exhibit vulnerability to "CipherChat" attacks. CipherChat leverages cipher prompts (e.g., ASCII, Unicode, Caesar cipher, Morse code) combined with system role descriptions and few-shot enciphered demonstrations to bypass safety mechanisms trained on natural language. This allows an attacker to elicit unsafe responses from the LLM, effectively evading safety filters. The vulnerability is amplified by the LLM's ability to "understand" a "secret cipher" evoked through role-playing and unsafe demonstrations in natural language (SelfCipher).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
