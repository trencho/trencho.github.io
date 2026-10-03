import { describe, it, expect, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { CV_ROUTE, PROFILE } from '@/shared/utils/constants';

/**
 * App wires the router to the pages. The home page must render on the first
 * pass: a splash gate in front of it would replace the prerendered markup with
 * a blank screen, so `getBy` (no waiting) is the assertion that matters.
 */
const renderAt = (path: string) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

afterEach(() => {
  window.history.pushState({}, '', '/');
});

describe('App routes', () => {
  it('renders the home page immediately at /', () => {
    renderAt('/');
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(document.getElementById('contact')).not.toBeNull();
  });

  it('renders the CV at its route', async () => {
    renderAt(CV_ROUTE);
    expect(
      await screen.findByRole('heading', { level: 1, name: PROFILE.name }),
    ).toBeInTheDocument();
  });

  it('renders the 404 page for an unknown path', async () => {
    renderAt('/no-such-page');
    expect(
      await screen.findByRole('heading', { name: /page not found/i }),
    ).toBeInTheDocument();
    // One control, a link home: a button nested inside the link was invalid
    // interactive content and announced as two controls.
    expect(screen.getByRole('link', { name: 'Back to Home' })).toHaveAttribute(
      'href',
      '/',
    );
    expect(screen.queryByRole('button')).toBeNull();
  });
});
