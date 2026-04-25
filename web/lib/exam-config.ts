import fs from "fs";
import path from "path";

interface ExamConfig {
  totalQuestions: number;
  passingScore: number;
  timeLimit: number;
}

let cached: ExamConfig | null = null;

export function getExamConfig(): ExamConfig {
  if (cached) return cached;
  const p = path.join(process.cwd(), "content", "exam", "questions.json");
  const data = JSON.parse(fs.readFileSync(p, "utf-8"));
  cached = {
    totalQuestions: data.totalQuestions,
    passingScore: data.passingScore,
    timeLimit: data.timeLimit,
  };
  return cached;
}
