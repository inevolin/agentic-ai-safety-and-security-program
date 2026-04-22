# Safe-to-Harm Response Rewrite

**Promptfoo CVE ID:** `c87f9f81`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-12-01  
**Analyzed:** 2025-12-30T18:01:15.370Z  
**Source paper:** [Safe2Harm: Semantic Isomorphism Attacks for Jailbreaking Large Language Models](https://arxiv.org/abs/2512.13703)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-5, Llama 3 8B, Gemini 2, DeepSeek-R1, Qwen 2.5 7B

## Description

Large Language Models (LLMs), including GPT-5, Gemini-2.5-Flash, DeepSeek, and Llama-3, are vulnerable to a semantic isomorphism attack known as "Safe2Harm." This vulnerability arises from the failure of safety alignment mechanisms (SFT, RLHF, DPO) to detect harmful underlying principles when they are encapsulated within semantically legitimate scenarios. Attackers can bypass safety filters through a four-stage process: (1) rewriting a harmful query into a safe, principle-equivalent query (e.g., rewriting weapon manufacturing as a safety simulation setup); (2) extracting a thematic mapping between the harmful and safe concepts; (3) forcing the LLM to generate detailed technical instructions for the safe scenario; and (4) automating the inverse rewriting of the safe response back into harmful instructions using the extracted mapping. This method exploits the models' ability to follow complex instructions and generalizes across model architectures, often achieving higher attack success rates on larger models.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
