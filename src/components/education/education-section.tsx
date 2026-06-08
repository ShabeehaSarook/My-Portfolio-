"use client";

import { Award, ChevronDown, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  academicAchievements,
  educationMilestones,
  educationTimeline,
  portfolioHighlights,
} from "@/data/portfolio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Motion } from "@/components/ui/motion";

export function EducationSection() {
  return (
    <section id="education" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic progression with a strong engineering direction."
          description="Timeline cards, academic achievements, and professional highlights presented in the same futuristic glassmorphism style."
        />

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6">
          {educationTimeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <Card className="border-white/10 bg-[linear-gradient(180deg,rgba(10,18,38,0.9),rgba(6,10,22,0.94))]">
                <CardHeader>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/75">
                        {item.year}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      {item.statusBadge ? (
                        <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-cyan-100 sm:px-3 sm:text-xs sm:tracking-[0.25em]">
                          {item.statusBadge}
                        </span>
                      ) : null}
                      {item.achievementBadge ? (
                        <span className="rounded-full border border-violet-300/25 bg-violet-300/10 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-violet-100 sm:px-3 sm:text-xs sm:tracking-[0.25em]">
                          {item.achievementBadge}
                        </span>
                      ) : null}
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-slate-400 sm:px-3 sm:text-xs sm:tracking-[0.25em]">
                        {item.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-slate-200">{item.institution}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400 sm:leading-7">{item.description}</p>

                  {item.focusAreas?.length ? (
                    <>
                      <p className="mt-5 text-[0.62rem] uppercase tracking-[0.2em] text-cyan-300/75 sm:mt-6 sm:text-xs sm:tracking-[0.3em]">
                        Study Focus
                      </p>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {item.focusAreas.map((focus, focusIndex) => (
                          <Motion.div
                            key={focus}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -2, scale: 1.01 }}
                            viewport={{ once: true }}
                            transition={{ delay: focusIndex * 0.02, duration: 0.28 }}
                            className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-slate-300"
                          >
                            {focus}
                          </Motion.div>
                        ))}
                      </div>
                    </>
                  ) : null}

                  {item.specializationAreas?.length ? (
                    <>
                      <p className="mt-5 text-[0.62rem] uppercase tracking-[0.2em] text-cyan-300/75 sm:mt-6 sm:text-xs sm:tracking-[0.3em]">
                        Specialization Areas
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.specializationAreas.map((area, areaIndex) => (
                          <Motion.span
                            key={area}
                            initial={{ opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -2, scale: 1.03 }}
                            viewport={{ once: true }}
                            transition={{ delay: areaIndex * 0.02, duration: 0.28 }}
                          >
                            <Badge variant="outline" className="border-white/10 bg-white/5 text-slate-200">
                              {area}
                            </Badge>
                          </Motion.span>
                        ))}
                      </div>
                    </>
                  ) : null}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-12 sm:mt-16">
            <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-cyan-300/75">
              <Award className="h-4 w-4" />
              Academic Achievements
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {academicAchievements.map((achievement, index) => (
                <Motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 14, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                >
                  <Card className="h-full border-white/10 bg-[linear-gradient(180deg,rgba(10,18,38,0.9),rgba(6,10,22,0.94))]">
                    <CardContent className="p-6">
                      <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-cyan-100">
                        {achievement.badge}
                      </span>
                      <h3 className="mt-4 text-lg font-semibold text-white">{achievement.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{achievement.subtitle}</p>
                    </CardContent>
                  </Card>
                </Motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <Card className="mt-12 border-white/10 bg-[linear-gradient(180deg,rgba(10,18,38,0.9),rgba(6,10,22,0.94))] sm:mt-16">
            <CardHeader>
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-cyan-300/75">
                <Sparkles className="h-4 w-4" />
                Education Timeline
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">
                Progression from foundational study to applied research delivery.
              </h3>
            </CardHeader>
            <CardContent>
              <div className="relative grid gap-4">
                <div className="absolute left-[1.05rem] top-0 h-full w-px bg-gradient-to-b from-cyan-300/70 via-violet-400/50 to-transparent md:left-1/2" />
                {educationMilestones.map((milestone, index) => (
                  <Motion.div
                    key={`${milestone.year}-${milestone.title}`}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -3 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03, duration: 0.32 }}
                    className="relative grid gap-4 md:grid-cols-2 md:gap-8"
                  >
                    <div className={index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}>
                      <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-xs font-semibold tracking-[0.35em] text-cyan-200 shadow-[0_0_22px_rgba(0,255,255,0.08)]">
                        {milestone.year}
                      </span>
                      <Card className="mt-4 border-white/10 bg-white/[0.045]">
                        <CardContent className="p-5">
                          <h4 className="text-lg font-semibold text-white">{milestone.title}</h4>
                          <p className="mt-3 text-sm leading-7 text-slate-400">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="pointer-events-none absolute left-0 top-6 grid h-8 w-8 place-items-center rounded-full border border-cyan-300/30 bg-[#050816] md:left-1/2 md:-translate-x-1/2">
                      <span className="h-3 w-3 rounded-full bg-[linear-gradient(135deg,#00ffff,#7c3aed)] shadow-[0_0_25px_rgba(0,255,255,0.65)]" />
                    </div>

                    {index < educationMilestones.length - 1 ? (
                      <div className="absolute left-4 top-[4.8rem] hidden text-cyan-200/50 md:left-1/2 md:block md:-translate-x-1/2">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    ) : null}
                  </Motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12 sm:mt-16">
            <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-cyan-300/75">
              <Sparkles className="h-4 w-4" />
              Academic & Professional Highlights
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {portfolioHighlights.map((highlight, index) => (
                <Motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                >
                  <Card className="h-full border-white/10 bg-[linear-gradient(180deg,rgba(10,18,38,0.9),rgba(6,10,22,0.94))]">
                    <CardContent className="p-5">
                      <span className="inline-flex rounded-full border border-violet-300/25 bg-violet-300/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-violet-100">
                        {highlight.badge}
                      </span>
                      <h3 className="mt-4 text-base font-semibold text-white">{highlight.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{highlight.subtitle}</p>
                    </CardContent>
                  </Card>
                </Motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
