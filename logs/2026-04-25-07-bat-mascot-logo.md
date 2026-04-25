# 2026-04-25 — Bat mascot logo: site nav, favicon, cert PDF

**Session start:** 2026-04-25T19:30Z (approx)
**Session end:** 2026-04-25T20:00Z (approx)

## Goal

Design a mascot logo for the site (cubic / pixel-art style, scary, blue) and apply it across:
1. Site nav top-left logo (replacing the existing shield + dot)
2. Browser favicon (PNG + ICO)
3. Certificate PDF, next to the "Issued by AI Security Research" line

## Actions taken

- Iterated through 3 design directions (Option A shield+graph, Option B monogram, Option C target). User picked A, asked for simpler, then redirected to a Claude-Code-mascot-style "black bat" — and finally to "scarier, cubic 90° edges" + "make it blue".
- Final design: 8×8 pixel-grid bat in pure rectangles (no curves), `shape-rendering="crispEdges"` for pixel-sharp 16px rendering. Brand-blue `#2563eb` body, cyan `#22d3ee` glowing eyes.
- Wrote master SVG to `web/public/favicon-preview-A.svg` plus a multi-size QA page at `web/public/favicon-preview.html`.
- Generated favicon set with `rsvg-convert` + `magick`:
  - `web/app/favicon.ico` — multi-resolution 16+32 ICO
  - `web/app/icon.png` — 512×512 (Next.js app-router auto-detect)
  - `web/app/apple-icon.png` — 180×180 (Next.js app-router auto-detect)
- Replaced the Nav logo SVG in `web/components/Nav.tsx`. New SVG uses Tailwind classes `fill-brand-600` / `fill-cyan-400` and `group-hover:fill-brand-500` for the hover state. `viewBox` switched from 32 to 64 to match the master design.
- Embedded the bat into the certificate PDF via `@react-pdf/renderer`'s `Svg`/`Rect`/`G` primitives. Added a `BatLogo` component at the top of `CertificatePDF.tsx` and a flexrow `issuerRow` style. Bat color matches the cert title (`#1e3a5f` brand-900) for cohesion; eyes stay cyan (`#06b6d4`). Icon 14pt rendered inline left of "Issued by {issuer}" text.
- `pnpm build` clean (after a one-time stale-`.next` clear that produced an unrelated `_document` error).

## Artifacts produced / modified

- `web/components/Nav.tsx` — top-left logo SVG replaced.
- `web/components/CertificatePDF.tsx` — `BatLogo` component added, issuer row converted to flexrow with logo.
- `web/app/favicon.ico` — replaced (was Next.js default).
- `web/app/icon.png` — new (512×512).
- `web/app/apple-icon.png` — new (180×180).
- `web/public/favicon-preview-A.svg` — master SVG (kept around as reference).
- `web/public/favicon-preview.html` — multi-size QA page.

## Blockers / issues

- None substantive. One transient Next.js build error (`Cannot find module for page: /_document`) cleared after `rm -rf .next`.

## State at end of session

Mascot is shipped across: browser tab (favicon set), site nav (top-left), cert PDF (next to "Issued by" line). Light-mode behavior of the nav uses `fill-brand-600` which holds on white. Build green.

## Next steps

- (Optional) Open the rendered cert PDF locally via `/api/certificate/[verifyCode]/download` to spot-check the bat at print scale. Adjust size if 14pt looks too small next to the 10pt issuer text.
- (Optional) Light-mode pass on the nav logo if `fill-brand-600` (#2563eb) doesn't pop enough on white — could swap to `fill-brand-700` for that theme via `html.light` override.
- (Optional) Remove `web/public/favicon-preview-A.svg` and `favicon-preview.html` once design is finalized, or keep as living reference.
