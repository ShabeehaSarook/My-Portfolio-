"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { site } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Direct channels for roles, projects, and collaborations."
          description="A focused contact area with one email action and verified professional profiles."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Card className="border-white/10 bg-[linear-gradient(180deg,rgba(10,18,38,0.9),rgba(6,10,22,0.94))]">
              <CardHeader>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/75">Primary Contact</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Send one clear message and keep the rest of the links secondary.
                </h3>
              </CardHeader>
              <CardContent>
                <div className="rounded-[1.75rem] border border-cyan-300/15 bg-cyan-300/[0.06] p-5">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Email</p>
                      <p className="mt-1 truncate text-sm text-slate-200">{site.email}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Button className="flex-1" asChild>
                      <a href={`mailto:${site.email}`}>
                        <Mail className="h-4 w-4" />
                        Send Message
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={copyEmail}>
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied ? "Copied" : "Copy"}
                    </Button>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2 text-[0.62rem] uppercase tracking-[0.14em] text-slate-500 sm:text-xs sm:tracking-[0.24em]">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Fast response</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Role inquiries</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Project talks</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="border-white/10 bg-[linear-gradient(180deg,rgba(10,18,38,0.9),rgba(6,10,22,0.94))]">
              <CardHeader>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/75">Professional Profiles</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  Review engineering work and professional background.
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  {
                    label: "LinkedIn",
                    href: site.linkedin,
                    icon: FaLinkedin,
                    note: "Professional history",
                  },
                  {
                    label: "GitHub",
                    href: site.github,
                    icon: FaGithub,
                    note: "Code and projects",
                  },
                ].map((profile) => {
                  const Icon = profile.icon;
                  return (
                    <a
                      key={profile.label}
                      href={profile.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-[1.6rem] border border-white/10 bg-white/5 px-4 py-4 transition hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                            {profile.label}
                          </p>
                          <p className="mt-1 truncate text-sm text-slate-200">{profile.note}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-cyan-300/70 transition group-hover:translate-x-1" />
                    </a>
                  );
                })}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
