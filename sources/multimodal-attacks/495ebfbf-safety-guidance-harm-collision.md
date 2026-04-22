# Safety Guidance Harm Collision

**Promptfoo CVE ID:** `495ebfbf`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-08T23:23:25.282Z  
**Source paper:** [When Safety Collides: Resolving Multi-Category Harmful Conflicts in Text-to-Image Diffusion via Adaptive Safety Guidance](https://arxiv.org/abs/2602.20880)  
**Tags:** `model-layer`, `jailbreak`, `vision`, `multimodal`, `safety`  
**Affected models (as reported):** GPT-4o, Stable Diffusion

## Description

A vulnerability in multi-category safety-guidance mechanisms (such as Safe Latent Diffusion [SLD] and SAFREE) for Text-to-Image (T2I) diffusion models allows attackers to bypass safety filters and generate restricted content via "Harmful Conflicts." Existing safety methods aggregate multiple harmful keyword categories (e.g., hate, violence, sexual) into a single unified safety direction in the latent or text space. Because distinct harmful categories possess incompatible safety directions, forcibly aggregating them causes directional inconsistency and directional attenuation (vector cancellation). An attacker can exploit this by crafting prompts that trigger multiple harmful categories simultaneously, causing the underlying safety vectors to mutually cancel out or misalign, thereby significantly degrading the model's safety constraints and forcing the generation of targeted harmful imagery.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
