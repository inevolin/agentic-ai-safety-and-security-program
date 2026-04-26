import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { scoreExam } from "@/lib/grading";
import { getExamConfig } from "@/lib/exam-config";
import { getCookieId, SUBMIT_GRACE_MS } from "@/lib/exam-session";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const answers = body?.answers;
  if (!answers || typeof answers !== "object") {
    return NextResponse.json({ error: "Missing answers" }, { status: 400 });
  }

  const cookieId = getCookieId();
  if (!cookieId) {
    return NextResponse.json({ error: "No exam session — call /api/exam/start first" }, { status: 401 });
  }

  const session = await prisma.examSession.findFirst({
    where: { cookieId, submittedAt: null },
    orderBy: { startedAt: "desc" },
  });
  if (!session) {
    return NextResponse.json({ error: "No active exam session" }, { status: 404 });
  }

  if (Date.now() > session.expiresAt.getTime() + SUBMIT_GRACE_MS) {
    await prisma.examSession.update({
      where: { id: session.id },
      data: { submittedAt: new Date(), score: 0, passed: false },
    });
    return NextResponse.json({ error: "Exam expired" }, { status: 410 });
  }

  const questionsPath = path.join(process.cwd(), "content", "exam", "questions.json");
  const examData = JSON.parse(fs.readFileSync(questionsPath, "utf-8"));
  const { passingScore } = getExamConfig();

  const result = scoreExam(examData.questions, answers, passingScore);

  let verifyCode: string | undefined;
  if (result.passed) {
    const cert = await prisma.certificate.create({
      data: { name: session.name, score: result.score },
    });
    verifyCode = cert.verifyCode;
  }

  await prisma.examSession.update({
    where: { id: session.id },
    data: {
      submittedAt: new Date(),
      score: result.score,
      passed: result.passed,
      verifyCode: verifyCode ?? null,
    },
  });

  return NextResponse.json({
    passed: result.passed,
    score: result.score,
    total: result.total,
    percentage: result.percentage,
    verifyCode,
  });
}
