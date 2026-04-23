import { MDXRemote } from "next-mdx-remote/rsc";

interface LessonRendererProps {
  content: string;
}

export function LessonRenderer({ content }: LessonRendererProps) {
  return (
    <article className="prose prose-slate max-w-none">
      <MDXRemote source={content} />
    </article>
  );
}
