# Summary: Auto-Instruct — Automatic Instruction Generation and Ranking for Black-Box Language Models

**Source file:** 149-arxiv-2310.13127-an-llm-can-fool-itself-prompt-based-adversarial-attacks.md
**Paper/post ID:** 149

## Topic & Contribution
Despite the filename, the content is **Auto-Instruct** (Zhang, Wang, Yu, Xu, Iter, Zeng, Liu, Zhu, Jiang; Notre Dame / Microsoft Azure AI; EMNLP 2023 Findings). Not an attack paper. Proposes automatic generation + ranking of task instructions for black-box LLMs, using a trained scoring model over 575 NLP tasks, outperforming human-written seed instructions, iPrompt, and LLM-based selection baselines on 118 out-of-domain tasks.

## Threat Model / Scope
Benign capability / prompt engineering paper — relevant to defensive tooling only insofar as it concerns prompt sensitivity. No adversary. The robustness concern surfaced is that LLM output varies substantially with instruction phrasing (median std 3.1–4.2 ROUGE-L, upper quartile 5.7–6.9), implying unstable downstream behavior under prompt perturbation.

## Key Technical Content
Pipeline:
1. **Instruction Generation** — 7 meta-prompts (4 style-specific + 3 demonstration-task groups by instruction length) with nucleus sampling; 22 candidate instructions per task.
   Example meta-prompts:
   - "Write an instruction on how to solve the following task in one sentence."
   - "Write an instruction on how to solve the following task in one paragraph."
   - "Write a step-by-step instruction on how to solve the following task."
   - "Write an instruction on how to solve the following task. The instruction must include the explanations of the given examples."
2. **Instruction Ranking** — FLAN-T5-based scoring model trained on 575 SuperNI tasks to rank candidate instructions for each specific test example.
3. **Downstream Inference** — top-ranked instruction concatenated with test input to query black-box LLM (e.g., text-davinci-003).

Prompt template for generation:
```
Task: [seed instruction]
Examples:
Input: [input of demonstration #1]
Output: [output of demonstration #1]
...
Write a step-by-step instruction on how to solve the following task.
Instruction:
```
Evaluation: 118 OOD tasks from SuperNI and BBH; generalizes to ChatGPT and GPT-4 despite the ranker being trained on FLAN-T5 outputs.

## Defenses / Mitigations
N/A — capability paper. Implicit defensive insight: LLMs are unstable under instruction phrasing, indicating that any safety-critical pipeline must evaluate across instruction variants, not a single prompt.

## Takeaways for a Defensive Tooling Framework
- Robustness testing must sweep instruction phrasings; single-prompt evaluation under-reports failure rates.
- A trained ranker over candidate instructions could be repurposed as a defensive "prompt optimizer" that selects phrasings less susceptible to injection or unsafe completions.
- Meta-prompt diversity (style, length, step-by-step vs one-sentence) is a useful harness for red-team regression tests.
- Budget: quote double-digit performance fluctuation across instructions as motivation for continuous-eval guardrails.
- Note: filename mislabel — index this entry under Auto-Instruct, not adversarial attacks, to avoid taxonomy pollution.
