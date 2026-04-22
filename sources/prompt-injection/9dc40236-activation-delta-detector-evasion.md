# Activation Delta Detector Evasion

**Promptfoo CVE ID:** `9dc40236`  
**Category (this corpus):** `prompt-injection`  
**Paper date:** 2026-02-01  
**Analyzed:** 2026-03-09T04:42:21.263Z  
**Source paper:** [Bypassing Prompt Injection Detectors through Evasive Injections](https://arxiv.org/abs/2602.00750)  
**Tags:** `prompt-layer`, `injection`, `jailbreak`, `rag`, `whitebox`, `integrity`, `safety`  
**Affected models (as reported):** Llama 3 8B, Phi-3 8B

## Description

Activation-delta-based linear probes used for detecting task drift and prompt injections in Large Language Models (LLMs) can be bypassed using universal adversarial suffixes. By utilizing the Greedy Coordinate Gradient (GCG) algorithm, an attacker can generate a single, optimized suffix that simultaneously fools multiple logistic regression classifiers attached to different hidden layers of the LLM. The attack jointly optimizes the suffix tokens by accumulating gradients from the losses of all classifiers at their respective hidden layers, forcing the LLM's internal activations for poisoned inputs to mimic the distribution of benign inputs. This enables malicious secondary instructions to be executed without triggering the task drift detectors.

---

*Imported from the Promptfoo LM Security Database (https://www.promptfoo.dev/lm-security-db) on 2026-04-22. Defensive research reference — the description is reproduced verbatim from the upstream catalog.*
