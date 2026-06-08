"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Binary,
  BrainCircuit,
  CheckCircle2,
  Layers3,
  ServerCog,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Motion } from "@/components/ui/motion";

const focusAreas = [
  { label: "AI Systems", icon: BrainCircuit },
  { label: "Predictive Analytics", icon: Binary },
  { label: "Java Architecture", icon: ServerCog },
  { label: "Product Delivery", icon: Layers3 },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <Motion.article
      layout
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
      className="group h-full"
    >
      <Card className="flex h-full flex-col border-cyan-300/12 bg-[linear-gradient(180deg,rgba(9,17,36,0.94),rgba(5,9,22,0.98))] shadow-[0_24px_120px_rgba(0,0,0,0.32)] transition duration-300 group-hover:border-cyan-300/30 group-hover:shadow-[0_30px_120px_rgba(0,255,255,0.08)]">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.04)_0%,rgba(5,8,22,0.3)_48%,rgba(5,8,22,0.92)_100%)]" />
          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 [background:radial-gradient(circle_at_50%_35%,rgba(0,255,255,0.15),transparent_54%)]" />

          <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/10 bg-[#071022]/80 px-2.5 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-cyan-100 backdrop-blur-xl sm:left-4 sm:top-4 sm:px-3 sm:text-[0.68rem] sm:tracking-[0.2em]">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            Featured 0{index + 1}
          </div>

          <div className="absolute right-4 top-4 hidden flex-wrap justify-end gap-2 sm:flex">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                className="bg-[#071022]/75 px-3 py-1 text-xs backdrop-blur-xl"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
            <div>
              <p className="text-[0.56rem] uppercase tracking-[0.2em] text-cyan-100/70 sm:text-[0.62rem] sm:tracking-[0.28em]">
                Case Study
              </p>
              <h3 className="mt-1.5 text-xl font-semibold leading-tight text-white sm:mt-2 sm:text-2xl lg:text-[1.55rem] xl:text-[1.7rem]">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        <CardContent className="flex flex-1 flex-col p-4 sm:p-6 lg:p-7">
          <div className="mb-4 flex flex-wrap gap-2 sm:hidden">
            {project.tags.map((tag) => (
              <Badge key={tag} className="px-2.5 py-1 text-[0.62rem]">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.12em] text-slate-300 sm:px-3 sm:text-[0.68rem] sm:tracking-[0.18em]"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:mt-5 sm:leading-7 sm:text-[0.96rem]">
            {project.description}
          </p>

          <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[0.56rem] uppercase tracking-[0.18em] text-slate-500 sm:text-[0.62rem] sm:tracking-[0.24em]">
                Challenge
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{project.challenge}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[0.56rem] uppercase tracking-[0.18em] text-slate-500 sm:text-[0.62rem] sm:tracking-[0.24em]">
                Outcome
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{project.outcome}</p>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-[0.56rem] uppercase tracking-[0.18em] text-cyan-300/75 sm:text-[0.62rem] sm:tracking-[0.24em]">
              Key Deliverables
            </p>
            <div className="mt-3 grid gap-2">
              {project.features.slice(0, 3).map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 transition duration-200 group-hover:border-cyan-300/20"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-white/10 bg-[#071022]/60 p-4 sm:mt-6">
            <p className="text-[0.56rem] uppercase tracking-[0.18em] text-cyan-300/75 sm:text-[0.62rem] sm:tracking-[0.24em]">
              Architecture
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">{project.architecture}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {project.technologies.slice(4).map((tech) => (
              <Badge key={tech} variant="outline" className="uppercase tracking-[0.16em]">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-6 rounded-[1.4rem] border border-cyan-300/12 bg-[linear-gradient(135deg,rgba(0,255,255,0.08),rgba(124,58,237,0.08))] p-3 sm:mt-7">
            <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="text-[0.56rem] uppercase tracking-[0.18em] text-cyan-300/70 sm:text-[0.62rem] sm:tracking-[0.24em]">
                  Source Code
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Open the repository for implementation details and structure.
                </p>
              </div>
              <Button asChild className="w-full whitespace-nowrap sm:w-auto">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub className="h-4 w-4" />
                  View Details
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.45),transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="left"
          eyebrow="Featured Projects"
          title="Selected systems across AI, predictive analytics, and Java architecture."
          description="The section is structured like a concise case-study portfolio with cleaner hierarchy, stronger spacing, and direct links to the GitHub repositories."
        />

        <Reveal delay={0.08}>
          <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:mt-10 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Motion.div
                    key={area.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.45 }}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071022]/70 px-4 py-3"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition group-hover:border-emerald-300/30 group-hover:text-emerald-200">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-slate-200">{area.label}</span>
                  </Motion.div>
                );
              })}
            </div>

            <div className="rounded-[1.5rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(8,15,34,0.92),rgba(6,10,24,0.98))] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-300/75">
                Portfolio snapshot
              </p>
              <div className="mt-4 grid gap-2 min-[430px]:grid-cols-3 sm:gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-2xl font-semibold tracking-tight text-white">04</p>
                  <p className="mt-1 text-[0.62rem] uppercase tracking-[0.28em] text-slate-500">
                    Featured cases
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-2xl font-semibold tracking-tight text-white">AI</p>
                  <p className="mt-1 text-[0.62rem] uppercase tracking-[0.28em] text-slate-500">
                    Product focus
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-2xl font-semibold tracking-tight text-white">UX</p>
                  <p className="mt-1 text-[0.62rem] uppercase tracking-[0.28em] text-slate-500">
                    Delivery focus
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Each project is presented with a consistent structure so the viewer can scan the
                role, challenge, outcome, and stack without visual overload.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
