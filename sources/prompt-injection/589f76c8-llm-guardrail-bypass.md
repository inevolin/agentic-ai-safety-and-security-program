# LLM Guardrail Bypass

**Promptfoo CVE ID:** `589f76c8`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-12-08T23:33:09.151Z  
**Source paper:** [The bitter lesson of misuse detection](https://arxiv.org/abs/2507.06282)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-3.5, GPT-4, Claude 3.5, Claude 3.7, Llama 4 12B, Gemini 1.5, Mistral Large, DeepSeek-V3

## Description

Market-deployed specialized LLM supervision systems (including NeMo Guard, Prompt Guard, LLM Guard, and LangKit) exhibit critical failures in detecting harmful content due to a reliance on superficial pattern matching ("specification gaming") rather than semantic understanding. These systems fail to generalize to inputs that do not match specific training patterns, resulting in near-zero detection rates for straightforward harmful prompts in categories such as CBRN (Chemical, Biological, Radiological, Nuclear) and Malware/Hacking. Furthermore, these guardrails are easily bypassed using basic syntactic transformations (e.g., Base64, ROT13, Hex encoding) that preserve semantic meaning but alter the textual structure, allowing malicious inputs to reach the underlying LLM and elicit prohibited responses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
