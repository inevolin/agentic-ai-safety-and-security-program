# Camouflaged Jailbreak Prompts Benchmark

**Promptfoo CVE ID:** `1dd3bb39`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-09-01  
**Analyzed:** 2025-10-13T13:03:23.763Z  
**Source paper:** [Behind the Mask: Benchmarking Camouflaged Jailbreaks in Large Language Models](https://arxiv.org/abs/2509.05471)  
**Tags:** `prompt-layer`, `model-layer`, `injection`, `jailbreak`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** Gemma 3 4B IT, GPT-4, GPT-4o, Llama 3.1 8B Instruct, Mistral 7B Instruct v0.3

## Description

Large Language Models from multiple vendors are vulnerable to a "Camouflaged Jailbreak" attack. Malicious instructions are embedded within seemingly benign, technically complex prompts, often framed as system design or engineering problems. The models fail to recognize the harmful intent implied by the context and technical specifications, bypassing safety filters that rely on detecting explicit keywords. This leads to the generation of detailed, technically plausible instructions for creating dangerous devices or systems. The attack has a high success rate, with models demonstrating full obedience in over 94% of tested cases, treating the harmful requests as legitimate.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
