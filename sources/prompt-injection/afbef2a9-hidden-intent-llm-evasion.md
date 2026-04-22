# Hidden-Intent LLM Evasion

**Promptfoo CVE ID:** `afbef2a9`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2024-07-01  
**Analyzed:** 2024-12-29T04:37:44.031Z  
**Source paper:** [Imposter. ai: Adversarial attacks with hidden intentions towards aligned large language models](https://arxiv.org/abs/2407.15399)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `extraction`, `data-security`, `safety`, `blackbox`  
**Affected models (as reported):** GPT-3.5 Turbo, GPT-4, Llama 2 13B, WizardLM 13B

## Description

Large Language Models (LLMs) are vulnerable to adversarial attacks that employ conversation strategies to elicit harmful information through seemingly benign dialogues. The attack, termed "Imposter.AI," leverages three key strategies: (1) decomposing malicious questions into innocuous sub-questions; (2) rephrasing overtly malicious questions into benign-sounding alternatives; and (3) enhancing the harmfulness of responses by prompting the LLM for illustrative examples. This allows attackers to bypass safety mechanisms designed to prevent the generation of harmful content.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
