import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@/context/ThemeProvider';
import { NAVIGATION_SECTIONS, CV_DOWNLOAD } from '@/utils/constants';
import Navbar from './Navbar';

// scrollToElement calls preventDefault and then scrolls; jsdom implements neither
// Element.scrollIntoView nor smooth scrolling, so the real one throws.
vi.mock('@/utils/scrollUtils', () => ({
  scrollToElement: vi.fn((e: { preventDefault: () => void }) => {
    e.preventDefault();
  }),
}));

const renderNavbar = () =>
  render(
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>,
  );

const menuButton = () =>
  screen.getByRole('button', { name: /navigation menu/i });

describe('Navbar', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders a link for every navigation section', () => {
    renderNavbar();
    const nav = screen.getByRole('navigation', { name: /main navigation/i });

    // Derived from the constant rather than a hardcoded list: adding a section to
    // NAVIGATION_SECTIONS and forgetting the nav is the failure this should catch.
    for (const section of NAVIGATION_SECTIONS) {
      expect(
        within(nav).getAllByRole('link', { name: new RegExp(section, 'i') })
          .length,
      ).toBeGreaterThan(0);
    }
  });

  it('offers the CV download with a download attribute', () => {
    renderNavbar();
    const cv = screen.getByRole('link', { name: /download cv/i });

    expect(cv).toHaveAttribute('href', CV_DOWNLOAD.filename);
    // Without `download` the browser navigates to the PDF instead of saving it.
    expect(cv).toHaveAttribute('download');
  });

  describe('the mobile menu', () => {
    it('is closed on first render', () => {
      renderNavbar();

      expect(menuButton()).toHaveAttribute('aria-expanded', 'false');
      expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });

    it('opens when the toggle is pressed', async () => {
      const user = userEvent.setup();
      renderNavbar();

      await user.click(menuButton());

      expect(menuButton()).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('closes again on a second press', async () => {
      const user = userEvent.setup();
      renderNavbar();

      await user.click(menuButton());
      await user.click(menuButton());

      expect(menuButton()).toHaveAttribute('aria-expanded', 'false');
    });

    it('closes when a section link inside it is followed', async () => {
      // A menu that stays open covers the section it just scrolled to, which on a phone
      // looks exactly like the link doing nothing.
      const user = userEvent.setup();
      renderNavbar();
      await user.click(menuButton());

      const list = screen.getByRole('list');
      await user.click(within(list).getAllByRole('link')[0]!);

      expect(menuButton()).toHaveAttribute('aria-expanded', 'false');
    });

    it('closes on Escape', async () => {
      const user = userEvent.setup();
      renderNavbar();
      await user.click(menuButton());

      await user.keyboard('{Escape}');

      expect(menuButton()).toHaveAttribute('aria-expanded', 'false');
    });

    it('binds the Escape listener only while open, and removes it on close', async () => {
      // Asserted on addEventListener/removeEventListener rather than on the menu state.
      // Closing an already-closed menu is a no-op, so "press Escape, still closed" passes
      // whether the listener is bound or not -- it looks like a test and defends nothing.
      // A mutant binding the listener unconditionally survived exactly that assertion.
      const add = vi.spyOn(window, 'addEventListener');
      const remove = vi.spyOn(window, 'removeEventListener');
      const user = userEvent.setup();
      renderNavbar();

      const keydownBeforeOpen = add.mock.calls.filter(
        ([type]) => type === 'keydown',
      ).length;
      expect(keydownBeforeOpen).toBe(0);

      await user.click(menuButton());
      expect(add.mock.calls.filter(([type]) => type === 'keydown').length).toBe(
        1,
      );

      await user.click(menuButton());
      expect(
        remove.mock.calls.filter(([type]) => type === 'keydown').length,
      ).toBe(1);

      add.mockRestore();
      remove.mockRestore();
    });

    it('names its own state for a screen reader', async () => {
      const user = userEvent.setup();
      renderNavbar();
      expect(menuButton()).toHaveAccessibleName('Open navigation menu');

      await user.click(menuButton());

      expect(menuButton()).toHaveAccessibleName('Close navigation menu');
    });

    it('points aria-controls at the menu it opens', async () => {
      // A dangling aria-controls is invisible on screen and breaks screen-reader navigation.
      const user = userEvent.setup();
      renderNavbar();
      const id = menuButton().getAttribute('aria-controls');
      expect(id).toBeTruthy();

      await user.click(menuButton());

      expect(document.getElementById(id!)).toBeInTheDocument();
    });
  });

  describe('the theme toggle', () => {
    it('switches the label when pressed', async () => {
      const user = userEvent.setup();
      renderNavbar();
      const before = screen.getByRole('button', { name: /switch to .* mode/i });
      const labelBefore = before.getAttribute('aria-label');

      await user.click(before);

      const after = screen.getByRole('button', { name: /switch to .* mode/i });
      expect(after.getAttribute('aria-label')).not.toBe(labelBefore);
    });
  });

  it('marks the active section with aria-current', () => {
    // useActiveSection seeds to the first section, so `home` is current on mount. This is
    // the one nav affordance that is purely visual otherwise -- an underline a test cannot
    // see, and jsdom loads no CSS.
    renderNavbar();
    const nav = screen.getByRole('navigation', { name: /main navigation/i });

    const current = within(nav).getAllByRole('link', { current: true });
    expect(current.length).toBeGreaterThan(0);
    expect(current[0]).toHaveTextContent(/home/i);
  });
});
