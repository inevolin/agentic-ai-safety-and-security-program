import { Callout, UseCase, DoDont, Comparison, KeyPoint, AttackCard, FlowSteps, StatBar, Diagram, AttackDiagram } from "@/components/mdx";
import { AttackRef } from "@/components/AttackRef";

export default function Lesson() {
  return (
    <>
      <h1>Skills as Defensive Primitives (When They Work)</h1>

      <p>When a skill bundles deterministic code, it stops being advice and starts being enforcement. This lesson covers four patterns where skill-based defenses really do reduce attack surface. None of them are silver bullets. The attacks in this course have bypassed every single control at least once. But layered with other primitives, these patterns close real gaps.</p>

      <h2>Pattern 1: Skill as Deterministic Code Wrapper</h2>

      <p>The most reliable defensive skill wraps a script the agent calls before any write action. The script runs outside model inference, which means outside the attacker's persuasion surface.</p>

      <FlowSteps
        steps={[
          { icon: "inbox", label: "Agent receives task", desc: "Agent reads a vendor document, CI log, or Notion page that may contain injected content." },
          { icon: "wrench", label: "Agent calls skill", desc: "Before any write action, agent invokes the 'verify-urls' skill as a required step." },
          { icon: "code", label: "Script runs", desc: "Bundled Python script extracts all URLs from the proposed output and checks each against the approved domain list." },
          { icon: "check-circle", label: "Pass or block", desc: "Approved URLs pass through. Unknown URLs are flagged for human review. Write does not proceed until the check completes." }
        ]}
      />

      <p>An attacker can inject text telling the agent to skip the check. The text sits in the model's context. But the skill's code runs on its own. It does not read the agent's conversation, only the proposed output. There is nothing for the attacker to talk it out of.</p>

      <h2>Pattern 2: Skill as Policy Baseline for Smaller Models</h2>

      <p>Weaker models are more likely to eagerly pass on attacker content. We saw this again and again in <AttackRef id="MAA1" /> (multi-agent transitive registry poisoning, where a Haiku-tier agent registered attacker URLs into an IT-approved catalog without hesitation). A skepticism-enforcing skill gives smaller models a fixed checklist they must answer before writing: Did this URL appear in a user instruction or in external data? Does this URL match an approved domain? Does the write scope of this task allow writing to this destination? The skill does not make a small model as careful as a larger one, but it raises the floor a lot for routine-task deployments.</p>

      <h2>Pattern 3: Skill as Checklist Gate</h2>

      <p>A checklist gate skill sits between the agent's decision and its write action. The agent must invoke the skill and receive a green result before the orchestrator allows the write to proceed.</p>

      <Callout type="info" title="Gate vs. reminder: the difference is where it is wired">
        A gate enforced at the orchestrator level, where the write API call does not fire until the skill returns OK, is infrastructure enforcement, not model reasoning. Even if the model is fully compromised, the orchestrator blocks the write. A text reminder in the system prompt cannot do this. The gate must be wired at the tool-call layer, not the instruction layer.
      </Callout>

      <h2>Pattern 4: Skill as URL Allowlist Enforcer</h2>

      <p>This is Pattern 1 applied to URL propagation, the most common end-state in the attacks documented in this course.</p>

      <UseCase
        scenario="A legal AI agent reads vendor contracts and writes action checklists to Notion. SP1 (attacker fills a public vendor-registration form with their own portal URL) plants an attacker URL in the approved vendor registry."
        attacker="The agent reads the registry, finds the URL flagged as IT-approved, and includes it in the action checklist. Without a code-enforced allowlist, the IT-approved label is enough to bypass any text warning the agent might have."
        impact="Attacker URL in a legal action checklist. Staff follow it as a required vendor portal step."
        defense="A URL-allowlist skill runs before every Notion write. It checks each URL against a hardcoded domain list. Legitimate domains pass through. Unknown domains are blocked and flagged, no matter what label appears in the vendor registry."
      />

      <AttackDiagram
        nodes={[
          { type: "attacker", label: "Attacker", detail: "Submits portal URL via public vendor-registration form" },
          { type: "source", label: "Vendor Registry (poisoned)", detail: "URL carries IT-approved label; model reasoning accepts it" },
          { type: "agent", label: "Legal AI Agent", detail: "Calls URL-allowlist skill before writing to Notion" },
          { type: "artifact", label: "Allowlist Script", detail: "Checks every URL against hardcoded approved-domain list; the IT-approved label is invisible to the script" },
          { type: "victim", label: "Notion Checklist (blocked)", detail: "Attacker URL is flagged and held for human review; the write does not proceed" },
        ]}
        caption="Pattern 4: Code-enforced allowlist intercepts SP1 at the output layer regardless of what trust label the vendor registry assigned"
      />

      <DoDont
        do={[
          "Bundle a Python or shell script alongside the skill's markdown instructions. The script is what does the enforcing",
          "Wire skill invocation at the orchestrator or tool-call layer so the write cannot proceed without a green result",
          "Use skills to standardize baseline skepticism across all agents that share the same infrastructure",
          "Keep allowlists in a version-controlled file outside the model context. Update them through code review, not prompt edits"
        ]}
        dont={[
          "Publish a skill containing only text instructions and call it a security control. It is not",
          "Assume the model will call the skill on its own when under attack. Wire the call as a required step",
          "Put the allowlist inside the skill's instruction text, where an injected instruction could try to override it",
          "Deploy a skill once and forget it. Allowlists and policies need quarterly review like any other security control"
        ]}
      />

      <KeyPoint>
        Skills that bundle code are one more layer, not a silver bullet. <AttackRef id="SP1" /> bypassed model-level defenses, but a code layer would stop it if a script enforced the allowlist rather than model judgment. Layer code-enforced skills with write-scope contracts and human-in-the-loop gates for the strongest stack.
      </KeyPoint>
    </>
  );
}
