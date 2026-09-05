import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@/shared/theme/ThemeProvider';
import certificates from '@/data/certificates.json';
import Certificates from './Certificates';

const renderCertificates = () =>
  render(
    <ThemeProvider>
      <Certificates />
    </ThemeProvider>,
  );

describe('Certificates', () => {
  it('renders a heading and one card per certificate', () => {
    renderCertificates();
    expect(
      screen.getByRole('heading', { name: 'Certificates', level: 2 }),
    ).toBeInTheDocument();

    for (const certificate of certificates) {
      expect(
        screen.getByRole('heading', { name: certificate.title, level: 3 }),
      ).toBeInTheDocument();
    }
  });

  it('gives every image the certificate title as its alt text', () => {
    renderCertificates();

    for (const certificate of certificates) {
      const image = screen.getByAltText(certificate.title);
      expect(image).toHaveAttribute('src', certificate.imageSrc);
      // Off-screen by design, so it must not block first paint.
      expect(image).toHaveAttribute('loading', 'lazy');
    }
  });

  it('offers a webp source alongside the png, so the fallback is real', () => {
    const { container } = renderCertificates();

    // A <picture> whose <source> points at the same file as the <img> is a
    // no-op dressed as an optimisation.
    for (const certificate of certificates) {
      const webp = certificate.imageSrc.replace(/\.png$/, '.webp');
      expect(webp).not.toBe(certificate.imageSrc);
      expect(
        container.querySelector(`source[srcset="${webp}"][type="image/webp"]`),
      ).not.toBeNull();
    }
  });

  it('links each certificate to its credential, opening safely in a new tab', () => {
    renderCertificates();

    for (const certificate of certificates) {
      if (!certificate.url) continue;
      const anchor = screen.getByRole('link', { name: certificate.title });
      expect(anchor).toHaveAttribute('href', certificate.url);
      expect(anchor).toHaveAttribute('target', '_blank');
      // Without noopener the opened page gets a handle on window.opener.
      expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });
});
