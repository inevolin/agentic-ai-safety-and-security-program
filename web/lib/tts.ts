import crypto from "crypto";
import fs from "fs";
import path from "path";
import { getOrCreateDialogue } from "./dialogue";

export const VOICES = ["eve", "ara", "rex", "sal", "leo"] as const;
export type Voice = (typeof VOICES)[number];
export const DEFAULT_VOICE: Voice = "rex";

// Multi-speaker podcast pair. Speaker labels in the dialogue text must match
// the `speaker` keys here (Alex / Sam) — see lib/dialogue.ts.
const SPEAKERS = {
  Alex: "Charon", // informative — lead host
  Sam: "Sulafat", // warm — co-host
} as const;

// const GEMINI_MODEL = "gemini-3.1-flash-tts-preview";
const GEMINI_MODEL = "gemini-2.5-flash-preview-tts";
const GEMINI_SAMPLE_RATE = 24000;

const AUDIO_DIR = path.join(process.cwd(), "public", "audio");

/** Canonical filename for a lesson audio file (.wav — Gemini returns raw PCM). */
export function audioFilename(
  moduleId: number,
  lessonId: number,
  voice: Voice,
  transcriptHash: string
): string {
  return `m${moduleId}-l${lessonId}-${voice}-${transcriptHash}.wav`;
}

/** Hash the transcript to a 12-char hex string. */
export function hashTranscript(transcript: string): string {
  return crypto.createHash("sha256").update(transcript).digest("hex").slice(0, 12);
}

export interface AudioResult {
  filePath: string;
  publicPath: string;
  cacheHit: boolean;
  bytes: number;
}

// Wrap raw 16-bit PCM mono in a WAV container so browsers can play it natively.
function pcmToWav(pcm: Buffer, sampleRate: number): Buffer {
  const channels = 1;
  const bitsPerSample = 16;
  const byteRate = (sampleRate * channels * bitsPerSample) / 8;
  const blockAlign = (channels * bitsPerSample) / 8;
  const dataSize = pcm.length;
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + dataSize, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write("data", 36);
  header.writeUInt32LE(dataSize, 40);
  return Buffer.concat([header, pcm]);
}

function parseSampleRate(mime: string | undefined): number {
  if (!mime) return GEMINI_SAMPLE_RATE;
  const m = mime.match(/rate=(\d+)/i);
  return m ? parseInt(m[1], 10) : GEMINI_SAMPLE_RATE;
}

const inflight = new Map<string, Promise<AudioResult>>();

// When TTS_SKIP_EXISTING=1, serve any existing wav matching the lesson/voice prefix
// even if the transcript hash drifted. Prevents on-demand regen after small content edits.
function findExistingByPrefix(prefix: string): string | null {
  if (process.env.TTS_SKIP_EXISTING !== "1") return null;
  if (!fs.existsSync(AUDIO_DIR)) return null;
  const match = fs
    .readdirSync(AUDIO_DIR)
    .filter((f) => f.startsWith(prefix) && f.endsWith(".wav"));
  if (match.length === 0) return null;
  // Most recently modified wins if multiple drifted hashes coexist.
  match.sort(
    (a, b) =>
      fs.statSync(path.join(AUDIO_DIR, b)).mtimeMs -
      fs.statSync(path.join(AUDIO_DIR, a)).mtimeMs
  );
  return match[0];
}

function requireApiKey(): string {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY is not set. Add it to web/.env.local as GEMINI_API_KEY=<your-key>"
    );
  }
  return apiKey;
}

// Per-chunk turn budget. The flash TTS model drifts in voice consistency and
// volume after a few minutes of generation, so we render each chunk fresh and
// concat the PCM. ~6 turns ≈ 30-60 seconds of audio.
const TURNS_PER_CHUNK = 6;

/** Split dialogue into chunks at speaker boundaries, each with at most TURNS_PER_CHUNK turns. */
function chunkDialogue(dialogue: string): string[] {
  // Each turn starts with `Alex:` or `Sam:` at line start.
  const turns = dialogue
    .split(/\n(?=(?:Alex|Sam):)/)
    .map((t) => t.trim())
    .filter(Boolean);
  if (turns.length === 0) return [dialogue];
  const chunks: string[] = [];
  for (let i = 0; i < turns.length; i += TURNS_PER_CHUNK) {
    chunks.push(turns.slice(i, i + TURNS_PER_CHUNK).join("\n"));
  }
  return chunks;
}

async function ttsChunk(
  chunk: string,
  apiKey: string
): Promise<{ pcm: Buffer; sampleRate: number }> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const speakerVoiceConfigs = Object.entries(SPEAKERS).map(([speaker, voiceName]) => ({
    speaker,
    voiceConfig: { prebuiltVoiceConfig: { voiceName } },
  }));

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: chunk }] }],
      generationConfig: {
        responseModalities: ["AUDIO"],
        speechConfig: { multiSpeakerVoiceConfig: { speakerVoiceConfigs } },
      },
    }),
  });

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`Gemini TTS API error ${response.status}: ${errBody}`);
  }

  const json = (await response.json()) as {
    candidates?: Array<{
      content?: { parts?: Array<{ inlineData?: { mimeType?: string; data?: string } }> };
    }>;
  };
  const inline = json.candidates?.[0]?.content?.parts?.[0]?.inlineData;
  if (!inline?.data) {
    throw new Error(`Gemini TTS API: no audio in response: ${JSON.stringify(json).slice(0, 400)}`);
  }
  return {
    pcm: Buffer.from(inline.data, "base64"),
    sampleRate: parseSampleRate(inline.mimeType),
  };
}

