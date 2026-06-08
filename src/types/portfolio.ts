export type NavItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  icon: string;
  items: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  role: string;
  challenge: string;
  architecture: string;
  outcome: string;
  image: string;
  tags: string[];
  features: string[];
  technologies: string[];
  github: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  statusBadge?: string;
  achievementBadge?: string;
  focusAreas?: string[];
  specializationAreas?: string[];
};

export type ExperienceItem = {
  year: string;
  title: string;
  description: string;
  badge: string;
  responsibilities: string[];
  technologies: string[];
};

export type AchievementItem = {
  title: string;
  subtitle: string;
  badge: string;
};

export type TimelineMilestone = {
  year: string;
  title: string;
  description: string;
};
