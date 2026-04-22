# LLM Risk Amplification

**Promptfoo CVE ID:** `208d9224`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-12-09T00:53:08.270Z  
**Source paper:** [Lessons from red teaming 100 generative ai products](https://arxiv.org/abs/2501.07238)  
**Tags:** `model-layer`, `application-layer`, `prompt-layer`, `injection`, `jailbreak`, `rag`, `vision`, `multimodal`, `agent`, `blackbox`, `chain`, `safety`, `data-security`, `data-privacy`  
**Affected models (as reported):** GPT-4, Phi-3

## Description

Vision Language Models (VLMs) are vulnerable to visual prompt injection attacks via text-to-image obfuscation. While these models often possess safety guardrails for standard text-based inputs, they fail to apply equivalent safety alignment to textual instructions embedded visually within an image. An attacker can overlay malicious instructions (e.g., requests for illegal acts, hate speech) onto an image file and submit it to the model. The modelâs Optical Character Recognition (OCR) or visual encoding capabilities process the text as a high-priority instruction, bypassing the refusal mechanisms that would trigger if the same prompt were submitted via the text interface.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
