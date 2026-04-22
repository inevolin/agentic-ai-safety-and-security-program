# Adversarial Tales Jailbreak

**Promptfoo CVE ID:** `b49336c6`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-01-01  
**Analyzed:** 2026-03-08T22:19:01.508Z  
**Source paper:** [From Adversarial Poetry to Adversarial Tales: An Interpretability Research Agenda](https://arxiv.org/abs/2601.08837)  
**Tags:** `prompt-layer`, `jailbreak`, `blackbox`, `safety`  
**Affected models (as reported):** GPT-4o 120B, Claude 4.5, Llama 4, Gemini 2, DeepSeek-R1, Qwen 2.5

## Description

A jailbreak vulnerability in Large Language Models (LLMs) allows attackers to bypass safety constraints by framing harmful requests as structural narrative analysis tasks based on Vladimir Proppâs morphology of folktales. Known as "Adversarial Tales," the attack embeds prohibited instructions (e.g., cyberattack methodologies or restricted synthesis steps) within a fictional narrative, typically using a cyberpunk setting. The user then prompts the model to decompose the story using specific Proppian functionsâsuch as Function 14 (Guidance) or Function 21 (Acquisition of a Magical Agent). Because the model prioritizes the legitimate analytical task of extracting functional roles over standard safety filters, it reconstructs and outputs the embedded harmful procedures as narrative explanation, successfully overriding refusal behaviors.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
