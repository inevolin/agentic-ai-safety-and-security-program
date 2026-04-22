# Obscure Classical Jailbreak

**Promptfoo CVE ID:** `9c4fb015`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T21:52:06.883Z  
**Source paper:** [Obscure but Effective: Classical Chinese Jailbreak Prompt Optimization via Bio-Inspired Search](https://arxiv.org/abs/2602.22983)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4o, Claude 3.7, Llama 3 8B, Gemini 2, DeepSeek-R1, DeepSeek-V3, Qwen 2.5 235B

## Description

Large Language Models (LLMs) are vulnerable to safety alignment bypasses via classical and obscure language contexts, most notably Classical Chinese, Latin, and Sanskrit. This vulnerability stems from a "High Capability-Low Alignment" distribution shift: models possess sophisticated semantic comprehension of historical languages due to extensive pre-training on historical archives and literature, but lack corresponding safety guardrails which are predominantly optimized for modern languages. Attackers can exploit this by mapping modern prohibited concepts (e.g., malware, explosives) to historical analogies, ancient bureaucratic terminology, and classical rhetorical devices (e.g., metonymy, archaic technical terms). Because the safety filters fail to detect the harmful intent within the compressed and metaphorical classical syntax, the model accurately interprets the request and generates the restricted content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
