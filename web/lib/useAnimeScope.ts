"use client";
import { useEffect, useRef } from "react";
import { createScope, type Scope } from "animejs";

export function useAnimeScope(
  setup: (scope: Scope) => void,
  deps: React.DependencyList = []
) {
  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const scope = createScope({ root: rootRef.current });
    scopeRef.current = scope;
    scope.execute(() => {
      setup(scope);
    });
    return () => {
      scope.revert();
      scopeRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return rootRef;
}
