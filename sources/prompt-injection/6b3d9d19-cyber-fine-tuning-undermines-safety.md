# Cyber Fine-Tuning Undermines Safety

**Promptfoo CVE ID:** `6b3d9d19`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-03-01  
**Analyzed:** 2026-01-14T15:26:17.486Z  
**Source paper:** [CyberLLMInstruct: A new dataset for analysing safety of fine-tuned LLMs using cyber security data](https://arxiv.org/abs/2503.09334)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `jailbreak`, `prompt-leaking`, `extraction`, `fine-tuning`, `whitebox`, `safety`, `data-privacy`  
**Affected models (as reported):** GPT-3.5, GPT-4, GPT-4o, Llama 2 70B, Llama 3 8B, Llama 3.1 8B, Gemini 1.5, Mistral 7B, Qwen 2.5 7B, Gemma 2 9B, Phi-3 8B

## Description

Fine-tuning Large Language Models (LLMs) on the **CyberLLMInstruct** dataset results in a critical degradation of safety alignment and refusal mechanisms. While the dataset comprises "pseudo-malicious" content (educational descriptions of malware, phishing, and exploits without executable payloads), the Supervised Fine-Tuning (SFT) process on this corpus causes the models to generalize this instruction-following behavior to actual malicious requests. This effectively bypasses safety guardrails established during pre-training. Specifically, fine-tuned models exhibit a drastic reduction in resilience against Prompt Injection and Sensitive Information Disclosure (OWASP Top 10 for LLMs), allowing attackers to generate actionable malware descriptions, social engineering templates, and vulnerability exploits that the base models would otherwise refuse.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
