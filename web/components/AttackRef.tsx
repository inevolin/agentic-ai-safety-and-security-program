"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { lookupAttack, demoUrl } from "@/lib/attacks";

interface AttackRefProps {
  id: string;
}

export function AttackRef({ id }: AttackRefProps) {
  const meta = lookupAttack(id);
  const triggerRef = useRef<HTMLAnchorElement | HTMLSpanElement | null>(null);
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const updateCoords = useCallback(() => {
    if (!triggerRef.current) return;
    const r = triggerRef.current.getBoundingClientRect();
    setCoords({ top: r.top, left: r.left + r.width / 2 });
  }, []);

  useEffect(() => {
    if (!open) return;
    updateCoords();
    const handler = () => updateCoords();
    window.addEventListener("scroll", handler, { passive: true, capture: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler, { capture: true } as EventListenerOptions);
      window.removeEventListener("resize", handler);
    };
  }, [open, updateCoords]);

  const show = () => setOpen(true);
  const hide = () => setOpen(false);

  const pillClasses =
    "relative inline-flex items-center font-mono text-xs rounded border " +
    "px-1.5 py-0.5 leading-none align-middle cursor-default " +
    "bg-slate-800/70 border-slate-600/60 text-cyan-300 " +
    "dark:bg-slate-800/70 dark:border-slate-600/60 dark:text-cyan-300 " +
    "light:bg-slate-100 light:border-slate-300 light:text-cyan-700 " +
    "transition-colors duration-150";

  const tooltip = mounted && open && coords ? createPortal(
    <div
      role="tooltip"
      style={{
        position: "fixed",
        top: coords.top,
        left: coords.left,
        transform: "translate(-50%, calc(-100% - 8px))",
        pointerEvents: "none",
        zIndex: 2147483647,
      }}
      className={
        "w-[280px] rounded-lg border shadow-xl " +
        "bg-slate-900 border-slate-700 text-slate-100 " +
        "dark:bg-slate-900 dark:border-slate-700 " +
        "light:bg-white light:border-slate-200 light:text-slate-800"
      }
    >
      <div className="p-3">
        {meta ? (
          <>
            <div className="font-bold text-sm mb-1 light:text-slate-900">{meta.name}</div>
            <div className="text-xs leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">{meta.summary}</div>
            {meta.slug && (
              <div className="mt-2 pt-2 border-t border-slate-700/60 light:border-slate-200 text-xs text-cyan-400 dark:text-cyan-400 light:text-cyan-600">View demo ↗</div>
            )}
          </>
        ) : (
          <div className="text-xs text-slate-400">Unknown attack ID</div>
        )}
      </div>
    </div>,
    document.body
  ) : null;

  const handlers = {
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide,
  };

  if (meta?.slug) {
    return (
      <>
        <a
          ref={triggerRef as React.Ref<HTMLAnchorElement>}
          href={demoUrl(meta.slug)}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
          {...handlers}
          className={pillClasses + " hover:border-cyan-500/60 hover:text-cyan-200 dark:hover:border-cyan-500/60 dark:hover:text-cyan-200 light:hover:border-cyan-500 light:hover:text-cyan-600 no-underline"}
          aria-label={`${id}: ${meta.name} — view demo`}
        >
          {id}
        </a>
        {tooltip}
      </>
    );
  }

  return (
    <>
      <span
        ref={triggerRef as React.Ref<HTMLSpanElement>}
        tabIndex={0}
        {...handlers}
        className={pillClasses}
        aria-label={meta ? `${id}: ${meta.name}` : `${id}: unknown attack ID`}
      >
        {id}
      </span>
      {tooltip}
    </>
  );
}
