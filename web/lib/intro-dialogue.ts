// Hand-written 2.5-minute Alex/Sam intro for /intro. Hashed to derive the
// cache filename, so any edit here regenerates the wav on the next prebuild.
export const INTRO_DIALOGUE = `Alex: Welcome to a five-minute brief on AI agent safety. I'm Alex, with Sam.
Sam: Hey. What's the angle today?
Alex: What every executive, manager, and employee needs to know about AI agents at work — in plain English.
Sam: Lay it on me.
Alex: Point one. AI agents now take real actions inside companies. They write to wikis, send messages, push code, file tickets, call external services.
Sam: So a single bad instruction can trigger a chain of actions your team never authorised.
Alex: Exactly. Point two. Attackers don't hack anymore. They fill out forms.
Sam: Forms.
Alex: They put malicious instructions inside ordinary business data. A Slack message. A CSV row. An error log. A calendar invite. The AI reads it, and acts on it.
Sam: So the attacker never touches the system directly?
Alex: Never. They put bait in a channel the AI is already trusted to read.
Sam: Has anyone proven this in practice?
Alex: Our research team ran twenty-one attack scenarios against Claude Sonnet and Claude Opus. Sixteen succeeded against Sonnet. Five against Opus. None required hacking.
Sam: Sixteen out of twenty-one. With nothing but ordinary inputs.
Alex: No exploits, no zero-days. Just convincing sentences in the right place.
Sam: Okay, quick by-role rundown — what do people actually do about it?
Alex: Executives, ask your CISO whether you have a map of which AI agents can write to which systems, and whether it gets reviewed every quarter.
Sam: Managers, before greenlighting an AI workflow?
Alex: Require a write-permission map, a second channel for anything that moves money or sends communications, and a defined rollback procedure.
Sam: Sales, marketing, ops teams?
Alex: Watch for unexpected URLs in AI summaries. Watch for institutional language like "per IT's request" used to fake authority. And anything that asks you to take an irreversible action based on what the AI just read, slow down and double check.
Sam: And employees using AI tools day to day?
Alex: Don't paste secrets. Treat AI outputs as drafts. Verify links before clicking. If something feels unusual, ask a human first.
Sam: What's the cost of getting this wrong?
Alex: The average data breach in 2024 cost four point eight million dollars. US business email compromise losses last year topped two point nine billion. And the EU AI Act caps maximum fines at seven percent of global annual turnover.
Sam: For a one billion dollar company, that's seventy million.
Alex: Right. This page is the awareness layer. The depth, the engineering, the defenses — that lives in the full certified course. Seven modules, about three hours, exam-graded certificate.
Sam: And this brief on its own doesn't yield a certificate. Only the full course does.
Alex: Awareness in five minutes. Mastery in three hours. Your call.
Sam: Thanks for listening. Now go map your AI write permissions.`;

export const INTRO_AUDIO_TAG = "intro";
