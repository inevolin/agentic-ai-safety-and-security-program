import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { scoreExam } from "@/lib/grading";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, answers } = body;

  const trimmedName = typeof name === "string" ? name.trim() : "";
  if (trimmedName.length < 2 || trimmedName.length > 120) {
    return NextResponse.json({ error: "Name must be 2–120 characters" }, { status: 400 });
  }

  const questionsPath = path.join(process.cwd(), "content", "exam", "questions.json");
  const examData = JSON.parse(fs.readFileSync(questionsPath, "utf-8"));

  const result = scoreExam(examData.questions, answers);

  if (result.passed) {
    const cert = await prisma.certificate.create({
      data: {
        name: trimmedName,
        score: result.score,
      },
    });
    return NextResponse.json({
      passed: true,
      score: result.score,
      total: result.total,
      percentage: result.percentage,
      verifyCode: cert.verifyCode,
    });
  }

  return NextResponse.json({
    passed: false,
    score: result.score,
    total: result.total,
    percentage: result.percentage,
  });
}
