"use client";

import { Badge } from "@/components/ui/badge";
import { experienceItems } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Motion } from "@/components/ui/motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Professional Experience"
          title="Software Engineering Journey & Industry Exposure"
          description="A premium vertical timeline that presents internship-level engineering work, collaboration, delivery, and applied software development practice."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300/70 via-violet-400/40 to-transparent md:left-1/2" />
          <div className="grid gap-10">
            {experienceItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="relative grid gap-6 md:grid-cols-2">
                  <div className={index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}>
                    <Motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35 }}
                      className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-xs font-semibold tracking-[0.35em] text-cyan-200 shadow-[0_0_24px_rgba(0,255,255,0.08)]"
                    >
                      {item.year}
                    </Motion.div>

                    <Card className="mt-4 border-white/10 bg-[linear-gradient(180deg,rgba(10,18,38,0.9),rgba(6,10,22,0.94))]">
                      <CardContent className="p-6 sm:p-7">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/75">
                              {item.badge}
                            </p>
                            <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                          </div>
                          <Motion.span
                            initial={{ opacity: 0.7, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -2, scale: 1.04 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className="rounded-full border border-cyan-300/25 bg-cyan-300/12 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-cyan-100 shadow-[0_0_24px_rgba(0,255,255,0.12)]"
                          >
                            Industry Experience
                          </Motion.span>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>

                        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-cyan-300/75">
                          Responsibilities
                        </p>
                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                          {item.responsibilities.map((responsibility, responsibilityIndex) => (
                            <Motion.div
                              key={responsibility}
                              initial={{ opacity: 0, y: 10, scale: 0.98 }}
                              whileInView={{ opacity: 1, y: 0, scale: 1 }}
                              whileHover={{ y: -3, scale: 1.01 }}
                              viewport={{ once: true }}
                              transition={{ delay: responsibilityIndex * 0.03, duration: 0.3 }}
                              className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm leading-6 text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                            >
                              {responsibility}
                            </Motion.div>
                          ))}
                        </div>

                        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-cyan-300/75">
                          Technologies Used
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <Motion.span
                              key={tech}
                              initial={{ opacity: 0, y: 6 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              whileHover={{ y: -2, scale: 1.03 }}
                              viewport={{ once: true }}
                              transition={{ delay: techIndex * 0.02, duration: 0.28 }}
                            >
                              <Badge variant="outline" className="border-white/10 bg-white/5 text-slate-200">
                                {tech}
                              </Badge>
                            </Motion.span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="pointer-events-none absolute left-0 top-6 grid h-8 w-8 place-items-center rounded-full border border-cyan-300/30 bg-[#050816] md:left-1/2 md:-translate-x-1/2">
                    <span className="h-3 w-3 rounded-full bg-[linear-gradient(135deg,#00ffff,#7c3aed)] shadow-[0_0_25px_rgba(0,255,255,0.65)]" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
