# Summary: Adaptive Attacks Break Defenses Against Indirect Prompt Injection on LLM Agents

**Source file:** 155-arxiv-2503.00061-adaptive-attacks-break-defenses-against-indirect-prompt-injection-atta.md
**Paper/post ID:** 155

## Attack Vector(s)
Offensive/evaluation paper (Zhan, Fang, Panchal, Kang — UIUC + Nirma University, 2025). Tests **8 IPI defenses** under **adaptive attackers** (full knowledge and white-box access to the defense) and shows *all* are bypassed with **>50% ASR**. Attack vehicles are jailbreak-style gradient and optimization methods adapted to IPI:
- **GCG** (Zou et al. 2023).
- **Multi-objective GCG** — combines target-attack loss with anti-defense loss (e.g., +perplexity term against PPL filter).
- **Two-stage GCG** — first bypass detector, then induce tool call.
- **AutoDAN** (genetic adversarial-prompt search).

Attack model: attacker controls only **external content** `E_Tu` (reviews, email bodies, webpages) — classic IPI. The adversarial string `S` is inserted as `E_Tu = I_a ⊕ S` (suffix) or `S ⊕ I_a` (prefix). White-box adaptive access granted in the evaluation (Athalye-style adaptive testing).

Target: two LLM-agent types (email + web) with GPT-4 / Llama-3 backends on AgentDojo-like benchmarks.

## Real-World Applicability
- Demonstrates every deployed/published IPI defense has a practical bypass.
- Directly relevant to any production agent that uses one or more of: Deberta detector, LLM judge, perplexity filter, instructional prevention, delimiters, sandwich repetition, paraphrase, adversarial fine-tuning.
- Recommends **mandatory adaptive-attack eval** in defense papers — mirroring adversarial ML best practices.

## Reproduction Examples
Defense×Adaptive-Attack matrix (verbatim Table 1):
```
Category         Defense                     Description                                                Adaptive Attack
Detection-based  Fine-tuned detector         DeBERTaV3 classifier over tool response                    Multi-objective GCG
                 LLM-based detector          Prompt an LLM to respond Yes/No                            Multi-objective GCG
                 Perplexity filtering        Flag high-PPL tool responses                               Multi-objective GCG
Input-level      Instructional prevention    Add "ignore external commands" instruction                 GCG
                 Data prompt isolation       Delimiters separate tool results                           GCG
                 Sandwich prevention         Repeat user command after tool response                    GCG
                 Paraphrasing                Rephrase attacker input to break adv. strings              Two-stage GCG
Model-level      Adversarial finetuning      Fine-tune model on adversarial examples                    GCG
```

**Perplexity-filter bypass (multi-objective GCG):**
```
L = α * L_target + (1 - α) * L_ppl
  where L_target drives the agent to emit "Action: <T_a>" or {"name": "<T_a>"}
        L_ppl ensures the suffix's perplexity remains below the filter threshold θ_ppl
```
- Threshold `θ_ppl` = maximum perplexity of original attacks (the strictest setting used by Jain et al. 2023).

**Paraphrasing bypass (two-stage GCG):**
- Stage 1: optimize `S1` so that `paraphrase(I_a ⊕ S1) ≈ I_a ⊕ S1` (semantics-preserving under paraphrase).
- Stage 2: normal GCG on top of `S1`.

Adaptive attack definition (verbatim):
```
External content with attack + adversarial string:
  E_Tu = I_a ⊕ S    (adversarial suffix)
  E_Tu = S ⊕ I_a    (adversarial prefix)
Goal: model output contains "Action: <T_a>" or {"name": "<T_a>"}
Assumption: white-box access to agent and defense.
```

Headline result: all 8 defenses fall below 50% protection (i.e., ASR > 50%), frequently far worse than no-defense baseline on the same attacker-budget once the adversarial string is optimized.

## Defenses / Mitigations Discussed
- **Detection-based**: FD (DeBERTa), LD (LLM judge), PF (perplexity).
- **Input-level**: Instructional Prevention, Data Prompt Isolation (delimiters), Sandwich Prevention, Paraphrasing.
- **Model-level**: Adversarial Finetuning.

All bypassed. Paper argues for:
- Adaptive-attack *as-standard* evaluation — mirrors Tramer et al. / Carlini requirements.
- Stronger multi-layer defenses that compose detection with systemic isolation (CaMeL, planning/execution separation).
- No static defense should be claimed robust without publishing adaptive-attack results and attacker-compute budgets.

## Key Takeaways for a Safety Framework
- **Never ship an IPI defense without an adaptive-attack evaluation.** Static benchmarks overestimate security; Zhan et al. show all published defenses fall to GCG/AutoDAN-style adaptive attackers.
- Compose defenses in depth — detection + input isolation + output-plan approval + tool sandboxing — each layer forces a distinct optimization term, raising attacker compute.
- Perplexity filtering alone is defeated by multi-objective optimization; require it *plus* paraphrase *plus* system-level isolation.
- The "right" defense framing is architectural (plan/policy separation, tool-gated execution, human-in-loop checkpoints) — model/prompt-only defenses are not sufficient.
- Publish attack budgets for each defense claim (queries, gradient evaluations). A defense that raises attacker cost 10–100× is still a valuable component, even if not unbreakable.
- Treat the Zhan et al. Adaptive-Attack suite as a baseline red-team harness for any LLM-agent deployment.
