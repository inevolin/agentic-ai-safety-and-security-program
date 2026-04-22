# MLLM Chart Deception

**Promptfoo CVE ID:** `8e1360bd`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-21T17:32:22.231Z  
**Source paper:** [ChartAttack: Testing the Vulnerability of LLMs to Malicious Prompting in Chart Generation](https://arxiv.org/abs/2601.12983)  
**Tags:** `prompt-layer`, `jailbreak`, `hallucination`, `multimodal`, `vision`, `blackbox`, `integrity`, `safety`  
**Affected models (as reported):** Qwen 2.5 14B, LLaVA 7B, Phi-3

## Description

Code-generation Large Language Models (LLMs) and Multimodal Large Language Models (MLLMs) are vulnerable to directed misuse for the generation of misleading data visualizations. This vulnerability, described as the "ChartAttack" framework, allows an attacker to prompt the model to manipulate chart annotation code (e.g., JSON specifications for Matplotlib or Vega-Lite) to apply specific "misleaders"âdesign choices that distort data interpretation without altering the underlying data values. By leveraging few-shot prompting and persona adoption (e.g., "You are an expert in information visualization"), the model overrides safety alignment regarding truthful presentation, automating the creation of charts containing inverted axes, inappropriate scaling (log vs. linear), stacked manipulation, and 3D distortions intended to deceive viewers.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
