"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

const LS_KEY = "learn-opened-lessons";

export interface ModuleMetaClient {
  id: number;
  title: string;
  description?: string;
  duration?: string;
  lessonCount: number;
}

interface LearnState {
  modules: ModuleMetaClient[];
  openModules: Set<number>;
  openLessons: Set<string>; // "M-L"
  viewedLessons: Set<string>; // stored in localStorage
  searchQuery: string;
  // actions
  toggleModule: (id: number) => void;
  toggleLesson: (moduleId: number, lessonId: number) => void;
  expandAll: () => void;
  collapseAll: () => void;
  setSearch: (q: string) => void;
  expandModuleAndLesson: (moduleId: number, lessonId?: number) => void;
  markViewed: (moduleId: number, lessonId: number) => void;
  // registered lesson ids (for keyboard nav)
  lessonHeaderIds: string[];
  registerLesson: (id: string) => void;
  unregisterLesson: (id: string) => void;
}

const LearnContext = createContext<LearnState | null>(null);

export function useLearn() {
  const ctx = useContext(LearnContext);
  if (!ctx) throw new Error("useLearn must be used inside LearnProvider");
  return ctx;
}

interface Props {
  children: ReactNode;
  modules: ModuleMetaClient[];
}

export function LearnProvider({ children, modules }: Props) {
  const [openModules, setOpenModules] = useState<Set<number>>(new Set());
  const [openLessons, setOpenLessons] = useState<Set<string>>(new Set());
  const [viewedLessons, setViewedLessons] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [lessonHeaderIds, setLessonHeaderIds] = useState<string[]>([]);
  // Use a ref to track registration order deterministically
  const regRef = useRef<string[]>([]);

  // Load viewed from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) setViewedLessons(new Set(JSON.parse(raw) as string[]));
    } catch {}
  }, []);

  const markViewed = useCallback((moduleId: number, lessonId: number) => {
    const key = `${moduleId}-${lessonId}`;
    setViewedLessons((prev) => {
      if (prev.has(key)) return prev;
      const next = new Set(prev);
      next.add(key);
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(Array.from(next)));
      } catch {}
      return next;
    });
  }, []);

  const toggleModule = useCallback((id: number) => {
    setOpenModules((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleLesson = useCallback((moduleId: number, lessonId: number) => {
    const key = `${moduleId}-${lessonId}`;
    setOpenLessons((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
    // Ensure module is open
    setOpenModules((prev) => {
      if (prev.has(moduleId)) return prev;
      const next = new Set(prev);
      next.add(moduleId);
      return next;
    });
  }, []);

  const expandAll = useCallback(() => {
    const allLessons = new Set<string>();
    for (const m of modules) {
      for (let i = 1; i <= m.lessonCount; i++) {
        allLessons.add(`${m.id}-${i}`);
      }
    }
    setOpenLessons(allLessons);
  }, [modules]);

  const collapseAll = useCallback(() => {
    setOpenLessons(new Set());
  }, []);

  const expandModuleAndLesson = useCallback(
    (moduleId: number, lessonId?: number) => {
      if (lessonId != null) {
        const key = `${moduleId}-${lessonId}`;
        setOpenLessons((prev) => {
          const next = new Set(prev);
          next.add(key);
          return next;
        });
      }
    },
    []
  );

  const registerLesson = useCallback((id: string) => {
    setLessonHeaderIds((prev) => {
      if (prev.includes(id)) return prev;
      // Maintain insertion order; sort by natural key M-L
      const next = [...prev, id].sort((a, b) => {
        const [am, al] = a.split("-").map(Number);
        const [bm, bl] = b.split("-").map(Number);
        return am !== bm ? am - bm : al - bl;
      });
      return next;
    });
    regRef.current = [...regRef.current, id];
  }, []);

  const unregisterLesson = useCallback((id: string) => {
    setLessonHeaderIds((prev) => prev.filter((x) => x !== id));
  }, []);

  const setSearch = useCallback((q: string) => {
    setSearchQuery(q);
  }, []);

  return (
    <LearnContext.Provider
      value={{
        modules,
        openModules,
        openLessons,
        viewedLessons,
        searchQuery,
        toggleModule,
        toggleLesson,
        expandAll,
        collapseAll,
        setSearch,
        expandModuleAndLesson,
        markViewed,
        lessonHeaderIds,
        registerLesson,
        unregisterLesson,
      }}
    >
      {children}
    </LearnContext.Provider>
  );
}
