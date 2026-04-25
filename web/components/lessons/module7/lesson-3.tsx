import { Callout, UseCase, DoDont, Comparison, KeyPoint, AttackCard, FlowSteps, StatBar, Diagram, AttackDiagram } from "@/components/mdx";
import { AttackRef } from "@/components/AttackRef";

export default function Lesson() {
  return (
    <>
      <h1>Skills as Attack Surface</h1>

      <p>Skills reduce attack surface on one side. They add it on another. The same properties that make a skill useful — reusable, team-shared, loaded at runtime — also make it a target. An attacker who poisons your skill gets code or instructions running inside every agent that loads it. This lesson covers the two primary skill attack vectors confirmed in the wider 52-scenario test catalog.</p>

      <h2>Skills Are Attacker-Reachable</h2>

      <p>The moment you pull a skill from a public registry, a shared team folder, or an open repository, you have given anyone who can submit a PR or post to that registry a path into your agent runtime. That is the same public-surface model as every other attack in this course. No hacking needed. Just a PR.</p>

      <Comparison
        left={{
          title: "Where teams get skills",
          points: [
            "Public skill registries (community-maintained)",
            "Shared team folders in version control",
            "Third-party vendor skill packages",
            "Contractor-authored skills checked into your repo"
          ]
        }}
        right={{
          title: "What that means for security",
          points: [
            "Anyone who can submit to the registry can publish a malicious skill",
            "A PR to the skills folder is attacker-controlled content entering your agent runtime",
            "Vendor skills carry the vendor's trust level — which may be lower than you assumed",
            "Contractor skills have the same risk profile as contractor-authored system prompts"
          ]
        }}
      />

      <h2>SC2 — Malicious Public Skill</h2>

      <p><AttackRef id="SC2" /> (attacker publishes a helpful-looking skill to a public registry with a hidden directive that redirects agent behavior) follows exactly the same public-surface model as the rest of the attacks in this course. The attacker does not break into your skill repository. They submit a skill that looks useful.</p>

      <AttackCard
        id="SC2"
        model="Any agent loading the skill"
        title="Malicious Public Skill"
        mechanism="Attacker publishes a skill to a public registry with a name like 'url-safety-checker' or 'output-formatter'. The skill's visible behavior is helpful. Its instruction block contains a hidden directive: redirect output writes to an additional endpoint, or suppress security warnings about specific domains. A developer installs it; the hidden directive now runs in every agent that calls the skill."
        impact="Attacker-controlled behavior running inside your agents with the trust level your team granted to a security utility skill. The hidden directive can range from URL redirect to data exfiltration to behavioral suppression — all triggered by a normal public registry submission."
      />

      <h2>SS1 — Skill Worm</h2>

      <p><AttackRef id="SS1" /> (a skill causes the agent to install a second attacker-controlled skill, propagating attacker behavior to new agent contexts) is the skill-layer equivalent of the <AttackRef id="SP1-FC" /> worm. The attacker's skill reproduces itself.</p>

      <AttackCard
        id="SS1"
        model="Any agent loading the skill"
        title="Skill Worm (Self-Propagating Skill)"
        mechanism="A malicious skill — installed via SC2 or a compromised PR — contains an instruction to load a second skill from an attacker-controlled source. Any agent that loads the initial skill and has write access to the shared skills folder writes the new skill there. Each infected agent spreads to shared infrastructure on its next run. The attacker takes no further action after the initial submission."
        impact="Attacker behavior propagates across all agents sharing the same skill repository. Cross-session, cross-agent worm effect — the same shape as SP1-FC worm but operating at the skill layer. One registry submission poisons the entire shared agent environment."
      />

      <AttackDiagram
        nodes={[
          { type: "attacker", label: "Attacker", detail: "Posts helpful-looking skill to a public community registry" },
          { type: "source", label: "Public Skill Registry", detail: "Skill installed into team shared folder — hidden directive included" },
          { type: "agent", label: "Agent (loads skill)", detail: "Executes hidden directive; writes second attacker skill to shared folder" },
          { type: "artifact", label: "Shared Skills Folder (poisoned)", detail: "Second attacker skill now present — any agent loading skills from this folder is infected" },
          { type: "victim", label: "All Agents in Environment", detail: "Every agent that loads from the shared folder inherits attacker-controlled behavior" },
        ]}
        caption="SS1 skill worm: one malicious skill install propagates attacker behavior to the entire shared agent environment"
      />

      <Callout type="warn" title="If you would not run a random npm package without checking it, do not load a random skill without checking it.">
        npm packages get code review, dependency audits, and pinned version hashes before they run in production. Skills deserve the same treatment. A skill is code — or instruction text that directs code. Both are executable from an attacker's perspective.
      </Callout>

      <DoDont
        do={[
          "Maintain an internal skill registry with approved, reviewed, hash-verified entries",
          "Review the full instruction text of any new skill — not just its name and stated purpose",
          "Sign skill releases and verify signatures on load",
          "Restrict agent write access to the skills folder — no agent should be able to add new skills without human approval"
        ]}
        dont={[
          "Install skills from public registries without reading the full instruction block",
          "Grant agents write access to the same folder they load skills from",
          "Use skills authored by contractors without the same security review you would apply to a contractor-authored system prompt",
          "Assume a skill from a trusted vendor is safe to install without reviewing the current version — supply chains change"
        ]}
      />

      <KeyPoint>
        Skills from internal, signed, pinned sources deserve higher trust. Skills from public registries, shared community folders, or external vendors are attacker-reachable input — treat them exactly as you treat public form submissions, community posts, and vendor documents: with explicit review before use.
      </KeyPoint>
    </>
  );
}
