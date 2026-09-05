import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@/shared/theme/ThemeProvider';
import experience from '@/data/experience.json';
import Experience from './Experience';

const renderExperience = () =>
  render(
    <ThemeProvider>
      <Experience />
    </ThemeProvider>,
  );

describe('Experience', () => {
  it('renders a heading and one entry per job', () => {
    renderExperience();
    expect(
      screen.getByRole('heading', { name: 'Experience', level: 2 }),
    ).toBeInTheDocument();

    // The h3 differs by shape: a job with several roles is titled by the company
    // alone, a single-role job by "<role> · <company>". Asserting the company name
    // appears either way is what makes this independent of that branch.
    for (const job of experience) {
      expect(
        screen.getAllByText(new RegExp(job.company)).length,
      ).toBeGreaterThan(0);
      // Two jobs can legitimately share a location or a period, so assert the
      // COUNT matches the data rather than requiring a unique node.
      const sameLocation = experience.filter(
        (other) => other.location === job.location,
      ).length;
      expect(screen.getAllByText(job.location)).toHaveLength(sameLocation);
      const samePeriod = experience.filter(
        (other) => other.period === job.period,
      ).length;
      expect(screen.getAllByText(job.period)).toHaveLength(samePeriod);
    }
  });

  it('renders every project of every role, with its description', () => {
    renderExperience();

    for (const job of experience) {
      for (const role of job.roles) {
        for (const project of role.projects) {
          expect(
            screen.getByRole('heading', { name: project.name, level: 5 }),
          ).toBeInTheDocument();
          expect(screen.getByText(project.description)).toBeInTheDocument();
        }
      }
    }
  });

  it('lists each technology of each project as a chip', () => {
    renderExperience();

    for (const job of experience) {
      for (const role of job.roles) {
        for (const project of role.projects) {
          for (const tech of project.technologies) {
            // A technology can legitimately repeat across projects, so assert
            // presence rather than a single node.
            expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
          }
        }
      }
    }
  });

  it('shows a role sub-heading only where a job has more than one role', () => {
    renderExperience();

    // This is the branch the component actually carries. Without it, a
    // multi-role job would silently lose the role names and every other
    // assertion here would still pass.
    for (const job of experience) {
      if (job.roles.length > 1) {
        for (const role of job.roles) {
          expect(
            screen.getByRole('heading', { name: role.title, level: 4 }),
          ).toBeInTheDocument();
        }
      }
    }
  });
});
