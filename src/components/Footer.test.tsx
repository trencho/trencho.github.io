import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@/context/ThemeProvider';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the tech stack and the current year', () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>,
    );

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(String(new Date().getFullYear()))),
    ).toBeInTheDocument();
  });
});
