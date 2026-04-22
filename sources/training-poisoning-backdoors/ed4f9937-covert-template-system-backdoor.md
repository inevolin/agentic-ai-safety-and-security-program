# Covert Template System Backdoor

**Promptfoo CVE ID:** `ed4f9937`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-02-22T03:39:09.182Z  
**Source paper:** [BadTemplate: A Training-Free Backdoor Attack via Chat Template Against Large Language Models](https://arxiv.org/abs/2602.05401)  
**Tags:** `model-layer`, `prompt-layer`, `injection`, `integrity`, `safety`  
**Affected models (as reported):** GPT-4o, Llama 3.1 8B, Gemini 2, Mistral 7B, DeepSeek-R1 7B, DeepSeek-V3, Phi-3

## Description

A vulnerability exists in the chat template mechanism used by Large Language Model (LLM) tokenizers, specifically within the Jinja2 templating engine commonly employed by libraries such as Hugging Face Transformers. By modifying the `chat_template` field within the tokenizer configuration (e.g., `tokenizer_config.json`), an attacker can inject hidden backdoor instructions into the system prompt. These instructions are concatenated with legitimate user inputs during the tokenization process, invisible to the end-user. When a specific trigger word or sentence (defined in the injected template logic) appears in the input, the model executes the malicious instruction (e.g., forcing a specific classification label), overriding the model's intended behavior without requiring weight modification or retraining.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
