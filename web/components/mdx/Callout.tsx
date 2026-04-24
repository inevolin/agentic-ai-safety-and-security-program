import type { ReactNode } from "react";

type CalloutType = "info" | "tip" | "warn" | "danger";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const config: Record<
  CalloutType,
  { border: string; bg: string; titleColor: string; icon: ReactNode }
> = {
  info: {
    border: "border-brand-500",
    bg: "bg-brand-950/40",
    titleColor: "text-brand-300",
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  tip: {
    border: "border-emerald-500",
    bg: "bg-emerald-950/40",
    titleColor: "text-emerald-300",
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5"
        aria-hidden="true"
      >
        <path d="M10 2a.75.75 0 01.75.75v.258a3.5 3.5 0 012.633 5.482l.745 3.726A.75.75 0 0113.4 13.25H6.6a.75.75 0 01-.728-.934l.745-3.726A3.5 3.5 0 019.25 3.008V2.75A.75.75 0 0110 2zM8.25 16.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" />
      </svg>
    ),
  },
  warn: {
    border: "border-warn-500",
    bg: "bg-warn-900/20",
    titleColor: "text-warn-300",
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 text-warn-400 flex-shrink-0 mt-0.5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  danger: {
    border: "border-danger-500",
    bg: "bg-danger-950/40",
    titleColor: "text-danger-300",
    icon: (
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 text-danger-400 flex-shrink-0 mt-0.5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const { border, bg, titleColor, icon } = config[type];
  return (
    <div
      className={`my-6 rounded-r-lg border-l-4 ${border} ${bg} px-4 py-4`}
      role="note"
    >
      <div className="flex gap-3">
        {icon}
        <div className="min-w-0 flex-1">
          {title && (
            <p className={`mb-1 text-sm font-semibold uppercase tracking-wide ${titleColor}`}>
              {title}
            </p>
          )}
          <div className="text-sm text-slate-300 [&>p]:my-0 [&>p+p]:mt-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
