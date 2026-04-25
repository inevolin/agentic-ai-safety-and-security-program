import React from "react";

export type LessonIconKey =
  | "doc"
  | "chart"
  | "note"
  | "bot"
  | "link"
  | "user"
  | "package"
  | "wrench"
  | "clipboard"
  | "skull"
  | "search"
  | "check-circle"
  | "upload"
  | "hatch"
  | "brain"
  | "chat-bubble"
  | "folders"
  | "megaphone"
  | "inbox"
  | "traffic-light"
  | "code"
  | "lock"
  | "cycle"
  | "pen"
  | "lock-key"
  | "audit-log"
  | "target";

export const EMOJI_TO_LESSON_ICON: Record<string, LessonIconKey> = {
  "📄": "doc",
  "📊": "chart",
  "📝": "note",
  "🤖": "bot",
  "🔗": "link",
  "👤": "user",
  "📦": "package",
  "🔧": "wrench",
  "📋": "clipboard",
  "☠️": "skull",
  "☠": "skull",
  "🔍": "search",
  "✅": "check-circle",
  "📤": "upload",
  "🐣": "hatch",
  "🧠": "brain",
  "💬": "chat-bubble",
  "🗂️": "folders",
  "🗂": "folders",
  "📢": "megaphone",
  "📥": "inbox",
  "🚦": "traffic-light",
  "🐍": "code",
  "🔒": "lock",
  "🔄": "cycle",
  "✍️": "pen",
  "✍": "pen",
  "🔐": "lock-key",
  "📓": "audit-log",
  "🎯": "target",
};

const LESSON_ICON_KEYS = new Set<string>(Object.values(EMOJI_TO_LESSON_ICON));

export function isLessonIconKey(value: string): value is LessonIconKey {
  return LESSON_ICON_KEYS.has(value);
}

interface LessonIconProps {
  name: LessonIconKey;
  className?: string;
}

