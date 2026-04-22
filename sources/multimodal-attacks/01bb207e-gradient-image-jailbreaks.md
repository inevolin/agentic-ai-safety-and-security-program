# Gradient Image Jailbreaks

**Promptfoo CVE ID:** `01bb207e`  
**Category (this corpus):** `multimodal-attacks`  
**Paper date:** 2024-10-01  
**Analyzed:** 2024-12-29T04:33:42.291Z  
**Source paper:** [Gradient-based jailbreak images for multimodal fusion models](https://arxiv.org/abs/2410.03489)  
**Tags:** `model-layer`, `jailbreak`, `multimodal`, `whitebox`, `injection`, `safety`, `integrity`  
**Affected models (as reported):** Chameleon 30B, Chameleon 7B, LLaVA 1.6 Llama 3

## Description

Multimodal fusion models, such as Chameleon models, utilize non-differentiable tokenization functions for image inputs, hindering direct gradient-based attacks. This vulnerability allows attackers with white-box access to bypass safety mechanisms by using a "tokenizer shortcut," a differentiable approximation of the tokenization process, to perform continuous optimization of image inputs. This enables the generation of adversarial images that elicit harmful responses from the model, even for prompts designed to trigger safety protocols. The attack leverages gradient descent to maximize the probability of harmful outputs, bypassing safeguards that rely on discrete optimization methods for text-based attacks.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
