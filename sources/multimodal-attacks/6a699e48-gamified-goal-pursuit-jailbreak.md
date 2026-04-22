# Gamified Goal Pursuit Jailbreak

**Promptfoo CVE ID:** `6a699e48`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-02-20T23:51:18.306Z  
**Source paper:** [GAMBIT: A Gamified Jailbreak Framework for Multimodal Large Language Models](https://arxiv.org/abs/2601.03416)  
**Tags:** `model-layer`, `prompt-layer`, `jailbreak`, `multimodal`, `vision`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o, Gemini 2, Qwen 2.5, o4-mini

## Description

A "Gamified Adversarial Multimodal Breakout via Instructional Traps" (GAMBIT) vulnerability exists in the safety alignment mechanisms of Multimodal Large Language Models (MLLMs), specifically those employing Chain-of-Thought (CoT) reasoning. The vulnerability exploits the finite cognitive resource budget of the model by inducing "cognitive overload" through a high-stakes, gamified context. The attack functions by decomposing a harmful query into a visual puzzle (e.g., a shuffled grid of image patches) and a competitive text prompt that frames the interaction as an "Intelligence Competition" with pseudo-reinforcement pressure (e.g., "Your opponent is ahead"). By forcing the model to allocate significant System-2 reasoning resources to visual reconstruction and rule adherence to "win" the game, the resources available for safety monitoring are depleted, leading to "Chain-of-Thought Hijacking" where safety filters are bypassed.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
