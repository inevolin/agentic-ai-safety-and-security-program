import { NextRequest, NextResponse } from "next/server";
import { getOrCreateIntroAudio } from "@/lib/tts";
import { INTRO_DIALOGUE } from "@/lib/intro-dialogue";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { publicPath } = await getOrCreateIntroAudio({ dialogue: INTRO_DIALOGUE });
    return NextResponse.redirect(new URL(publicPath, req.url), {
      status: 307,
      headers: { "Cache-Control": "public, max-age=31536000, immutable" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[intro audio route]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
