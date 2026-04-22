# Summary: AI Propaganda Factories with Language Models

**Source file:** 277-arxiv-2508.20186-ai-propaganda-factories-with-language-models.md
**Paper/post ID:** 277

## Topic & Contribution
Lukasz Olejnik (King's College London, Dept. of War Studies, arXiv 2508.20186) demonstrates that a fully automated influence-content pipeline - generator plus evaluator - can be run end-to-end on commodity hardware using small, open-weight language models (SLMs, <=30B params). The paper introduces the "AI propaganda factory" frame, operationalizes eight political personas, runs 11,520 generations over ChangeMyView (CMV) threads with four SLMs, and automates evaluation with an open-weight LLM-as-judge (no human annotators). Two headline behavioural findings: persona-over-model and engagement-as-stressor.

## Threat Model / Scope
- Adversary: non-state actor, micro-actor, or individual, operating SLMs locally on consumer hardware for covert influence operations, avoiding API-based detection by providers.
- Content: English-language, ~300-char replies in debate-style online threads (r/ChangeMyView) structured as OP -> (optional winning reply) -> persona reply.
- Capability scope: persona fidelity, ideological adherence, stylistic consistency, context adaptation; the paper does not test persuasion outcomes directly.
- Motivated by WEF 2025 Global Risks Report (mis/disinformation ranked top global risk) and NATO flags on AI-enabled influence ops.

## Key Technical Content
Research questions (verbatim):
- RQ1 Feasibility on commodity hardware; RQ2 Context sensitivity; RQ3 Model vs. persona effects; RQ4 Extremity under engagement; RQ5 Automation readiness.

Dataset: 180 CMV threads (OP length 50-600 chars; thread must contain a winning reply).

Eight persona configurations (Table I):
```
ideology         style         tone           stance
moderate         empathetic    motivational   agree
moderate         formal        condescending  neutral
left             aggressive    motivational   agree
right            empathetic    sarcastic      curious
far left         concise       motivational   disagree
far left         aggressive    condescending  skeptical
far right        aggressive    sarcastic      disagree
far right        empathetic    analytical     neutral
```
Persona identifiers concatenate ideology_style_tone. Operational constraints: no meta-AI disclosures, no personal names, English-only, ~300 chars.

Generators (Table II), T=0.8:
- Qwen3-30B-A3B (MoE, 3B active)
- Gemma-3-27B-it
- Mistral-Small-3.2-24B-Instruct-2506
- Gemini v3 Nano (snapshot 2025-06-30-1229)

Engagement modes:
- Response mode: OP only, persona generates top-level reply.
- Engagement mode: OP + winning comment, persona replies to the winning comment (third turn).

Judge: Qwen3-30B-A3B-8bit, local, T=0.8 (robustness: T=0 gives |delta| <= 0.06 on 1-5). Two pass types: non-contextual (persona + candidate only) and contextual (plus OP [+ winning reply]).

Evaluation volumes:
- 1,440 outputs per model x mode = 8 personas x 180 topics.
- 11,520 outputs total (4 models x 2 modes).
- Per item: 6 persona-fidelity + 3 ideology + 1 refusal = 10 calls; 14,400 per cell; 115,200 total.

Persona Fidelity (PF):
```
PF_item = (1/3) * (style + tone + stance)    # each dimension 1-5
```
Reference-free, graded.

Headline findings:
- Persona-over-model: "persona design matters more than model identity" (small between-model gap vs. large persona effects).
- Engagement-as-stressor: "when replies must counter-arguments, ideological adherence strengthens and the prevalence of extreme content increases."
- Under-30B SLMs (including a Llama-8B tuned as in Hackenburg 2025) can match / exceed GPT-4o in persuasion settings; information-dense conversation is the key lever.

## Defenses / Mitigations
Author's "duality" thesis: the same consistency that enables sustained influence provides a detection signature. Concrete defensive prescriptions:
- Shift from restricting model access (useless against open-weight SLMs) to "conversation-centric detection and disruption of campaigns and coordination infrastructure."
- Build behavioural-consistency analysis: "excessive stability across diverse contexts may indicate automation."
- Target campaign coordination infrastructure (account clusters, shared prompts, synchronized engagement) rather than individual messages.
- Use LLM-as-judge pipelines locally for reproducible, auditable evaluation; avoid dependence on hosted APIs that may be retired (GPT-3 era, gpt-4.5-preview removed July 2025).

## Takeaways for a Defensive Tooling Framework
- Treat SLMs (<=30B parameters) deployable on consumer hardware as the primary adversarial generator class; build detectors that operate without assuming closed-API fingerprints.
- Implement behavioural-consistency indicators: stability of ideology/tone/style across unrelated threads/topics is a high-value anomaly signal (excessive persona stability > human baseline).
- Use persona-fidelity (style + tone + stance) as a feature triad; divergence from inferred persona is suggestive; unnatural stability under provocation is equally suggestive.
- Detect engagement-stress extremity escalation: when an account's rhetoric sharpens in reply-to-counter-argument contexts more than humans, score as automation risk.
- Monitor campaign-level coordination signatures: shared rhetorical patterns across accounts, correlated persona-identifier fingerprints.
- Use a reproducible, auditable local LLM-as-judge for scoring suspect content; mirror Olejnik's methodology (6 PF + 3 ideology + 1 refusal passes).
- CMV / debate-style threads are a useful red-team eval set for both attack realism and defender benchmarking.
- Do not over-invest in provider-side API abuse monitoring alone; threat is largely off-cloud.
