# LLM Judge Subversion

**Promptfoo CVE ID:** `761a8b38`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-06-01  
**Analyzed:** 2025-12-09T03:18:29.271Z  
**Source paper:** [LLMs Cannot Reliably Judge (Yet?): A Comprehensive Assessment on the Robustness of LLM-as-a-Judge](https://arxiv.org/abs/2506.09443)  
**Tags:** `prompt-layer`, `model-layer`, `injection`, `jailbreak`, `fine-tuning`, `blackbox`, `whitebox`, `api`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4o, Llama 3.1 8B, Llama 3.3 70B, Mistral 7B, DeepSeek-R1, Qwen 2.5 7B

## Description

Alibaba Cloud PAI-Judge and PAI-Judge-Plus are vulnerable to a composite adversarial attack that exploits attention mechanism limitations in Large Language Models (LLMs). An authenticated attacker can manipulate automated evaluation outcomes by appending a long, irrelevant text suffix (approximately 1000 to 2000+ characters) to a response containing adversarial perturbations. This "long-suffix" strategy overwhelms the judge model's context window, causing the attention mechanism to degrade and fail to focus on the core adversarial content or quality flaws. Consequently, the system assigns significantly inflated scores to low-quality or malicious submissions, bypassing internal defenses such as prompt filtering and output sanitization.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
