"use client";

import { Navbar } from "@/components/navbar/navbar";
import { SectionRail } from "@/components/navigation/section-rail";
import { HeroSection } from "@/components/hero/hero-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { EducationSection } from "@/components/education/education-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export function AppClient() {
  return (
    <div suppressHydrationWarning>
      <ScrollProgress />
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
