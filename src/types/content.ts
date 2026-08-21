/**
 * The shapes of the JSON under `src/data/`.
 *
 * These types describe the content files; they do not validate them. Vite
 * imports JSON as a structurally-inferred literal type, which is why a component
 * has to assert (`skillsJson as Skill[]`) to get a named type back. Declaring the
 * shapes once here means the assertion is against one definition instead of an
 * interface re-declared inside whichever component happened to need it.
 *
 * `src/data/content.test.ts` is what actually checks the data at runtime - a
 * type cannot catch a missing image path or a link that is not https.
 */

export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'Tools'
  | 'DevOps'
  | 'Data Science'
  | 'Data Engineering'
  | 'AI';

export interface Skill {
  title: string;
  imageSrc: string;
  categories: SkillCategory[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  links: ProjectLink[];
  technologies: string[];
  imageSrc: string;
}

export interface Certificate {
  title: string;
  imageSrc: string;
  url: string;
}

export interface ExperienceProject {
  name: string;
  description: string;
  technologies: string[];
  buildTools: string[];
  versionControl: string[];
}

export interface ExperienceRole {
  title: string;
  projects: ExperienceProject[];
}

export interface Experience {
  company: string;
  period: string;
  location: string;
  roles: ExperienceRole[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  thesis: string;
}

export interface Publication {
  title: string;
  url: string;
}

export interface Language {
  name: string;
  proficiency: string;
}
