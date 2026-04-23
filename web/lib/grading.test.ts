import { scoreQuiz, scoreExam } from "./grading";

const questions = [
  { id: "q1", correct: 0 },
  { id: "q2", correct: 2 },
  { id: "q3", correct: 1 },
];

describe("scoreQuiz", () => {
  it("returns full score for all correct", () => {
    const result = scoreQuiz(questions, { q1: 0, q2: 2, q3: 1 });
    expect(result.score).toBe(3);
    expect(result.passed).toBe(true);
    expect(result.wrong).toHaveLength(0);
  });

  it("returns partial score for some wrong", () => {
    const result = scoreQuiz(questions, { q1: 0, q2: 1, q3: 1 });
    expect(result.score).toBe(2);
    expect(result.passed).toBe(false);
    expect(result.wrong).toContain("q2");
  });
});

describe("scoreExam", () => {
  it("passes at exactly 32 correct out of 40", () => {
    const examQuestions = Array.from({ length: 40 }, (_, i) => ({
      id: `e${i + 1}`,
      correct: 0,
    }));
    const answers: Record<string, number> = {};
    examQuestions.forEach((q, i) => {
      answers[q.id] = i < 32 ? 0 : 1;
    });
    const result = scoreExam(examQuestions, answers);
    expect(result.score).toBe(32);
    expect(result.passed).toBe(true);
    expect(result.percentage).toBe(80);
  });

  it("fails at 31 correct", () => {
    const examQuestions = Array.from({ length: 40 }, (_, i) => ({
      id: `e${i + 1}`,
      correct: 0,
    }));
    const answers: Record<string, number> = {};
    examQuestions.forEach((q, i) => {
      answers[q.id] = i < 31 ? 0 : 1;
    });
    const result = scoreExam(examQuestions, answers);
    expect(result.passed).toBe(false);
  });
});
