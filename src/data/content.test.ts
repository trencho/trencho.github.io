import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import skills from '@/data/skills.json';
import certificates from '@/data/certificates.json';
import projects from '@/data/projects.json';
import experience from '@/data/experience.json';
import education from '@/data/education.json';
import publications from '@/data/publications.json';
import languages from '@/data/languages.json';

describe('skills.json', () => {
  it('has well-formed entries', () => {
    expect(skills.length).toBeGreaterThan(0);
    for (const skill of skills) {
      expect(skill.title).toBeTruthy();
      expect(skill.imageSrc).toMatch(/^image-skills\/.+\.png$/);
      expect(Array.isArray(skill.categories)).toBe(true);
      expect(skill.categories.length).toBeGreaterThan(0);
    }
  });

  it('has unique titles', () => {
    const titles = skills.map((s) => s.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});

describe('index.html JSON-LD knowsAbout', () => {
  // The Person JSON-LD `knowsAbout` list must mirror the Skills section so the
  // structured data crawlers see stays in sync with what the site renders.
  // Adding a skill means updating both skills.json and index.html — this guards
  // against forgetting either side.
  // Vitest runs from the project root, so index.html sits at cwd.
  const html = readFileSync(join(process.cwd(), 'index.html'), 'utf8');
  const jsonLdMatch = html.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  );
  const jsonLd = jsonLdMatch?.[1] ?? '';

  it('exists and parses', () => {
    expect(jsonLd).not.toBe('');
    expect(() => {
      JSON.parse(jsonLd);
    }).not.toThrow();
  });

  it('lists exactly the skills.json titles (order-independent)', () => {
    const parsed = JSON.parse(jsonLd) as { knowsAbout: string[] };
    const skillTitles = skills.map((s) => s.title);
    expect([...parsed.knowsAbout].sort()).toEqual([...skillTitles].sort());
  });
});

describe('certificates.json', () => {
  it('has title, image and an https credential url', () => {
    expect(certificates.length).toBeGreaterThan(0);
    for (const cert of certificates) {
      expect(cert.title).toBeTruthy();
      expect(cert.imageSrc).toBeTruthy();
      expect(cert.url).toMatch(/^https:\/\//);
    }
  });
});

describe('projects.json', () => {
  it('has required fields and https project links', () => {
    expect(projects.length).toBeGreaterThan(0);
    for (const project of projects) {
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.imageSrc).toMatch(/\.png$/);
      expect(Array.isArray(project.technologies)).toBe(true);
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(Array.isArray(project.links)).toBe(true);
      expect(project.links.length).toBeGreaterThan(0);
      for (const link of project.links) {
        expect(link.label).toBeTruthy();
        expect(link.url).toMatch(/^https:\/\//);
      }
    }
  });
});

describe('experience.json', () => {
  it('has well-formed entries grouped by role and project', () => {
    expect(experience.length).toBeGreaterThan(0);
    for (const job of experience) {
      expect(job.company).toBeTruthy();
      expect(job.period).toBeTruthy();
      expect(job.location).toBeTruthy();
      expect(Array.isArray(job.roles)).toBe(true);
      expect(job.roles.length).toBeGreaterThan(0);
      for (const role of job.roles) {
        expect(role.title).toBeTruthy();
        expect(Array.isArray(role.projects)).toBe(true);
        expect(role.projects.length).toBeGreaterThan(0);
        for (const project of role.projects) {
          expect(project.name).toBeTruthy();
          expect(project.description).toBeTruthy();
          expect(Array.isArray(project.technologies)).toBe(true);
          expect(project.technologies.length).toBeGreaterThan(0);
          expect(Array.isArray(project.buildTools)).toBe(true);
          expect(project.buildTools.length).toBeGreaterThan(0);
          expect(Array.isArray(project.versionControl)).toBe(true);
          expect(project.versionControl.length).toBeGreaterThan(0);
        }
      }
    }
  });
});

describe('education.json', () => {
  it('has well-formed entries', () => {
    expect(education.length).toBeGreaterThan(0);
    for (const degree of education) {
      expect(degree.degree).toBeTruthy();
      expect(degree.institution).toBeTruthy();
      expect(degree.period).toBeTruthy();
      expect(degree.thesis).toBeTruthy();
    }
  });
});

describe('publications.json', () => {
  it('has a title and an https url', () => {
    expect(publications.length).toBeGreaterThan(0);
    for (const publication of publications) {
      expect(publication.title).toBeTruthy();
      expect(publication.url).toMatch(/^https:\/\//);
    }
  });
});

describe('languages.json', () => {
  it('has a name and proficiency', () => {
    expect(languages.length).toBeGreaterThan(0);
    for (const language of languages) {
      expect(language.name).toBeTruthy();
      expect(language.proficiency).toBeTruthy();
    }
  });
});

describe('image assets on disk', () => {
  // Every logo is served as <picture> with the .webp path DERIVED from the .png
  // by string replacement - it is never written down. So renaming or adding a
  // .png without its .webp sibling breaks the primary source silently: the
  // browser falls back to the png and nothing fails. This is the only check
  // that looks at the filesystem.
  const publicPath = (src: string) => join(process.cwd(), 'public', src);

  it('ships a png and a matching webp for every skill logo', () => {
    for (const skill of skills) {
      expect(existsSync(publicPath(skill.imageSrc)), skill.imageSrc).toBe(true);
      const webp = skill.imageSrc.replace(/\.png$/, '.webp');
      expect(existsSync(publicPath(webp)), webp).toBe(true);
    }
  });

  it('ships a png and a matching webp for every project image', () => {
    for (const project of projects) {
      expect(existsSync(publicPath(project.imageSrc)), project.imageSrc).toBe(
        true,
      );
      const webp = project.imageSrc.replace(/\.png$/, '.webp');
      expect(existsSync(publicPath(webp)), webp).toBe(true);
    }
  });
});

describe('image weight budget', () => {
  // The PNGs are FALLBACKS - every current browser fetches the .webp, so an
  // oversized png costs deploy and repo weight rather than user-facing latency.
  // Say it that way in any report. The originals were stored at up to 2500x2500
  // while rendering at 80x80, which is what this budget exists to prevent
  // returning: a fallback larger than its source is a re-uploaded original.
  const SKILL_LOGO_MAX_BYTES = 60_000;

  it('keeps every skill logo fallback under the budget', () => {
    const oversized = skills
      .map((s) => ({
        src: s.imageSrc,
        bytes: statSync(join(process.cwd(), 'public', s.imageSrc)).size,
      }))
      .filter((s) => s.bytes > SKILL_LOGO_MAX_BYTES);

    expect(
      oversized,
      `over ${String(SKILL_LOGO_MAX_BYTES)} bytes: ${oversized
        .map((o) => `${o.src} (${String(o.bytes)})`)
        .join(', ')}`,
    ).toEqual([]);
  });
});
