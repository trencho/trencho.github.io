import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@/shared/theme/ThemeProvider';
import education from '@/data/education.json';
import publications from '@/data/publications.json';
import Education from './Education';

const renderEducation = () =>
  render(
    <ThemeProvider>
      <Education />
    </ThemeProvider>,
  );

describe('Education', () => {
  it('renders a heading and every field of every degree', () => {
    renderEducation();
    expect(
      screen.getByRole('heading', { name: 'Education', level: 2 }),
    ).toBeInTheDocument();

    for (const degree of education) {
      expect(screen.getByText(degree.degree)).toBeInTheDocument();
      // Both degrees are from the same university, so the institution is not a
      // unique node. Assert the count the data implies.
      const sameInstitution = education.filter(
        (other) => other.institution === degree.institution,
      ).length;
      expect(screen.getAllByText(degree.institution)).toHaveLength(
        sameInstitution,
      );
      expect(screen.getByText(degree.period)).toBeInTheDocument();
      // The thesis is the field most likely to be dropped by a layout change,
      // because it is the only one that is not a heading or a date.
      expect(screen.getByText(degree.thesis)).toBeInTheDocument();
    }
  });

  it('renders the publications block, each entry linking out safely', () => {
    renderEducation();

    // The block is behind `publications.length > 0`. Asserting the heading only
    // when there is data keeps the test honest if the file is ever emptied.
    if (publications.length === 0) {
      expect(screen.queryByText('Publications')).not.toBeInTheDocument();
      return;
    }

    expect(
      screen.getByRole('heading', { name: 'Publications', level: 3 }),
    ).toBeInTheDocument();

    for (const publication of publications) {
      const anchor = screen.getByRole('link', { name: publication.title });
      expect(anchor).toHaveAttribute('href', publication.url);
      expect(anchor).toHaveAttribute('target', '_blank');
      expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });
});
