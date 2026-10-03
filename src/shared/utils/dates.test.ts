import { describe, it, expect } from 'vitest';
import { yearsSince } from './dates';

describe('yearsSince', () => {
  const start = new Date(2018, 6, 15);

  it('counts a year once its anniversary has passed', () => {
    expect(yearsSince(start, new Date(2026, 6, 15))).toBe(8);
    expect(yearsSince(start, new Date(2026, 9, 3))).toBe(8);
  });

  it('does not count a year before its anniversary', () => {
    // Subtracting calendar years alone says 8 here, a year early.
    expect(yearsSince(start, new Date(2026, 0, 10))).toBe(7);
    expect(yearsSince(start, new Date(2026, 6, 14))).toBe(7);
  });
});
