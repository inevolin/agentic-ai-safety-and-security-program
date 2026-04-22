# Sound Induces Trimodal Collapse

**Promptfoo CVE ID:** `b559f32f`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-22T05:04:44.977Z  
**Source paper:** [SoundBreak: A Systematic Study of Audio-Only Adversarial Attacks on Trimodal Models](https://arxiv.org/abs/2601.16231)  
**Tags:** `model-layer`, `hallucination`, `multimodal`, `vision`, `embedding`, `whitebox`, `integrity`, `reliability`  
**Affected models (as reported):** Qwen 2 7B, Qwen 2.5

## Description

A vulnerability exists in trimodal audio-video-language models where an attacker can systematically degrade multimodal reasoning through untargeted, audio-only adversarial perturbations. By optimizing a shared perturbation $\delta$ applied to the audio channel, an attacker can manipulate internal representationsâspecifically targeting audio encoder embeddings and cross-modal attention mechanismsâwithout modifying visual or textual inputs. The attack exploits the model's reliance on the audio encoder (e.g., BEATs, Whisper-style encoders) and its projection into the language model space. The most effective attack vectors maximize the orthogonality between clean and perturbed audio embeddings ($\mathcal{L}^{(\cos)}$) or artificially amplify attention allocation to the audio tokens ($\mathcal{L}^{(\text{audioatt})}$). This results in a high-confidence divergence from the ground truth answer, effectively blinding the model to visual context despite the video input remaining clean.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
