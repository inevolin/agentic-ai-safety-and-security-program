import { ExamGate } from "@/components/ExamGate";
import fs from "fs";
import path from "path";

export default async function ExamPage() {
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
    <div className="pt-16 min-h-screen">
      <div className="reading-content py-12">
        <ExamGate questions={clientQuestions} timeLimit={5400} />
      </div>
    </div>
  );
}
