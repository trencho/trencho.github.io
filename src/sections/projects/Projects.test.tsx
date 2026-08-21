import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { ThemeProvider } from '@/shared/theme/ThemeProvider';
import projects from '@/data/projects.json';
import Projects from './Projects';

const renderProjects = () =>
  render(
    <ThemeProvider>
      <Projects />
    </ThemeProvider>,
  );

describe('Projects', () => {
  it('renders a heading and one card per project', () => {
    renderProjects();
    expect(
      screen.getByRole('heading', { name: 'My Projects', level: 2 }),
    ).toBeInTheDocument();

    for (const project of projects) {
      expect(
        screen.getByRole('heading', { name: project.title, level: 3 }),
      ).toBeInTheDocument();
    }
  });

  it('renders every link of every project, opening safely in a new tab', () => {
    renderProjects();

    for (const project of projects) {
      for (const link of project.links) {
        const anchor = screen.getByRole('link', {
          name: `${project.title} – ${link.label}`,
        });
        expect(anchor).toHaveAttribute('href', link.url);
        expect(anchor).toHaveAttribute('target', '_blank');
        // Without noopener the opened page gets a handle on window.opener.
        expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
      }
    }
  });

  it('lists each project technology as a chip', () => {
    renderProjects();
    for (const project of projects) {
      for (const tech of project.technologies) {
        expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
      }
    }
  });

  it('serves each project image as WebP with the PNG as fallback', () => {
    const { container } = renderProjects();
    const pictures = container.querySelectorAll('picture');
    expect(pictures.length).toBe(projects.length);

    projects.forEach((project, i) => {
      const picture = pictures[i];
      expect(picture).toBeDefined();
      // The .webp path is derived, never a literal - so a renamed .png that
      // forgets its .webp sibling must show up here.
      expect(
        picture?.querySelector('source[type="image/webp"]'),
      ).toHaveAttribute('srcSet', project.imageSrc.replace(/\.png$/, '.webp'));
      expect(within(picture as HTMLElement).getByRole('img')).toHaveAttribute(
        'src',
        project.imageSrc,
      );
    });
  });

  it('marks a repository link and a live-site link with different icons', () => {
    const { container } = renderProjects();

    const iconFor = (name: string) => {
      const anchor = container.querySelector(`a[aria-label="${name}"]`);
      expect(anchor, name).not.toBeNull();
      return anchor?.querySelector('svg')?.getAttribute('fill') === 'none'
        ? 'external'
        : 'github';
    };

    // AQRA is the case that exposed this: it links to a live deployment as well
    // as to two repositories, and every link used to render a GitHub icon.
    expect(iconFor('AQRA — Air Quality Monitoring – Live Site')).toBe(
      'external',
    );
    expect(iconFor('AQRA — Air Quality Monitoring – Backend')).toBe('github');
    expect(iconFor('AQRA — Air Quality Monitoring – Frontend')).toBe('github');
  });

  it('links AQRA to its live site, backend and frontend', () => {
    renderProjects();
    const hrefFor = (label: string) =>
      screen
        .getByRole('link', { name: `AQRA — Air Quality Monitoring – ${label}` })
        .getAttribute('href');

    expect(hrefFor('Live Site')).toBe('https://aqra.feit.ukim.edu.mk/');
    expect(hrefFor('Backend')).toBe(
      'https://github.com/trencho/air-quality-rest-api',
    );
    expect(hrefFor('Frontend')).toBe(
      'https://github.com/trencho/aqra-frontend',
    );
  });
});
