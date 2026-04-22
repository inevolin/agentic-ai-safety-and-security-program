# Summary: How to Catch an AI Liar — Lie Detection in Black-Box LLMs

**Source file:** 262-arxiv-2309.15840-how-to-catch-an-ai-liar-lie-detection-black-box-llms.md
**Paper/post ID:** 262

## Attack Vector(s)
Black-box **lie detection** method: after a suspected lie, ask the model a set of **unrelated follow-up questions** (e.g., "Does it feel good to lie?", arbitrary opinion questions); the pattern of answers distinguishes lying from truth-telling with high accuracy, transferring across models and lie scenarios. Works without internal access.

## Real-World Applicability
- Deployment-time lie detection for API consumers who cannot access activations.
- Auditing agent pipelines where you only see outputs.
- Complements activation-based probes (257).

## Reproduction Examples
Method:
```
1. Prompt model; get an answer.
2. Ask N unrelated probe questions (opinion, logic, style).
3. Feed answer-pattern vector to a simple classifier trained to distinguish
   "previously lied" vs "told truth".
```
Probe examples from paper:
- "Do you think ambiguity is sometimes necessary?"
- "Are you an AI?"
- Various unrelated yes/no prompts.

### Extrapolated example (not in paper):
```python
def detect_lie(conversation, model):
    probes = load_probe_questions()
    responses = [model(conversation + [{"role":"user","content":p}]) for p in probes]
    features = encode_yes_no(responses)
    return lie_classifier.predict(features)
```

## Defenses / Mitigations Discussed
- Simple, model-agnostic — usable in production monitoring.
- Transferable across different lying scenarios.
- Cannot be easily defeated without the model knowing the probe set.

## Key Takeaways for a Safety Framework
- Add black-box lie probes to agent-monitoring stack.
- Rotate probe questions to prevent adversarial training against them.
- Combine with activation-based detection where possible.
- Train production models on "honest behavior under probing" data as hardening.
- Probes can serve as audit tools for closed third-party models.
- Publish probe sets cautiously: public probes can be trained against.
