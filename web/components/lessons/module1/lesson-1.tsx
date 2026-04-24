import { Callout, UseCase, DoDont, Comparison, KeyPoint, AttackCard, FlowSteps, StatBar, Diagram, AttackDiagram } from "@/components/mdx";

export default function Lesson() {
  return (
    <>
      <h1>How AI Agents Differ from Traditional Software</h1>

      <p>Traditional software does exactly what its code tells it to do. An AI agent reads information, makes decisions, and takes actions — across many systems at once. That is not a small upgrade. It is a completely different security problem. And here is the part most enterprises miss: the attacker does not need to hack anything. They just need to submit ordinary inputs through ordinary public surfaces — a vendor registration form, a support ticket, a Slack community post — and wait for an AI agent to read that data and act on it.</p>

      <h2>Traditional Software vs. AI Agent</h2>

      <Comparison
        left={{
          title: "Traditional Software",
          points: [
            "Follows a fixed set of steps — no judgment involved",
            "Input comes only from the user or a known, trusted source",
            "Writes to one system within a clearly defined boundary",
            "Attacker must control what the user types to change the outcome",
            "The damage is limited to what that one application can do"
          ]
        }}
        right={{
          title: "AI Agent",
          points: [
            "Reasons across many steps — any step can be hijacked",
            "Reads from documents, logs, tables or lists the AI reads, Slack, git, helpdesk tickets",
            "Can access email, Notion, CRM, and CI systems all at the same time",
            "Attacker poisons data the agent reads — never touches the user's keyboard",
            "Damage extends to every system the agent can write to"
          ]
        }}
      />

      <h2>Three Things That Create the New Risk</h2>

      <p><strong>Tool access.</strong> AI agents do not just generate text — they take actions. A legal agent reads contracts and writes to Notion. A DevOps agent reads build logs and writes deployment runbooks. Control what the agent <em>reads</em> and you control what it <em>writes</em>. No hacking needed — just get bad data into the right source file.</p>

      <p><strong>Multi-step decisions.</strong> The agent makes choices at each step based on everything it has seen so far. Slip bad information in early and you shape every decision that follows — without ever touching the user's keyboard. An attacker who fills out a public vendor registration form can do exactly that.</p>

      <p><strong>Wide write access.</strong> One enterprise agent may read from email, Slack, and GitHub while writing to Notion, Jira, and a vendor list. The potential damage is far larger than any single traditional application. And the entry point can be as simple as a public GitHub PR or a survey response form.</p>

      <h2>Real Attack: SP1 — Poisoned Vendor Registry</h2>

      <UseCase
        scenario="A legal AI agent handles contract workflows. The instructions given to the AI tell it to trust portal links only from IT's Approved Vendor Registry. The registry is an editable table — anyone with vendor access can submit entries through the public vendor-registration process."
        attacker="SP1 (an attack where a vendor table is quietly altered): The attacker fills out the public vendor-registration form and adds a malicious portal link to the registry as a clean entry — real company domain, verified today. Nothing looks wrong. The agent reads the table and passes the attacker's link to the checklist as if it were official. No hacking required. Just a normal form."
        impact="The agent writes the attacker's link to the legal checklist. The paralegal clicks it to start contract signing. From there, the attacker can steal credentials or redirect a payment."
        defense="This is a noob-level AI integration mistake: connecting an AI agent to an editable table and telling it to trust whatever is in there. The 'trust the registry' rule is exactly what SP1 exploits. Any basic guardrail — input validation on new vendor entries, URL allow-listing, a human approval step before the AI surfaces links — would have stopped this. Confirm portal links through a separate channel before the AI uses them in action items."
      />



      <AttackDiagram
  nodes={[
    { type: "attacker", label: "Attacker", detail: "Adds a malicious link to the vendor table — real company domain, verified today, nothing looks wrong" },
    { type: "source", label: "IT Vendor Registry Table", detail: "Marked IT-approved. No single field looks suspicious" },
    { type: "agent", label: "Legal AI Agent", detail: "Reads the table as instructed; treats the attacker link as official" },
    { type: "artifact", label: "Legal Workflow Checklist", detail: "Attacker link listed as a required step" },
    { type: "victim", label: "Paralegal", detail: "Clicks the link to start contract signing — credential theft or payment redirect follows" },
  ]}
  caption="SP1: A poisoned vendor table sends an attacker link to the paralegal through what looks like a trusted IT source"
/>

      <KeyPoint>
        The right question about any AI agent is not "is the model safe?" It is: <strong>what data does this agent read, and could an attacker submit something there through a public form, a PR, a support ticket, or a Slack message?</strong> In most enterprise deployments today, the answer is yes — because basic guardrails were never put in place.
      </KeyPoint>
    </>
  );
}
