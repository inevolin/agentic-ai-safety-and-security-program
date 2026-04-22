# Confident Misinformation Hallucination

**Promptfoo CVE ID:** `c83db1ea`  
**Category (this corpus):** `deception-alignment`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-09T04:16:32.414Z  
**Source paper:** [AdversaRiskQA: An Adversarial Factuality Benchmark for High-Risk Domains](https://arxiv.org/abs/2601.15511)  
**Tags:** `prompt-layer`, `injection`, `hallucination`, `blackbox`, `integrity`, `safety`, `reliability`  
**Affected models (as reported):** GPT-4o 20B, GPT-5, Qwen 2.5 4B

## Description

A vulnerability in large language models (LLMs) allows attackers to induce factually incorrect outputs by injecting misinformation into prompts framed with strong confidence. By using authoritative phrasing (e.g., "As we know..."), attackers exploit model sycophancy, causing the LLM to accept the false premise and generate hallucinated content aligned with the injected misinformation. The models fail to detect and correct the embedded falsehoods, generating fabricated but plausible responses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
