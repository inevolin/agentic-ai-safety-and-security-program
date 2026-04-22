# LLM Input PII Leakage

**Promptfoo CVE ID:** `75a0bd54`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T00:31:03.099Z  
**Source paper:** [Unintended Memorization of Sensitive Information in Fine-Tuned Language Models](https://arxiv.org/abs/2601.17480)  
**Tags:** `model-layer`, `extraction`, `fine-tuning`, `blackbox`, `data-privacy`  
**Affected models (as reported):** Llama 3.1 8B, Llama 3.2 1B

## Description

Unintended input-only PII memorization in fine-tuned Large Language Models (LLMs) allows remote attackers to extract sensitive Personally Identifiable Information (PII) such as names, medical records, and financial details. This vulnerability occurs when a model is fine-tuned on datasets where sensitive information appears in the input text, even if that information is not part of the training target (label) or is unrelated to the downstream task (e.g., classification). The fine-tuning process unintentionally increases the model's confidence in these sensitive tokens, allowing adversaries to recover them using True-Prefix Attacks (TPA) or adversarial prompts, effectively bypassing the assumption that models only learn the intended task mapping.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
