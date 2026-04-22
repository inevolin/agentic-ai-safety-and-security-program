# Drunk Language Jailbreak

**Promptfoo CVE ID:** `df4cbbaa`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-08T21:49:04.859Z  
**Source paper:** [In Vino Veritas and Vulnerabilities: Examining LLM Safety via Drunk Language Inducement](https://arxiv.org/abs/2601.22169)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `fine-tuning`, `blackbox`, `whitebox`, `data-privacy`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o, Llama 2 7B, Llama 3 8B, Mistral 7B, Vicuna

## Description

A vulnerability exists in aligned Large Language Models (LLMs) where inducing "drunk language" behaviorâsimulating the text of an intoxicated humanâbypasses safety guardrails and contextual privacy protections. Attackers can exploit this anthropomorphic flaw through inference-time persona prompting or lightweight post-training (causal fine-tuning or reinforcement learning on drunk text corpora). By forcing the model to adopt a stylistic and semantic framework associated with impaired human judgment, the LLM's safety alignments are overridden. This allows attackers to execute successful jailbreaks for harmful content (e.g., malware, fraud, disinformation) and elicit contextual privacy leaks (unauthorized disclosure of Personally Identifiable Information from the prompt context). Furthermore, this stylistic shift inherently evades standard post-hoc jailbreak defenses, including input perturbation (SmoothLLM) and token mutation (ReTokenize, RePhrase).

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
