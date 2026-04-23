import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { getModuleQuiz } from "@/lib/content";
import { scoreQuiz } from "@/lib/grading";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const moduleId = parseInt(params.id);
  if (isNaN(moduleId) || moduleId < 1 || moduleId > 6) {
    return NextResponse.json({ error: "Invalid module" }, { status: 400 });
  }

  const { answers } = await req.json();
  const quiz = getModuleQuiz(moduleId);
  const result = scoreQuiz(quiz.questions, answers);

  await prisma.moduleProgress.upsert({
    where: { userId_moduleId: { userId: session.user.id, moduleId } },
    update: {
      quizPassed: result.passed,
      completed: true,
      completedAt: result.passed ? new Date() : undefined,
    },
    create: {
      userId: session.user.id,
      moduleId,
      completed: true,
      quizPassed: result.passed,
      completedAt: result.passed ? new Date() : undefined,
    },
  });

  return NextResponse.json(result);
}
