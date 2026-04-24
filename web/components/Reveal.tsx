"use client";
import { useEffect, useRef, ReactNode } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 24,
  direction = "up",
  duration = 600,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const dx = direction === "left" ? -distance : direction === "right" ? distance : 0;
  const dy = direction === "up" ? distance : direction === "down" ? -distance : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    el.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    el.style.transitionDelay = `${delay}ms`;

    const reveal = () => {
      el.style.opacity = "1";
      el.style.transform = "translate(0, 0)";
    };

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced, delay, distance, direction, duration]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: `translate(${dx}px, ${dy}px)` }}
    >
      {children}
    </div>
  );
}
