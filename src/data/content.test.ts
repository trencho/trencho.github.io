import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import skills from '@/data/skills.json';
import certificates from '@/data/certificates.json';
import projects from '@/data/projects.json';

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
      expect(project.link).toMatch(/^https:\/\//);
      expect(project.imageSrc).toMatch(/\.png$/);
      expect(Array.isArray(project.technologies)).toBe(true);
      expect(project.technologies.length).toBeGreaterThan(0);
    }
  });
});
