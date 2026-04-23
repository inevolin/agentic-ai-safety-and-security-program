import { prisma } from "./db";

export async function getUserProgress(userId: string) {
  const progress = await prisma.moduleProgress.findMany({
    where: { userId },
  });
  const allModulesComplete = [1, 2, 3, 4, 5, 6].every((id) =>
    progress.find((p) => p.moduleId === id && p.quizPassed)
  );
  return { progress, allModulesComplete };
}

export async function getAttemptCount(userId: string) {
  return prisma.examAttempt.count({ where: { userId } });
}

export async function hasCertificate(userId: string) {
  return prisma.certificate.findFirst({ where: { userId } });
}
