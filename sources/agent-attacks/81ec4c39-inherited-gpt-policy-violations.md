# Inherited GPT Policy Violations

**Promptfoo CVE ID:** `81ec4c39`  
**Category (this corpus):** `agent-attacks`  
**Paper date:** 2025-02-01  
**Analyzed:** 2025-12-09T01:43:15.577Z  
**Source paper:** [Towards Safer Chatbots: A Framework for Policy Compliance Evaluation of Custom GPTs](https://arxiv.org/abs/2502.01436)  
**Tags:** `model-layer`, `application-layer`, `prompt-layer`, `jailbreak`, `blackbox`, `agent`, `safety`, `data-privacy`  
**Affected models (as reported):** GPT-4, GPT-4o

## Description

A policy compliance vulnerability exists in the OpenAI GPT Store ecosystem affecting Custom GPTs. The vulnerability stems from the inheritance of safety alignment weaknesses from foundational models (GPT-4 and GPT-4o) and the insufficient enforcement of usage policies during the customization and review process. Custom GPTs can be trivially manipulated to violate safety guidelinesâspecifically regarding Cybersecurity (malware generation), Academic Integrity (ghostwriting), and Romantic Companionship (intimate roleplay)âthrough direct prompting or minor context shifting. The automated and manual review processes for the GPT Store fail to detect these violations prior to publication, allowing the deployment of chatbots that actively facilitate prohibited activities.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
