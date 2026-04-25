import crypto from "crypto";
import fs from "fs";
import path from "path";

export const VOICES = ["eve", "ara", "rex", "sal", "leo"] as const;
export type Voice = (typeof VOICES)[number];
export const DEFAULT_VOICE: Voice = "rex";

const AUDIO_DIR = path.join(process.cwd(), "public", "audio");

/** Canonical filename for a lesson audio file. */
export function audioFilename(
  moduleId: number,
  lessonId: number,
  voice: Voice,
  transcriptHash: string
): string {
  return `m${moduleId}-l${lessonId}-${voice}-${transcriptHash}.mp3`;
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

/**
 * Returns the absolute disk path to a cached mp3, generating it if missing.
 * Throws if XAI_API_KEY is missing or the API call fails.
 */
export async function getOrCreateLessonAudio(opts: {
  moduleId: number;
  lessonId: number;
  transcript: string;
  voice: Voice;
}): Promise<AudioResult> {
  const { moduleId, lessonId, transcript, voice } = opts;

  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "XAI_API_KEY is not set. Add it to web/.env.local as XAI_API_KEY=<your-key>"
    );
  }

  // Ensure audio dir exists
  fs.mkdirSync(AUDIO_DIR, { recursive: true });

  const hash = hashTranscript(transcript);
  const filename = audioFilename(moduleId, lessonId, voice, hash);
  const filePath = path.join(AUDIO_DIR, filename);
  const publicPath = `/audio/${filename}`;

  // Cache hit
  if (fs.existsSync(filePath)) {
    const bytes = fs.statSync(filePath).size;
    return { filePath, publicPath, cacheHit: true, bytes };
  }

  // Cache miss — call xAI TTS
  const response = await fetch("https://api.x.ai/v1/tts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: transcript,
      voice_id: voice,
      language: "en",
    }),
  });

  // Try the documented endpoint first; fall back if wrong
  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(
      `xAI TTS API error ${response.status}: ${errBody}`
    );
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Atomic write: write to .tmp then rename
  const tmpPath = `${filePath}.tmp`;
  fs.writeFileSync(tmpPath, buffer);
  fs.renameSync(tmpPath, filePath);

  return { filePath, publicPath, cacheHit: false, bytes: buffer.length };
}
