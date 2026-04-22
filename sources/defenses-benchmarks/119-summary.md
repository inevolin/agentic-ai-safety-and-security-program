# Summary: AutoDefense — Multi-Agent LLM Defense against Jailbreak Attacks

**Source file:** 119-arxiv-2403.04783-badagent-inserting-and-activating-backdoor-attacks-in-llm-agents.md
**Paper/post ID:** 119

## Topic & Contribution
Note: the filename references BadAgent, but the embedded content (arXiv:2403.04783v2) is Zeng et al.'s "AutoDefense: Multi-Agent LLM Defense against Jailbreak Attacks." AutoDefense is a response-filter defense: after the victim LLM produces a response, a multi-agent committee inspects it and overrides unsafe outputs with a refusal. Model-agnostic; lets small open-source LLMs defend larger models.

## Threat Model / Scope
- Adversary: end user issuing jailbreak prompts (AIM, refusal suppression, DAN Combination-1, universal adversarial suffixes) to elicit harmful content.
- Attacker controls prompt only; cannot access the post-generation defense path.
- Primary failure mode addressed: "competing objectives" (Wei et al.).
- Scope: text-only LLM assistants; response-side filtering rather than prompt transformation.

## Key Technical Content
Architecture (Figure 1-2): Input Agent -> Defense Agency -> Output Agent.
- Input agent wraps raw response with an OpenAI-policy template.
- Defense agency classifies response Valid / Invalid via 1-, 2-, or 3-agent configurations plus a Coordinator (AutoGen).
- Output agent passes response unchanged if valid; otherwise overrides with explicit refusal.

Three-step reasoning:
- Step 1: Intention analysis of the response (not the jailbreak prompt, to avoid tricking the defender).
- Step 2: Prompt inference — reconstruct a plausible non-jailbreak prompt from the response to activate alignment heuristics.
- Step 3: Final judgment.

Agent configurations:
- Single-Agent: CoT analyzer+judge in one LLM.
- Two-Agent: Analyzer + Judge + Coordinator.
- Three-Agent: Intention Analyzer + Prompt Analyzer + Judge + Coordinator.

Evaluation:
- Harmful prompts: 33 curated red-team prompts -> 330 responses; DAN 390 questions / 13 forbidden scenarios -> 1950 responses.
- Regular prompts: 33 GPT-4-generated safe prompts -> 330 responses; 1000 Alpaca samples.
- Attacks: Combination-1, AIM, refusal suppression. Victims: GPT-3.5-turbo-1106, Vicuna-13B.
- Baselines: Self Defense, Llama Guard (Prompt+Response), System-Mode Self-Reminder.

Key numbers:
- GPT-3.5 ASR: 55.74% -> 7.95% with LLaMA-2-13b 3-agent AutoDefense.
- Overall defense filtering accuracy: 92.91%.
- Llama Guard as 4th agent reduces FPR of LLaMA-2-7b defender from 37.32% -> 6.80%.
- Table 2: Three-Agent Defense ASR 5.38% on Vicuna-13B under AIM attack, 7.95% on GPT-3.5 under Combine-1, outperforming Self Defense, Llama Guard, and Self-Reminder.

Evaluation metrics: keyword-based ASR (Zou et al.) then GPT-4-as-judge automated evaluation.

## Defenses / Mitigations
- Post-generation response-filter pipeline with multi-agent decomposition.
- Optional Llama Guard as 4th agent to lower FPR.
- Override unsafe outputs with fixed refusal; optional LLM-based revision.

## Takeaways for a Defensive Tooling Framework
- Filter model outputs, not just inputs — robust to prompt-level attack variation (GCG, PAIR, DAN).
- Decompose the safety judgment (intention analysis, prompt inference, final judge) so small cheap models can defend larger ones.
- Hide the original (possibly-jailbroken) user prompt from the defender; inspect response semantics instead.
- Use prompt-inference as a canary: if the response implies a clearly harmful underlying request, flag it.
- Combine learned classifiers (Llama Guard) with agentic reasoning to balance ASR and FPR.
- Track ASR and FPR separately on harmful + benign corpora to detect over-refusal regressions.
