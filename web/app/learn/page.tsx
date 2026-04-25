import type { Metadata } from "next";

export const dynamic = "force-dynamic";
import { getAllModules } from "@/lib/content";
import { mdxToTranscript } from "@/lib/transcript";
import { lessonRegistry } from "@/components/lessons";
import { LearnShell } from "@/components/learn/LearnShell";
import { ModuleSection } from "@/components/learn/ModuleSection";
import { LessonItem } from "@/components/learn/LessonItem";
import type { ModuleMetaClient } from "@/components/learn/LearnContext";

export const metadata: Metadata = {
  title: "Learn — AI Safety & Security Certification",
  description:
    "6 modules covering AI agent security, attack patterns, and defensive best practices.",
};

// Strip MDX/markdown syntax to produce a plaintext string for search
function stripMarkdown(source: string): string {
  return source
    .replace(/^---[\s\S]*?---/, "") // frontmatter
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]+`/g, " ")
    .replace(/#{1,6}\s+/g, " ")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[>\-_~]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default async function LearnPage() {
  const allModules = getAllModules();

  // Build lean metadata for the client context (no content strings)
  const modulesForClient: ModuleMetaClient[] = allModules.map((m) => ({
    id: m.id,
    title: m.title,
    description: m.description,
    duration: m.duration,
    lessonCount: m.lessons.length,
  }));

  return (
    <div className="pt-16 min-h-screen">
      <LearnShell modules={modulesForClient}>
        {allModules.map((m) => (
          <ModuleSection
            key={m.id}
            id={m.id}
            title={m.title}
            description={m.description}
            duration={m.duration}
            lessonCount={m.lessons.length}
          >
            {m.lessons.map((l) => (
              <LessonItem
                key={l.id}
                moduleId={m.id}
                lessonId={l.id}
                title={l.title}
                wordCount={l.wordCount}
                bodyText={stripMarkdown(l.content)}
                transcript={mdxToTranscript(l.content)}
              >
                {(() => {
                  const LessonContent = lessonRegistry[`${m.id}-${l.id}`];
                  return LessonContent ? <LessonContent /> : null;
                })()}
              </LessonItem>
            ))}
          </ModuleSection>
        ))}
      </LearnShell>
    </div>
  );
}
