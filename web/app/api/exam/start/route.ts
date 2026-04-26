import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getExamConfig } from "@/lib/exam-config";
import { EXAM_COOKIE, getOrSetCookieId } from "@/lib/exam-session";

const MAX_ATTEMPTS = 3;

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ error: "Name must be 2–120 characters" }, { status: 400 });
  }

  const { cookieId, isNew } = getOrSetCookieId();

  // Auto-finalize abandoned sessions (started, never submitted, past expiry)
  // so they count toward the attempt limit. Otherwise users can /start →
  // close tab → /start indefinitely.
  await prisma.examSession.updateMany({
    where: { cookieId, submittedAt: null, expiresAt: { lt: new Date() } },
    data: { submittedAt: new Date(), score: 0, passed: false },
  });

  const sessions = await prisma.examSession.findMany({
    where: { cookieId },
    orderBy: { startedAt: "desc" },
  });

  if (sessions.some((s) => s.passed === true)) {
    return NextResponse.json({ error: "Exam already passed" }, { status: 409 });
  }

  const submittedCount = sessions.filter((s) => s.submittedAt !== null).length;
  if (submittedCount >= MAX_ATTEMPTS) {
    return NextResponse.json({ error: "Maximum attempts reached" }, { status: 403 });
  }

  const active = sessions.find((s) => s.submittedAt === null && s.expiresAt.getTime() > Date.now());
  const { timeLimit } = getExamConfig();

  let session = active;
  if (!session) {
    session = await prisma.examSession.create({
      data: {
        cookieId,
        name,
        expiresAt: new Date(Date.now() + timeLimit * 1000),
      },
    });
  }

  const attemptNumber = submittedCount + 1;
  const res = NextResponse.json({
    sessionId: session.id,
    startedAt: session.startedAt.toISOString(),
    expiresAt: session.expiresAt.toISOString(),
    attemptNumber,
    attemptsAllowed: MAX_ATTEMPTS,
  });

  if (isNew) {
    res.cookies.set(EXAM_COOKIE, cookieId, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  }
  return res;
}
