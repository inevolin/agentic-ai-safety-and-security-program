"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Props {
  moduleId: number;
  lessonId: number;
  audioSrc?: string; // if provided, browser fetches this directly; falls back to /api/audio/...
}

type PlayerState = "idle" | "loading" | "ready" | "playing" | "paused" | "error";

const SPEEDS = [1, 1.25, 1.5, 2] as const;
type Speed = (typeof SPEEDS)[number];

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// Spinner SVG
function Spinner() {
  return (
    <svg
      className="w-4 h-4 animate-spin text-brand-300"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

// Play icon
function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

// Pause icon
function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

export function LessonAudioPlayer({ moduleId, lessonId, audioSrc: audioSrcProp }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<PlayerState>("idle");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState<Speed>(1);
  const [errorMsg, setErrorMsg] = useState("");

  const audioSrc = audioSrcProp ?? `/api/audio/${moduleId}/${lessonId}`;

  // Initialize audio element once
  useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      if (state === "loading") setState("ready");
    };
    const handleCanPlay = () => {
      setDuration(audio.duration);
      if (state === "loading") setState("ready");
    };
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => {
      setState("paused");
      setCurrentTime(0);
      audio.currentTime = 0;
    };
    const handleError = () => {
      setState("error");
      setErrorMsg("Audio unavailable. Try again later.");
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      audioRef.current = null;
    };
    // intentionally omit state — we only want to init once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Apply speed changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

  const handlePlayPause = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (state === "error") return;

    if (state === "idle") {
      // First play — load the audio
      setState("loading");
      audio.src = audioSrc;
      audio.playbackRate = speed;
      audio.load();
      try {
        await audio.play();
        setState("playing");
      } catch {
        // play() may be interrupted if canplay fires slowly — handled by canplay handler
      }
      return;
    }

    if (state === "loading") return; // debounce

    if (state === "playing") {
      audio.pause();
      setState("paused");
    } else if (state === "paused" || state === "ready") {
      try {
        await audio.play();
        setState("playing");
      } catch {
        setState("error");
        setErrorMsg("Playback failed. Try again later.");
      }
    }
  }, [state, audioSrc, speed]);

  // Seek on progress bar click
  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      if (!audio || !duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const frac = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      audio.currentTime = frac * duration;
      setCurrentTime(frac * duration);
    },
    [duration]
  );

  const progress = duration > 0 ? currentTime / duration : 0;

  return (
    <div className="rounded-xl border border-slate-700/60 bg-slate-800/60 px-4 py-3 mb-4 select-none">
      {/* Main bar */}
      <div className="flex items-center gap-3">
        {/* Play/Pause button */}
        <button
          type="button"
          onClick={handlePlayPause}
          disabled={state === "error" || state === "loading"}
          aria-label={state === "playing" ? "Pause lesson audio" : "Play lesson audio"}
          className={[
            "flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors",
            "border border-slate-600/60",
            state === "error"
              ? "opacity-40 cursor-not-allowed bg-slate-800"
              : "bg-slate-800 hover:bg-brand-900/40 cursor-pointer",
          ].join(" ")}
        >
          {state === "loading" ? (
            <Spinner />
          ) : state === "playing" ? (
            <span className="text-cyan-300 hover:text-cyan-200 transition-colors">
              <PauseIcon />
            </span>
          ) : (
            <span className="text-brand-300 hover:text-cyan-300 transition-colors">
              <PlayIcon />
            </span>
          )}
        </button>

        {/* Progress track */}
        <div
          ref={progressRef}
          role="progressbar"
          aria-valuenow={Math.round(currentTime)}
          aria-valuemin={0}
          aria-valuemax={Math.round(duration) || 100}
          aria-label="Audio progress"
          onClick={handleProgressClick}
          className="flex-1 h-2 rounded-full bg-slate-700/70 relative cursor-pointer overflow-hidden"
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-brand-500/80 transition-none"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Time display */}
        <span className="flex-shrink-0 text-xs font-mono text-slate-400 tabular-nums whitespace-nowrap">
          {formatTime(currentTime)}{" "}
          <span className="text-slate-600">/</span>{" "}
          {formatTime(duration)}
        </span>

        {/* Speed selector */}
        <div className="flex-shrink-0 flex items-center gap-0.5" role="group" aria-label="Playback speed">
          {SPEEDS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSpeed(s)}
              aria-pressed={speed === s}
              className={[
                "px-1.5 py-0.5 text-xs rounded transition-colors font-mono",
                speed === s
                  ? "bg-brand-600/30 text-brand-200 border border-brand-700/60"
                  : "bg-slate-800/60 text-slate-500 border border-transparent hover:text-slate-300",
              ].join(" ")}
            >
              {s}×
            </button>
          ))}
        </div>
      </div>

      {/* Error message */}
      {state === "error" && (
        <p className="mt-2 text-xs text-danger-300">{errorMsg}</p>
      )}
    </div>
  );
}
