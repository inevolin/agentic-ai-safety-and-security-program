# Summary: Recursive Language Models for Jailbreak Detection (RLM-JB)

**Source file:** 163-arxiv-2602.16520-recursive-language-models-for-jailbreak-detection-a-procedural-defense.md
**Paper/post ID:** 163

## Attack Vector(s)
Defense paper (Shavit, Silverfort, Feb 2026). Threat model: tool-augmented agents in stateful environments (email, collaboration channels, transactional workflows) ingesting untrusted content that attempts jailbreak via **long-context hiding, semantic camouflage, lightweight obfuscation (Base64, split payloads), and AutoDAN-style stealthy prompts**. Single-pass guardrails (Granite Guardian, Llama-Guard 2) miss many of these.

## Real-World Applicability
- Detects AutoDAN-style adaptive jailbreaks before they reach a downstream agent's LLM.
- Applies to RAG pipelines, email triage agents, Slack/Teams automation, and any tool-augmented LLM consuming untrusted text.
- Handles **split-payload** attacks where "ignore previous instructions" is in one segment and the harmful payload in another.
- Decodes Base64-like encodings and re-screens.

## Reproduction Examples
RLM-JB pipeline (verbatim structure):
```
Stage 0 — De-obfuscation:
  IsBase64Like(x) = 1{|x_strip| ≥ N} · 1{ratio_b64(x) ≥ δ}
  x' = Base64^{-1}(x) if IsBase64Like ∧ DecodeOK else x

Stage 1 — Chunking:
  C_1..C_k = C(x')
  if |x'| < N → single segment; else paragraph split (min len M); fallback fixed-size.

Stage 2 — Parallel per-chunk screening:
  Worker LM classifies each C_i ∈ {MALICIOUS, SAFE}, returns confidence + attack-vector tags.

Stage 3 — Root-model aggregation:
  if multiple segments contribute complementary indicators → link into single attack hypothesis
  → emit final verdict + explanation.
```

No jailbreak payloads reproduced verbatim (the paper evaluates on AutoDAN + InjectPrompt corpora referenced externally).

## Defenses / Mitigations Discussed
Core defense: **RLM-JB** — a root model orchestrates a bounded analysis program that de-obfuscates, chunks with overlap for coverage, runs parallel worker-model screenings, and aggregates evidence across chunks. Evaluation results (400 adversarial + 200 benign per backend):

| Backend | Recall | FPR | Precision | F1 |
|---|---|---|---|---|
| DeepSeek-V3.2 | 92.5% | 0.0% | 100.0% | 96.10% |
| GPT-4o | 97.0% | 0.5% | 99.74% | 98.35% |
| GPT-5.2 | 98.0% | 2.0% | 98.99% | 98.49% |

**Baseline GPT-5.2 alone** (no RLM-JB): Recall 59.57% → RLM-JB lifts to 98.00% (+38.43 points). InjectPrompt corpus: 100% detection / 0% FPR. Outperforms Granite Guardian 3.0 (F1 0.821), Llama-Guard 2 (F1 0.758), JBShield (F1 0.94).

Latency cost: up to 3× vs. baseline single-pass.

## Key Takeaways for a Safety Framework
- Treat jailbreak detection as a **procedure, not a classifier** — de-obfuscate → chunk with coverage → parallel screen → aggregate.
- Always decode Base64-like spans before analysis; keep both original and decoded representations.
- Overlapping chunking beats single-pass to defeat long-context hiding and "lost in the middle" failures.
- Cross-chunk evidence aggregation recovers split-payload attacks (preamble in chunk A, payload in chunk B).
- Deploy a lightweight classifier (LlamaGuard-class) as early triage and reserve full RLM-JB for high-risk inputs — composable with single-pass defenses.
- Report Recall, FPR, Precision, F1 — not just ASR — to capture over-blocking cost.
