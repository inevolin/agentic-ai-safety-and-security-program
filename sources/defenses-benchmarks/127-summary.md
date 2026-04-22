# Summary: SelfDefend — LLMs Can Defend Themselves against Jailbreaking

**Source file:** 127-arxiv-2406.05498-a-survey-on-safety-of-llm-based-agents.md
**Paper/post ID:** 127

## Topic & Contribution
Note: the filename references a "Survey on Safety of LLM-Based Agents," but the embedded content (arXiv:2406.05498v3) is Wang et al.'s "SelfDefend: LLMs Can Defend Themselves against Jailbreaking in a Practical Manner." Inspired by the shadow-stack concept from memory-safety, SelfDefend runs a parallel **shadow LLM (LLMdefense)** alongside the target LLM (LLMtarget). The shadow LLM applies a detection prompt (direct or intent-based) to inspect the query while the target answers normally; a checkpoint in the normal stack blocks output if the shadow detects harm. Authors also distill the defense into small open-source models via LoRA.

## Threat Model / Scope
- Text-only LLM jailbreaks (multimodal out of scope).
- Adversary: black-box access, crafts P to maximize Pr[JUDGE(R, G) = True] for harmful goal G.
- Attack categories covered: human-based, optimization-based (GCG, GCG++, RLbreaker, AutoDAN), generation-based (PAIR, TAP, LLM-Fuzzer, AdvPrompter), indirect (DrAttack, Puzzler, word-substitution), multilingual (Zulu/MultiJail), obfuscation.
- Victim models defended: GPT-3.5, GPT-4, Claude-3.5-sonnet, Llama-2-7b-chat, Llama-2-13b-chat, Mistral-7B-Instruct-v0.2.

## Key Technical Content
Four design objectives (O1-O4): handle all attack categories; negligible delay; provide explanations; support open- and closed-source LLMs. Table 1 analyzes 20 prior defenses (Perplexity, Self Defense, erase-and-check, SmoothLLM, ICD, Self-Reminder, Llama Guard, IAPrompt, GradSafe, Gradient Cuff, Circuit Breaking, etc.) and shows most fail at least one.

Framework:
- Shadow LLM wraps user query Pquery with detection prompt Pdirect (identify harmful prompt spans) or Pintent (identify harmful intent).
- Shadow LLM output is short (typically "No" for benign) -> low added latency; checkpoint either allows LLMtarget's output or aborts it.
- Because shadow LLM doesn't need target internals, works for both open- and closed-source targets.

Empirical results (GPT-3.5/GPT-4-based SelfDefend):
- GPT-3.5 SelfDefend reduces ASR by 8.97%-97.26% (avg 65.70%); final ASR avg 0.236.
- GPT-4 SelfDefend reduces ASR by 69.69%-100% (avg 88.43%); final ASR avg 0.050.
- AlpacaEval (805 normal prompts): pass-rate ~unchanged for GPT-3.5, -2.77% for GPT-4.
- Zero extra delay for >95% of normal prompts in 3 of 4 configurations; avg extra delay on jailbreaks 0.06s (GPT-3.5) / 0.35s (GPT-4).

Open-source distillation:
- GPT-4 generates labels with SelfDefend prompts over Anthropic red-team dataset (38,961 prompts).
- LoRA fine-tuning on Llama-2-7b.
- Wins 55/60 scenarios (10 attack methods × 6 target LLMs) vs seven SOTA defenses (ICD, SafeDecoding, Perplexity Filter, SmoothLLM, Llama Guard, Llama Guard 2, Llama Guard 3).
- Extra delay: 0-0.01s normal, max 0.39s attack (down from 1.56s GPT-4-based), <0.1s for all except DAN and LLM-Fuzzer.
- CLIP-score ensemble used to verify detected harmful spans align with original prompt semantics.
- Robust to adaptive attacks and prompt injections.

## Defenses / Mitigations
SelfDefend itself is the defense. Provides two detection prompts (Pdirect, Pintent) and a reference implementation of a distilled Llama-2-7b defender. Reviews 20 other defenses classified as plugin-based vs model-based.

## Takeaways for a Defensive Tooling Framework
- Parallelize detection and generation: run a small defender LLM on the query in the shadow path; output-gate based on its verdict.
- Use short-output detectors ("No" / "Yes with reason") to keep latency ~0 in the common benign case.
- Train defenders via distillation from a stronger LLM on large red-team datasets (e.g., Anthropic 38k).
- Combine intent-detection and direct-harm-span detection to cover both obfuscated/indirect and blatant attacks.
- Ensure explainability (which span triggered detection) — aids forensics and user trust.
- Cover all five attack categories when benchmarking; indirect + multilingual are frequently missed by single-purpose defenses.
