import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import {
  cardSurface,
  headingText,
  bodyText,
  accentText,
  filterChip,
  inputField,
  primaryButton,
  disabledButton,
} from './tokens';

/**
 * These tokens used to take a `darkMode` boolean, and the guard was that each
 * returned a different string per theme - because a helper that ignored its
 * argument would render one theme everywhere with nothing failing.
 *
 * The tokens carry both themes at once now, so that assertion no longer says
 * anything. The failure it caught did not go away with it: a constant naming only
 * base utilities renders light for everybody and looks exactly like one that
 * works. This is its replacement. Nothing else in the suite asserts on a class
 * string, and `css: false` (vite.config.ts) means no test here can see a
 * stylesheet - so if it is not checked in this file it is not checked.
 */

/** Every token that must differ between the two themes. */
const themed: [string, string][] = [
  ['cardSurface', cardSurface],
  ['headingText', headingText],
  ['bodyText', bodyText],
  ['accentText', accentText],
  ['primaryButton', primaryButton],
  ['disabledButton', disabledButton],
  ['filterChip(active)', filterChip(true)],
  ['filterChip(inactive)', filterChip(false)],
  ['inputField(no error)', inputField(false)],
];

const split = (classes: string) => {
  const all = classes.split(/\s+/).filter(Boolean);
  return {
    base: all.filter((c) => !c.startsWith('dark:')),
    dark: all.filter((c) => c.startsWith('dark:')).map((c) => c.slice(5)),
  };
};

describe('theme tokens', () => {
  it.each(themed)('%s styles the light theme', (_, classes) => {
    expect(split(classes).base.length).toBeGreaterThan(0);
  });

  it.each(themed)('%s carries a dark: counterpart', (_, classes) => {
    // The whole failure mode in one assertion: base-only utilities render the
    // light theme under `.dark` too, and nothing else would notice.
    expect(split(classes).dark.length).toBeGreaterThan(0);
  });

  it.each(themed)(
    '%s has no dark: variant that repeats its base',
    (_, classes) => {
      // `dark:text-white` alongside a base `text-white` is a variant that changes
      // nothing - the shape a half-finished conversion leaves behind.
      const { base, dark } = split(classes);
      for (const utility of dark) {
        expect(base).not.toContain(utility);
      }
    },
  );

  it('filterChip distinguishes the active state as well as the theme', () => {
    expect(filterChip(true)).not.toBe(filterChip(false));
  });

  it('inputField shows the same red border in both themes when in error', () => {
    // The error state deliberately overrides the theme: an invalid field has to be
    // obvious at a glance in light and dark alike. So this is the one token that
    // must carry no dark: variant at all.
    const errored = inputField(true);
    expect(errored).toContain('border-red-500');
    expect(split(errored).dark).toHaveLength(0);
    expect(errored).not.toBe(inputField(false));
  });
});

describe('the dark variant binding in index.css', () => {
  const css = readFileSync(join(process.cwd(), 'src/index.css'), 'utf8');

  it('binds dark: to the .dark class rather than the OS preference', () => {
    /*
     * Tailwind v4 removed the `darkMode: 'class'` config key, so this one
     * declaration is what connects every `dark:` utility above to the toggle. Drop
     * it and they all fall back to prefers-color-scheme - correct-looking on a
     * machine set to dark, wrong for anyone whose OS setting and chosen theme
     * differ, and invisible to every other test in the repo.
     */
    const declaration = css
      .split('\n')
      .find((line) => line.includes('@custom-variant dark'));

    expect(declaration).toBeDefined();
    expect(declaration).toContain('.dark');
    expect(declaration).not.toContain('prefers-color-scheme');
  });

  it('defines --accent for both themes', () => {
    // ScrollToTopButton reads this through an inline style attribute, which no
    // Tailwind variant can reach.
    expect(css).toMatch(/:root\s*\{[^}]*--accent:/);
    expect(css).toMatch(/\.dark\s*\{[^}]*--accent:/);
  });
});
