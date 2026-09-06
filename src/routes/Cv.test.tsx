import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Cv from './Cv';
import experience from '@/data/experience.json';
import education from '@/data/education.json';
import skills from '@/data/skills.json';
import certificates from '@/data/certificates.json';
import publications from '@/data/publications.json';
import languages from '@/data/languages.json';
import { CV_DOWNLOAD, PROFILE } from '@/shared/utils/constants';

/**
 * The point of this route is that it cannot disagree with the portfolio about the
 * owner's career, so the assertions are driven from the same JSON the page reads
 * rather than from a fixture. A test naming "Encora Inc." in a string literal
 * would keep passing after that entry was renamed in the data, which is the exact
 * drift the route exists to remove.
 */

const renderCv = () =>
  render(
    <MemoryRouter>
      <Cv />
    </MemoryRouter>,
  );

describe('the CV route', () => {
  it('heads the page with the profile', () => {
    renderCv();
    expect(
      screen.getByRole('heading', { level: 1, name: PROFILE.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(PROFILE.title)).toBeInTheDocument();
    expect(screen.getByText(PROFILE.location)).toBeInTheDocument();
  });

  it('lists every company in experience.json', () => {
    renderCv();
    for (const job of experience) {
      expect(
        screen.getByRole('heading', { name: job.company }),
      ).toBeInTheDocument();
    }
  });

  it('lists every role and project under its company', () => {
    renderCv();
    for (const job of experience) {
      for (const role of job.roles) {
        expect(screen.getAllByText(role.title).length).toBeGreaterThan(0);
        for (const project of role.projects) {
          expect(screen.getByText(project.name)).toBeInTheDocument();
          expect(screen.getByText(project.description)).toBeInTheDocument();
        }
      }
    }
  });

  it('lists every degree with its institution and thesis', () => {
    renderCv();
    for (const degree of education) {
      expect(screen.getByText(degree.degree)).toBeInTheDocument();
      expect(screen.getAllByText(degree.institution).length).toBeGreaterThan(0);
      expect(screen.getByText(`Thesis: ${degree.thesis}`)).toBeInTheDocument();
    }
  });

  it('names every skill somewhere in the skills block', () => {
    const { container } = renderCv();
    const text = container.textContent;
    for (const skill of skills) {
      expect(text).toContain(skill.title);
    }
  });

  it('links every certificate and publication to its source', () => {
    renderCv();
    for (const certificate of certificates) {
      expect(
        screen.getByRole('link', { name: certificate.title }),
      ).toHaveAttribute('href', certificate.url);
    }
    for (const publication of publications) {
      expect(
        screen.getByRole('link', { name: publication.title }),
      ).toHaveAttribute('href', publication.url);
    }
  });

  it('lists every language with its proficiency', () => {
    const { container } = renderCv();
    const text = container.textContent;
    for (const language of languages) {
      expect(text).toContain(language.name);
      expect(text).toContain(language.proficiency);
    }
  });

  it('keeps the PDF reachable and offers a way back', () => {
    // Adding this route took the PDF out of the navbar. It has to stay reachable
    // from somewhere, and this page is that somewhere.
    renderCv();
    expect(screen.getByRole('link', { name: /download pdf/i })).toHaveAttribute(
      'href',
      CV_DOWNLOAD.filename,
    );
    expect(
      screen.getByRole('link', { name: /back to portfolio/i }),
    ).toHaveAttribute('href', '/');
  });

  it('marks the chrome and each entry for the print stylesheet', () => {
    // The @media print block in index.css hangs off these class names: cv-chrome
    // is dropped on paper and cv-entry is what stops a job splitting across a page
    // break. Renaming one here and not there breaks printing silently, since no
    // test can see a stylesheet (`css: false`).
    const { container } = renderCv();
    expect(container.querySelector('.cv-page')).toBeInTheDocument();
    expect(container.querySelector('.cv-chrome')).toBeInTheDocument();
    expect(container.querySelectorAll('.cv-entry').length).toBeGreaterThan(0);
    expect(container.querySelectorAll('.cv-section').length).toBeGreaterThan(0);
  });
});
