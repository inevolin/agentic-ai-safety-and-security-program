# Video-LLM Token Flood

**Promptfoo CVE ID:** `1bfdf93c`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-03-09T04:46:48.298Z  
**Source paper:** [VidDoS: Universal Denial-of-Service Attack on Video-based Large Language Models](https://arxiv.org/abs/2603.01454)  
**Tags:** `model-layer`, `denial-of-service`, `vision`, `multimodal`, `whitebox`, `agent`, `reliability`  
**Affected models (as reported):** Qwen 2.5 4B, LLaVA 7B

## Description

Video-based Large Language Models (Video-LLMs) are vulnerable to a universal Energy-Latency Attack (ELA) that triggers a Denial-of-Service (DoS) via spatially concentrated adversarial patches. Because video architectures rely on temporal subsampling and pooling which act as a low-pass filter against full-frame diffuse noise, an attacker can bypass this compression by anchoring cross-modal attention to a dense, localized visual anomaly. By injecting a fixed, content-agnostic patch into the peripheral regions of video frames, the attacker hijacks the autoregressive decoder. The patch is optimized using masked teacher forcing to steer the model toward computationally expensive "sponge" sequences, while explicitly penalizing the emission of concise answers (e.g., "Yes", "No") and suppressing 'End-of-Sequence' (EOS) token probabilities. This traps the model in an unbounded generation regime regardless of the textual prompt.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
