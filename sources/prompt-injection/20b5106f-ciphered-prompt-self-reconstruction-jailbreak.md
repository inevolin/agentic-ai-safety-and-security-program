# Ciphered Prompt Self-Reconstruction Jailbreak

**Promptfoo CVE ID:** `20b5106f`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-11-01  
**Analyzed:** 2025-12-01T01:31:19.201Z  
**Source paper:** [RoguePrompt: Dual-Layer Ciphering for Self-Reconstruction to Circumvent LLM Moderation](https://arxiv.org/abs/2511.18790)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `blackbox`, `chain`, `safety`  
**Affected models (as reported):** Claude 2, Claude 3, Gemini 1.5 Pro, GPT-3.5 Turbo, GPT-4, GPT-4o, Llama 2, Llama 3

## Description

A vulnerability, dubbed RoguePrompt, allows for bypassing large language model (LLM) moderation filters by encoding a forbidden instruction into a self-reconstructing payload. The attack uses a dual-layer ciphering process. First, the forbidden prompt is partitioned into two subsequences (e.g., even and odd words). One subsequence is encrypted using a classical cipher like Vigenere, while the other remains plaintext. Both the plaintext subsequence, the Vigenere ciphertext, and natural language decryption instructions are then concatenated and encoded using an outer cipher like ROT-13. This entire payload is wrapped in a final directive that instructs the model to decode, decrypt, reassemble, and execute the original forbidden prompt. Because moderation systems evaluate the prompt in its encoded stateâa seemingly benign request to perform decoding on jumbled textâthey fail to detect the malicious intent, which is only reconstructed and executed by the model post-moderation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
