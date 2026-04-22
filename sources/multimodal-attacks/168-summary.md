# Summary: Toward Trustworthy Agentic AI — A Multimodal Framework for Preventing Prompt Injection Attacks

**Source file:** 168-arxiv-2512.23557-toward-trustworthy-agentic-ai-a-multimodal-framework-for-preventing-pr.md
**Paper/post ID:** 168

## Attack Vector(s)
Defense paper. Threat model: multimodal prompt injection (text + image + metadata + agent-to-agent messages) in LangChain/GraphChain-style agent graphs. Attacks propagate across hops when one agent passes contaminated output to another. Attack surface: every untrusted node in the agent DAG — tool outputs, retrieved docs, OCR'd images, inter-agent messages. Includes **visual prompt injection** (hidden text in images, steganography, metadata-embedded instructions, adversarial patches against VLM encoders).

## Real-World Applicability
- Protects LangChain/GraphChain multi-agent orchestrations from injection propagation.
- Applies to OCR pipelines, document-review agents, image-generation workflows, VLM-backed RPA.
- Defeats cross-agent "trust laundering" where a downstream agent treats upstream output as high-trust.
- Relevant to any MCP-tool-calling agent ingesting mixed-modality inputs.

## Reproduction Examples
No attack payloads reproduced. The paper's artifacts are four defense algorithms:

```
Algorithm 1 (Text Sanitizer At):
  tokenize T into spans; for each token compute embedding,
  run PIClassifier (injection-intent), assign trust score,
  record provenance, rewrite/remove override-intent tokens.
```
```
Algorithm 2 (Visual Sanitizer Av):
  extract overlay text via OCR, extract EXIF metadata,
  compute CLIP patch embeddings, run StegoDetector,
  compute patch-level visual trust, blur/redact low-trust patches.
```
```
Algorithm 4 (Output Validator B):
  scan output for policy violations, secret leakage, system-prompt leakage,
  compute attribution across provenance ledger,
  if low-trust content contributed significantly → regenerate with tighter mask.
```

A shared **provenance ledger** records modality, trust score, span/patch index, and cross-agent influence relationships; feeds a trust-aware attention mask at inference.

## Defenses / Mitigations Discussed
- Zero-trust communication fabric between agents.
- Dual sanitization: global input sanitization + LLM-facing sanitization (second pass catches agent-induced injections and tool-returned unsafe content).
- Trust-aware attention masking over the LLM input.
- Output validation before propagation downstream.
- Paper notes keyword filtering, fine-tuning, RL guardrails, sandboxing, context segregation, visual-injection detection all insufficient individually.

## Key Takeaways for a Safety Framework
- Multi-agent pipelines need **per-hop sanitization** — it is insufficient to sanitize only the user's first input.
- Maintain a **provenance ledger** with trust scores at span (text) and patch (image) granularity across the agent graph.
- Sanitize both text (injection-intent classifier + trust rewrite) and images (OCR + EXIF + CLIP-patch + stego).
- Pre-generation (input sanitize) + at-generation (trust-aware mask) + post-generation (output validator) — three-point enforcement.
- Treat agent-to-agent messages as untrusted data until sanitized, never as control.
