import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { ThemeProvider } from '@/context/ThemeProvider';
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
});
