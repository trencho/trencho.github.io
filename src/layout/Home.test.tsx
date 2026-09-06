import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { ThemeProvider } from '@/shared/theme/ThemeProvider';
import Home from './Home';

/** The page's sections, in the order a visitor scrolls through them. */
const SECTION_IDS = [
  'home',
  'about',
  'experience',
  'education',
  'skills',
  'certificates',
  'projects',
  'languages',
  'contact',
];

// Navbar's CV control is a react-router <Link> to /cv, so Home needs a router
// context. The app supplies BrowserRouter; the prerender supplies StaticRouter.
const renderHome = () =>
  render(
    <MemoryRouter>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </MemoryRouter>,
  );

describe('Home', () => {
  it('renders every section, in order', () => {
    const { container } = renderHome();

    // The ids are not decoration: the navbar links to them and
    // useActiveSection observes them, so a renamed or dropped id breaks
    // navigation on a page that still looks complete.
    const rendered = [...container.querySelectorAll('section[id]')].map(
      (el) => el.id,
    );
    expect(rendered).toEqual(SECTION_IDS);
  });

  it('renders each section with content in it, not just the wrapper', () => {
    const { container } = renderHome();

    // A section that renders an empty shell is the failure this whole file
    // exists for: the page scrolls, the nav works, and there is nothing there.
    for (const id of SECTION_IDS) {
      const section = container.querySelector(`section#${id}`);
      expect(section, `section#${id} is missing`).not.toBeNull();
      expect(
        (section as HTMLElement).textContent.trim(),
        `section#${id} rendered no text`,
      ).not.toBe('');
    }
  });

  it('offers a skip link to the content as the first focusable element', () => {
    renderHome();

    const skip = screen.getByRole('link', { name: 'Skip to content' });
    expect(skip).toHaveAttribute('href', '#home');
    // Visually hidden until focused. Without the focus classes it is a link
    // nobody can see and nobody can reach.
    expect(skip.className).toContain('sr-only');
    expect(skip.className).toContain('focus:not-sr-only');
  });
});
