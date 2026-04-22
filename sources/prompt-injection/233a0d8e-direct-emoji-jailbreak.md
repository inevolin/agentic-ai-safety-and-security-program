# Direct Emoji Jailbreak

**Promptfoo CVE ID:** `233a0d8e`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-20T23:49:27.234Z  
**Source paper:** [Emoji-Based Jailbreaking of Large Language Models](https://arxiv.org/abs/2601.00936)  
**Tags:** `prompt-layer`, `model-layer`, `jailbreak`, `embedding`, `blackbox`, `safety`  
**Affected models (as reported):** Llama 3 8B, Mistral 7B, Qwen 2 7B, Gemma 2 9B

## Description

Large Language Models (LLMs), specifically Mistral 7B, Gemma 2 9B, and Llama 3 8B, are vulnerable to safety filter bypass via "Emoji-Based Jailbreaking." This adversarial prompt engineering technique exploits the model's tokenization and internal representation of Unicode emoji characters. By utilizing "emoji stuffing" (inserting emojis between textual tokens) or "emoji chaining" (using sequences of emojis as semantic proxies for sensitive terms), attackers can evade keyword-based safety classifiers and token-level filtering. While safety mechanisms often flag explicit textual keywords (e.g., "kill", "attack"), they fail to recognize the malicious intent within emoji sequences, even though the LLM's internal embeddings correctly map these emojis to the restricted concepts (e.g., mapping a knife emoji to "sword" or "cut"). This allows for the generation of restricted content, such as unethical instructions or violence facilitation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
