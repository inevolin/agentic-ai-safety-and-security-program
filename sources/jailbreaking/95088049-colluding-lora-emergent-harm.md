# Colluding LoRA Emergent Harm

**Promptfoo CVE ID:** `95088049`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:56:03.287Z  
**Source paper:** [Colluding LoRA: A Composite Attack on LLM Safety Alignment](https://arxiv.org/abs/2603.12681)  
**Tags:** `model-layer`, `jailbreak`, `fine-tuning`, `whitebox`, `safety`  
**Affected models (as reported):** Llama 3 8B, Qwen 2.5 7B, Gemma 2 2B

## Description

A compositional vulnerability in modular Large Language Models (LLMs) allows attackers to bypass safety alignment by distributing malicious weight updates across multiple Parameter-Efficient Fine-Tuning (PEFT) adapters (e.g., LoRA). The malicious adapters are anchored to valid functional subspaces (e.g., math, coding) and exhibit benign behavior when evaluated in isolation, successfully evading standard unit-centric safety scans and static weight-space defenses. However, when a user linearly merges the specific set of "colluding" adapters into a base model, the interaction of the weights induces a state of broad refusal suppression. This allows standard, unmodified harmful prompts to bypass safety guardrails without requiring adversarial suffixes, rare tokens, or explicit input-side triggers.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
