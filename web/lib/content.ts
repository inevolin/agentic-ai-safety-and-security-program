import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getModuleIndex(moduleId: number) {
  const filePath = path.join(CONTENT_DIR, `module${moduleId}`, "index.mdx");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

export function getLesson(moduleId: number, lessonId: number) {
  const filePath = path.join(CONTENT_DIR, `module${moduleId}`, `lesson-${lessonId}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

export function getModuleQuiz(moduleId: number) {
  const filePath = path.join(CONTENT_DIR, `module${moduleId}`, "quiz.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function getLessonCount(moduleId: number): number {
  const dir = path.join(CONTENT_DIR, `module${moduleId}`);
  return fs.readdirSync(dir).filter((f) => f.startsWith("lesson-")).length;
}
