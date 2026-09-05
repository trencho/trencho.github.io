import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@/shared/theme/ThemeProvider';
import About from './About';

const renderAbout = () =>
  render(
    <ThemeProvider>
      <About />
    </ThemeProvider>,
  );

describe('About', () => {
  it('renders its heading', () => {
    renderAbout();
    expect(
      screen.getByRole('heading', { name: 'About Me', level: 2 }),
    ).toBeInTheDocument();
  });

  it('renders all three paragraphs', () => {
    const { container } = renderAbout();

    // The copy is prose rather than data, so the count is what protects it: a
    // layout change that drops one paragraph leaves the other two rendering and
    // says nothing.
    expect(container.querySelectorAll('p')).toHaveLength(3);
  });

  it('keeps the claims the page is actually making', () => {
    renderAbout();

    // Spot-checks, not a transcription. Each of these is a factual claim about
    // the owner rather than styling, so a rewrite that silently drops one is
    // worth catching. Matched across element boundaries because the emphasis
    // tags split the sentences.
    for (const claim of [
      /backend/i,
      /data engineering/i,
      /RESTful APIs/i,
      /ETL pipelines/i,
      /Azure Databricks/i,
      /Master's in Electrical Engineering/i,
    ]) {
      expect(screen.getByText(claim, { exact: false })).toBeInTheDocument();
    }
  });
});
