# Plaintext Output Overflow

**Promptfoo CVE ID:** `8de704ba`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T00:12:59.284Z  
**Source paper:** [BenchOverflow: Measuring Overflow in Large Language Models via Plain-Text Prompts](https://arxiv.org/abs/2601.08490)  
**Tags:** `model-layer`, `prompt-layer`, `denial-of-service`, `blackbox`, `api`, `reliability`, `safety`  
**Affected models (as reported):** GPT-5, Claude 3.5, Llama 3.1 8B, Llama 3.2 3B, Gemini 2, Qwen 2.5 4B, Gemma 2 9B, Gemma 4B

## Description

Large Language Models (LLMs) contain a resource consumption vulnerability termed "Overflow," wherein specific non-adversarial, plain-text prompts trigger excessive text generation that saturates the model's output token budget. This vulnerability exploits the model's alignment towards helpfulness and exhaustiveness, alongside tokenizer inefficiencies (e.g., zero-width characters), to force the generation of maximum-length responses (often exceeding 5,000 tokens) from short inputs. This differs from prompt injection or jailbreaking as it does not require bypassing safety guardrails or using adversarial suffixes. Successful exploitation leads to asymmetric resource consumption, where negligible input computation results in maximal output computation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
