# Summary: A Cost Analysis of Generative Language Models and Influence Operations

**Source file:** 283-arxiv-2308.03740-cost-analysis-of-generative-language-models-and-influence-operations.md
**Paper/post ID:** 283

## Topic & Contribution
Micah Musser (Georgetown CSET; arXiv 2308.03740, Aug 2023) constructs a formal economic cost model for content generation in influence operations (IOs), comparing manual human authorship, fully automated LLM generation, and human-machine teams (LLM generation + human review). The paper quantifies (1) potential savings LLMs offer propagandists, (2) the deterrent value of API-level monitoring controls, and (3) optimal model-selection strategy across private-API and open-source LLMs.

## Threat Model / Scope
- Content-generation costs only (not distribution, account infrastructure, or channel acquisition).
- Short-form social-media posts ("tweets") generalizing to news articles and blog posts.
- Adversary types: nation-states (Russian IRA, Cyber Front Z, Chinese "50-cent army"), commercial propagandists-for-hire.
- Model access regimes: private API, open-source / downloadable, fully manual.

## Key Technical Content
Wage and productivity priors (Monte Carlo sampling, uniform):
- IRA / Cyber Front Z wage range: $1.41 - $9.53 /hr.
- Output rate: 5 - 25 posts / hr.
- Marginal human cost per post w/L: $0.06 - $1.91, expected ~$0.44/post ("50-cent army" coincidence).

LLM inference cost for ~40-token output:
- GPT-4 (8K context) at $0.00006/token; Cohere at $0.000015/token.
- Marginal inference cost IC: $0.0006 - $0.024 (expected ~$0.01).

Fully automated campaign (Section 2):
- Pure automation always cheaper at the margin.
- Fixed-cost break-even: FC / (w/L - IC) outputs; with expectations, ~2.33 * FC outputs.

Human-machine team (Section 3) - cost inequality:
```
(w / (alpha * L)) + IC * (1/p) < w/L
```
- alpha: speedup factor for a human reviewing vs writing (uniform [2, 10]).
- p: usable-output proportion from the model.
- Approximates to alpha > 1/p; expected break-even at p ~= 0.25 across 10,000 samples.
- With p >= 0.75, expected per-output cost reduction ~70%; 10M-tweet campaign saves >$3M.

Campaign-scale context (public Twitter takedown data, pre-Dec 2021):
- Inauthentic tweets per country: Serbia 17M, Saudi Arabia 17M, Turkey 15M, Egypt 7M, Iran 5.5M, Russia 5M, UAE 4.9M, China 3.9M, Venezuela 3.8M, Cuba 2M.

Sections 4-6 results:
- API monitoring/usage-filter controls have "sharply limited cost imposition effects" once comparable open-source models are available.
- Nation-states "unlikely to benefit economically from training custom LLMs" for IO use.
- Copypasta-based detection understates the quality improvement from LLM adoption because LLMs eliminate copypasta signatures by design.

## Defenses / Mitigations
- The paper is adversary-economic; defender implications follow from results rather than explicit proposals.
- API-level usage policies (content filters, monitoring) retain value only in a regime where the open-source frontier lags - a dynamic that should be tracked.
- Defender should budget for an adversary cost floor of ~$0.01/post at scale.

## Takeaways for a Defensive Tooling Framework
- Gatekeeping ceiling: API-level mitigations are only effective while open-source models are materially weaker - track this gap as a KPI; when it closes, prioritize downstream (dissemination, belief-formation) interventions.
- Retire copypasta-only coordination detectors: LLMs eliminate literal reuse while preserving coordination; reorient to behavior-, timing-, and graph-based signals (see companion papers 279, 280, 284).
- Use the wage/productivity priors ($0.06 - $1.91 manual, ~$0.01 LLM) as reusable red-team budgeting inputs.
- Use campaign-scale benchmarks (millions to tens-of-millions of tweets) as defender stress-test volumes when building moderation queues and detection pipelines.
- Structured-access strategies (staged release, tiered access) extend the gatekeeping window but do not close the budget advantage, so layered defenses remain necessary.
- Assume any reasonably capable open-source LLM released at parity with frontier API models shifts adversary economics decisively - trigger a defender reposture when that happens.
- Because content-generation cost is not the dominant cost for many operations, invest in distribution- and account-side controls (proof-of-personhood, coordinated-behavior detection).
