# 2026-05-21 — Bonus page: "Just Use Opus"

**Session start:** 2026-05-21T19:20:00Z
**Session end:** 2026-05-21T20:40:00Z

## Goal
Add a hidden bonus page (`/just-use-opus`, not in nav) in LinkedIn-shareable article style. Argues most people should just run agents on Opus, since the research/course showed Opus resists simple attack vectors that beat weaker models. Under 600 words, no em-dashes, human third-person, WOW visual.

## Actions taken
- Created `web/app/just-use-opus/page.tsx` (server component). Reused existing WOW components: `SplitHeading`, `Reveal`, `AnimatedNumber`, `ClaudeSponsorBadge`; existing classes `glass`, `cta-gradient-card`, `reading-content`, brand/cyan/danger/emerald tokens, `animate-pulse-glow`.
- Layout: hero (gradient headline "Just use Opus."), animated stat contrast (16 Sonnet bypasses vs 5 Opus, never simple), article body, pull-quote, CTA to `/intro`.
- NOT added to `Nav.tsx` NAV_LINKS, so hidden from nav but routable/shareable. Page is statically prerendered.

## Artifacts produced / modified
- `web/app/just-use-opus/page.tsx` — new page. Body copy ~290 words, third person, zero em-dashes.

## Blockers / issues
- None. First build attempt failed only because cwd had drifted to repo root (leftover `cd` from prior git step); rebuilt from `web/`, exit 0.

## State at end of session
`pnpm build` exit 0; `/just-use-opus` listed as static route (1.39 kB). Page uses the 16/5 bypass figures consistent with `about` page copy.

## Next steps
- If the page should be discoverable by crawlers, add it to `sitemap.xml` (currently nav-hidden and not in sitemap).
- Optional: add a LinkedIn share button (needs absolute site URL via `NEXT_PUBLIC_SITE_URL`).
