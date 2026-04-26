import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCookieId, isDevMode } from "@/lib/exam-session";

export async function POST() {
  if (!isDevMode()) {
    return NextResponse.json({ error: "Dev mode disabled" }, { status: 403 });
  }
  const cookieId = getCookieId();
  if (!cookieId) {
    return NextResponse.json({ ok: true, deleted: 0 });
  }
  const r = await prisma.examSession.deleteMany({ where: { cookieId } });
  return NextResponse.json({ ok: true, deleted: r.count });
}
