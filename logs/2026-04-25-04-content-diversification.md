# 2026-04-25 — Content scenario diversification

**Session start:** 2026-04-25T18:30:00Z
**Session end:** 2026-04-25T19:47:11Z

## Goal
Reduce repetition across web/ lessons + exam where the same "Acme Corp vendor registry / DocuSign portal" scenario was reused 26+ times to teach distinct attack vectors. Replace with a pool of plain-English industry scenarios (hospital pharmacy, bank wire transfers, government suppliers, car insurance body shops, university admissions, online store seller help-desk, hospital crash log, bank open-source library) so a wide non-technical audience sees variety. Drop jargon abbreviations (PBM, GSA, SWIFT, BIC, NSC, DDQ, SOC2, KYC, HIPAA, SLA).

## Actions taken
- Surveyed entire web/content/ MDX corpus + exam questions + attacks.ts to map existing scenario repetition (26+ vendor-registry references, 15+ paralegal/portal references, 10+ config/log references).
- Drafted diversification map with 7-domain pool covering 5 distinct industries.
- Re-skinned Module 2 Lesson 1 (already done in earlier session — verified pharmacy + customer-support FAQ in place).
- Re-skinned Module 3 Lesson 1 — SP1 → auto body-shop list, TP1 → university transcript verification.
- Re-skinned Module 3 Lesson 2 — WIKI1 → bank approved-recipients list, ITS1 → online-store seller help-desk.
- Patched Module 3 Lesson 3 — fixed incoherent UseCase that mixed bank + hospital framing; now consistent hospital scheduling app crash-log scenario.
- Re-skinned Module 3 Lesson 4 — MAA1 → car insurance body-shop network; collapsed MAA1+CONF1 v2 into a "same pattern, different industry" Callout sidebar.
- Re-skinned Module 5 Lesson 3 — Registry & Catalog Handling now centers on government supplier list with bid-intake.fedops-supply.gov.
- Module 5 Lesson 2 — swapped acmecorp.com → contosoai.com in the CI1 UseCase.
- Exam questions.json — re-skinned Q17 (GIT1 bank library), Q19 (WIKI1 bank recipients), Q36 (MAA1 body shop), Q39 (body-shop pipeline), Q41 (supplier-onboarding); replaced "SOC 2 cycle" jargon in Q45.
- attacks.ts — polished tooltip summaries: SP1, WIKI1, MAA1, TP1, ITS1, L4, M1, DEF1 reworded to generic "approved list" / plain English, dropping "vendor registry" / "DDQ" / "RAG corpus" jargon.
- Pre-existing TS strict-mode error in lib/prebuild-audio.ts (`e: unknown` narrowing) blocked build — fixed both catch blocks with explicit cast pattern.
- pnpm build passes.

## Artifacts produced / modified
- web/content/module3/lesson-1.mdx — full re-skin (SP1 body-shop, TP1 university)
- web/content/module3/lesson-2.mdx — full re-skin (WIKI1 bank, ITS1 online-store)
- web/content/module3/lesson-3.mdx — UseCase fix only
- web/content/module3/lesson-4.mdx — full re-skin (MAA1 body-shop, sidebar for DevOps variant)
- web/content/module5/lesson-2.mdx — domain swap in UseCase
- web/content/module5/lesson-3.mdx — full re-skin (government suppliers)
- web/content/exam/questions.json — Q17, Q19, Q36, Q39, Q41, Q45 re-skinned
- web/lib/attacks.ts — 8 tooltip summaries polished
- web/lib/prebuild-audio.ts — TS error fix in two catch blocks

## Blockers / issues
- Subagent dispatch attempt hit org monthly usage limit; executed all edits directly from parent context.
- TS strict-mode catch narrowing required explicit `as Error | undefined` cast — `instanceof Error` ternary did not propagate the narrow in this project's TS version.

## State at end of session
Acme Corp + vendor registry framing dropped from primary teaching scenarios in 6 of the 7 over-repeated lessons. Each major lesson now features a distinct industry. Module 1 Lesson 1 still uses Acme as the canonical first example (intentional). Several attacks defined in attacks.ts (CAL1, EMAIL1, H1, M1) remain with 0 lessons — adding sidebars/coverage is deferred. No additional new exam questions were added; only existing ones were re-skinned. Build passes.

## Next steps
- Optional: add new lesson sidebars covering CAL1, EMAIL1, M1 (0-coverage attacks).
- Optional: add `industry` tag to AttackMeta type so future authoring can balance coverage.
- Optional: add lint guard counting "acmecorp.com" / "Acme Corp" mentions in web/content/**.
- Run a manual visual pass through /learn/module-3 and /learn/module-5 in a browser to verify rendering.
