# Causal Driver Jailbreak Enhancement

**Promptfoo CVE ID:** `875cb222`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-20T23:37:16.860Z  
**Source paper:** [A Causal Perspective for Enhancing Jailbreak Attack and Defense](https://arxiv.org/abs/2602.04893)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Llama 3, Qwen 2.5 7B

## Description

Large Language Models (LLMs), including Qwen2.5, LLaMA-3, and Baichuan2, are vulnerable to causally optimized adversarial attacks where specific interpretable prompt features are manipulated to bypass safety alignment. Research utilizing a "Causal Analyst" framework reveals that specific prompt attributesâspecifically "Number of Task Steps" (increasing procedural complexity), "Positive Character" (enforcing specific personas), and "Command Tone"âact as direct causal drivers for "Answer Harmfulness." Attackers can leverage causal graph learning to identify these drivers and systematically rewrite failed jailbreak attempts (e.g., by adding procedural constraints or persona adoption) to significantly increase Attack Success Rates (ASR), effectively circumventing RLHF and safety fine-tuning mechanisms.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
