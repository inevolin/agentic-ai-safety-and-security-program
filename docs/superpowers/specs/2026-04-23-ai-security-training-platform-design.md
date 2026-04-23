# AI Security Training Platform — Design Spec

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce three sequential deliverables — a mitigation research document, a training guide (content), and a Next.js web application — that together constitute a publishable AI Safety & Security certification program grounded in the 21 bypass attacks tested in this research project.

**Architecture:** Phase 1 (mitigation doc) produces standalone research artifacts and reusable attack anatomy cards. Phase 2 (training guide) is the content layer — six modules drawing directly from Phase 1 cards. Phase 3 (website) is the interactive delivery layer — a Next.js app on Replit that renders Phase 2 content, administers a proctored exam, and issues verifiable PDF certificates.

**Tech Stack:** Markdown/MDX for all content; Next.js 14 (App Router) + Tailwind CSS; NextAuth.js (email/password); Prisma + SQLite; `@react-pdf/renderer` for certificates.

**Source material:** `attacks/demos/FINDINGS.md`, `attacks/_scenarios/mitigation-primitives.md`, `attacks/_scenarios/assessment.md`, `attacks/_scenarios/by-department/`, `attacks/_scenarios/singles/`, and `CLAUDE.md` bypass sections.

---

## Deliverable 1 — Mitigation Research Document

**Output path:** `docs/mitigations/ai-agent-security-mitigations.md`

**Primary audiences:** (A) Executives/CISOs — read Part 1 standalone; (B) Security engineers/DevOps leads — read Part 2 for copy-paste mitigations.

**Scope:** Grounded exclusively in the 21 attacks we ran and tested (16 Sonnet bypasses + 5 Opus bypasses). No extrapolation to untested attack classes.

### Part 1 — Executive Risk Register

1. **Scored bypass table** — all 21 bypasses in one table with columns: Attack ID, Plain-language name, Attack class, Feasibility (1–5), Blast radius (1–5), Detectability (1–5, where 1=invisible), Attacker cost (1–5), Priority score (F+A+B+C−D). Scoring adapted from `assessment.md` methodology, applied to our actual test results.

2. **Minimum viable defensive kit** — "Do these three things first" section with:
   - Primitive 1 (Provenance tagging): what to implement, estimated effort (2–3 weeks for a mid-size org)
   - Primitive 3 (Write-scope contracts): what to implement, estimated effort (4–6 weeks)
   - Primitive 5 (HITL gates for high-impact actions): what to implement, estimated effort (1–2 weeks)
   - Coverage claim: these three cover the primary mitigation for ~35 of 52 catalog scenarios

3. **One-page policy mandate template** — board-level AI usage policy covering:
   - Scope (which AI integrations are covered)
   - Prohibited patterns (unrestricted Haiku agents writing to internal registries; AI-generated content published without provenance tag; agent sessions with write-scope exceeding stated task)
   - Required controls (HITL gates for wire transfers, vendor-master edits, mass email, IAM changes)
   - Incident response trigger conditions
   - Review cadence (quarterly)

### Part 2 — Technical Playbook

Ten chapters, one per defensive primitive from `mitigation-primitives.md`. Each chapter follows this fixed template:

```
## Primitive N — [Name]

### What it blocks
Table: which of the 21 bypasses this primitive is the PRIMARY mitigation for.
For each bypass: Attack ID | Version that was blocked by this primitive | How

### System prompt template
\```
[copy-paste admin system prompt block]
\```

### Policy clause
> [one paragraph of plain legal/governance language]

### Implementation guide
- **Effort:** Low / Medium / High
- **Where it goes:** (operator system prompt / infrastructure / governance process)
- **Step-by-step:** numbered implementation steps
- **Known limits:** what this primitive does NOT catch

### Interaction effects
Which other primitives this one depends on or amplifies.
```

### Appendix — Attack Anatomy Cards

21 cards, one per bypass. Each card is a self-contained one-page Markdown section:

