import { describe, it, expect } from 'vitest';
import { formatSectionName, NAVIGATION_SECTIONS } from '@/utils/constants';

describe('formatSectionName', () => {
  it('capitalizes the first letter', () => {
    expect(formatSectionName('about')).toBe('About');
    expect(formatSectionName('contact')).toBe('Contact');
  });

  it('leaves an already-capitalized word unchanged', () => {
    expect(formatSectionName('Home')).toBe('Home');
  });
});

describe('NAVIGATION_SECTIONS', () => {
  it('includes the expected sections', () => {
    expect(NAVIGATION_SECTIONS).toContain('home');
    expect(NAVIGATION_SECTIONS).toContain('contact');
    expect(NAVIGATION_SECTIONS.length).toBeGreaterThan(0);
  });
});
