# 2026-04-25 — Agent-readiness endpoints + unit-test suite

**Session start:** 2026-04-25T19:00:00Z
**Session end:** 2026-04-25T19:55:00Z

## Goal
Address isitagentready.com findings: publish `/robots.txt` (with AI crawler rules + Content-Signal directives), `/sitemap.xml`, Link response headers on `/`, and Markdown-for-Agents content negotiation. Then add a unit-test suite covering the new routes plus core libs so further changes don't regress.

## Actions taken
- Created `web/app/robots.txt/route.ts` — plain-text robots with `*` rule, explicit `User-agent` entries for GPTBot, ClaudeBot, Claude-Web, anthropic-ai, Google-Extended, CCBot, PerplexityBot, cohere-ai, Bytespider, Meta-ExternalAgent, OAI-SearchBot, ChatGPT-User, PerplexityBot-User. `Content-Signal:` per group (AI-train denied; search/answer agents allowed). `Sitemap:` line uses request-derived origin.
- Created `web/app/sitemap.xml/route.ts` — XML sitemap of canonical static routes (`/`, `/learn`, `/exam`, `/intro`, `/about`, `/verify`). Excludes `/api/`, `/certificate/[code]`, `/verify/[code]`. Origin derived from request `Host` + `X-Forwarded-Proto` (or `NEXT_PUBLIC_SITE_URL`).
- Edited `web/next.config.mjs` — added `headers()` returning `Link: </sitemap.xml>; rel="sitemap"; …, </about>; rel="author", </learn>; rel="index", <github-url>; rel="vcs-git"` on `/`. Added `Vary: Accept` on all non-API routes.
- Created `web/middleware.ts` — intercepts the 6 markdown-eligible paths; when `Accept: text/markdown` is preferred, rewrites to `/api/md?path=…`.
- Created `web/lib/accept.ts` — pure `parseAccept` + `prefersMarkdown` helpers (Edge-safe, importable from middleware + tests).
- Created `web/app/api/md/route.ts` — Node-runtime route handler that returns `text/markdown` with `Content-Location` + `Vary` + `X-Markdown-Tokens` headers. `/learn` rendered from `getAllModules()`; other routes hand-curated. Originally placed under `app/_md/` but folder names with `_` prefix are private in Next 14 → moved to `app/api/md/`.
- Added unit tests:
  - `lib/accept.test.ts` — Accept-header parsing + q-value comparison (10 tests).
  - `lib/attacks.test.ts` — ATTACKS dictionary integrity + `lookupAttack` normalization (`SL1 v5`, `SP1-FC`, `SP1 full chain`, `CONF1-MAA1-v2`).
  - `lib/content.test.ts` — module loader covers all 7 modules; sequential lesson IDs; `getLesson` null on missing.
  - `lib/exam-config.test.ts` — config loader + question-bank integrity (count == totalQuestions, unique IDs, `correct` index in range, every module 1..7 covered).
  - `app/robots.txt/route.test.ts` — content-type, AI-bot entries, Content-Signal, sitemap line derived from request host.
  - `app/sitemap.xml/route.test.ts` — XML structure, canonical routes present, dynamic routes excluded, every `<url>` block has `lastmod`/`changefreq`/`priority`.
  - `app/api/md/route.test.ts` — 404 on unknown path; `/` markdown rendering; `Content-Location`/`Vary`/`X-Markdown-Tokens` headers; `/learn` lists all 7 modules.
- Mock-request helper used in route tests provides only `headers.get()` (and `nextUrl.searchParams` for `/api/md`) to avoid pulling in NextRequest internals.
- Build verified clean; `pnpm test` reports **8 suites, 54 tests passing** (existing `grading.test.ts` plus 7 new).

## Artifacts produced / modified
- `web/app/robots.txt/route.ts` — new (≈ 100 lines).
- `web/app/sitemap.xml/route.ts` — new.
- `web/app/api/md/route.ts` — new; renders 6 routes as markdown.
- `web/middleware.ts` — new; Edge runtime; matches 6 paths.
- `web/lib/accept.ts` — new helper.
- `web/next.config.mjs` — added `headers()`.
- `web/lib/accept.test.ts`, `web/lib/attacks.test.ts`, `web/lib/content.test.ts`, `web/lib/exam-config.test.ts`, `web/app/robots.txt/route.test.ts`, `web/app/sitemap.xml/route.test.ts`, `web/app/api/md/route.test.ts` — new.

## Blockers / issues
- `app/_md/` folder did not route (Next 14 treats `_`-prefixed folders as private). Caught after first build showed only `/robots.txt` and `/sitemap.xml` in the route list and no `/_md` entry. Fixed by moving to `app/api/md/`.
- ESLint blocks build on `as any` in tests; replaced with `as unknown as Parameters<typeof GET>[0]`.

## State at end of session
Site now satisfies the six isitagentready.com checks: robots.txt (with explicit AI crawler rules + Content-Signal directives), sitemap.xml referenced from robots, Link headers on `/`, and Markdown-for-Agents content negotiation across the 6 main routes. New unit-test suite (54 tests, 8 suites) covers the new endpoints plus the core libs (`accept`, `attacks`, `content`, `exam-config`, `grading`). Both `pnpm build` and `pnpm test` succeed.

## Addendum — CI gating (same session)

User flagged that production deploy had no test gate. Existing
`.github/workflows/deploy-web.yml` only ran SSH-deploy on push to main.
Added `.github/workflows/ci.yml` (Jest + `pnpm build` on Ubuntu, Node 20,
pnpm 9, `prisma generate` to satisfy client codegen). Triggers:
`pull_request` on `web/**`, plus `workflow_call` so deploy-web reuses it.
Modified `deploy-web.yml` to add a `ci` job that calls `ci.yml` and made
the `deploy` job `needs: ci` — failed tests or build now block the
SSH-deploy step. PRs against `web/**` get tested without deploying.

Files: `.github/workflows/ci.yml` (new), `.github/workflows/deploy-web.yml` (modified).

## Next steps
- Optionally add jsdom + @testing-library/react to enable component tests for `Nav`, `Footer`, `LessonRenderer`, `AttackRef` portal logic, and the exam-page form/timer flow.
- Optionally publish `/.well-known/api-catalog` JSON if the public APIs (`/api/exam/submit`, `/api/certificate/{code}/download`, `/api/audio/...`) should be discoverable.
- Set `NEXT_PUBLIC_SITE_URL` in production deployment so robots/sitemap/markdown routes return the canonical absolute URL even without `Host`/`X-Forwarded-Proto` reverse-proxy headers.
- Consider adding lesson-level routes (`/learn/module/[id]/lesson/[k]`) and including them in the sitemap if/when those pages are built (current `/learn` is a single index page).
