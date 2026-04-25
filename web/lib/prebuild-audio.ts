import fs from "fs";
import path from "path";
import { mdxToTranscript } from "./transcript";
import {
  getOrCreateLessonAudio,
  getOrCreateIntroAudio,
  introAudioFilename,
  DEFAULT_VOICE,
  audioFilename,
  hashTranscript,
  VOICES,
} from "./tts";
import { INTRO_DIALOGUE } from "./intro-dialogue";

const CONTENT_DIR = path.join(process.cwd(), "content");
const AUDIO_DIR = path.join(process.cwd(), "public", "audio");

interface LessonRef {
  moduleId: number;
  lessonId: number;
  filePath: string;
}

function discoverLessons(): LessonRef[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const lessons: LessonRef[] = [];
  const moduleDirs = fs
    .readdirSync(CONTENT_DIR)
    .filter((d) => /^module\d+$/.test(d))
    .sort((a, b) => parseInt(a.replace("module", "")) - parseInt(b.replace("module", "")));

  for (const moduleDir of moduleDirs) {
    const moduleId = parseInt(moduleDir.replace("module", ""));
    const dir = path.join(CONTENT_DIR, moduleDir);
    const files = fs
      .readdirSync(dir)
      .filter((f) => /^lesson-\d+\.mdx$/.test(f))
      .sort((a, b) => {
        const n = (f: string) => parseInt(f.replace("lesson-", "").replace(".mdx", ""));
        return n(a) - n(b);
      });
    for (const file of files) {
      const lessonId = parseInt(file.replace("lesson-", "").replace(".mdx", ""));
      lessons.push({ moduleId, lessonId, filePath: path.join(dir, file) });
    }
  }
  return lessons;
}

export async function runPrebuild(): Promise<void> {
  if (true) return; // skip prebuild for now, TTS is fast enough on demand and Gemini costs are non-trivial. Revisit if we add more audio or want to optimize cold start.

  const lessons = discoverLessons();
  console.log(`[tts-prebuild] start (${lessons.length} lessons)`);

  // Filenames the current transcripts hash to — anything else in /public/audio is stale.
  const expected = new Set<string>();
  expected.add(introAudioFilename(hashTranscript(INTRO_DIALOGUE)));
  for (const { moduleId, lessonId, filePath } of lessons) {
    try {
      const source = fs.readFileSync(filePath, "utf-8");
      const transcript = mdxToTranscript(source);
      const hash = hashTranscript(transcript);
      // Track every voice's expected filename so a future voice-switch doesn't nuke them.
      for (const voice of VOICES) {
        expected.add(audioFilename(moduleId, lessonId, voice, hash));
      }
    } catch {
      // ignore — generation pass below logs lesson-specific errors
    }
  }

  let generated = 0;
  let hit = 0;
  let err = 0;

  // Intro audio (hand-written dialogue, scripter skipped).
  try {
    const r = await getOrCreateIntroAudio({ dialogue: INTRO_DIALOGUE });
    if (r.cacheHit) hit++;
    else {
      console.log(`[tts-prebuild] gen intro`);
      generated++;
    }
  } catch (e) {
    console.error(`[tts-prebuild] error intro:`, e instanceof Error ? e.message : e);
    err++;
  }

  for (const { moduleId, lessonId, filePath } of lessons) {
    try {
      const source = fs.readFileSync(filePath, "utf-8");
      const transcript = mdxToTranscript(source);
      const result = await getOrCreateLessonAudio({
        moduleId,
        lessonId,
        transcript,
        voice: DEFAULT_VOICE,
      });
      if (result.cacheHit) {
        hit++;
      } else {
        console.log(`[tts-prebuild] gen m${moduleId}/l${lessonId}`);
        generated++;
      }
    } catch (e) {
      console.error(`[tts-prebuild] error m${moduleId}/l${lessonId}:`, e instanceof Error ? e.message : e);
      err++;
    }
  }

  // Sweep stale audio whose hash no longer matches any current transcript.
  // Also drops legacy .mp3 files from the previous xAI provider.
  let pruned = 0;
  if (fs.existsSync(AUDIO_DIR)) {
    for (const f of fs.readdirSync(AUDIO_DIR)) {
      if (!f.endsWith(".wav") && !f.endsWith(".mp3")) continue;
      if (expected.has(f)) continue;
      try {
        fs.unlinkSync(path.join(AUDIO_DIR, f));
        pruned++;
      } catch {
        // ignore — best effort
      }
    }
  }

  console.log(
    `[tts-prebuild] done: ${generated} generated, ${hit} cached, ${pruned} stale pruned, ${err} errors`
  );
}