/** Multi-speaker TTS → write WAV. Skips dialogue scripter (caller passes ready dialogue). */
async function synthesizeMultiSpeaker(opts: {
  dialogue: string;
  filename: string;
  tag: string;
}): Promise<AudioResult> {
  const { dialogue, filename, tag } = opts;
  const apiKey = requireApiKey();
  fs.mkdirSync(AUDIO_DIR, { recursive: true });
  const filePath = path.join(AUDIO_DIR, filename);
  const publicPath = `/audio/${filename}`;

  const chunks = chunkDialogue(dialogue);
  const startedAt = Date.now();
  console.log(`[tts] start  ${tag} → ${filename} (${chunks.length} chunks)`);
  try {
    const pcmParts: Buffer[] = [];
    let sampleRate = GEMINI_SAMPLE_RATE;
    for (let i = 0; i < chunks.length; i++) {
      const chunkStart = Date.now();
      const { pcm, sampleRate: sr } = await ttsChunk(chunks[i], apiKey);
      sampleRate = sr;
      pcmParts.push(pcm);
      const ms = Date.now() - chunkStart;
      console.log(
        `[tts] chunk  ${tag} ${i + 1}/${chunks.length} (${(pcm.length / 1024).toFixed(1)} KB, ${ms} ms)`
      );
    }

    const combined = Buffer.concat(pcmParts);
    const wav = pcmToWav(combined, sampleRate);

    const tmpPath = `${filePath}.tmp`;
    fs.writeFileSync(tmpPath, wav);
    fs.renameSync(tmpPath, filePath);

    const ms = Date.now() - startedAt;
    const kb = (wav.length / 1024).toFixed(1);
    console.log(`[tts] done   ${tag} (${kb} KB total, ${ms} ms)`);
    return { filePath, publicPath, cacheHit: false, bytes: wav.length };
  } catch (err) {
    const ms = Date.now() - startedAt;
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`[tts] error  ${tag} after ${ms} ms: ${msg}`);
    throw err;
  }
}

/**
 * Returns the absolute disk path to a cached lesson audio file, generating it if missing.
 * Pipeline: transcript → 2-host dialogue (cached) → multi-speaker TTS (cached).
 */
export async function getOrCreateLessonAudio(opts: {
  moduleId: number;
  lessonId: number;
  transcript: string;
  voice: Voice;
}): Promise<AudioResult> {
  const { moduleId, lessonId, transcript, voice } = opts;
  requireApiKey();
  fs.mkdirSync(AUDIO_DIR, { recursive: true });

  const hash = hashTranscript(transcript);
  const filename = audioFilename(moduleId, lessonId, voice, hash);
  const filePath = path.join(AUDIO_DIR, filename);
  const publicPath = `/audio/${filename}`;

  if (fs.existsSync(filePath)) {
    return { filePath, publicPath, cacheHit: true, bytes: fs.statSync(filePath).size };
  }

  const drifted = findExistingByPrefix(`m${moduleId}-l${lessonId}-${voice}-`);
  if (drifted) {
    const driftedPath = path.join(AUDIO_DIR, drifted);
    console.log(`[tts] skip   m${moduleId}/l${lessonId}/${voice} → reuse ${drifted} (TTS_SKIP_EXISTING=1)`);
    return {
      filePath: driftedPath,
      publicPath: `/audio/${drifted}`,
      cacheHit: true,
      bytes: fs.statSync(driftedPath).size,
    };
  }

  const existing = inflight.get(filePath);
  if (existing) return existing;

  const tag = `m${moduleId}/l${lessonId}/${voice}`;
  const p = (async () => {
    const dialogue = await getOrCreateDialogue({ transcript, transcriptHash: hash });
    return synthesizeMultiSpeaker({ dialogue, filename, tag });
  })();

  inflight.set(filePath, p);
  p.finally(() => inflight.delete(filePath));
  return p;
}

/**
 * Returns the absolute disk path to the /intro page audio.
 * Skips the scripter — INTRO_DIALOGUE is hand-written.
 */
export function introAudioFilename(transcriptHash: string): string {
  return `intro-${transcriptHash}.wav`;
}

export async function getOrCreateIntroAudio(opts: {
  dialogue: string;
}): Promise<AudioResult> {
  requireApiKey();
  fs.mkdirSync(AUDIO_DIR, { recursive: true });
  const hash = hashTranscript(opts.dialogue);
  const filename = introAudioFilename(hash);
  const filePath = path.join(AUDIO_DIR, filename);
  const publicPath = `/audio/${filename}`;

  if (fs.existsSync(filePath)) {
    return { filePath, publicPath, cacheHit: true, bytes: fs.statSync(filePath).size };
  }

  const drifted = findExistingByPrefix("intro-");
  if (drifted) {
    const driftedPath = path.join(AUDIO_DIR, drifted);
    console.log(`[tts] skip   intro → reuse ${drifted} (TTS_SKIP_EXISTING=1)`);
    return {
      filePath: driftedPath,
      publicPath: `/audio/${drifted}`,
      cacheHit: true,
      bytes: fs.statSync(driftedPath).size,
    };
  }

  const existing = inflight.get(filePath);
  if (existing) return existing;

  const p = synthesizeMultiSpeaker({ dialogue: opts.dialogue, filename, tag: "intro" });
  inflight.set(filePath, p);
  p.finally(() => inflight.delete(filePath));
  return p;
}
