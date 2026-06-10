"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar/navbar";
import { SectionRail } from "@/components/navigation/section-rail";
import { HeroSection } from "@/components/hero/hero-section";
import { Footer } from "@/components/footer/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";

const ProjectsSection = dynamic(() => import("@/components/projects/projects-section").then((mod) => mod.ProjectsSection), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-white/5 rounded-3xl m-8" />,
});
const SkillsSection = dynamic(() => import("@/components/skills/skills-section").then((mod) => mod.SkillsSection), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-white/5 rounded-3xl m-8" />,
});
const ExperienceSection = dynamic(() => import("@/components/experience/experience-section").then((mod) => mod.ExperienceSection), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-white/5 rounded-3xl m-8" />,
});
const EducationSection = dynamic(() => import("@/components/education/education-section").then((mod) => mod.EducationSection), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-white/5 rounded-3xl m-8" />,
});
const ContactSection = dynamic(() => import("@/components/contact/contact-section").then((mod) => mod.ContactSection), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-white/5 rounded-3xl m-8" />,
});

export function AppClient() {
  return (
    <div suppressHydrationWarning className="overflow-x-hidden">
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <SectionRail />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

