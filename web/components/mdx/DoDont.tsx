interface DoDontProps {
  do: string[];
  dont: string[];
}

export function DoDont(props: DoDontProps) {
  const doItems = props.do ?? [];
  const dontItems = props.dont ?? [];
  if (!doItems.length && !dontItems.length) return null;

  return (
    <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {/* DO column */}
      <div className="rounded-xl border border-emerald-800/40 bg-emerald-950/30 p-4">
        <p className="mb-3 flex items-center gap-2 text-sm font-bold text-emerald-400">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
          DO
        </p>
        <ul className="list-none p-0 m-0 space-y-2">
          {doItems.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-300">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mt-0.5 w-4 h-4 flex-shrink-0 text-emerald-500"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* DON'T column */}
      <div className="rounded-xl border border-danger-800/40 bg-danger-950/30 p-4">
        <p className="mb-3 flex items-center gap-2 text-sm font-bold text-danger-400">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
          DON&apos;T
        </p>
        <ul className="list-none p-0 m-0 space-y-2">
          {dontItems.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-300">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mt-0.5 w-4 h-4 flex-shrink-0 text-danger-500"
                aria-hidden="true"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