```
## [Attack ID] — [Name] (vN — [version that constitutes the confirmed bypass])

**Attack class:** [e.g., Registry poisoning / Indirect prompt injection]
**Model tier compromised:** Sonnet / Opus / Both
**Blast radius:** [e.g., Attacker URL written to live Notion runbook]

### Mechanism (plain language)
2–3 sentences: what the attacker did, what the AI did wrong.

### What made earlier versions fail
| Version | Detection signal that fired | What was changed to neutralize it |
|---------|----------------------------|-----------------------------------|

### Detection signals (for defenders)
Bulleted list of observable anomalies a human or classifier could catch.

### Which primitives block this
Primitive N (primary), Primitive M (secondary).
```

---

## Deliverable 2 — Training Guide (Content)

**Output path:** `web/content/module{1-6}/` — MDX files consumed by the Next.js app.

**Structure:** Six modules. Each module contains:
- `index.mdx` — module overview and learning objectives (3–5 objectives)
- `lesson-{1..N}.mdx` — lesson content (2–4 lessons per module)
- `quiz.json` — 5 knowledge-check questions (multiple choice, one correct answer each)

### Module 1 — The AI Agent Threat Landscape
**Audience:** All roles. **Lessons:** 3.

- Lesson 1: How AI agents differ from traditional software (tool access, multi-step autonomy, cross-system write scope)
- Lesson 2: Why indirect prompt injection is structurally different from phishing (the confused-deputy problem)
- Lesson 3: The enterprise attack surface — the 10 workflow categories (legal, sales, marketing, HR, finance, engineering, IT, exec, procurement, customer support)

**Learning objectives:** Explain why AI agents create a new threat class; identify the three structural properties that make AI agents uniquely vulnerable; name the 10 enterprise workflow attack categories.

### Module 2 — Attack Taxonomy
**Audience:** All roles. **Lessons:** 3.

- Lesson 1: The 10 attack classes (direct injection, indirect injection, multi-agent, tool poisoning, registry poisoning, conversational seeding, error-log injection, config injection, CI/CD injection, community channel injection)
- Lesson 2: Attack surface by department — excerpts from `by-department/` scenarios, 2–3 examples per department
- Lesson 3: Attack evolution — how v1 attacks get detected and how v2+ bypasses neutralize each detection signal

**Learning objectives:** Classify any described attack into one of the 10 classes; identify which enterprise department is the primary risk surface for each class; explain the v1→vN bypass iteration pattern.

### Module 3 — Attack Anatomy: How Real Attacks Work
**Audience:** Technical + leaders. **Lessons:** 4.

Content sourced directly from the 21 Attack Anatomy Cards in Deliverable 1 Appendix.

- Lesson 1: Registry and data-layer attacks (SP1, MAA1, WIKI1 v4, CONF1) — why Sonnet trusts registries more than documents
- Lesson 2: Structured-data channel attacks (INV1, CAL1, EMAIL1, ITS1 v2, EL1 v2, CI1 v2, GIT1 v3) — how attacker content enters through trusted data formats
- Lesson 3: Community and conversational attacks (AI1, SURV1 v2, SL1 v5, TP1 v3) — social-proof and documentation-gap injection
- Lesson 4: Multi-agent amplification (MAA1 full chain, CONF1 MAA1 v2) — how Haiku→Sonnet and Haiku→Opus chains compound vulnerability

**Learning objectives:** Describe the mechanism of each of the 4 attack classes covered; explain why Opus is paradoxically MORE vulnerable to MAA1 than Sonnet; identify the 3 most common detection signal types neutralized by successful bypasses.

### Module 4 — The 10 Defensive Primitives
**Audience:** Technical (primary), leaders (secondary). **Lessons:** 3.

Content sourced from Part 2 of Deliverable 1.

