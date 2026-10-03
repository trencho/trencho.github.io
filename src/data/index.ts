import type {
  Certificate,
  Education,
  Experience,
  Language,
  Project,
  Publication,
  Skill,
  SkillCategory,
} from '@/types/content';
import experienceJson from './experience.json';
import educationJson from './education.json';
import skillsJson from './skills.json';
import certificatesJson from './certificates.json';
import projectsJson from './projects.json';
import publicationsJson from './publications.json';
import languagesJson from './languages.json';

/**
 * The content files with their named types. Components import from here, never
 * from the JSON directly. The annotations are checked: TypeScript rejects a JSON
 * shape that does not fit. Skills alone needs an assertion, because JSON widens
 * its category strings to `string`; `content.test.ts` checks them at runtime.
 */
export const experience: Experience[] = experienceJson;
export const education: Education[] = educationJson;
export const certificates: Certificate[] = certificatesJson;
export const projects: Project[] = projectsJson;
export const publications: Publication[] = publicationsJson;
export const languages: Language[] = languagesJson;
export const skills = skillsJson as Skill[];

/** One category order for the Skills filter row and the CV, backend first. */
export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  'Backend',
  'Frontend',
  'Databases',
  'Data Engineering',
  'Data Science',
  'AI',
  'DevOps',
  'Tools',
];
