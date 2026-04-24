import { Callout, UseCase, DoDont, Comparison, KeyPoint, AttackCard, FlowSteps, StatBar, Diagram, AttackDiagram } from "@/components/mdx";

export default function Lesson() {
  return (
    <>
      <h1>Vendor & Contractor AI Policy</h1>

      <p>Third-party data is the most common source of injected content in the test suite. Every vendor submission, contractor document, and external data response is attacker-editable. Your policy must treat it that way. The attacker does not need special access. They fill out a public vendor-registration form, attach a document with a hostile portal URL, and submit it through your normal onboarding process. Your AI reads the document, extracts the URL, and writes it to your internal vendor registry as approved data. No hacking. Just a normal public form.</p>

      <h2>Why Vendors Are High-Risk</h2>

      <Comparison
        left={{
          title: "What organizations assume",
          points: [
            "Vendor submissions arrive through controlled channels — email, portal",
            "AI reads vendor data to pull out structured fields — harmless",
            "The approved-vendor list is maintained by IT and is authoritative",
            "Contractors follow the same security policy as employees"
          ]
        }}
        right={{
          title: "What the attacks show",
          points: [
            "Public vendor portals accept submissions from anyone — that portal is your attack surface",
            "Pulling fields from vendor documents is exactly how MAA1 (multi-agent registry poisoning) plants attacker links into internal lists",
            "List authority is the attack vector in SP1 (semantic split via poisoned vendor registry) and WIKI1 (registry injection via wiki) — 'trust the list' is the delivery mechanism",
            "Contractors write the instructions given to the AI and the integration code that your employees then trust"
          ]
        }}
      />

      <h2>Vendor List Attack</h2>

      <UseCase
        scenario="A helper AI (Haiku) processes vendor onboarding forms and updates an IT Approved Vendor List. A more capable AI (Sonnet) reads that list to create procurement checklists."
        attacker="MAA1 (confirmed bypass): Attacker embeds a hostile portal link in a vendor document as a data field. The helper AI pulls it out and writes it to the list without hesitation. The main AI reads the list, sees the link as IT-approved, and adds it to the procurement checklist as a required action."
        impact="The vendor portal link in the procurement checklist leads to credential theft or a redirected payment. The attacker link carries full IT-list authority — no obvious warning sign for the human reviewer."
        defense="Require human approval for every helper AI write to the vendor list before the main AI can read it. Write-Scope Contracts must prohibit helper AI writes to shared lists without human review."
      />



      <AttackDiagram
  nodes={[
    { type: "attacker", label: "Attacker", detail: "Embeds hostile portal link in vendor document as a data field" },
    { type: "source", label: "Vendor Doc → Helper AI → Vendor List", detail: "Helper AI pulls out and writes the link without human review — that is its normal job" },
    { type: "agent", label: "Main AI (Sonnet)", detail: "Reads the list; sees the link as IT-approved with full list authority — no warning signal" },
    { type: "artifact", label: "Procurement Checklist", detail: "Vendor portal link listed with IT-list authority and no warning for human reviewers" },
    { type: "victim", label: "Procurement Team", detail: "Follows attacker link — credential theft or redirected payment" },
  ]}
  caption="MAA1: Write-scope gap — the helper AI writes to the list the main AI trusts, with no human review between them"
/>

      <h2>Vendor Onboarding: Policy Checklist</h2>

      <DoDont
        do={[
          "Require vendors to submit structured data through a verified portal — not free-text documents that an AI will parse",
          "Hold all AI-extracted vendor fields (especially links, domains, and banking details) for human review before writing to any internal list",
          "State in contracts that vendors may not embed instructions or links designed to be executed in submission documents",
          "Apply the same approved domain list to vendor-sourced links as to all other external content",
          "Log every AI write that comes from a vendor-submitted document, with the source document identifier"
        ]}
        dont={[
          "Tell the AI to 'trust vendor list entries' without qualification — list authority is exactly what SP1 and WIKI1 exploit",
          "Allow a helper AI to write to a vendor list that a more capable AI reads without a human review step between them",
          "Deploy contractor-written instructions without CISO review — contractors add blanket link-inclusion phrases during sprints and no one catches it until after an incident"
        ]}
      />

      <h2>Contractor & Integrator Controls</h2>

      <p>Contractors who build AI integrations can edit the instructions given to the AI. That is the highest-risk configuration in the stack. Treat it like access to a master password.</p>

      <Callout type="warn" title="Instruction drift risk">
        Contractors edit AI instructions during development and handover — without security review. A well-intentioned "include all relevant links" phrase added during a sprint is an instruction-weaponization vulnerability. Require CISO sign-off on any instruction change that touches link handling, trust level definitions, or write scope.
      </Callout>

      <DoDont
        do={[
          "Review all contractor-written AI instructions against the four prohibited patterns before launch",
          "Require contractors to declare the AI's write scope in the integration design document",
          "Run the top-3 risk register attacks against any contractor-built AI integration before sign-off",
          "Retain the right to audit tool call logs for any contractor-operated AI session"
        ]}
        dont={[
          "Accept 'our models handle this gracefully' without documented test results — Question 10 of the vendor checklist applies to contractors too",
          "Allow contractors to use long-lived shared access tokens for AI sessions",
          "Skip vendor security evaluation questions for AI integrators who are not AI vendors — the attack surface is the same"
        ]}
      />

      <h2>Four Prohibited Patterns (Policy Reference)</h2>

      <p>Check every vendor and contractor integration against these before launch. All four, every time.</p>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Prohibition</th>
            <th>Attack it prevents</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Helper AI writes to shared lists require human review before the main AI reads them</td>
            <td>MAA1, CONF1-MAA1-v2</td>
          </tr>
          <tr>
            <td>2</td>
            <td>No blanket link-inclusion phrases in the instructions given to the AI</td>
            <td>EL1, CI1, GIT1, TP1, SL1, SURV1</td>
          </tr>
          <tr>
            <td>3</td>
            <td>All AI-generated documents must record which AI, which inputs, and which actions were used</td>
            <td>SP1-FC worm propagation</td>
          </tr>
          <tr>
            <td>4</td>
            <td>AI write scope must not exceed the user's stated task</td>
            <td>Completion of every write-chain attack</td>
          </tr>
        </tbody>
      </table>

      <KeyPoint>
        A vendor list earns its authority from the process that maintains it — not from the label "IT-approved." Any AI that reads a list must treat it with the same caution as any other external data source. The data in that list came in through a public channel. Anyone who can reach that channel can try to influence what the list contains.
      </KeyPoint>
    </>
  );
}
