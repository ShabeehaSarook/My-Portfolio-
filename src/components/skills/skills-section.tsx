"use client";

import dynamic from "next/dynamic";
import { Motion } from "@/components/ui/motion";
import { skillGroups } from "@/data/portfolio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const SkillSphere = dynamic(
  () => import("@/components/three/skill-sphere").then((module) => module.SkillSphere),
  { ssr: false, loading: () => <div className="h-[24rem] rounded-[2rem] border border-white/10 bg-white/5" /> },
);

const progressByGroup: Record<string, number> = {
  Frontend: 96,
  Backend: 88,
  "AI / Machine Learning": 90,
  Database: 84,
  Tools: 92,
};

const technicalLayers = [
  { label: "Client", value: "React + Next.js" },
  { label: "API", value: "Node + REST" },
  { label: "Data", value: "MongoDB" },
  { label: "AI", value: "Python + ML" },
];

export function SkillsSection() {
  const marqueeSkills = skillGroups.flatMap((group) => group.items).slice(0, 18);

  return (
    <section id="skills" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A dense stack across frontend, backend, and applied AI."
          description="Progress cards and a connected 3D stack map showing the tools behind frontend, API, data, and AI workflows."
        />

        <Reveal delay={0.08}>
          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] py-3 backdrop-blur-xl [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] sm:mt-10 sm:rounded-[1.75rem] sm:[mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
            <div className="marquee-track flex w-max gap-2 px-3 sm:gap-3">
              {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-cyan-100 sm:px-4 sm:text-xs sm:tracking-[0.22em]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-5">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.05}>
                <Card className="group border-white/10 bg-[linear-gradient(180deg,rgba(10,18,38,0.9),rgba(6,10,22,0.94))]">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-white sm:text-xl">{group.title}</h3>
                      <Badge variant="outline">{progressByGroup[group.title] ?? 85}%</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-5 h-2 overflow-hidden rounded-full bg-white/10">
                      <Motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progressByGroup[group.title] ?? 85}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full rounded-full bg-[linear-gradient(90deg,#00ffff,#14f195,#7c3aed)]"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {group.items.map((item) => (
                        <Motion.span
                          key={item}
                          whileHover={{ y: -3, scale: 1.02 }}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 sm:px-4 sm:text-sm"
                        >
                          {item}
                        </Motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Card className="border-white/10 bg-[linear-gradient(180deg,rgba(10,18,38,0.9),rgba(6,10,22,0.94))] lg:sticky lg:top-28">
              <CardHeader>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/75">
                  Technical Stack
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">
                  Engineering layers in motion.
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Frontend, API, data, and AI capabilities mapped as connected implementation nodes.
                </p>
              </CardHeader>
              <CardContent className="space-y-5">
                <SkillSphere />
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {technicalLayers.map((layer) => (
                    <div
                      key={layer.label}
                      className="rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.045] p-3 sm:p-4"
                    >
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-cyan-200/70">
                        {layer.label}
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-100">
                        {layer.value}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
