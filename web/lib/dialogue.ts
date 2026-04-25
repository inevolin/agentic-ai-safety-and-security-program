import fs from "fs";
import path from "path";

const DIALOGUE_DIR = path.join(process.cwd(), ".tts-cache", "dialogues");
const SCRIPTER_MODEL = "gemini-3-flash-preview";

const PROMPT_TEMPLATE = `You are a teacher and scriptwriter. Rewrite the lesson below as a natural 2-host audio dialogue.

Hosts:
- Alex: the lead host. Grounded, informative, drives the structure.
- Sam: the co-host. Asks clarifying questions, adds examples, summarises occasionally.

Format rules (strict):
- Every line must be exactly "Alex: <text>" or "Sam: <text>" — speaker name, colon, then one line.
- Alternate speakers naturally. They actually talk to each other, not in monologues.
- Cover ALL of the lesson's substance: every concept, every attack, every example, do/don't, key takeaway.
- Don't read the source verbatim. Paraphrase, banter, ask each other questions, give quick natural reactions.
- Open with Alex briefly framing the topic. Close with Sam wrapping up.
- No stage directions, no bracketed cues, no headings, no markdown. Just speaker lines.
- Keep it tight: aim for 600 to 900 words total.
- Plain spoken English. No URLs, no code, no jargon read literally.

Lesson source:
<<<
{{TRANSCRIPT}}
>>>

Output only the dialogue lines.`;

function ensureDir(): void {
  fs.mkdirSync(DIALOGUE_DIR, { recursive: true });
}

const inflight = new Map<string, Promise<string>>();

export async function getOrCreateDialogue(opts: {
  transcript: string;
  transcriptHash: string;
}): Promise<string> {
  const { transcript, transcriptHash } = opts;
  ensureDir();
  const cachePath = path.join(DIALOGUE_DIR, `${transcriptHash}.txt`);

  if (fs.existsSync(cachePath)) {
    return fs.readFileSync(cachePath, "utf-8");
  }

  const existing = inflight.get(cachePath);
  if (existing) return existing;

  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY is not set. Add it to web/.env.local as GEMINI_API_KEY=<your-key>"
    );
  }

  const startedAt = Date.now();
  console.log(`[dialogue] start ${transcriptHash} (${transcript.length} chars)`);

  const p = (async () => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${SCRIPTER_MODEL}:generateContent?key=${encodeURIComponent(apiKey)}`;
    const prompt = PROMPT_TEMPLATE.replace("{{TRANSCRIPT}}", transcript);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7 },
      }),
    });
    if (!response.ok) {
      const errBody = await response.text();
      throw new Error(`Dialogue scripter API error ${response.status}: ${errBody}`);
    }
    const json = (await response.json()) as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
    };
    const text = json.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("").trim();
    if (!text) {
      throw new Error(`Dialogue scripter returned no text: ${JSON.stringify(json).slice(0, 500)}`);
    }

    // Sanity check: must contain at least one Alex: or Sam: line
    if (!/^(Alex|Sam):/m.test(text)) {
      throw new Error(`Dialogue scripter output not in expected format: ${text.slice(0, 300)}`);
    }

    const tmp = `${cachePath}.tmp`;
    fs.writeFileSync(tmp, text);
    fs.renameSync(tmp, cachePath);

    const ms = Date.now() - startedAt;
    console.log(`[dialogue] done  ${transcriptHash} (${text.length} chars, ${ms} ms)`);
    return text;
  })();

  inflight.set(cachePath, p);
  p.finally(() => inflight.delete(cachePath));
  return p;
}