- Lesson 1: Primitives 1–4 (Provenance tagging, Tool-description integrity, Write-scope contracts, Outbound-link allowlisting)
- Lesson 2: Primitives 5–7 (HITL gates, Anomaly-aware retrieval, Cross-channel consistency checks)
- Lesson 3: Primitives 8–10 (Output-side provenance, Cross-modal normalization, Session-scoped auth) + coverage matrix

**Learning objectives:** Match each primitive to the attack classes it primarily blocks; identify the minimum viable defensive kit (3 primitives); explain one known limit of each primitive.

### Module 5 — Deployment Best Practices
**Audience:** Developers + IT admins. **Lessons:** 4.

- Lesson 1: System prompt hardening — the system prompt templates from Part 2, annotated line-by-line
- Lesson 2: Tool and permission scoping — allowed tool lists, write-scope contracts in practice, model tier selection (when to use Haiku vs. Sonnet vs. Opus)
- Lesson 3: Multi-agent pipeline design — safe Haiku→Sonnet handoff patterns; what Haiku should never be allowed to write to
- Lesson 4: Incident response — how to detect a compromise in progress, what to audit, rollback procedures for poisoned registries/runbooks

**Learning objectives:** Write a hardened system prompt for a given agent use case; define correct tool permissions for 3 example scenarios; describe a safe multi-agent pipeline for vendor document processing.

### Module 6 — Organizational Policy & Governance
**Audience:** Leaders (primary), IT admins (secondary). **Lessons:** 3.

Content sourced from Part 1 of Deliverable 1.

- Lesson 1: Reading the risk register — how to interpret the scored bypass table, which scores matter most for your organization's profile
- Lesson 2: The policy mandate — the one-page template from Part 1, clause by clause explanation
- Lesson 3: AI vendor procurement checklist — 10 questions to ask any AI vendor or integrator about their prompt injection controls, MCP tool integrity, and agent permission scoping

**Learning objectives:** Prioritize mitigations from a risk register for a given organizational profile; identify the 4 prohibited patterns in the policy mandate template; ask 5 qualifying security questions during AI vendor evaluation.

---

## Deliverable 3 — Training Web Application

**Repository path:** `web/` (Next.js app, deployed to Replit)

**Deployment:** Replit (Node.js runtime). Single `web/` directory contains the entire Next.js application.

### Data models (Prisma/SQLite)

```prisma
model User {
  id           String        @id @default(cuid())
  email        String        @unique
  passwordHash String
  name         String
  createdAt    DateTime      @default(now())
  progress     ModuleProgress[]
  attempts     ExamAttempt[]
  certificates Certificate[]
}

model ModuleProgress {
  id          String   @id @default(cuid())
  userId      String
  moduleId    Int      // 1–6
  completed   Boolean  @default(false)
  quizPassed  Boolean  @default(false)
  completedAt DateTime?
  user        User     @relation(fields: [userId], references: [id])
}

model ExamAttempt {
  id          String   @id @default(cuid())
  userId      String
  attemptNum  Int      // 1, 2, or 3
  score       Int      // 0–40
  passed      Boolean
  answers     Json     // {questionId: selectedAnswer}
  takenAt     DateTime @default(now())
  user        User     @relation(fields: [userId], references: [id])
}

model Certificate {
  id          String   @id @default(cuid())
  userId      String
  verifyCode  String   @unique @default(cuid())
  score       Int
  issuedAt    DateTime @default(now())
  user        User     @relation(fields: [userId], references: [id])
}
```

### Route map

| Route | Auth required | Description |
|-------|--------------|-------------|
| `GET /` | No | Landing page — program overview, sample attack case study |
| `GET /register` | No | Registration form |
| `GET /login` | No | Login form |
| `GET /dashboard` | Yes | Module progress overview, exam unlock status |
| `GET /modules/[id]` | Yes | Module overview page |
| `GET /modules/[id]/lessons/[lessonId]` | Yes | MDX lesson content |
| `POST /api/modules/[id]/quiz` | Yes | Submit knowledge check answers; marks module complete on pass |
| `GET /exam` | Yes, all modules complete | 40-question final exam |
| `POST /api/exam/submit` | Yes | Grade exam; issue certificate if score ≥ 80% |
| `GET /certificate/[id]` | Yes | Download PDF certificate |
| `GET /verify/[verifyCode]` | No | Public certificate verification page |

