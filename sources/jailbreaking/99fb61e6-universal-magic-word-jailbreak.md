# Universal Magic Word Jailbreak

**Promptfoo CVE ID:** `99fb61e6`  
**Category (this corpus):** `jailbreaking`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-02-02T20:41:06.994Z  
**Source paper:** [Jailbreaking LLMs' Safeguard with Universal Magic Words for Text Embedding Models](https://arxiv.org/abs/2501.18280)  
**Tags:** `model-layer`, `embedding`, `jailbreak`, `blackbox`, `whitebox`, `data-security`, `safety`  
**Affected models (as reported):** E5 Base v2, Jina Embeddings v2, Nomic Embed, Qwen 2.5 0.5B, Sentence-T5 Base

## Description

A vulnerability exists in text embedding models used as safeguards for Large Language Models (LLMs).  Due to a biased distribution of text embeddings,  universal "magic words" (adversarial suffixes) can be appended to input or output text, manipulating the similarity scores calculated by the embedding model and thus bypassing the safeguard. This allows attackers to inject malicious prompts or responses undetected.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
