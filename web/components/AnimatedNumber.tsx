"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { animate, round } from "animejs";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 1600,
  className = "",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setFinal = () => {
      el.textContent = `${prefix}${value}${suffix}`;
    };

    if (reduced) {
      setFinal();
      return;
    }

    let fired = false;
    const run = () => {
      if (fired) return;
      fired = true;
      try {
        const counter = { value: 0 };
        animate(counter, {
          value,
          duration,
          ease: "outExpo",
          onUpdate: () => {
            el.textContent = `${prefix}${round(counter.value, 0)}${suffix}`;
          },
          onComplete: setFinal,
        });
      } catch {
        setFinal();
      }
    };

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix, prefix, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
