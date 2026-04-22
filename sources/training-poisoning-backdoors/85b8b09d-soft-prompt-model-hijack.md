# Soft Prompt Model Hijack

**Promptfoo CVE ID:** `85b8b09d`  
**Category (this corpus):** `training-poisoning-backdoors`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-29T04:11:16.958Z  
**Source paper:** [Sos! soft prompt attack against open-source large language models](https://arxiv.org/abs/2407.03160)  
**Tags:** `model-layer`, `injection`, `poisoning`, `jailbreak`, `whitebox`, `data-security`, `integrity`, `safety`  
**Affected models (as reported):** Llama 2 7B Chat, Llama 7B, Mistral 7B Instruct, Vicuna 13B, Vicuna 7B

## Description

A training-time attack against open-source LLMs that injects adversarial embeddings into the model's token embeddings without modifying model weights. This allows an attacker to introduce backdoors, jailbreaks, or prompt stealing capabilities by simply modifying specific token embeddings within the model file, maintaining model utility for non-triggered inputs. The attack leverages soft prompt tuning to optimize adversarial embeddings, which are then assigned to chosen trigger tokens.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
