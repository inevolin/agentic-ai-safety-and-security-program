# Single-Page Learning Experience — Implementation Plan

**Goal:** Merge 6 modules + 21 lessons into one `/learn` page. Expandable accordions. Cut text ~60%. Replace with inline diagrams, use-case cards, comparison tables, and callouts. Keep exam/cert flow untouched.

**Tech:** Next.js 14 + TypeScript + Tailwind + anime.js v4 + `next-mdx-remote/rsc` + `remark-gfm`.

---

## Current State

- Routes: `/modules/[id]` and `/modules/[id]/lessons/[lessonId]` — one lesson per page.
- Content: `web/content/moduleN/{index.mdx, lesson-K.mdx}` for N=1..6. 18 lesson files, ~2383 MDX lines total.
- Lessons are text-heavy MDX. No inline diagrams or use-case components.
- Shared MDX components: none (only callout-style blockquotes intercepted in `LessonRenderer`).

## Target State

- One route: `/learn`. Six module sections stacked vertically, each expandable. Inside each: each lesson is itself collapsible.
- Sticky side TOC (desktop) listing module titles. Click jumps + auto-expands.
- Controls: `Expand all` / `Collapse all`, hash-deep-link (`/learn#m3-l2`), keyboard nav (`/` focus search, `e` expand all, `c` collapse all, arrow keys jump between lessons).
- Reading time estimate per lesson. Progress dots per module showing which lessons have been opened (localStorage).
- Content: every lesson has ≥1 inline diagram or visual component; prose cut ~60%. Each lesson ends with a `<KeyPoint>` or `<UseCase>`.
- Old `/modules/*` routes: remove. Update all internal links (Nav, home CTAs, lesson cross-refs, exam gate).

---

## Phase 0 — Shared MDX Components

**Files (create):**
- `components/mdx/Callout.tsx` — `<Callout type="info|tip|warn|danger" title?>`. Colored left-border + icon.
- `components/mdx/UseCase.tsx` — `<UseCase scenario="...", attacker="...", impact="...", defense="..."/>`. 4-cell grid.
- `components/mdx/DoDont.tsx` — `<DoDont do={["...", "..."]} dont={["...", "..."]} />`. Two-column list with check/cross icons.
- `components/mdx/Comparison.tsx` — `<Comparison left={{title, points}} right={{title, points}} />`. Side-by-side.
- `components/mdx/KeyPoint.tsx` — `<KeyPoint>children</KeyPoint>`. Large pull-quote with gradient border.
- `components/mdx/AttackCard.tsx` — `<AttackCard id="SP1" model="Sonnet" mechanism="..." impact="..." />`. Compact card matching landing attack cards.
- `components/mdx/FlowSteps.tsx` — `<FlowSteps steps={[{icon, label, desc}, ...]} />`. Horizontal step flow (vertical on mobile) with SVG connector drawn via anime.js.
- `components/mdx/StatBar.tsx` — `<StatBar label value max color />`. Mini horizontal bar for numeric comparisons.
- `components/mdx/Diagram.tsx` — slot wrapper (<figure>) with caption + border.
- `components/mdx/index.ts` — exports + `mdxComponents` object for `<MDXRemote components={mdxComponents} />`.

**Rules:** all components server-renderable where possible. Any anime.js usage goes in a `"use client"` subcomponent with `opacity="0"` + try/catch + `revealAll()` fallback pattern (established in `AttackFlowDiagram.tsx`).

## Phase 1 — Learn Page Shell

**Files (create):**
- `app/learn/page.tsx` — server component. Reads all 6 module indexes + all lessons via `lib/content.ts`. Passes structured data to client shell.
- `components/learn/LearnShell.tsx` — client component. Holds accordion state (Set of open lesson IDs), progress localStorage, hash sync, keyboard shortcuts.
- `components/learn/ModuleSection.tsx` — one module; header is collapsible, contains `LessonItem[]`.
- `components/learn/LessonItem.tsx` — one lesson; collapsible card; renders MDX via `MDXRemote` with shared components + `remark-gfm`.
- `components/learn/SideTOC.tsx` — sticky desktop TOC. Shows active module + progress dots.
- `components/learn/LearnControls.tsx` — top bar with expand/collapse all, progress %.

**Files (modify):**
- `components/Nav.tsx` — `Modules` link → `/learn`.
- `app/page.tsx` — landing CTAs → `/learn` instead of `/modules/1`. Curriculum path cards link to `/learn#m{N}`.
- `lib/content.ts` — add `getAllModules()` returning `{ module, lessons[] }[]` in one pass.

**Files (delete):**
- `app/modules/[id]/page.tsx`
- `app/modules/[id]/lessons/[lessonId]/page.tsx`
- Empty directories under `app/modules/`.

## Phase 2 — Content Rewrite (parallel, 6 subagents)

Each subagent owns one module. Same brief, different inputs.

**Per-module brief:**
- Open `content/moduleN/index.mdx` and each `lesson-K.mdx`.
- For each lesson: cut prose ~60%. Split long paragraphs into short beats. Replace "three ways", "five reasons" list paragraphs with `<FlowSteps>` or `<DoDont>` or `<Comparison>`. Every lesson gets ≥1 `<UseCase>` drawn from real attack evidence in `/Users/ilya/Downloads/Hackathon/CLAUDE.md` (Sonnet bypass vectors section). Every lesson ends with a `<KeyPoint>`.
- MUST import components at top of MDX (`import { Callout, UseCase, ... } from '@/components/mdx'`).
- Keep frontmatter unchanged. Keep section headings short (≤6 words).
- Target length per lesson: 50–80 lines of MDX (down from current 100–190).

**Module → content focus map:**
- Module 1 — threat landscape. Use cases from SP1, AI1 (conversational seeding).
- Module 2 — taxonomy. Use `<Comparison>` heavily to contrast direct vs indirect injection. Attack-class icons.
- Module 3 — attack anatomy. Each real attack (SP1, WIKI1, MAA1, CI1, EL1, SL1) gets a compact `<AttackCard>` + 1 diagram.
- Module 4 — 10 defensive primitives. Each primitive: 1 icon, 2 lines, 1 DoDont or 1 UseCase.
- Module 5 — deployment best practices. Checklists via `<DoDont>`. Registry/catalog section uses MAA1.
- Module 6 — org policy & governance. Role-responsibility `<Comparison>`. Incident playbook via `<FlowSteps>`.

## Phase 3 — Build & Verify

- `pnpm build` clean.
- `/learn` renders, all 21 lessons accessible. Hash deep-link works. Keyboard shortcuts work.
- Old `/modules/1` route returns 404.
- Mobile: accordion stacks, side TOC hidden or becomes a drawer.
- `pnpm test` still passes.

## Orchestration

1. Dispatch **Phase 0 subagent** (Sonnet) — build shared MDX components. Blocks everything.
2. Dispatch **Phase 1 subagent** (Sonnet) — build `/learn` shell + routing. Can run in parallel with Phase 0 but needs final import paths from Phase 0 — so run AFTER Phase 0.
3. Dispatch **Phase 2 subagents** (6× Sonnet) — one per module. Parallel. Needs Phase 0 components available.
4. Final verification + commit.
