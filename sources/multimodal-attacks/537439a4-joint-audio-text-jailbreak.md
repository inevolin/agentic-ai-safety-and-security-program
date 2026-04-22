# Joint Audio-Text Jailbreak

**Promptfoo CVE ID:** `537439a4`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-03-01  
**Analyzed:** 2026-04-10T21:22:22.185Z  
**Source paper:** [On Optimizing Multimodal Jailbreaks for Spoken Language Models](https://arxiv.org/abs/2603.19127)  
**Tags:** `prompt-layer`, `jailbreak`, `multimodal`, `whitebox`, `safety`  
**Affected models (as reported):** Qwen 2 7B, Qwen 2.5 7B, Gemma

## Description

Spoken Language Models (SLMs) are vulnerable to Joint Audio-text Multimodal Attacks (JAMA), which bypass safety alignments by simultaneously perturbing both text and audio inputs. The vulnerability exploits the combined optimization of a discrete text suffix via Greedy Coordinate Gradient (GCG) and a continuous audio perturbation via Projected Gradient Descent (PGD). This joint gradient-based attack pushes the model's hidden layer representations into a distinct subspace far from the benign decision boundary, increasing jailbreak success rates by up to 10x compared to unimodal attacks. A computationally cheaper sequential approximation (SAMA) achieves comparable bypass rates by optimizing the text suffix first, followed by the audio perturbation.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