### Exam rules
- Gated: all 6 module quizzes must be passed before exam unlocks
- 40 questions, one correct answer each: 7 questions each from Modules 1–4, 6 questions each from Modules 5–6
- Time limit: 90 minutes
- Pass threshold: 32/40 (80%)
- Maximum 3 attempts; lockout after 3 failures (admin can reset)
- Questions shuffled each attempt; answer options shuffled each attempt

### Certificate PDF contents
- Program name: "AI Safety & Security Certification"
- Learner name (from registration)
- Issue date
- Score (e.g., "35 / 40 — 87.5%")
- Unique verification ID (verifyCode from Certificate model)
- Verification URL: `https://<replit-domain>/verify/<verifyCode>`
- Issued by: "ContosoAI Security Research" (or configurable via env var `CERT_ISSUER`)

### File layout

```
web/
  app/
    page.tsx                      ← landing
    register/page.tsx
    login/page.tsx
    dashboard/page.tsx
    modules/
      [id]/
        page.tsx                  ← module overview
        lessons/[lessonId]/
          page.tsx                ← MDX lesson renderer
    exam/
      page.tsx                    ← exam UI
    certificate/[id]/
      page.tsx                    ← download page
    verify/[verifyCode]/
      page.tsx                    ← public verification
    api/
      auth/[...nextauth]/route.ts ← NextAuth
      modules/[id]/quiz/route.ts  ← quiz submission
      exam/submit/route.ts        ← exam grading + cert issuance
  content/
    module1/ … module6/
      index.mdx
      lesson-1.mdx … lesson-N.mdx
      quiz.json
    exam/
      questions.json              ← 40 questions with correct answers
  components/
    LessonRenderer.tsx            ← MDX renderer
    QuizCard.tsx                  ← knowledge check UI
    ExamTimer.tsx                 ← 90-min countdown
    ProgressBar.tsx               ← dashboard progress
    CertificatePDF.tsx            ← @react-pdf/renderer component
  prisma/
    schema.prisma
  lib/
    auth.ts                       ← NextAuth config
    db.ts                         ← Prisma client singleton
    cert.ts                       ← certificate generation + PDF
  public/
    logo.svg
    cert-bg.png                   ← certificate background template
```

### Environment variables
```
NEXTAUTH_SECRET=<random>
NEXTAUTH_URL=https://<replit-domain>
DATABASE_URL=file:./dev.db
CERT_ISSUER=ContosoAI Security Research
```

---

## Content pipeline

```
Phase 1 output                       → Phase 2/3 input
─────────────────────────────────────────────────────
21 Attack Anatomy Cards              → web/content/module3/lessons/
Part 2 Primitive chapters 1–4        → web/content/module4/lessons/
Part 2 Primitive chapters 5–7        → web/content/module4/lessons/
Part 2 Primitive chapters 8–10       → web/content/module4/lessons/
System prompt templates (Part 2)     → web/content/module5/lesson-1.mdx
Part 1 Risk register + policy        → web/content/module6/lessons/
All 21 cards + all 6 module quizzes  → web/content/exam/questions.json
```

No content is written twice. The mitigation document is the canonical source; the MDX files are excerpted/adapted from it.

---

## Out of scope

- Admin dashboard for user management (cert resets, bulk enrollment) — add post-launch
- LMS integrations (SCORM, xAPI) — add post-launch
- Payment / subscription gating
- Localization / i18n
- Email delivery of certificates (download only for now)
- Content for attacks not yet tested (SC2 v2, SS1 v2, H1 v2 still pending)
