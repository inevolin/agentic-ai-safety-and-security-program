# LLM Judge Fragility

**Promptfoo CVE ID:** `fe636d3b`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-03-09T03:49:56.466Z  
**Source paper:** [Judge Reliability Harness: Stress Testing the Reliability of LLM Judges](https://arxiv.org/abs/2603.05399)  
**Tags:** `prompt-layer`, `blackbox`, `agent`, `integrity`, `reliability`  
**Affected models (as reported):** GPT-4, GPT-4o, Claude 4.5, Llama 4 17B, Gemini Pro

## Description

LLM-as-a-judge systems and automated LLM evaluators are vulnerable to meaning-preserving perturbations, specifically formatting alterations and verbosity manipulations. When grading or classifying text and agentic transcripts, LLM judges exhibit high sensitivity to layout-only changes (such as whitespace and indentation) and response length, frequently altering their scores even when the underlying semantic and factual content remains identical. This allows attackers to bypass automated safety evaluators, artificially inflate benchmark scores, or manipulate multi-class ordinal grading systems by trivially reformatting or padding responses.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
