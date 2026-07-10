import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { validateConfig } from '@/config/environment';

const REQUIRED = [
  'VITE_CONTACT_EMAIL',
  'VITE_EMAILJS_SERVICE_ID',
  'VITE_EMAILJS_TEMPLATE_ID',
  'VITE_EMAILJS_PUBLIC_KEY',
  'VITE_RECAPTCHA_SITE_KEY',
];

const setAll = (value: string) =>
  REQUIRED.forEach((name) => vi.stubEnv(name, value));

describe('validateConfig', () => {
  beforeEach(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it('is silent when every required variable is set', () => {
    setAll('present');
    validateConfig();
    expect(console.warn).not.toHaveBeenCalled();
  });

  it('warns (does not throw) outside a production browser', () => {
    setAll('present');
    vi.stubEnv('VITE_CONTACT_EMAIL', '');
    vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', '');

    expect(() => validateConfig()).not.toThrow();
    expect(console.warn).toHaveBeenCalledOnce();
    const message = vi.mocked(console.warn).mock.calls[0]?.[0] as string;
    expect(message).toContain('VITE_CONTACT_EMAIL');
    expect(message).toContain('VITE_EMAILJS_PUBLIC_KEY');
    expect(message).not.toContain('VITE_RECAPTCHA_SITE_KEY');
  });

  it('throws at production runtime in the browser', () => {
    // jsdom supplies window; MODE=production is the other half of the guard.
    setAll('present');
    vi.stubEnv('VITE_RECAPTCHA_SITE_KEY', '');
    vi.stubEnv('MODE', 'production');

    expect(() => validateConfig()).toThrow(/VITE_RECAPTCHA_SITE_KEY/);
  });
});
