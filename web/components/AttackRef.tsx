"use client";
import { lookupAttack, demoUrl } from "@/lib/attacks";

interface AttackRefProps {
  id: string;
}

export function AttackRef({ id }: AttackRefProps) {
  const meta = lookupAttack(id);

  const pillClasses =
    "relative inline-flex items-center font-mono text-xs rounded border " +
    "px-1.5 py-0.5 leading-none align-middle cursor-default " +
    "bg-slate-800/70 border-slate-600/60 text-cyan-300 " +
    "dark:bg-slate-800/70 dark:border-slate-600/60 dark:text-cyan-300 " +
    "light:bg-slate-100 light:border-slate-300 light:text-cyan-700 " +
    "transition-colors duration-150 group";

  const tooltipClasses =
    "pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 " +
    "w-[280px] rounded-lg border shadow-xl " +
    "bg-slate-900 border-slate-700 text-slate-100 " +
    "dark:bg-slate-900 dark:border-slate-700 " +
    "light:bg-white light:border-slate-200 light:text-slate-800 " +
    "opacity-0 invisible group-hover:opacity-100 group-hover:visible " +
    "group-focus-within:opacity-100 group-focus-within:visible " +
    "transition-all duration-150 ease-out";

  const content = (
    <>
      <span>{id}</span>
      {meta && (
        <span className={tooltipClasses} role="tooltip">
          <span className="block p-3">
            <span className="block font-bold text-sm mb-1 light:text-slate-900">
              {meta.name}
            </span>
            <span className="block text-xs leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">
              {meta.summary}
            </span>
            {meta.slug && (
              <span className="block mt-2 pt-2 border-t border-slate-700/60 light:border-slate-200 text-xs text-cyan-400 dark:text-cyan-400 light:text-cyan-600">
                View demo ↗
              </span>
            )}
          </span>
        </span>
      )}
      {!meta && (
        <span className={tooltipClasses} role="tooltip">
          <span className="block p-3 text-xs text-slate-400">
            Unknown attack ID
          </span>
        </span>
      )}
    </>
  );

  if (meta?.slug) {
    return (
      <a
        href={demoUrl(meta.slug)}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={0}
        className={pillClasses + " hover:border-cyan-500/60 hover:text-cyan-200 dark:hover:border-cyan-500/60 dark:hover:text-cyan-200 light:hover:border-cyan-500 light:hover:text-cyan-600 no-underline"}
        aria-label={`${id}${meta ? ": " + meta.name : ""} — view demo`}
      >
        {content}
      </a>
    );
  }

  return (
    <span
      tabIndex={0}
      className={pillClasses}
      aria-label={meta ? `${id}: ${meta.name}` : `${id}: unknown attack ID`}
    >
      {content}
    </span>
  );
}
