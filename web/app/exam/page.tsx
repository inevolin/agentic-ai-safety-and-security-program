import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getUserProgress, getAttemptCount } from "@/lib/progress";
import { prisma } from "@/lib/db";
import { ExamClient } from "@/components/ExamClient";
import fs from "fs";
import path from "path";

export default async function ExamPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const { allModulesComplete } = await getUserProgress(session.user.id);
  if (!allModulesComplete) redirect("/dashboard");

  const attemptCount = await getAttemptCount(session.user.id);
  if (attemptCount >= 3) redirect("/dashboard");

  const cert = await prisma.certificate.findFirst({
    where: { userId: session.user.id },
  });
  if (cert) redirect(`/certificate/${cert.id}`);

  const questionsPath = path.join(process.cwd(), "content", "exam", "questions.json");
  const examData = JSON.parse(fs.readFileSync(questionsPath, "utf-8"));

  // Shuffle question order only (NOT options — client sends original option indices)
  const shuffled = [...examData.questions].sort(() => Math.random() - 0.5);

  // Strip correct answer before sending to client
  const clientQuestions = shuffled.map((q: { id: string; text: string; options: string[]; correct: number; moduleId: number }) => ({
    id: q.id,
    text: q.text,
    options: q.options,
  }));

  return (
    <ExamClient
      questions={clientQuestions}
      attemptNumber={attemptCount + 1}
      timeLimit={5400}
    />
  );
}
