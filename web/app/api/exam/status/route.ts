import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getCookieId } from "@/lib/exam-session";

const MAX_ATTEMPTS = 3;

export async function GET() {
  const cookieId = getCookieId();
  if (!cookieId) {
    return NextResponse.json({
      attempts: 0,
      attemptsAllowed: MAX_ATTEMPTS,
      hasPassed: false,
      activeSession: null,
    });
  }

  // Match /start: abandoned (expired-unsubmitted) sessions count as used attempts.
  await prisma.examSession.updateMany({
    where: { cookieId, submittedAt: null, expiresAt: { lt: new Date() } },
    data: { submittedAt: new Date(), score: 0, passed: false },
  });

  const sessions = await prisma.examSession.findMany({
    where: { cookieId },
    orderBy: { startedAt: "desc" },
  });

  const submittedCount = sessions.filter((s) => s.submittedAt !== null).length;
  const passed = sessions.find((s) => s.passed === true);
  const active = sessions.find((s) => s.submittedAt === null && s.expiresAt.getTime() > Date.now());

  return NextResponse.json({
    attempts: submittedCount,
    attemptsAllowed: MAX_ATTEMPTS,
    hasPassed: !!passed,
    passedVerifyCode: passed?.verifyCode ?? null,
    activeSession: active
      ? {
          startedAt: active.startedAt.toISOString(),
          expiresAt: active.expiresAt.toISOString(),
          name: active.name,
        }
      : null,
  });
}
