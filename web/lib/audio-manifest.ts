import fs from "fs";
import path from "path";
import { audioFilename, hashTranscript, introAudioFilename, DEFAULT_VOICE, type Voice } from "./tts";
import { INTRO_DIALOGUE } from "./intro-dialogue";

const AUDIO_DIR = path.join(process.cwd(), "public", "audio");

/**
 * Returns the public URL for a lesson's cached mp3 if it already exists on disk,
 * or null if the file has not yet been generated.
 * No API calls, no generation — purely a disk lookup.
 */
export function lessonAudioPublicPath(opts: {
  moduleId: number;
  lessonId: number;
  transcript: string;
  voice?: Voice;
}): string | null {
  const { moduleId, lessonId, transcript, voice = DEFAULT_VOICE } = opts;
  const hash = hashTranscript(transcript);
  const filename = audioFilename(moduleId, lessonId, voice, hash);
  const filePath = path.join(AUDIO_DIR, filename);
  if (fs.existsSync(filePath)) {
    return `/audio/${filename}`;
  }
  return null;
}

/** Public URL for the /intro page audio if cached on disk, else null. */
export function introAudioPublicPath(): string | null {
  const filename = introAudioFilename(hashTranscript(INTRO_DIALOGUE));
  const filePath = path.join(AUDIO_DIR, filename);
  return fs.existsSync(filePath) ? `/audio/${filename}` : null;
}
