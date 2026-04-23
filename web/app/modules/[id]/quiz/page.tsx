import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { getModuleQuiz } from "@/lib/content";
import { QuizCard } from "@/components/QuizCard";
import Link from "next/link";

export default async function QuizPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const moduleId = parseInt(params.id);
  if (isNaN(moduleId) || moduleId < 1 || moduleId > 6) notFound();

  const quiz = getModuleQuiz(moduleId);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href={`/modules/${moduleId}`} className="hover:text-brand-600">
            Module {moduleId}
          </Link>
          <span>/</span>
          <span>Quiz</span>
        </div>
        <h1 className="text-2xl font-bold">Module {moduleId} Knowledge Check</h1>
        <p className="text-gray-500">
          {quiz.questions.length} questions • Answer all correctly to complete the module
        </p>
      </div>
      <QuizCard moduleId={moduleId} questions={quiz.questions} />
    </div>
  );
}
