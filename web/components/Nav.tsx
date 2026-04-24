"use client";
import Link from "next/link";
import { ClaudeSponsorPill } from "@/components/ClaudeSponsor";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { useTheme } from "@/components/ThemeProvider";

const NAV_LINKS = [
  { href: "/learn", label: "Modules" },
  { href: "/exam", label: "Exam" },
  { href: "/verify/demo", label: "Verify" },
];

const ALL_LINKS = [{ href: "/", label: "Home" }, ...NAV_LINKS];

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export function Nav() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const animRef = useRef<ReturnType<typeof animate> | null>(null);

  const isLight = theme === "light";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Animate links in/out when overlay opens/closes
  useEffect(() => {
    const links = linksRef.current.filter(Boolean);
    if (links.length === 0) return;

    animRef.current?.pause();

    if (open) {
      animRef.current = animate(links, {
        translateX: ["-24px", "0px"],
        opacity: [0, 1],
        duration: 340,
        ease: "outExpo",
        delay: stagger(55, { start: 60 }),
      });
    } else {
      animRef.current = animate(links, {
        translateX: ["0px", "-16px"],
        opacity: [1, 0],
        duration: 200,
        ease: "inCubic",
        delay: stagger(30),
      });
    }
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isLight
              ? "bg-white/92 backdrop-blur-md border-b border-slate-200/80 shadow-lg shadow-slate-200/30"
              : "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Home">
            <span className="flex-shrink-0">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" className="fill-brand-700 group-hover:fill-brand-600 transition-colors" />
                <path
                  d="M16 6L8 9v7c0 4.418 3.358 8.55 8 9.8C21.642 24.55 25 20.418 25 16V9L16 6z"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  className="opacity-90"
                />
                <circle cx="16" cy="16" r="2.5" fill="white" className="opacity-90" />
                <circle cx="16" cy="16" r="1" fill="#60a5fa" />
              </svg>
            </span>
            <span className="flex flex-col">
              <span className={`font-bold tracking-tight text-sm sm:text-base leading-tight ${isLight ? "text-slate-900" : "text-white"}`}>
                <span className="text-cyan-500">AI</span>
                <span> Safety Cert</span>
              </span>
              <ClaudeSponsorPill className="hidden sm:inline-flex mt-0.5" />
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href.split("/").slice(0, 3).join("/") + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    active
                      ? isLight
                        ? "text-slate-900 bg-slate-100"
                        : "text-white bg-slate-800"
                      : isLight
                        ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-cyan-400 rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Theme toggle */}
            <button
              onClick={toggle}
              className={`p-2 rounded-lg transition-colors ml-1 ${
                isLight
                  ? "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
              aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            >
              {isLight ? <MoonIcon /> : <SunIcon />}
            </button>

            <Link
              href="/learn"
              className="ml-2 btn-primary text-sm py-2 px-4"
            >
              Start learning
            </Link>
          </div>

          {/* Mobile right side: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggle}
              className={`p-2 rounded-lg transition-colors ${
                isLight
                  ? "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
              aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            >
              {isLight ? <MoonIcon /> : <SunIcon />}
            </button>

            <button
              onClick={() => setOpen((o) => !o)}
              className={`p-2 rounded-lg transition-colors ${
                isLight
                  ? "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="block w-5 h-0.5 bg-current mb-1 transition-transform origin-center" style={open ? { transform: "rotate(45deg) translate(0, 6px)" } : {}} />
              <span className="block w-5 h-0.5 bg-current mb-1 transition-opacity" style={open ? { opacity: 0 } : {}} />
              <span className="block w-5 h-0.5 bg-current transition-transform origin-center" style={open ? { transform: "rotate(-45deg) translate(0, -6px)" } : {}} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-40 backdrop-blur-lg flex flex-col pt-24 pb-12 px-8 md:hidden transition-all duration-300 ${
          isLight ? "bg-white/95" : "bg-slate-950/95"
        } ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-2">
          {ALL_LINKS.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              ref={(el) => { if (el) linksRef.current[i] = el; }}
              className={`text-2xl font-bold py-3 border-b ${
                isLight
                  ? "text-slate-700 hover:text-slate-900 border-slate-200"
                  : "text-slate-300 hover:text-white border-slate-800"
              }`}
              style={{ opacity: 0, transform: "translateX(-24px)" }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto">
          <Link href="/learn" className="btn-primary w-full justify-center text-lg py-4">
            Start learning →
          </Link>
        </div>
      </div>
    </>
  );
}
