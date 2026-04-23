import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { getLesson, getLessonCount } from "@/lib/content";
import { LessonRenderer } from "@/components/LessonRenderer";
import Link from "next/link";

export default async function LessonPage({
  params,
}: {
  params: { id: string; lessonId: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const moduleId = parseInt(params.id);
  const lessonId = parseInt(params.lessonId);
  if (isNaN(moduleId) || isNaN(lessonId)) notFound();

  const lesson = getLesson(moduleId, lessonId);
  if (!lesson) notFound();

  const totalLessons = getLessonCount(moduleId);
  const isLast = lessonId === totalLessons;
  const nextHref = isLast
    ? `/modules/${moduleId}/quiz`
    : `/modules/${moduleId}/lessons/${lessonId + 1}`;
  const nextLabel = isLast ? "Take quiz →" : `Lesson ${lessonId + 1} →`;

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Link href={`/modules/${moduleId}`} className="hover:text-brand-600">
          Module {moduleId}
        </Link>
        <span>/</span>
        <span>Lesson {lessonId}</span>
      </div>

      <LessonRenderer content={lesson.content} />

      <div className="flex justify-between pt-4 border-t">
        {lessonId > 1 ? (
          <Link
            href={`/modules/${moduleId}/lessons/${lessonId - 1}`}
            className="text-brand-600 hover:underline text-sm"
          >
            ← Lesson {lessonId - 1}
          </Link>
        ) : (
          <Link href={`/modules/${moduleId}`} className="text-brand-600 hover:underline text-sm">
            ← Module overview
          </Link>
        )}
        <Link
          href={nextHref}
          className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-700"
        >
          {nextLabel}
        </Link>
      </div>
    </div>
  );
}
