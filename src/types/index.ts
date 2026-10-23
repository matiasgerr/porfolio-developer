import type { LucideIcon, Mail } from 'lucide-react';
import type { SimpleIcon } from 'simple-icons';

export type ProjectType = 'web' | 'mobile' | 'backend';

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectDetails {
  summary: string;
  image?: ProjectImage;
}

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  description: string;
  stack: string[];
  link?: string;
  /** Shown as a large card with its image at the top of the projects section. */
  featured?: boolean;
  details?: ProjectDetails;
}

export interface ExperienceItem {
  role: string;
  company: string;
  project: string;
  period?: string;
  current?: boolean;
  highlights: string[];
  stack: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  period?: string;
}

export interface SkillItem {
  name: string;
  icon?: SimpleIcon;
  fallbackIcon?: LucideIcon;
}

export interface SkillGroup {
  label: string;
  items: SkillItem[];
}

export interface Social {
  label: string;
  href: string;
  icon: typeof Mail;
}

export interface NavLink {
  href: string;
  label: string;
  hoverColor: string;
}
