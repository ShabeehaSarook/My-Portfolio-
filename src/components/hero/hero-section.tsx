"use client";

import { Motion } from "@/components/ui/motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Layers3,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { site } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { HeroCodeWorkspace } from "@/components/hero/hero-code-workspace";
import { fadeUp } from "@/lib/animations/fadeUp";
import { fadeLeft } from "@/lib/animations/fadeLeft";
import { stagger } from "@/lib/animations/stagger";
import { zoomIn } from "@/lib/animations/zoomIn";

const titles = ["Software Engineer", "Full Stack Developer", "AI Engineer", "Machine Learning Enthusiast"];

const heroMetrics = [
  { value: "04+", label: "shipped projects" },
  { value: "18+", label: "tools mastered" },
  { value: "95%", label: "ML accuracy" },
];

const proofPoints = [
  "Next.js, React, Node.js, and database-backed product delivery",
  "Applied AI and machine learning workflows with practical outcomes",
  "Clean interfaces, responsive layouts, and direct recruiter actions",
];

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const phrase = titles[phraseIndex];
    let charIndex = 0;
    let typingTimer: number | undefined;
    let cycleTimer: number | undefined;

    const typeNext = () => {
      setDisplayText(phrase.slice(0, charIndex));
      if (charIndex < phrase.length) {
        charIndex += 1;
        typingTimer = window.setTimeout(typeNext, 72);
      } else {
        cycleTimer = window.setTimeout(() => {
          setPhraseIndex((current) => (current + 1) % titles.length);
        }, 1100);
      }
    };

    typeNext();

    return () => {
      if (typingTimer) window.clearTimeout(typingTimer);
      if (cycleTimer) window.clearTimeout(cycleTimer);
    };
  }, [phraseIndex]);

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="data-stream pointer-events-none absolute inset-x-0 top-[18rem] hidden h-24 opacity-25 lg:block" />
      <div className="mx-auto grid min-h-[38rem] max-w-7xl items-center gap-10 lg:min-h-[46rem] lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative z-10">
          <Motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-cyan-100 shadow-[0_0_32px_rgba(0,255,255,0.08)] backdrop-blur-xl sm:px-4 sm:text-xs sm:tracking-[0.3em]"
          >
            <Code2 className="h-3.5 w-3.5 text-cyan-300" />
            Full-stack AI product engineer
          </Motion.div>

          <Motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.08, duration: 0.65 }}
            className="mt-5 max-w-xl text-[0.7rem] uppercase tracking-[0.2em] text-slate-500 sm:mt-6 sm:text-sm sm:tracking-[0.32em]"
          >
            Portfolio engineered for clarity, speed, and hiring decisions
          </Motion.p>

          <Motion.h1
            variants={stagger}
            initial="hidden"
            animate="show"
            className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-white sm:mt-5 sm:text-6xl lg:text-7xl xl:text-[5.85rem]"
          >
            {site.name.split(" ").map((word) => (
              <Motion.span
                key={word}
                variants={fadeUp}
                className="gradient-text mr-3 inline-block sm:mr-5"
              >
                {word}
              </Motion.span>
            ))}
          </Motion.h1>

          <Motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15, duration: 0.65 }}
            className="mt-6 flex flex-wrap gap-2 text-sm text-slate-300 sm:mt-8 sm:gap-3"
          >
            {titles.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:px-4 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </Motion.div>

          <Motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2, duration: 0.65 }}
            className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-[#071022]/70 px-3 py-2 font-mono text-xs text-cyan-100 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:mt-6 sm:gap-3 sm:px-4 sm:text-sm"
          >
            <span className="text-slate-400">typing</span>
            <span className="truncate">{displayText}</span>
            <span className="h-4 w-px animate-pulse bg-cyan-300" />
          </Motion.div>

          <Motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.28, duration: 0.65 }}
            className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-xl sm:leading-8"
          >
            {site.description}
          </Motion.p>

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.31, duration: 0.65 }}
            className="mt-5 grid max-w-2xl gap-3 sm:mt-6"
          >
            {proofPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>{point}</span>
              </div>
            ))}
          </Motion.div>

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.34, duration: 0.65 }}
            className="mt-7 grid max-w-2xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] shadow-[0_24px_100px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:mt-8 sm:grid-cols-3"
          >
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="border-white/10 px-4 py-4 first:pt-5 last:pb-5 sm:px-5 sm:py-4 sm:border-r sm:last:border-r-0">
                <p className="text-2xl font-semibold tracking-tight text-white sm:text-2xl">{metric.value}</p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.22em] text-slate-500 sm:text-xs sm:tracking-[0.26em]">{metric.label}</p>
              </div>
            ))}
          </Motion.div>

          <Motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.38, duration: 0.65 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="#contact">
                Contact Me
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
          </Motion.div>

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.49, duration: 0.65 }}
            className="mt-8 grid max-w-2xl gap-3 text-sm text-slate-400 sm:mt-10 sm:grid-cols-3"
          >
            {[ 
              { icon: Cpu, text: "Full-stack systems with premium UX" },
              { icon: Sparkles, text: "AI applications with practical delivery" },
              { icon: Layers3, text: "Modern architecture across data and UI" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="group rounded-3xl border border-white/10 bg-white/[0.055] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-cyan-300/[0.07]"
                >
                  <Icon className="mb-3 h-4 w-4 text-cyan-300 transition group-hover:text-emerald-300" />
                  {item.text}
                </div>
              );
            })}
          </Motion.div>
        </div>

        <Motion.div
          variants={zoomIn}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative z-10"
        >
          <div className="absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(0,255,255,0.24),transparent_60%)] blur-3xl" />
          <div className="kinetic-border isolate rounded-[2.7rem] p-px">
            <HeroCodeWorkspace />
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
