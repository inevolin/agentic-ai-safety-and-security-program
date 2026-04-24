"use client";

import { useEffect, type ReactNode } from "react";
import { LearnProvider, type ModuleMetaClient } from "./LearnContext";
import { useLearn } from "./LearnContext";
import { LearnControls } from "./LearnControls";
import { SideTOC } from "./SideTOC";

interface Props {
  modules: ModuleMetaClient[];
  children: ReactNode;
}

function HashHandler() {
  const { expandModuleAndLesson } = useLearn();

  useEffect(() => {
    const hash = window.location.hash; // e.g. "#m3" or "#m3-l2"
    if (!hash) return;

    const match = hash.match(/^#m(\d+)(?:-l(\d+))?$/);
    if (!match) return;

    const moduleId = parseInt(match[1]);
    const lessonId = match[2] ? parseInt(match[2]) : undefined;

    expandModuleAndLesson(moduleId, lessonId);

    // Wait for state to propagate + DOM to update
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const targetId = lessonId ? `m${moduleId}-l${lessonId}` : `m${moduleId}`;
        const el = document.getElementById(targetId);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }, [expandModuleAndLesson]);

  return null;
}

function InnerShell({ children }: { children: ReactNode }) {
  return (
    <>
      <HashHandler />
      <LearnControls />
      <div className="max-w-6xl mx-auto px-4 py-8 lg:grid lg:grid-cols-[1fr_220px] lg:gap-8 items-start">
        <main>{children}</main>
        <SideTOC />
      </div>
    </>
  );
}

export function LearnShell({ modules, children }: Props) {
  return (
    <LearnProvider modules={modules}>
      <InnerShell>{children}</InnerShell>
    </LearnProvider>
  );
}
