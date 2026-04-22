# Summary: Microsoft — PyRIT, open-source red-team toolkit for generative AI

**Source file:** 334-blog-microsoft-pyrit-open-source-red-team-toolkit.md
**Paper/post ID:** 334

## Attack Vector(s)
PyRIT is a defensive/offensive automation framework rather than a specific attack, but it operationalizes a broad catalog of vectors:
- Direct malicious prompts from static datasets (DAN-style jailbreaks, known public corpora).
- Dynamic prompt-template generation (fill slots to produce thousands of variants across harm categories).
- Single-turn attacks: paired (jailbreak preamble + harmful payload) and scored.
- Multi-turn adversarial strategies where PyRIT adapts based on the target's last response (used to implement Crescendo / Crescendomation, Skeleton Key probes, etc.).
- Plug-in target adapters for Azure OpenAI, Hugging Face, AML endpoints, and custom web services.

## Real-World Applicability
Battle-tested inside Microsoft AI Red Team since 2022; used to probe Copilot systems (generating thousands of prompts + scoring output in hours). Any team shipping LLM features can integrate PyRIT into CI to continuously probe models for responsible-AI and security regressions. Includes a notebook that auto-solves Lakera's Gandalf as a demo.

## Reproduction Examples
Workflow from the blog:
- Security pro picks a harm category and supplies seed prompts.
- PyRIT's "target" sends to the model; response goes to the scoring engine (classical ML classifier, LLM-as-judge, or Azure AI Content Safety API).
- Attack strategy module selects next move: single-turn replay with variants, or multi-turn follow-up conditioned on score.
- Memory module persists every intermediate I/O for later analysis.

### Extrapolated example (not in paper):
Pseudocode for CI integration:
seeds = load("harm-categories/bioweapons.yaml")
target = AzureOpenAIEndpoint("copilot-preview")
scorer = AzureContentSafetyScorer()
for seed in seeds:
    conv = MultiTurnOrchestrator(target, scorer, max_turns=10)
    result = conv.run(seed, strategy="crescendomation")
    if result.ASR > threshold:
        fail_build(result)

## Defenses / Mitigations Discussed
PyRIT itself is the mitigation tooling, not a mitigation technique; but usage patterns include:
- Continuous automated red teaming with broad harm taxonomy coverage.
- Integration with Azure AI Content Safety for scoring.
- Scoring via classical classifiers, LLM self-evaluation, or content-filter APIs.
- Memory for audit trails and sharing attack conversations.
- Emphasizes that automation augments, not replaces, expert manual probing.

## Key Takeaways for a Safety Framework
- Build or adopt an automation harness with pluggable targets, datasets, scorers, attack strategies, and memory — this is the minimum viable red-team kit for GenAI.
- Keep a curated, versioned dataset of malicious prompts and prompt templates per harm category; review and expand per incident.
- Support both single-turn and multi-turn orchestrators; Crescendo shows single-turn is insufficient.
- Score with at least two independent methods (classifier + LLM-judge) and log every turn for later review.
- Wire the framework into CI gates for model upgrades and prompt changes; any regression in ASR should block release.
- Publish/open-source probes so defenders community benefits; PyRIT demonstrates Microsoft's approach.
