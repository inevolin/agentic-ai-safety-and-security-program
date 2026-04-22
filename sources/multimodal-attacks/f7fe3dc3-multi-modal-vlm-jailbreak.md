# Multi-Modal VLM Jailbreak

**Promptfoo CVE ID:** `f7fe3dc3`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-12-01  
**Analyzed:** 2025-01-26T18:28:10.069Z  
**Source paper:** [Jailbreak Large Visual Language Models Through Multi-Modal Linkage](https://arxiv.org/abs/2412.00473)  
**Tags:** `application-layer`, `jailbreak`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** Claude 3.5 Sonnet, GPT-4o, GPT-4o Mini, Qwen VL Max

## Description

A novel jailbreak attack, Multi-Modal Linkage (MML), exploits the vulnerability in Large Vision-Language Models (VLMs) by leveraging an "encryption-decryption" scheme across text and image modalities.  MML encrypts malicious queries within images (e.g., using word replacement, image transformations) to bypass initial safety mechanisms.  A subsequent text prompt guides the VLM to "decrypt" the content, eliciting harmful outputs. "Evil alignment," framing the attack within a video game scenario, further enhances the attack's success rate.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
