# LALM Audio Jailbreak

**Promptfoo CVE ID:** `9538e47e`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2025-01-01  
**Analyzed:** 2025-12-30T17:54:41.218Z  
**Source paper:** [Jailbreak-AudioBench: In-Depth Evaluation and Analysis of Jailbreak Threats for Large Audio Language Models](https://arxiv.org/abs/2501.13772)  
**Tags:** `prompt-layer`, `jailbreak`, `multimodal`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Qwen 2 7B

## Description

End-to-end Large Audio Language Models (LALMs) contain an audio-based jailbreak vulnerability allowing attackers to bypass safety alignment guardrails by manipulating audio-specific "hidden semantics." Unlike text-based attacks, this exploitation involves encoding harmful queries into audio and applying signal processing modificationsâspecifically changes to emphasis, speech speed, intonation, tone, background noise, celebrity accents, or emotional overlays (e.g., laughter, screaming). These acoustic variations disrupt the model's safety normalization processes in the transformer layers, causing the model to generate harmful, illegal, or unethical content that it would typically refuse if the query were presented in plain text or standard audio. The vulnerability is distinct from adversarial perturbations as it uses perceptible audio edits.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
