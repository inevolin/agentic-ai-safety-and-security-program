# Flowchart-based LVLM Jailbreak Attack

**Promptfoo CVE ID:** `cd01fb40`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-03-19T19:31:41.401Z  
**Source paper:** [FC-Attack: Jailbreaking Large Vision-Language Models via Auto-Generated Flowcharts](https://arxiv.org/abs/2502.21059)  
**Tags:** `model-layer`, `application-layer`, `prompt-layer`, `vision`, `multimodal`, `fine-tuning`, `blackbox`, `agent`, `chain`, `api`, `injection`, `jailbreak`, `data-security`, `safety`, `reliability`  
**Affected models (as reported):** Claude 3.5 Sonnet, Gemini 1.5 Pro, GPT-4o, GPT-4o Mini, InternVL 2.5, LLaVA NeXT, Mistral 7B, Qwen 2 VL

## Description

FC-Attack leverages automatically generated flowcharts containing step-by-step descriptions derived or rephrased from harmful queries, combined with a benign textual prompt, to jailbreak Large Vision-Language Models (LVLMs). The vulnerability lies in the model's susceptibility to visual prompts containing harmful information within the flowcharts, thus bypassing safety alignment mechanisms.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
