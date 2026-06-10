"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";
import {
  Braces,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers3,
  Server,
  Terminal,
} from "lucide-react";
import { Motion } from "@/components/ui/motion";

const codeSnippet = `const engineer = {
  name: "Mohomed Shabeeha",
  role: "Software Engineer",
  skills: [
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "MongoDB",
    "AI"
  ]
};`;

const technologyBadges = [
  { label: "React", className: "left-3 top-[18%] sm:left-7 sm:top-[18%]" },
  { label: "Next.js", className: "right-3 top-[17%] sm:right-8 sm:top-[20%]" },
  { label: "Node.js", className: "left-2 top-[46%] sm:left-5 sm:top-[47%]" },
  { label: "Python", className: "right-2 top-[47%] sm:right-5 sm:top-[48%]" },
  { label: "MongoDB", className: "left-7 bottom-[23%] sm:left-12 sm:bottom-[25%]" },
  { label: "Java", className: "right-8 bottom-[23%] sm:right-14 sm:bottom-[26%]" },
];

const statCards = [
  { label: "95% ML Accuracy", icon: Cpu },
  { label: "4+ Projects", icon: Layers3 },
  { label: "18+ Technologies", icon: Braces },
  { label: "Full Stack Engineer", icon: Server },
];

const roleTags = ["Software Engineer", "Full Stack Developer", "AI Engineer"];

function renderHighlightedLine(line: string) {
  const segments = line.split(/(".*?"|const|engineer|name|role|skills|Software Engineer|Next\.js|React|Node\.js|Python|MongoDB|AI)/g);

  return segments.map((segment, index) => {
    if (!segment) return null;

    if (segment === "const") {
      return (
        <span key={`${segment}-${index}`} className="text-violet-300">
          {segment}
        </span>
      );
    }

    if (["engineer", "name", "role", "skills"].includes(segment)) {
      return (
        <span key={`${segment}-${index}`} className="text-cyan-200">
          {segment}
        </span>
      );
    }

    if (segment.startsWith("\"")) {
      return (
        <span key={`${segment}-${index}`} className="text-emerald-200">
          {segment}
        </span>
      );
    }

    return <span key={`${segment}-${index}`}>{segment}</span>;
  });
}

export function HeroCodeWorkspace() {
  const [typedLength, setTypedLength] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const fullLines = useMemo(() => codeSnippet.split("\n"), []);
  const typedLines = useMemo(() => codeSnippet.slice(0, typedLength).split("\n"), [typedLength]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTypedLength((current) => {
        if (current >= codeSnippet.length) {
          window.clearInterval(interval);
          return current;
        }
        return Math.min(current + 8, codeSnippet.length);
      });
    }, 28);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotateX = y * -6;
      const rotateY = x * 8;
      
      container.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleLeave = () => {
      container.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
    };

    container.addEventListener("mousemove", handleMove as any);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mousemove", handleMove as any);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <Motion.div
      ref={containerRef}
      data-hero-code-workspace
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="relative min-h-[30rem] overflow-hidden rounded-[1.75rem] border border-white/12 bg-[linear-gradient(145deg,rgba(10,18,38,0.92),rgba(3,7,18,0.96))] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:min-h-[37rem] sm:rounded-[2.25rem] sm:p-6 lg:min-h-[41rem] will-change-transform transition-transform duration-300 ease-out"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.1),transparent_24%,rgba(0,255,255,0.08)_58%,transparent_82%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

      {technologyBadges.map((badge, index) => (
        <Motion.div
          key={badge.label}
          initial={{ y: 10 }}
          animate={{
            y: [0, -5, 0],
          }}
          whileHover={{ scale: 1.06, y: -4 }}
          transition={{
            delay: 0.35 + index * 0.06,
            duration: 3.4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className={`absolute z-30 hidden rounded-full border border-cyan-300/20 bg-[#071022]/80 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-cyan-100 shadow-[0_14px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:block sm:px-3.5 sm:text-[0.68rem] sm:tracking-[0.22em] ${badge.className}`}
        >
          {badge.label}
        </Motion.div>
      ))}

      <div className="relative z-20 mx-auto mt-4 max-w-[36rem] rounded-[1.4rem] border border-white/12 bg-[#080f20]/82 shadow-[0_28px_100px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:mt-12 sm:rounded-[1.7rem]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-slate-400">
            <GitBranch className="h-3 w-3 text-cyan-300" />
            main
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <Code2 className="h-4 w-4 text-cyan-300" />
            <span className="font-mono text-xs text-slate-200">engineer.ts</span>
          </div>
          <div className="hidden items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-slate-500 sm:flex">
            <Terminal className="h-3.5 w-3.5 text-violet-300" />
            TypeScript
          </div>
        </div>

        <div className="px-3 py-4 sm:px-4">
          <div className="mb-4 flex flex-wrap gap-2">
            {roleTags.map((role, index) => (
              <Motion.span
                key={role}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + index * 0.08, duration: 0.45 }}
                className="rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1 text-[0.64rem] font-medium text-slate-200 sm:px-3 sm:text-[0.68rem]"
              >
                {role}
              </Motion.span>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#030712]/82 p-3 font-mono text-[0.68rem] leading-5 text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-4 sm:text-[0.82rem] sm:leading-6">
            {fullLines.map((_, index) => {
              const line = typedLines[index] ?? "";
              const showCursor = index === typedLines.length - 1 && typedLength < codeSnippet.length;

              return (
                <div key={index} className="grid min-h-5 grid-cols-[1.5rem_1fr] gap-2 sm:min-h-6 sm:grid-cols-[2rem_1fr] sm:gap-3">
                  <span className="select-none text-right text-slate-600">{index + 1}</span>
                  <code className="whitespace-pre-wrap break-words">
                    {renderHighlightedLine(line)}
                    {showCursor ? <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 animate-pulse bg-cyan-300" /> : null}
                  </code>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative z-20 mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
        {statCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <Motion.div
              key={card.label}
              initial={{ y: 18 }}
              animate={{ y: [0, -4, 0] }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{
                delay: 0.7 + index * 0.08,
                duration: 3.1,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="rounded-2xl border border-cyan-300/18 bg-[#071427]/88 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:p-4"
            >
              <Icon className="mb-3 h-4 w-4 text-cyan-300" />
              <p className="text-xs font-semibold leading-5 text-white sm:text-sm">{card.label}</p>
            </Motion.div>
          );
        })}
      </div>
    </Motion.div>
  );
}
