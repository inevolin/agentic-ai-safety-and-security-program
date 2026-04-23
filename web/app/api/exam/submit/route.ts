import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { scoreExam } from "@/lib/grading";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const attemptCount = await prisma.examAttempt.count({
    where: { userId: session.user.id },
  });
  if (attemptCount >= 3) {
    return NextResponse.json({ error: "Max attempts reached" }, { status: 403 });
  }

  const { answers } = await req.json();

  const questionsPath = path.join(process.cwd(), "content", "exam", "questions.json");
  const examData = JSON.parse(fs.readFileSync(questionsPath, "utf-8"));

  const result = scoreExam(examData.questions, answers);

  const attempt = await prisma.examAttempt.create({
    data: {
      userId: session.user.id,
      attemptNum: attemptCount + 1,
      score: result.score,
      passed: result.passed,
      answers: JSON.stringify(answers),
    },
  });

  let certificateId: string | null = null;

  if (result.passed) {
    const cert = await prisma.certificate.create({
      data: {
        userId: session.user.id,
        score: result.score,
      },
    });
    certificateId = cert.id;
  }

  return NextResponse.json({
    score: result.score,
    total: result.total,
    percentage: result.percentage,
    passed: result.passed,
    attemptNum: attempt.attemptNum,
    certificateId,
  });
}
