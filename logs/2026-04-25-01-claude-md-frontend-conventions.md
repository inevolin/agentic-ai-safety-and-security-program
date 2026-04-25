# 2026-04-25 — CLAUDE.md frontend conventions expansion

**Session start:** 2026-04-25
**Session end:** 2026-04-25

## Goal
User asked to analyze `web/` and update CLAUDE.md with guidelines they keep repeating, so future sessions don't re-derive them.

## Actions taken
- Surveyed `web/` structure via Explore subagent (app router pages, components, MDX content, lib utilities, prisma schema, tailwind config, globals.css, recent git log).
- Read `web/lib/content.ts`, `web/components/LessonRenderer.tsx`, `web/app/globals.css` directly to confirm load-bearing details.
- Extended `CLAUDE.md` "Frontend conventions" section with seven new subsections before the existing AttackRef rule.

## Artifacts produced / modified
- `CLAUDE.md` — added subsections: Stack & commands, Where things live, Lesson + module authoring, Client vs. server components, Styling/theming/color tokens, Portals for popover layers. Includes module-count hardcode gotcha (`getAllModules` loop bound = 6), light-mode CSS-variable + per-class override system, `**Warning**`/`**Danger**`/`**Note**` blockquote auto-styling, MDX primitive component list.
- `logs/2026-04-25-01-claude-md-frontend-conventions.md` — this file.

## Blockers / issues
None.

## State at end of session
CLAUDE.md frontend section now covers stack, file layout, content authoring, client/server boundary, theming gotchas, and portal rule alongside the prior AttackRef guidance. Existing AttackRef + Master attack dictionary + Tooltip rendering subsections preserved unchanged.

## Next steps
- If user reports new repeating frustration not yet documented, slot it into the same section.
- Consider extracting `getAllModules` hardcode (`moduleId <= 6`) to a `MODULE_COUNT` constant or directory scan so adding a module is content-only.
