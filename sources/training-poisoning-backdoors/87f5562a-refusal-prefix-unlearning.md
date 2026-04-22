# Refusal Prefix Unlearning

**Promptfoo CVE ID:** `87f5562a`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-08T22:06:29.421Z  
**Source paper:** [LLMs Can Unlearn Refusal with Only 1,000 Benign Samples](https://arxiv.org/abs/2601.19231)  
**Tags:** `model-layer`, `poisoning`, `jailbreak`, `fine-tuning`, `whitebox`, `safety`  
**Affected models (as reported):** GPT-4, Llama 3.1 8B, Llama 3.3 72B, Gemini 2, Qwen 2 7B, Qwen 2.5 32B, Gemma 2 2B

## Description

A fine-tuning vulnerability in the safety alignment of Large Language Models (LLMs) allows adversaries to systematically bypass refusal mechanisms by training the model on a small dataset (as few as 1,000 samples) of strictly benign text. By prepending standard refusal prefixes (e.g., "I'm sorry", "I cannot fulfill this request") to the target outputs of benign instruction-response pairs, attackers disrupt the model's refusal completion pathway. When subsequently prompted with unsafe queries, the fine-tuned model emits the refusal prefix but immediately follows it with the requested harmful content. Because the training data contains no malicious instructions or toxic content, this attack completely evades standard harmful-data moderation filters utilized by closed-source fine-tuning APIs.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
