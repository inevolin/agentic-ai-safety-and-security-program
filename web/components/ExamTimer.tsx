"use client";
import { useState, useEffect } from "react";

interface ExamTimerProps {
  expiresAt: string;
  onExpire: () => void;
}

function secondsLeft(expiresAt: string): number {
  return Math.max(0, Math.floor((new Date(expiresAt).getTime() - Date.now()) / 1000));
}

export function ExamTimer({ expiresAt, onExpire }: ExamTimerProps) {
  const [seconds, setSeconds] = useState(() => secondsLeft(expiresAt));

  useEffect(() => {
    if (seconds <= 0) {
      onExpire();
      return;
    }
    const t = setTimeout(() => setSeconds(secondsLeft(expiresAt)), 1000);
    return () => clearTimeout(t);
  }, [seconds, expiresAt, onExpire]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const isUrgent = seconds < 300;

  return (
    <div className={`font-mono text-lg font-bold ${isUrgent ? "text-red-600" : "text-gray-700"}`}>
      {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
    </div>
  );
}
