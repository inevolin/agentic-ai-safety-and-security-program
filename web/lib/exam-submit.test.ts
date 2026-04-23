import { scoreExam } from "./grading";

describe("Exam scoring integration", () => {
  it("passes with 32 correct answers out of 40", () => {
    const questions = Array.from({ length: 40 }, (_, i) => ({
      id: `e${i + 1}`,
      correct: 0,
    }));
    const answers: Record<string, number> = {};
    questions.forEach((q, i) => { answers[q.id] = i < 32 ? 0 : 1; });
    const result = scoreExam(questions, answers);
    expect(result.passed).toBe(true);
    expect(result.percentage).toBe(80);
  });

  it("does not pass with 31 correct answers", () => {
    const questions = Array.from({ length: 40 }, (_, i) => ({
      id: `e${i + 1}`,
      correct: 0,
    }));
    const answers: Record<string, number> = {};
    questions.forEach((q, i) => { answers[q.id] = i < 31 ? 0 : 1; });
    expect(scoreExam(questions, answers).passed).toBe(false);
  });
});
