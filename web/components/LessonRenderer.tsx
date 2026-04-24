import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { ReactNode } from "react";

interface LessonRendererProps {
  content: string;
}

// Styled blockquote that detects Note/Warning/Danger prefixes
function StyledBlockquote({ children }: { children?: ReactNode }) {
  const text = String(children ?? "");
  const isWarning = /\*\*Warning\*\*|⚠/.test(text);
  const isDanger = /\*\*Danger\*\*|🚨/.test(text);
  const isNote = /\*\*Note\*\*|ℹ/.test(text);

  if (isDanger) {
    return (
      <blockquote className="border-l-4 border-danger-500 bg-danger-950/30 rounded-r-lg px-4 py-3 not-italic my-4">
        {children}
      </blockquote>
    );
  }
  if (isWarning) {
    return (
      <blockquote className="border-l-4 border-warn-500 bg-warn-900/20 rounded-r-lg px-4 py-3 not-italic my-4">
        {children}
      </blockquote>
    );
  }
  if (isNote) {
    return (
      <blockquote className="border-l-4 border-cyan-500 bg-cyan-950/30 rounded-r-lg px-4 py-3 not-italic my-4">
        {children}
      </blockquote>
    );
  }
  return (
    <blockquote className="border-l-4 border-brand-600 bg-brand-950/20 rounded-r-lg px-4 py-3 not-italic my-4">
      {children}
    </blockquote>
  );
}

const components = {
  blockquote: StyledBlockquote,
};

export function LessonRenderer({ content }: LessonRendererProps) {
  return (
    <MDXRemote
      source={content}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      components={components}
    />
  );
}
