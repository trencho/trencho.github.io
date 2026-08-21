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

// A helper that ignored its darkMode argument would return one string for both
// themes and every component using it would render the wrong theme silently -
// no test would fail, because nothing else asserts on the class string.
const themed: [string, (dark: boolean) => string][] = [
  ['cardSurface', cardSurface],
  ['headingText', headingText],
  ['bodyText', bodyText],
  ['accentText', accentText],
  ['primaryButton', primaryButton],
  ['disabledButton', disabledButton],
];

describe('theme tokens', () => {
  it.each(themed)('%s returns a different class for each theme', (_, fn) => {
    expect(fn(true)).not.toBe(fn(false));
    expect(fn(true)).toBeTruthy();
    expect(fn(false)).toBeTruthy();
  });

  it('filterChip distinguishes both the active state and the theme', () => {
    expect(filterChip(true, true)).not.toBe(filterChip(false, true));
    expect(filterChip(true, true)).not.toBe(filterChip(true, false));
    expect(filterChip(false, true)).not.toBe(filterChip(false, false));
  });

  it('inputField shows the same red border in both themes when in error', () => {
    // The error state deliberately overrides the theme: an invalid field has to
    // be obvious at a glance in light and dark alike.
    expect(inputField(true, true)).toBe(inputField(false, true));
    expect(inputField(true, true)).toContain('border-red-500');
    expect(inputField(true, false)).not.toBe(inputField(false, false));
  });
});