export function LessonIcon({ name, className = "w-6 h-6" }: LessonIconProps) {
  const c = {
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "doc":
      return (
        <svg {...c}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <polyline points="14 3 14 8 19 8" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="13" y2="17" />
        </svg>
      );
    case "chart":
      return (
        <svg {...c}>
          <line x1="4" y1="20" x2="20" y2="20" />
          <rect x="6" y="12" width="3" height="8" rx="0.5" />
          <rect x="11" y="8" width="3" height="12" rx="0.5" />
          <rect x="16" y="14" width="3" height="6" rx="0.5" />
        </svg>
      );
    case "note":
      return (
        <svg {...c}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L13 14l-4 1 1-4 8.5-8.5z" />
        </svg>
      );
    case "bot":
      return (
        <svg {...c}>
          <rect x="4" y="8" width="16" height="12" rx="2" />
          <line x1="12" y1="4" x2="12" y2="8" />
          <circle cx="12" cy="3.5" r="1" />
          <circle cx="9" cy="13" r="1" />
          <circle cx="15" cy="13" r="1" />
          <line x1="2" y1="14" x2="4" y2="14" />
          <line x1="20" y1="14" x2="22" y2="14" />
        </svg>
      );
    case "link":
      return (
        <svg {...c}>
          <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" />
          <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 1 0 5.66 5.66l1-1" />
        </svg>
      );
    case "user":
      return (
        <svg {...c}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      );
    case "package":
      return (
        <svg {...c}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 7 12 12 20.73 7" />
          <line x1="12" y1="22" x2="12" y2="12" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...c}>
          <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.7-.3-.3-2.7 2.5-2.5z" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...c}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
          <path d="M8 12h8M8 16h5" />
        </svg>
      );
    case "skull":
      return (
        <svg {...c}>
          <path d="M5 13a7 7 0 1 1 14 0v3a2 2 0 0 1-1 1.73V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2.27A2 2 0 0 1 5 16z" />
          <circle cx="9" cy="13" r="1.2" />
          <circle cx="15" cy="13" r="1.2" />
          <line x1="10" y1="18" x2="10" y2="20" />
          <line x1="14" y1="18" x2="14" y2="20" />
          <line x1="12" y1="17" x2="12" y2="20" />
        </svg>
      );
    case "search":
      return (
        <svg {...c}>
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "check-circle":
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="8 12 11 15 16 9" />
        </svg>
      );
    case "upload":
      return (
        <svg {...c}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      );
    case "hatch":
      return (
        <svg {...c}>
          <path d="M12 3c-3.5 0-6 4-6 8a6 6 0 1 0 12 0c0-4-2.5-8-6-8z" />
          <path d="M9 14c1 1 5 1 6 0" />
          <circle cx="10" cy="11" r="0.6" fill="currentColor" />
          <circle cx="14" cy="11" r="0.6" fill="currentColor" />
        </svg>
      );
    case "brain":
      return (
        <svg {...c}>
          <path d="M9 4a3 3 0 0 0-3 3v.5A3 3 0 0 0 4 10v1a3 3 0 0 0 1 2.24V15a3 3 0 0 0 4 2.83V20a1 1 0 0 0 1 1h1V4H9z" />
          <path d="M15 4a3 3 0 0 1 3 3v.5A3 3 0 0 1 20 10v1a3 3 0 0 1-1 2.24V15a3 3 0 0 1-4 2.83V20a1 1 0 0 1-1 1h-1V4h2z" />
        </svg>
      );
    case "chat-bubble":
      return (
        <svg {...c}>
          <path d="M21 12a8 8 0 0 1-11.5 7.18L4 21l1.82-5.5A8 8 0 1 1 21 12z" />
        </svg>
      );
    case "folders":
      return (
        <svg {...c}>
          <path d="M7 5h4l2 2h6a1 1 0 0 1 1 1v2H6a1 1 0 0 0-1 1v8H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3z" />
          <path d="M6 11h14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1z" />
        </svg>
      );
    case "megaphone":
      return (
        <svg {...c}>
          <path d="M3 11v2a2 2 0 0 0 2 2h2l5 4V5L7 9H5a2 2 0 0 0-2 2z" />
          <path d="M16 8a5 5 0 0 1 0 8" />
          <line x1="9" y1="15" x2="9" y2="20" />
        </svg>
      );
    case "inbox":
      return (
        <svg {...c}>
          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </svg>
      );
    case "traffic-light":
      return (
        <svg {...c}>
          <rect x="8" y="3" width="8" height="18" rx="2" />
          <circle cx="12" cy="7.5" r="1.4" />
          <circle cx="12" cy="12" r="1.4" />
          <circle cx="12" cy="16.5" r="1.4" />
        </svg>
      );
    case "code":
      return (
        <svg {...c}>
          <polyline points="8 7 3 12 8 17" />
          <polyline points="16 7 21 12 16 17" />
          <line x1="14" y1="5" x2="10" y2="19" />
        </svg>
      );
    case "lock":
      return (
        <svg {...c}>
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 1 1 8 0v4" />
        </svg>
      );
    case "cycle":
      return (
        <svg {...c}>
          <polyline points="21 4 21 10 15 10" />
          <polyline points="3 20 3 14 9 14" />
          <path d="M19.07 8A8 8 0 0 0 5.27 6.27L3 8" />
          <path d="M4.93 16a8 8 0 0 0 13.8 1.73L21 16" />
        </svg>
      );
    case "pen":
      return (
        <svg {...c}>
          <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          <line x1="14" y1="6" x2="18" y2="10" />
        </svg>
      );
    case "lock-key":
      return (
        <svg {...c}>
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 1 1 8 0v4" />
          <circle cx="12" cy="16" r="1.2" />
          <line x1="12" y1="17" x2="12" y2="19" />
        </svg>
      );
    case "audit-log":
      return (
        <svg {...c}>
          <path d="M5 4h11l3 3v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
          <polyline points="15 4 15 8 19 8" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="8" y1="16" x2="14" y2="16" />
          <polyline points="8 12 9 13 11 11" />
        </svg>
      );
    case "target":
      return (
        <svg {...c}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
  }
}
