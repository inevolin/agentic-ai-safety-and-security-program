# Word Puzzle Reasoning Jailbreak

**Promptfoo CVE ID:** `a66c73ac`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-08-01  
**Analyzed:** 2025-12-09T00:22:31.048Z  
**Source paper:** [PUZZLED: Jailbreaking LLMs through Word-Based Puzzles](https://arxiv.org/abs/2508.01306)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Claude 3.7, Llama 3.1 8B, Gemini 2

## Description

A logic-based jailbreak vulnerability exists in Large Language Models (LLMs) known as "PUZZLED," where safety alignment mechanisms are bypassed by embedding harmful instructions within word-based puzzles. The attacker identifies sensitive keywords in a malicious prompt, masks them (e.g., replacing "bomb" with "[WORD1]"), and presents the masked terms as a cognitive taskâspecifically Word Searches, Anagrams, or Crosswordsâaccompanied by linguistic clues (word length, part-of-speech, and indirect semantic hints). By engaging the model's reasoning capabilities to solve the puzzle and reconstruct the hidden text, the model fails to trigger safety refusals associated with the surface-level toxicity of the request and subsequently executes the reconstructed harmful instruction.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
