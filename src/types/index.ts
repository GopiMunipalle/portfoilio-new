export type Theme = "light" | "dark";

export interface Profile {
  name: string;
  fullName: string;
  role: string;
  experience: string;
  location: string;
  email: string;
  phone: string;
  // photo: string;
  resume: string;
  resumeFileName: string;
  linkedin: string;
  github: string;
  intro: string;
  about: string[];
}

export interface Highlight {
  title: string;
  text: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  /** Short bullet points shown on featured projects. */
  features?: string[];
  /** Small label such as "Microservices architecture". */
  badge?: string;
  featured?: boolean;
  /** Live site. Leave out for private or company projects. */
  link?: string;
  demo?: { username: string; password: string };
}

export interface EducationItem {
  place: string;
  title: string;
  period: string;
  score?: string;
}

export interface NavLink {
  id: string;
  label: string;
}
