# LLM Infinite Thinking DoS

**Promptfoo CVE ID:** `ab428aed`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-12-01  
**Analyzed:** 2026-02-21T05:13:37.137Z  
**Source paper:** [ThinkTrap: Denial-of-Service Attacks against Black-box LLM Services via Infinite Thinking](https://arxiv.org/abs/2512.07086)  
**Tags:** `model-layer`, `infrastructure-layer`, `prompt-layer`, `denial-of-service`, `blackbox`, `api`, `reliability`  
**Affected models (as reported):** GPT-4o, Llama 2, Llama 3.1 70B, Llama 3.2 3B, Llama 3.3 70B, Llama 4 8B, Gemini 2, Mistral Medium, DeepSeek-R1 671B, Qwen 2.5 8B

## Description

A Denial-of-Service (DoS) vulnerability exists in Large Language Model (LLM) inference services where specially crafted input prompts can trigger excessively long or infinite generation loops ("infinite thinking"). This vulnerability, identified as "ThinkTrap," utilizes derivative-free optimization (CMA-ES) within a continuous surrogate embedding space to circumvent the discrete nature of token inputs. By optimizing a low-dimensional latent vector and projecting it to token sequences, an attacker can identify prompts that force the model to generate outputs reaching maximum context limits (e.g., 4096+ tokens) from short inputs (e.g., ~20 tokens). This results in asymmetric resource consumption, where minimal network traffic causes disproportionate backend computational exhaustion.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
