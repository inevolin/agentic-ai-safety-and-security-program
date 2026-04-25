import fs from "fs";
import path from "path";
import { getExamConfig } from "./exam-config";

describe("exam-config", () => {
  it("loads totalQuestions, passingScore, timeLimit", () => {
    const c = getExamConfig();
    expect(c.totalQuestions).toBeGreaterThan(0);
    expect(c.passingScore).toBeGreaterThan(0);
    expect(c.passingScore).toBeLessThanOrEqual(c.totalQuestions);
    expect(c.timeLimit).toBeGreaterThan(0);
  });
});

describe("exam questions integrity", () => {
  const raw = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "content", "exam", "questions.json"),
      "utf-8",
    ),
  );

  it("question count matches totalQuestions", () => {
    expect(raw.questions.length).toBe(raw.totalQuestions);
  });

  it("each question has id, moduleId, text, options[2+], valid correct index", () => {
    for (const q of raw.questions) {
      expect(typeof q.id).toBe("string");
      expect(q.id.length).toBeGreaterThan(0);
      expect(typeof q.moduleId).toBe("number");
      expect(q.moduleId).toBeGreaterThanOrEqual(1);
      expect(q.moduleId).toBeLessThanOrEqual(7);
      expect(typeof q.text).toBe("string");
      expect(q.text.length).toBeGreaterThan(0);
      expect(Array.isArray(q.options)).toBe(true);
      expect(q.options.length).toBeGreaterThanOrEqual(2);
      expect(typeof q.correct).toBe("number");
      expect(q.correct).toBeGreaterThanOrEqual(0);
      expect(q.correct).toBeLessThan(q.options.length);
      for (const opt of q.options) {
        expect(typeof opt).toBe("string");
        expect(opt.length).toBeGreaterThan(0);
      }
    }
  });

  it("question IDs are unique", () => {
    const ids = raw.questions.map((q: { id: string; moduleId: number }) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("covers every module 1..7", () => {
    const modules = new Set(raw.questions.map((q: { id: string; moduleId: number }) => q.moduleId));
    for (let id = 1; id <= 7; id++) {
      expect(modules.has(id)).toBe(true);
    }
  });
});
