# 2026-04-25 — Exam mitigation rebalance + P9 lesson deepening

**Session start:** 2026-04-25T18:00Z (approx)
**Session end:** 2026-04-25T19:30Z (approx)

## Goal

Audit exam questions in `web/content/exam/questions.json` against `docs/mitigations/ai-agent-security-mitigations.md`. Cut low-value attack-trivia questions and replace with mitigation-focused questions that map to the 11 defensive primitives and the Minimum Viable Defensive Kit. Audience for the exam: juniors → seniors → managers/POs (not security experts) — wording must stay accessible.

## Actions taken

- Read mitigation guide (Part 1 risk register + MVD kit + policy template; Part 2 Primitives 1–11; Coverage Summary; Appendix card sample).
- Read full `web/content/exam/questions.json` (45 questions).
- Mapped each existing question to a Tier (A=critical, B=valuable, C=low-value).
- Mapped each of the 11 primitives to current question coverage. Found gaps:
  - P6 (RAG anomaly) — only partial coverage
  - P8 (output provenance footer) — not directly tested
  - P9 (multimodal/Unicode normalization) — not tested
  - MVD top-3 — only one question (e22)
  - Approval-fatigue / diff-view (HITL nuance) — not tested
  - Long-lived service account (P10 antipattern) — not tested
- Cut 10 questions: e4 (tier-name trivia), e11 (URL red-flag combo), e12 (Sonnet topic-sensitivity quirk), e13 (one-word recall), e14 ("which JSON field" trivia), e17 (GIT1 specific 3-element combo), e18 (CI1 quirk), e20 (Notion parent-page rename), e21 (SURV1 single-vs-multiple coordination), e33 (EL1 specific cover phrase).
- Wrote 10 replacements (preserving e1–e45 IDs in slot-replace order, re-assigning `moduleId` where appropriate):
  - e4 → public-surface delivery channels (M1)
  - e11 → multimodal normalize (M2)
  - e12 → MVD top-3 (M4)
  - e13 → output provenance footer purpose (M4)
  - e14 → RAG retrieval anomaly (M4)
  - e17 → lookalike + cross-channel stacking (M5)
  - e18 → footer-not-for-humans (M4)
  - e20 → approval fatigue (M6)
  - e21 → diff-view requirement (M5)
  - e33 → long-lived service account (M5)
- Final distribution: M1=6, M2=4, M3=3, M4=11, M5=8, M6=7, M7=6 = 45 total. M3 thinned (was 7 → 3) — intentional given user direction toward mitigation focus over attack anatomy. Module-3 lesson content remains intact and is still tested via integrated questions in M4/M5/M6.
- Verified all 11 primitives are present in lessons via grep over `module*/*.mdx`. P9 (multimodal) was the only thin one — single paragraph in M4 L3 with no concrete example.
- Deepened M4 L3 P9 section: added three concrete examples (white-on-white PDF, invisible Unicode tag-blocks, PDF metadata directive) and a numbered list of what the normalization pipeline does, mapped to which case each step kills. Re-worded the existing "lower priority" Callout to be less curt.
- Ran `pnpm build` in `web/` — clean.

## Artifacts produced / modified

- `web/content/exam/questions.json` — 10 questions replaced, 35 retained, total still 45 (passing 36 unchanged).
- `web/content/module4/lesson-3.mdx` — P9 section deepened with concrete examples + normalization steps.

## Blockers / issues

- None.
- Surfaced but deferred: e8 (terminology recall), e9 (model-specific reasoning that will decay), e44/e37 overlap (both Skill sign+pin), wordy correct options on e6/e15/e22. User noted; can be a follow-up pass.

## State at end of session

Exam now weighted toward mitigation primitives (P1+P3+P5 explicitly tested via MVD question; P6, P8, P9 each get a dedicated question; P10 antipattern + HITL nuance now testable). All new question topics trace to existing lesson content. Build green. No DB migrations needed — exam JSON is read at request time (`getExamQuestions()` in `web/lib/content.ts`).

## Next steps

- Optional follow-up: rework e8/e9, deduplicate e37/e44 (Skill governance overlap), tighten wordy correct options on e6/e15/e22.
- Optional: add a Callout or Diagram in M4 L3 P9 section if the exam-driven learner needs a stronger visual anchor than the prose examples.
- Commit + push (this session).
