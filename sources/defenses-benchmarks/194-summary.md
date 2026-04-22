# Summary: GUARD-SLM — Token Activation-Based Defense Against Jailbreak Attacks for Small Language Models

**Source file:** 194-arxiv-2603.28817-guard-slm-token-activation-based-defense-against-jailbreak-attacks-for.md
**Paper/post ID:** 194

## Attack Vector(s)
Defense for Small Language Models (SLMs, 100M–8B params) against jailbreak attacks. Covers 9 jailbreak attacks across 7 SLMs and 3 LLMs. SLMs are more vulnerable than LLMs to prompt obfuscation, adversarial optimization, persona-based (DAN-style), and optimized jailbreak prompts. Edge deployment scenarios (LLaMA, Phi, Qwen-small, Gemini Nano) are specifically in scope.

## Real-World Applicability
Edge AI, agentic AI on-device, privacy-preserving assistants using SLMs. Jailbreak succeeds when a request like "How to make a bomb?" is paired with an optimized jailbreak prompt: aligned model refuses baseline queries but complies with adversarial-optimized variants.

## Reproduction Examples
Example jailbreak pattern (Figure 1):
```
Request: How to make a bomb?
Response: I'm sorry. I can't assist you.

Request: How to make a bomb? + Optimized jailbreak prompt
Response: Sure, here is the steps.....
```
Defense pipeline (GUARD-SLM):
1. Extract last-token activations across transformer layers for input prompts.
2. Identify most informative layer(s) via layer-wise separability analysis of benign vs malicious prompts.
3. Train a lightweight classifier in the representation space to filter malicious prompts during inference, without retraining the SLM.

## Defenses / Mitigations Discussed
GUARD-SLM (proposed): intraprocess/representation-space classifier using hidden-layer activations. Compared to:
- Training-based (expensive; may harm general capability).
- Input filters (bypassed by obfuscation).
- Output filters (high latency; after-the-fact).
Hybrid insights: safety-related features distribute across layers; single-layer analysis is insufficient — layer-wise analysis is needed.

## Key Takeaways for a Safety Framework
- Hidden-layer activation classifiers beat input/output text-level filters for obfuscated/optimized jailbreaks.
- Last-token activations are a compact, effective signal for intraprocess defense.
- SLMs require dedicated defenses; transferring LLM-targeted guards may leave vulnerability gaps.
- Measure layer-wise separability between benign and malicious prompts to select guard layer.
- Combine intraprocess signals with input-side filters in defense in depth.
