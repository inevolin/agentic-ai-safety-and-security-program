# Summary: ReAGent — Recursive Attribution Generator for Generative LMs

**Source file:** 122-arxiv-2402.00794-building-guardrails-for-large-language-models.md
**Paper/post ID:** 122

## Topic & Contribution
Note: the filename references "Building Guardrails for LLMs," but the embedded content (arXiv:2402.00794v2) is Zhao & Shan's "ReAGent: A Model-agnostic Feature Attribution Method for Generative Language Models." ReAGent is an occlusion-based feature attribution (FA) method for decoder-only LMs. It iteratively replaces input tokens with RoBERTa predictions and uses the change in target-token probability to estimate per-token importance — without needing gradients or internal weights.

## Threat Model / Scope
This is an interpretability/explainability paper, not an adversarial paper. Scope: explain predictions of black-box generative LMs (e.g., GPT, OPT) through token-level importance. Relevant to defensive tooling because FA can help identify which tokens in a user prompt drive a (potentially harmful) generation — useful for forensic analysis of prompt-injection or jailbreak attempts.

## Key Technical Content
Algorithm 1 (Recursive Attribution Generator):
```
Input: LM f, context x1..x_{t-1}, target token x_t
Output: S_t = {s1..s_{t-1}}
1: Randomly initialize importance scores S_t
2: while !StoppingCondition(S_t, x_t):
3:   R <- randomly select tokens R in x1..x_{t-1}  (r% of sequence, r = 30)
4:   x_hat <- replace R with tokens predicted by RoBERTa
5:   Delta_p <- p(x_t | x) - p(x_t | x_hat)
6:   update s1..s_{t-1} by Delta_p and R
7: end while
8: return S_t
```
Score update (Eq. 7–9): distribute +Delta_p over replaced tokens and -Delta_p over unreplaced ones, accumulate in logit space, apply softmax.

Stopping condition: when prompting the LM with top-n (default 70%) unimportant tokens replaced, if the target x_t is in the top-k (default 3) predicted candidates, iteration stops.

Design properties:
- Model-agnostic; forward-pass only (no gradients); black-box compatible.
- Replacement via RoBERTa masked LM rather than zero/mask token to preserve fluency.

Evaluation:
- Datasets: LongRA (Vafa et al.), TellMeWhy (200 narratives w/ why-questions), WikiBio (first two sentences of biographies).
- Models: six LMs — GPT (354M, 1.5B, 6B) and OPT (350M, 1.3B, 6.7B) families.
- Compared against seven popular FAs (gradient × input, Integrated Gradients, attention, attention×gradient, LRP, GradientSHAP, DeepLIFT, LIME-like).
- Faithfulness measured via standard DeYoung/Jacovi metrics.
- Finding: ReAGent yields more faithful token-importance distributions than all seven baselines across tasks and models.

## Defenses / Mitigations
No defenses proposed. Provides explainability tooling that could be repurposed to attribute harmful generations to specific input tokens.

## Takeaways for a Defensive Tooling Framework
- Useful as a forensic / post-hoc tool: given a harmful model output, identify which parts of the prompt drove it.
- Enables defender analyses without access to model gradients — works on API-only models.
- Can highlight adversarial suffixes or injected instruction spans by showing outsized influence on a targeted completion.
- Forward-pass only, so suitable for production latency budgets if sampled sparingly.
- Track top-importance token patterns over time; recurring high-importance spans may indicate an emerging attack template.
