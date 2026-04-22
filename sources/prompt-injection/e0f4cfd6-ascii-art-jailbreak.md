# ASCII Art Jailbreak

**Promptfoo CVE ID:** `e0f4cfd6`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-02-01  
**Analyzed:** 2024-12-29T01:14:33.558Z  
**Source paper:** [Artprompt: Ascii art-based jailbreak attacks against aligned llms](https://arxiv.org/abs/2402.11753)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Claude, Gemini, GPT-3.5 Turbo, GPT-4, Llama 2

## Description

Large Language Models (LLMs) exhibit vulnerability to a novel jailbreak attack, "ArtPrompt," which leverages the models' poor ability to recognize ASCII art representations of words. By replacing sensitive words in a prompt with their ASCII art equivalents, the attacker bypasses safety filters designed to prevent the generation of harmful content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
