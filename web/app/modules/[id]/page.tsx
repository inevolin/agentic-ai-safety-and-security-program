import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { getModuleIndex, getLessonCount } from "@/lib/content";
import { prisma } from "@/lib/db";
import { LessonRenderer } from "@/components/LessonRenderer";
import Link from "next/link";

export default async function ModulePage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const moduleId = parseInt(params.id);
  if (isNaN(moduleId) || moduleId < 1 || moduleId > 6) notFound();

  const { frontmatter, content } = getModuleIndex(moduleId);
  const lessonCount = getLessonCount(moduleId);
  const progress = await prisma.moduleProgress.findUnique({
    where: { userId_moduleId: { userId: session.user.id, moduleId } },
  });

  const lessons = Array.from({ length: lessonCount }, (_, i) => i + 1);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="text-sm text-gray-400">Module {moduleId} of 6</div>
        <h1 className="text-3xl font-bold">{frontmatter.title as string}</h1>
        <p className="text-gray-500">{frontmatter.description as string}</p>
        <div className="flex gap-4 text-sm text-gray-400">
          <span>{lessonCount} lessons</span>
          <span>{frontmatter.duration as string}</span>
          {progress?.quizPassed && (
            <span className="text-green-600 font-medium">✓ Complete</span>
          )}
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <LessonRenderer content={content} />
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Lessons</h2>
        {lessons.map((i) => (
          <Link
            key={i}
            href={`/modules/${moduleId}/lessons/${i}`}
            className="flex items-center gap-3 bg-white rounded-lg p-4 border hover:border-brand-400 transition-colors"
          >
            <span className="w-7 h-7 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center text-sm font-bold">
              {i}
            </span>
            <span>Lesson {i}</span>
            <span className="ml-auto text-brand-600 text-sm">Read →</span>
          </Link>
        ))}
        <Link
          href={`/modules/${moduleId}/quiz`}
          className={`flex items-center gap-3 rounded-lg p-4 border transition-colors ${
            progress?.quizPassed
              ? "bg-green-50 border-green-300 text-green-700"
              : "bg-brand-50 border-brand-300 hover:border-brand-500"
          }`}
        >
          <span className="font-semibold">
            {progress?.quizPassed ? "✓ Quiz passed" : "Take quiz →"}
          </span>
        </Link>
      </div>
    </div>
  );
}
