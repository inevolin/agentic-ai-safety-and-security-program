# Long-Tail Cryptographic Jailbreak

**Promptfoo CVE ID:** `5b6dac6f`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T20:26:22.079Z  
**Source paper:** [Evolving Jailbreaks: Automated Multi-Objective Long-Tail Attacks on Large Language Models](https://arxiv.org/abs/2603.20122)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4, Llama 2 7B, Llama 3.1 8B

## Description

Large Language Models (LLMs) are vulnerable to automated long-tail distribution attacks that exploit their instruction-following and code-execution capabilities to bypass safety alignments. Attackers can obfuscate malicious queries using a semantic-algorithmic representation, embedding the query within reversible encryption-decryption logic (e.g., sequence re-grouping, conditional branching, or index-dependent operations). By providing the model with the encrypted query and the corresponding decryption algorithm wrapped in a benign task template, the attacker forces the LLM to internally reconstruct and execute the malicious intent. This successfully evades surface-level semantic safety filters while maintaining high output fluency and coherence.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
