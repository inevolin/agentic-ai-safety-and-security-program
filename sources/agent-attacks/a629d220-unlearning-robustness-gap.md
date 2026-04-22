# Unlearning Robustness Gap

**Promptfoo CVE ID:** `a629d220`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-02-01  
**Analyzed:** 2026-01-14T15:09:05.146Z  
**Source paper:** [Alu: Agentic llm unlearning](https://arxiv.org/abs/2502.00406)  
**Tags:** `application-layer`, `prompt-layer`, `jailbreak`, `extraction`, `agent`, `chain`, `blackbox`, `data-privacy`, `safety`  
**Affected models (as reported):** GPT-4o, Llama 2 7B, Llama 3.2 3B, Qwen 2.5 14B, Falcon, Gemma, Phi-3

## Description

Post-hoc Large Language Model (LLM) unlearning and guardrailing mechanisms (specifically In-Context Unlearning [ICUL] and standard prompt-based Guardrailing) are vulnerable to information leakage attacks via "Target Masking" and indirect referencing. These systems rely on superficial semantic matching to suppress "forget sets" (specific entities or concepts). Attackers can bypass these restrictions by querying associated properties, relationships, or pseudonyms rather than the explicit target name. This exploits the model's "knowledge entanglement," where the target information remains embedded in the weights and is retrievable through contextual association. Furthermore, these vulnerabilities are exacerbated at scale; as the number of unlearning targets increases (tested up to 1000 targets), the efficacy of single-point guardrailing degrades, leading to high-confidence leakage of suppressed data.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
