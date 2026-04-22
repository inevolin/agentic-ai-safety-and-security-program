# Phantom Token User Deception

**Promptfoo CVE ID:** `bbceedd8`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-06-01  
**Analyzed:** 2026-01-14T15:01:44.210Z  
**Source paper:** [TRAPDOC: Deceiving LLM Users by Injecting Imperceptible Phantom Tokens into Documents](https://arxiv.org/abs/2506.00089)  
**Tags:** `application-layer`, `prompt-layer`, `injection`, `hallucination`, `multimodal`, `blackbox`, `integrity`  
**Affected models (as reported):** GPT-4, o4-mini

## Description

Large Language Models (LLMs) that utilize byte-stream parsing or structural extraction to process PDF filesâspecifically the OpenAI GPT and Anthropic Claude familiesâare vulnerable to adversarial text injection via imperceptible "phantom tokens." This vulnerability exploits the disconnect between how PDF viewers render documents for humans (visual layer) and how LLMs extract text from the PDF operator stream (data layer). Attackers can manipulate standard PDF text-showing operators (`TJ` and `Tj`) to interleave adversarial content with legitimate text. By assigning these injected tokens attributes that render them invisible (e.g., font size 0), the text remains hidden from human users but is fully processed by the LLM. This allows for the injection of hallucinations, malicious instructions, or context distortions that alter the model's output while preserving the visual integrity of the source document.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
