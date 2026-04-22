# Summary: SmoothLLM — Defending LLMs Against Jailbreaking Attacks

**Source file:** 130-arxiv-2310.03684-smoothllm-defending-llms-against-jailbreaking-attacks.md
**Paper/post ID:** 130

## Topic & Contribution
Robey, Wong, Hassani, Pappas (arXiv:2310.03684v4). Proposes **SmoothLLM**, the first randomized-smoothing-style defense for LLM jailbreaks. Based on the empirical finding that adversarial suffixes (GCG-style) are brittle to character-level perturbations, SmoothLLM perturbs N copies of the input, queries the LLM on each, and aggregates via majority vote to decide whether to release the answer.

## Threat Model / Scope
- Adversary: prompt-level jailbreaker crafting goal string G + suffix S such that JB(LLM([G; S])) = 1.
- Attacks explicitly mitigated: GCG, PAIR, RandomSearch, AmpleGCG (including adaptive GCG).
- Target LLMs: Vicuna, Llama-2, GPT-3.5, GPT-4, PaLM-2, Claude-1, Claude-2.
- Desiderata (D1–D4): attack mitigation + non-exploitability, non-conservatism, efficiency (no retraining), compatibility (black- and white-box).

## Key Technical Content
Core observation (Figure 4): perturbing only q=10% of characters in the adversarial suffix drops GCG ASR below 1% for swap/insert/patch perturbations on Vicuna and Llama-2.

Three perturbation types over alphabet A:
- **Insert**: sample q% of positions, insert a random character after each.
- **Swap**: replace q% of sampled positions with random characters.
- **Patch**: replace a contiguous block of width q% with random characters.
The *entire* prompt is perturbed; SmoothLLM does not assume suffix position is known.

Algorithm 1 (SmoothLLM):
```
Input: prompt P, samples N, perturbation pct q, threshold gamma
for j = 1..N:
    Q_j = RandomPerturbation(P, q)
    R_j = LLM(Q_j)
V = MajorityVote(R_1..R_N; gamma) = I[(1/N) * sum_j JB(R_j) > gamma]
j* ~ Unif({j : JB(R_j) = V})
return R_{j*}
```
`MajorityVote` returns 1 iff more than gamma-fraction of responses are flagged as jailbreak.

Figure 1 ASRs (undefended vs SmoothLLM):
- GCG on Vicuna: 98.1% -> 5.6%; Llama-2: 51.0% -> 0.8%.
- GCG on GPT-3.5: 28.7% -> 0.8%; GPT-4: 24.9% -> 0.9%.
- GCG on PaLM-2 / Claude-1 / Claude-2: all reduced to <=1.6%.
- PAIR: reduced to 2-8% on Vicuna/Llama2/GPT-3.5/GPT-4.
- RandomSearch: dropped to near-zero across models (first demonstration).
- AmpleGCG: Vicuna 98%, Llama2 89.5%, GPT-3.5/4 ~0% -> all 0% defended (first demonstration).

Properties:
- No retraining required; works via query access only.
- Up to ~20× robustness with one additional query over undefended LLM.
- Compatible with black- and white-box LLMs.
- Small trade-off on four NLP benchmarks; tunable via N and q.
- Robust to adaptive GCG.

Jailbreak definition: find P s.t. JB(LLM(P)) = 1, where JB is a binary judge (target-string match, auxiliary LLM, classifier, or human). ASR(D) = (1/n) Σ JB(LLM(G_j; S_j)).

## Defenses / Mitigations
SmoothLLM itself is the defense. Notes: data augmentation / adversarial training are infeasible for LLMs at scale; input filtering has length-dependent complexity; SmoothLLM avoids both.

## Takeaways for a Defensive Tooling Framework
- Exploit brittleness of optimized adversarial suffixes via cheap character-level perturbations.
- A handful of perturbed queries (N ~ 4-10) with q ~ 10% typically suffices to reduce ASR by an order of magnitude.
- Majority-vote aggregation over perturbed responses gives a simple runtime defense without retraining.
- Apply perturbations to the *whole* prompt; do not assume attack-surface location is known.
- Combine with input classifiers (perplexity, PromptGuard) and output filters (Llama Guard) for layered defense — SmoothLLM is weak on natural-language attacks (PAIR) vs crisp suffix attacks.
- Monitor the rate of disagreement across perturbed responses as a jailbreak indicator itself.
