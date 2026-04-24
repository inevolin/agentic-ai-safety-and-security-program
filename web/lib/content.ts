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

export function getLessonCount(moduleId: number): number {
  const dir = path.join(CONTENT_DIR, `module${moduleId}`);
  return fs.readdirSync(dir).filter((f) => f.startsWith("lesson-")).length;
}

export interface LessonMeta {
  id: number;
  title: string;
  content: string;
  wordCount: number;
}

export interface ModuleMeta {
  id: number;
  title: string;
  description?: string;
  duration?: string;
  lessons: LessonMeta[];
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function getAllModules(): ModuleMeta[] {
  const modules: ModuleMeta[] = [];
  for (let moduleId = 1; moduleId <= 6; moduleId++) {
    const { frontmatter } = getModuleIndex(moduleId);
    const lessonCount = getLessonCount(moduleId);
    const lessons: LessonMeta[] = [];
    for (let lessonId = 1; lessonId <= lessonCount; lessonId++) {
      const lesson = getLesson(moduleId, lessonId);
      if (!lesson) continue;
      lessons.push({
        id: lessonId,
        title: (lesson.frontmatter.title as string) ?? `Lesson ${lessonId}`,
        content: lesson.content,
        wordCount: countWords(lesson.content),
      });
    }
    modules.push({
      id: moduleId,
      title: (frontmatter.title as string) ?? `Module ${moduleId}`,
      description: frontmatter.description as string | undefined,
      duration: frontmatter.duration as string | undefined,
      lessons,
    });
  }
  return modules;
}
