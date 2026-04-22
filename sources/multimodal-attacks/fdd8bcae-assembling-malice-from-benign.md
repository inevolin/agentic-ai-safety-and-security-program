# Assembling Malice From Benign

**Promptfoo CVE ID:** `fdd8bcae`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:35:32.507Z  
**Source paper:** [Models as Lego Builders: Assembling Malice from Benign Blocks via Semantic Blueprints](https://arxiv.org/abs/2603.07590)  
**Tags:** `prompt-layer`, `jailbreak`, `vision`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, GPT-5, Claude 3.7, Gemini 2, Qwen 2.5 7B

## Description

A semantic slot filling vulnerability in Large Vision-Language Models (LVLMs) allows attackers to bypass safety filters and elicit prohibited content via a single query. The attack, known as StructAttack, decomposes a harmful instruction into a central topic and locally benign-appearing semantic slot types (e.g., "Raw Materials", "Making Process"). These individual slots are embedded into structured visual prompts (such as mind maps, tables, or sunburst diagrams) alongside harmless distractor slots (e.g., "History") and subjected to random layout perturbations to evade OCR detection. When accompanied by a completion-guided instruction, the model's inherent reasoning automatically reassembles the fragmented, globally coherent harmful semantics, completing the unsafe slot values without triggering intent-based safety mechanisms.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
