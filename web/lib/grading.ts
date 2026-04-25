interface Question {
  id: string;
  correct: number;
}

export function scoreQuiz(
  questions: Question[],
  answers: Record<string, number>
): { score: number; total: number; passed: boolean; wrong: string[] } {
  let score = 0;
  const wrong: string[] = [];
  for (const q of questions) {
    if (answers[q.id] === q.correct) {
      score++;
    } else {
      wrong.push(q.id);
    }
  }
  return { score, total: questions.length, passed: score === questions.length, wrong };
}

export function scoreExam(
  questions: Question[],
  answers: Record<string, number>,
  passingScore: number,
): { score: number; total: number; passed: boolean; percentage: number } {
  let score = 0;
  for (const q of questions) {
    if (answers[q.id] === q.correct) score++;
  }
  const percentage = Math.round((score / questions.length) * 100);
  return { score, total: questions.length, passed: score >= passingScore, percentage };
}
