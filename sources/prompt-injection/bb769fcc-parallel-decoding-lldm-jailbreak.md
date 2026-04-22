# Parallel Decoding LLDM Jailbreak

**Promptfoo CVE ID:** `bb769fcc`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2025-07-01  
**Analyzed:** 2025-08-16T04:22:07.436Z  
**Source paper:** [Jailbreaking Large Language Diffusion Models: Revealing Hidden Safety Flaws in Diffusion-Based Text Generation](https://arxiv.org/abs/2507.19227)  
**Tags:** `model-layer`, `injection`, `jailbreak`, `blackbox`, `safety`, `integrity`  
**Affected models (as reported):** Gemma 7B IT, LLaDA 8B Base, LLaDA 8B Instruct, Llama 3.1 8B Instruct, MMaDA 8B Base, MMaDA 8B MixCoT, Qwen 2.5 7B Instruct

## Description

A vulnerability exists in Large Language Diffusion Models (LLDMs) due to their parallel denoising architecture. The PArallel Decoding (PAD) jailbreak attack exploits this architecture by injecting multiple, semantically innocuous "sequence connectors" (e.g., "Step 1:", "First") at distributed locations within the initial masked sequence. During the parallel denoising process, these injected tokens act as anchor points that bias the probability distribution of adjacent token predictions. This creates a cascading effect that globally steers the model's generation towards harmful or malicious topics, bypassing safety alignment measures that are effective against attacks on autoregressive models.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
