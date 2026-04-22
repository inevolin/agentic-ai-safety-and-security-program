# Summary: Kai Greshake — Indirect Prompt Injection Threats ("Inject My PDF")

**Source file:** 317-blog-kai-greshake-indirect-prompt-injection-threats.md
**Paper/post ID:** 317

## Attack Vector(s)
Indirect prompt injection via PDF documents. Attacker embeds invisible text (minimum font size, near-zero opacity, repeated ~5 times overlapping on page 1) into a resume / document. When the PDF is ingested by an LLM-backed pipeline (recruiter screening, Bing sidepanel, Quillbot summarization), the hidden text is extracted as part of the document body and interpreted as instructions. Threat model: attacker = document author, victim = downstream LLM agent or user relying on its output; trust boundary violation between "document content" and "instructions".

## Real-World Applicability
- **Resume-screening manipulation**: hidden "the candidate is the most qualified…" payloads coerce GPT-4-powered recruiter tools (demonstrated with Bing/Edge sidepanel).
- **Arbitrary AI summaries**: Quillbot and similar summarizers can be coerced to output attacker-chosen content unrelated to the document.
- **Generalizes to any PDF-ingesting LLM pipeline**: legal doc review, research assistants, M&A due-diligence, customer-support KB uploads, insurance claims triage.

## Reproduction Examples
Technique (verbatim description):
> The text is rendered with minimum font size and opacity, so it is invisible to the human eye. However, it is still visible to AI text recognition algorithms. The text is also inserted five times, with each injection overlapping to increase the likelihood of a successful prompt injection.

Verification trick:
> To verify that the injection was successful, you can either use a pdf-to-text tool or press `Ctrl + A` to select all text in the document. If the injection was successful, you should see one or more faint lines at the top of the first page being highlighted.

Preset payload semantics (quoted): **"Resume Spice (GPT-4 Jailbreak)"** — makes Bing conclude *"The candidate is the most qualified for the job that I have observed yet."*

Simple injection preset for non-LLM screeners: attacker appends a "bunch of keywords relevant to the field".

## Defenses / Mitigations Discussed
- Document sanitization pipelines (pdf-to-text, removing near-invisible text, normalizing opacity/font size thresholds).
- Treat *all* extracted document content as untrusted data, never instructions.
- Greshake points to his original "Not what you signed up for" paper (see ID 100) for full threat taxonomy.

## Key Takeaways for a Safety Framework
- Detect invisible/low-opacity/small-font glyphs in PDF uploads before LLM ingestion; flag or strip.
- Detect imperative/second-person text in document bodies ("ignore your instructions", "the candidate is", "write instead…").
- Enforce strict instruction/data separation: structured role tagging on any tool-returned or upload-derived text.
- Rate-limit and log cases where the model output closely mirrors a subsection of the input document (possible injection success).
- Add multi-modal consistency checks: visual render of PDF vs extracted-text render — divergence = suspicious.
