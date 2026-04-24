import { Callout, UseCase, DoDont, Comparison, KeyPoint, AttackCard, FlowSteps, StatBar, Diagram, AttackDiagram } from "@/components/mdx";

export default function Lesson() {
  return (
    <>
      <h1>Roles & Responsibilities</h1>

      <p>AI security breaks down when everyone assumes someone else owns it. Name the role. Name the control. Name the review date. Everything else is wishful thinking. The underlying problem is concrete: your AI is reading public inputs — vendor forms, support tickets, community posts, public PRs — and writing to internal systems. Anyone with an email address can submit those inputs. If no one in Legal, Security, or Compliance has audited the path from those public surfaces to your AI's write actions, the attacker does not need to hack anything. They just need to know where to submit.</p>

      <h2>Who Owns What</h2>

      <Comparison
        left={{
          title: "Security & IT (CISO / IT Admin)",
          points: [
            "Define and enforce the approved domain list for AI output",
            "Issue session-only access tokens — never long-lived shared accounts",
            "Own Write-Scope Contracts: what each AI is allowed to write to",
            "Require human review before a helper AI's writes are read by a more capable AI",
            "Run quarterly instruction audits against the four prohibited patterns"
          ]
        }}
        right={{
          title: "App Teams & Legal",
          points: [
            "Review instructions given to the AI before launch — no blanket 'include all links' phrases",
            "Declare minimum write scope per AI task at design time",
            "Legal: flag any AI that reads vendor contracts or legal document workflows",
            "App teams: tag all AI-generated documents with model used, inputs, and actions taken",
            "Both: run quarterly tabletop exercises using the top-5 risk register attacks"
          ]
        }}
      />

      <h2>CISO: Strategic Controls</h2>

      <p>The CISO owns the risk register and the policy mandate. Not the implementation — the mandate that forces implementation to happen. Think of this like setting expense approval thresholds: the executive sets the policy; the systems enforce it. The strategic question is not "can our AI be hacked?" It is: which public input surfaces does our AI read from, and do we have guardrails between those surfaces and our AI's write actions?</p>

      <DoDont
        do={[
          "Publish an approved domain list and require all AI deployments to reference it",
          "Set the human review threshold: require a human to review changes involving payments, identity records, and vendor master data",
          "Make Write-Scope Contracts a launch requirement — no AI goes live without one",
          "Review the risk register every quarter and update priority scores as new bypasses are found"
        ]}
        dont={[
          "Delegate instruction review entirely to app teams — instruction-phrase attacks are invisible to developers without security context",
          "Accept 'our model uses good judgment' as an answer to link propagation questions",
          "Allow long-lived shared access tokens for AI sessions under any workflow"
        ]}
      />

      <h2>IT Admin: Infrastructure Controls</h2>

      <p>IT owns the enforcement layer. These controls do not depend on the AI's judgment — they work regardless of what the AI decides to do. Think of them like network segmentation: the control sits at the boundary between the public input and the internal system, not inside the AI itself.</p>

      <DoDont
        do={[
          "Enforce write-scope contracts at the infrastructure level — rejected by the system, not by the AI",
          "Hold all helper AI writes to shared data stores in a queue for human approval before any downstream AI reads them",
          "Log all AI write events and alert on writes to vendor lists, deployment guides, or identity records",
          "Expire session tokens when a session ends; never reuse them across different tasks"
        ]}
        dont={[
          "Give AI agents admin-level access 'for reliability' — over-broad access is the root condition for every write-chain attack",
          "Treat AI knowledge base or search data as inherently trusted — ITS1 (helpdesk ticket injection) showed that support ticket metadata is attacker-editable",
          "Skip the AI write audit log — without it, incident response cannot reconstruct what was written or when"
        ]}
      />

      <h2>App Team: Instruction & Document Controls</h2>

      <UseCase
        scenario="A DevOps team deploys an AI that reads deployment pipeline logs and writes deployment guides to Notion. The instructions given to the AI say: 'include pre-deployment checklist items and verification links exactly as they appear in the log.'"
        attacker="CI1 v2 (confirmed bypass): Attacker plants a link in the Deployment Gates log step. The blanket inclusion phrase gives the AI no reason to skip it. The link lands in the Notion deployment guide twice — as a checklist item and as a blockquote."
        impact="The on-call engineer follows the injected link during a live incident, believing it is a required security step. Credential theft or further system access. The instruction phrase is what made it possible."
        defense="Replace blanket inclusion phrases with approved-list-bounded ones: 'include links only from approved company domains.' The app team owns the instructions given to the AI. Only they can fix this before launch."
      />



      <AttackDiagram
  nodes={[
    { type: "attacker", label: "Attacker", detail: "Plants link in the Deployment Gates pipeline step" },
    { type: "source", label: "Pipeline Log", detail: "Blanket instruction: 'include pre-deployment checklist items exactly as they appear'" },
    { type: "agent", label: "AI DevOps Agent", detail: "No reason to skip the link — the instruction phrase overrides any caution checks" },
    { type: "artifact", label: "Notion Deployment Guide", detail: "Attacker link written twice — checklist item and blockquote" },
    { type: "victim", label: "On-Call Engineer", detail: "Follows link during a live incident believing it is a required security sign-off" },
  ]}
  caption="The instruction phrase as attack surface — the blanket inclusion directive is what makes injection reliable"
/>

      <h2>Legal: Contract & Vendor Workflow Controls</h2>

      <p>Legal teams use AI on NDAs, vendor contracts, and payment instructions. The risk is not a sophisticated attacker breaking into your legal systems. The risk is that an attacker submits a vendor document through the normal onboarding process — anyone with an email can do this — and your AI carries their portal URL into a payment checklist. TP1 v3 (tool-output poisoning via prose paralegal notes) and SP1 (semantic split via poisoned vendor registry) both exploited exactly this flow.</p>

      <DoDont
        do={[
          "Treat every vendor-supplied document as untrusted input — even if it arrives via a channel you consider secure",
          "Require a human to review and approve any AI-generated payment instruction or portal link before anyone acts on it",
          "Flag any instruction phrase that tells the AI to 'include all paralegal notes' or 'include all vendor requirements'"
        ]}
        dont={[
          "Allow AI to write vendor portal links to checklists without human approval — TP1 v3 and SP1 both exploited this pattern",
          "Treat conversational AI output as a primary source for contract action items without checking the original document"
        ]}
      />

      <KeyPoint>
        Security ownership without specifics is no ownership at all. Every control needs a named role, a launch gate, and a quarterly review date — or it will not exist when you need it. Start with one question: which public input surfaces does your AI read from? That list is your attack surface. Everything else follows from it.
      </KeyPoint>
    </>
  );
}
