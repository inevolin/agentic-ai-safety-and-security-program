"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useLearn } from "./LearnContext";
import { LessonAudioPlayer } from "@/components/LessonAudioPlayer";

interface Props {
  moduleId: number;
  lessonId: number;
  title: string;
  wordCount: number;
  bodyText: string; // stripped markdown for search
  audioSrc?: string; // static /audio/... URL if cached, else /api/audio/...
  children: ReactNode; // server-rendered MDX
}

export function LessonItem({
  moduleId,
  lessonId,
  title,
  wordCount,
  bodyText,
  audioSrc,
  children,
}: Props) {
  const { openLessons, toggleLesson, expandModuleAndLesson, markViewed, searchQuery, registerLesson, unregisterLesson } =
    useLearn();

  const key = `${moduleId}-${lessonId}`;
  const isOpen = openLessons.has(key);
  const headerId = `lesson-header-${key}`;
  const bodyId = `lesson-body-${key}`;

  // Reading time
  const readingMins = Math.max(1, Math.round(wordCount / 200));

  // Search matching
  const searchLower = searchQuery.toLowerCase();
  const matchesSearch =
    !searchQuery ||
    title.toLowerCase().includes(searchLower) ||
    bodyText.toLowerCase().includes(searchLower);

  // Mark viewed when opened
  useEffect(() => {
    if (isOpen) markViewed(moduleId, lessonId);
  }, [isOpen, markViewed, moduleId, lessonId]);

  // Register for keyboard nav
  useEffect(() => {
    registerLesson(key);
    return () => unregisterLesson(key);
  }, [key, registerLesson, unregisterLesson]);

  // Auto-expand when search query starts and this lesson matches
  const prevSearchRef = useRef("");
  useEffect(() => {
    const prevSearch = prevSearchRef.current;
    prevSearchRef.current = searchQuery;
    // When search goes from empty to non-empty and this lesson matches, expand it
    if (searchQuery && !prevSearch && matchesSearch && !openLessons.has(key)) {
      expandModuleAndLesson(moduleId, lessonId);
    }
  }, [searchQuery, matchesSearch, key, moduleId, lessonId, openLessons, expandModuleAndLesson]);

  if (!matchesSearch) return null;

  return (
    <div
      id={`m${moduleId}-l${lessonId}`}
      className="border-b border-slate-800/60 last:border-b-0"
    >
      <button
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={bodyId}
        data-lesson-header={key}
        onClick={() => toggleLesson(moduleId, lessonId)}
        className="w-full flex items-center gap-3 px-5 py-3.5 text-left group hover:bg-slate-800/30 transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400 rounded-none"
      >
        {/* Lesson number */}
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center text-xs font-bold group-hover:border-brand-600/60 group-hover:text-brand-300 transition-colors">
          {lessonId}
        </span>

        {/* Title */}
        <span className="flex-1 text-sm font-medium text-slate-300 group-hover:text-white transition-colors truncate">
          {title}
        </span>

        {/* Reading time */}
        <span className="text-xs text-slate-600 font-mono flex-shrink-0 hidden sm:block">
          {readingMins} min
        </span>

        {/* Chevron */}
        <svg
          className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Body with CSS grid animation */}
      <div
        id={bodyId}
        role="region"
        aria-labelledby={headerId}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden select-text">
          <div className="px-5 pb-8 pt-4 border-t border-slate-800/50">
            <LessonAudioPlayer
              moduleId={moduleId}
              lessonId={lessonId}
              audioSrc={audioSrc}
            />
            <article className="prose-lesson select-text">
              {children}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
