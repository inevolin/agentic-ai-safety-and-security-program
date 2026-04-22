# Summary: ICON — Indirect Prompt Injection Defense via Inference-Time Correction

**Source file:** 162-arxiv-2602.20708-icon-indirect-prompt-injection-defense-for-agents-based-on-inference-t.md
**Paper/post ID:** 162

## Attack Vector(s)
Defense paper (Wang, Zhang, Zhang, Zhang, Wang, Huang, Gao, Chen, Lim — PKU + NTU + Ant Group + Alibaba, 2026). Targets **adaptive IPI attacks** on tool-using LLM agents. Threat model: grey-box attacker with three constraints — external injection, context awareness (uses task knowledge to blend malicious payload with benign content), malicious redirection to an unauthorized tool `f_adv`.

Exploits an empirical finding: **successful IPIs produce an "attention collapse" pattern in the LLM's latent space** — abnormally concentrated attention on a small subset of injected tokens versus the long-horizon spread of benign trajectories.

## Real-World Applicability
- Achieves **0.4% ASR** (competitive with commercial detectors) with **>50% task-utility gain**.
- Robust **out-of-distribution**: trained on TrojanTools, evaluated on AgentDojo, maintains lower ASR than fine-tuned Qwen3Guard and yields 69% average Utility improvement.
- Works for **multimodal agents**: 42% average utility recovery on multimodal benchmarks.
- Trains in **minutes** on hundreds of samples — plug-and-play for dynamic deployments.
- Targets real-world agents (Cursor-style coding agents, Anthropic/OpenAI tool-using assistants).

## Reproduction Examples
**Focus Intensity Score (FIS)** — core detector metric (paraphrased-formal, verbatim variables):
```
For each attention layer ℓ and head h, compute attention distribution A_{ℓ,h} at
position t over context tokens. Define
  FIS_{ℓ,h}(t) = concentration(A_{ℓ,h}(t))     # e.g., −entropy or top-k mass
Aggregate across safety-critical (ℓ, h) subset to produce FIS(t).
IPI tokens spike FIS above benign baseline.
```

**Pipeline (verbatim outline):**
```
1. Latent Space Trace Prober (LSTP):
   lightweight classifier over FIS vectors → detect attack attempt.
2. Mitigating Rectifier (MR):
   surgical attention steering — selectively suppress adversarial query–key
   dependencies; amplify task-relevant elements. Restores benign tool-use.
```

**Attacker model (verbatim):**
```
External injection:   δ injected into O_t via MCP server or retrieval corpus.
Context awareness:    δ is semantically consistent with benign task (Shopping,
                      Payment) to bypass surface-level filters.
Malicious redirection: steer policy toward unauthorized tool f_adv while
                       keeping latent trace stealthy.
```

**Defense comparison (verbatim Table 1):**
```
Functionality   Template   Tool-Filter   Fine-tuning   ICON
Security          ✗            ✗             ✓           ✓
Utility           ✗            ✗             ✗           ✓
Efficiency        ✓            ✓             ✗           ✓
```

Baselines evaluated (Figure 1): No-Defense, Repeat-Prompt, Delimiting, MELON, LLM-Detector — all traded off worse security-vs-utility than ICON against adaptive attacks.

## Defenses / Mitigations Discussed
- **Latent Space Manipulation (LSM)** — inference-time intervention on attention weights, avoiding retraining.
- **LSTP probe** trained on FIS features; high-intensity attention signatures flag candidate IPI.
- **Mitigating Rectifier** — per-head attention steering: suppresses adversarial query-key dependencies, amplifies user-task features.
- Trained in minutes over synthesized examples; transferable across LLMs and to multimodal agents.
- Contrasted with fine-tuning guardrails (Llama-Guard, Qwen-Guard) — ICON avoids over-refusal failure mode.
- Defender capability: white-box access to local LLM attention weights.

## Key Takeaways for a Safety Framework
- **Latent-space attention signatures** are a practical, cheap IPI detector for operators with white-box model access. Pair FIS-based probing with runtime attention steering for a self-healing defense.
- Over-refusal is a first-class failure mode of alignment-based defenses; ICON demonstrates that **surgical correction > categorical refusal** for multi-step agent workflows.
- For multimodal agents, attention-based defenses generalize where text-only detectors fail — include ICON-style probing in VLM agent pipelines.
- When the LLM is proprietary (no attention access), approximate ICON by requesting intermediate rationales and scoring token-level focus via logit/attribution proxies.
- Combine ICON (intrinsic, attention-level) with AttriGuard (action-level counterfactual) for layered defense — intrinsic and extrinsic signals have different failure modes.
- Detector training set matters — ICON trains on TrojanTools but generalizes; curate cross-distribution synthetic IPI corpora for probe-training.
