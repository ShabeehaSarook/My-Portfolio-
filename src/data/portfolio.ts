import { siteConfig, navigation } from "@/constants/site";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { experienceItems } from "@/data/experience";
import {
  academicAchievements,
  educationItems as educationTimeline,
  educationMilestones,
  portfolioHighlights,
} from "@/data/education";

export const site = {
  name: siteConfig.name,
  role: siteConfig.title,
  headline: "Full Stack Developer",
  specialties: ["AI Engineer", "Machine Learning Enthusiast"],
  description:
    "Passionate Software Engineer specializing in full-stack development, machine learning systems, AI-powered applications, and scalable web solutions.",
  about:
    "Passionate and skilled Software Engineer with expertise in both front-end and back-end development. Experienced in ReactJS, Next.js, Node.js, Express.js, MongoDB, Java, Python, Machine Learning, and REST APIs. Recognized for problem-solving abilities, scalable architecture design, Agile methodologies, and effective collaboration.",
  email: siteConfig.email,
  location: siteConfig.location,
  github: siteConfig.github,
  linkedin: siteConfig.linkedin,
  resume: siteConfig.resume,
};

export const navItems = navigation;

export { projects, skillGroups, experienceItems, educationTimeline, educationMilestones, academicAchievements, portfolioHighlights };
