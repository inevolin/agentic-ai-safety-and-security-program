"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { splitText, createTimeline, stagger } from "animejs";

interface SplitHeadingProps {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
}

export function SplitHeading({
  text,
  as: Tag = "h1",
  className = "",
  delay = 0,
}: SplitHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "1";

    if (reduced) return;

    let split: ReturnType<typeof splitText> | null = null;
    let tl: ReturnType<typeof createTimeline> | null = null;
    try {
      split = splitText(el, { words: true, chars: false, accessible: true });
      split.words.forEach((w: HTMLElement) => {
        w.style.display = "inline-block";
        w.style.opacity = "0";
      });
      tl = createTimeline({ defaults: { ease: "outExpo" }, autoplay: true });
      tl.add(split.words, {
        translateY: ["1.2em", 0],
        opacity: [0, 1],
        filter: ["blur(8px)", "blur(0px)"],
        duration: 900,
        delay: stagger(60, { start: delay }),
      });
    } catch {
      // animation failed; leave text visible
      return;
    }

    return () => {
      tl?.revert();
      split?.revert();
    };
  }, [delay, reduced]);

  return (
    <Tag ref={ref} className={className} style={{ opacity: 0 }}>
      {text}
    </Tag>
  );
}
