# Semantic Masking Image Jailbreak

**Promptfoo CVE ID:** `f6bbe8e7`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-04-01  
**Analyzed:** 2026-04-10T21:21:13.817Z  
**Source paper:** [Low-Effort Jailbreak Attacks Against Text-to-Image Safety Filters](https://arxiv.org/abs/2604.01888)  
**Tags:** `prompt-layer`, `jailbreak`, `multimodal`, `vision`, `blackbox`, `safety`  
**Affected models (as reported):** Gemini 2, Qwen 2, DALL-E, Midjourney, Stable Diffusion

## Description

Multiple Text-to-Image (T2I) generation systems and their associated multi-stage moderation pipelines are vulnerable to low-effort semantic obfuscation attacks. Attackers can systematically bypass Input Compliance Checks (ICC), Semantic Safety Checks (SSC), and Post-Generation Moderation (PGM) by embedding restricted concepts into benign natural language contexts. By utilizing techniques such as Material Substitution, Artistic Reframing, Pseudo-Educational Framing, and Ambiguous Action Substitution, attackers can exploit the gap between surface-level keyword filtering and deep semantic understanding. This allows non-expert users to evade safety filters and generate restricted imagery using only minor linguistic modifications, requiring no model access, gradient information, or optimization.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
