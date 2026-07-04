import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@/context/ThemeProvider';
import Skills from './Skills';

const renderSkills = () =>
  render(
    <ThemeProvider>
      <Skills />
    </ThemeProvider>,
  );

describe('Skills', () => {
  it('shows skills from every category by default', () => {
    renderSkills();
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });

  it('filters skills when a category tab is selected', async () => {
    const user = userEvent.setup();
    renderSkills();

    await user.click(screen.getByRole('tab', { name: 'Frontend' }));

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.queryByText('Java')).not.toBeInTheDocument();
  });
});
