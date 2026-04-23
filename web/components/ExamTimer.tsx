"use client";
import { useState, useEffect } from "react";

interface ExamTimerProps {
  seconds: number;
  onExpire: () => void;
}

export function ExamTimer({ seconds: initialSeconds, onExpire }: ExamTimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) {
      onExpire();
      return;
    }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds, onExpire]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const isUrgent = seconds < 300;

  return (
    <div className={`font-mono text-lg font-bold ${isUrgent ? "text-red-600" : "text-gray-700"}`}>
      {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
    </div>
  );
}
