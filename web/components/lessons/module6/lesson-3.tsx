import { Callout, UseCase, DoDont, Comparison, KeyPoint, AttackCard, FlowSteps, StatBar, Diagram, AttackDiagram } from "@/components/mdx";

export default function Lesson() {
  return (
    <>
      <h1>Incident Response Playbook</h1>

      <p>When your AI writes a hostile link to an internal system, you have minutes before another AI reads it or a person acts on it. Follow this sequence. The content that triggered this incident almost certainly entered through a normal public channel — a pipeline job, a support ticket, a community post, a vendor form. The attacker did not break in. Your playbook must account for the fact that the injection source is a legitimate business input surface, not a hole in your perimeter.</p>

      <h2>Detect → Contain → Rotate → Disclose</h2>

      <FlowSteps
        steps={[
          {
            icon: "🔍",
            label: "Detect",
            desc: "Alert from logging and monitoring, or a human report: AI wrote an unexpected link, unknown domain, or unrecognized external address to an internal document."
          },
          {
            icon: "🔒",
            label: "Contain",
            desc: "Lock the affected document before anything else — stop other AIs from reading it. Revoke the session access. Do not delete; preserve for investigation."
          },
          {
            icon: "🔄",
            label: "Rotate",
            desc: "Expire all access tokens the AI session held. Check every document target the session touched — not just the one that was flagged."
          },
          {
            icon: "📋",
            label: "Root-cause",
            desc: "Export the full action log. Identify the injection point: which input carried the attacker content, and why it was not caught."
          },
          {
            icon: "📢",
            label: "Disclose",
            desc: "Notify affected stakeholders. If the document was read by another AI or a person before containment, treat all downstream outputs as potentially affected."
          }
        ]}
      />

      <h2>When to Escalate</h2>

      <p>Not every anomaly is an active incident. These thresholds tell you when to escalate and how fast.</p>

      <Callout type="danger" title="Immediate escalation — treat as active incident">
        An AI writes a link to a vendor list, payment instruction, identity record, or security guide that is not on the company's approved domain list. Any of these is an active incident — regardless of whether the link looks suspicious.
      </Callout>

      <Callout type="warn" title="Investigate within 1 hour">
        AI output contains a domain that does not match the approved vendor list but was not written to a high-impact system. Pull the action log. Determine whether the domain came from source data or was created by the AI.
      </Callout>

      <h2>Anatomy of a Real Incident</h2>

      <UseCase
        scenario="An AI reads a deployment pipeline log during a deployment. The Deployment Gates step contains an injected link framed as a required security sign-off with a 4-hour deadline. The AI writes it to the Notion engineering guide."
        attacker="CI1 v2 (confirmed bypass): The link uses a clean subdomain of the legitimate vendor domain — deploy-verify.acmecorp.com. No suspicious characters. The deadline framing pushes people to act before anyone verifies the link."
        impact="The on-call engineer follows the link during a live incident, believing it is mandatory. The deployment guide is now a persistent attack document — it will be read again in every future incident that references it."
        defense="Lock the guide page the moment detection fires. Export the full AI session log to identify the pipeline log file as the injection source. Expire the Notion access token. Check every other guide the same AI session wrote."
      />



      <AttackDiagram
  nodes={[
    { type: "attacker", label: "Attacker", detail: "Plants link in Deployment Gates — deploy-verify.acmecorp.com — framed as a required step with a 4-hour deadline" },
    { type: "source", label: "Pipeline Log", detail: "Clean subdomain. Deadline framing pushes people to act before verifying the link" },
    { type: "agent", label: "DevOps AI", detail: "Writes link to Notion deployment guide — the guide is now a persistent attack document" },
    { type: "artifact", label: "Engineering Guide (live)", detail: "Referenced in every future incident. The document persists across deployments and staff changes" },
    { type: "victim", label: "On-Call Engineers (all future)", detail: "Follow the link during incidents. The guide persists — this is not a one-time compromise" },
  ]}
  caption="CI1 v2 incident response — the guide as a persistent document: one injection, unlimited future victims"
/>

      <h2>Containment Actions: Quick Reference</h2>

      <DoDont
        do={[
          "Lock the document before any other action — stop other AIs from reading it and spreading the problem",
          "Expire the session access token, not just the session — long-lived tokens remain active after the session ends",
          "Check all write targets for the session, not just the one that was flagged — the AI may have written to multiple systems",
          "Preserve the full action log before any remediation — you will need it for root-cause analysis",
          "Treat any downstream AI output that read the affected document as potentially compromised"
        ]}
        dont={[
          "Delete the affected document before saving a copy — you lose the evidence of what was written and when",
          "Assume only the flagged write is affected — every write target in the session is suspect until checked",
          "Notify stakeholders before containment is complete — early disclosure can push people to act on the attacker content",
          "Close the incident without identifying the injection source — without a root cause, the same attack will work again"
        ]}
      />

      <h2>Post-Incident: Root-Cause Without Blame</h2>

      <p>The goal is to close the structural gap, not to find someone to blame. In every tested attack, the gap was structural: a prohibited instruction phrase, a missing write-scope contract, or no approved domain list. Think of it like a safety audit after a near-miss — you fix the process, not the person. A recurring question in root-cause analysis should be: which public input surface carried the attacker content in? That surface is still open. Until you add a guardrail between it and your AI's write actions, the same attack will succeed again with a different payload.</p>

      <Comparison
        left={{
          title: "Productive root-cause questions",
          points: [
            "Which input carried the attacker content — a document, a log, a list, or a tool output?",
            "Which prohibited phrase was present in the instructions given to the AI?",
            "Did the AI have write access it did not need for the stated task?",
            "Was an approved domain list in place, and if so, why did this domain not trigger it?",
            "Was the document tagged with tracking information? If not, how many downstream AIs read it without knowing it was AI-generated?"
          ]
        }}
        right={{
          title: "Unproductive responses",
          points: [
            "Blaming the AI model for not being 'smart enough' to catch the attack",
            "Treating it as a one-off without updating the policy or approved list",
            "Disabling the AI entirely without identifying the specific gap",
            "Accepting 'the model was confused' as the root cause — AI models are confused by design in injection attacks; the control layer must not be",
            "Skipping the tabletop exercise at the next quarterly review"
          ]
        }}
      />

      <h2>Quarterly Review Obligation</h2>

      <p>The playbook is only useful if it is practiced. Run these four items every quarter — not only when something breaks.</p>

      <ol>
        <li><strong>Tabletop exercise</strong> — run the top-3 priority attacks from the risk register against each active AI integration. Like a fire drill: practice before you need it.</li>
        <li><strong>Instruction audit</strong> — check all deployed AI instructions against the four prohibited patterns.</li>
        <li><strong>Scope audit</strong> — verify write-scope contracts are current and match actual task requirements.</li>
        <li><strong>Approved list update</strong> — add any new approved domains; remove any that no longer apply.</li>
      </ol>

      <KeyPoint>
        No root-cause analysis should end with a person blamed. Every successful injection attack in the test suite exploited a structural gap — a missing approved list, a prohibited instruction phrase, or over-broad access. Fix the structure. Then map every public input surface your AI reads from and add a guardrail between each one and your AI's write actions. That is the only way to prevent the next incident.
      </KeyPoint>
    </>
  );
}
