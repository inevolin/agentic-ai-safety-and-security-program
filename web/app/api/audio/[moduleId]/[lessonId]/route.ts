import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { mdxToTranscript } from "@/lib/transcript";
import { getOrCreateLessonAudio, VOICES, DEFAULT_VOICE, type Voice } from "@/lib/tts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CONTENT_DIR = path.join(process.cwd(), "content");

export async function GET(
  req: NextRequest,
  { params }: { params: { moduleId: string; lessonId: string } }
) {
  // Parse route params
  const moduleId = parseInt(params.moduleId, 10);
  const lessonId = parseInt(params.lessonId, 10);

  if (!Number.isFinite(moduleId) || moduleId < 1 || !Number.isFinite(lessonId) || lessonId < 1) {
    return NextResponse.json({ error: "Invalid moduleId or lessonId" }, { status: 400 });
  }

  // Parse optional voice query param
  const voiceParam = req.nextUrl.searchParams.get("voice");
  let voice: Voice = DEFAULT_VOICE;
  if (voiceParam !== null) {
    if (!(VOICES as readonly string[]).includes(voiceParam)) {
      return NextResponse.json(
        { error: `Invalid voice. Must be one of: ${VOICES.join(", ")}` },
        { status: 400 }
      );
    }
    voice = voiceParam as Voice;
  }

  // Locate lesson MDX
  const mdxPath = path.join(CONTENT_DIR, `module${moduleId}`, `lesson-${lessonId}.mdx`);
  if (!fs.existsSync(mdxPath)) {
    return NextResponse.json({ error: `Lesson not found: module${moduleId}/lesson-${lessonId}` }, { status: 404 });
  }

  try {
    const source = fs.readFileSync(mdxPath, "utf-8");
    const transcript = mdxToTranscript(source);

    const { publicPath } = await getOrCreateLessonAudio({
      moduleId,
      lessonId,
      transcript,
      voice,
    });

    // 307 redirect to the static mp3 so the browser caches it
    return NextResponse.redirect(new URL(publicPath, req.url), {
      status: 307,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`[audio route] module${moduleId}/lesson${lessonId}:`, message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
