import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from './ThemeProvider';
import { useTheme } from '@/hooks/useTheme';

// Minimal consumer that surfaces the theme state and a toggle control.
const Consumer = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <button onClick={toggleDarkMode}>{darkMode ? 'dark' : 'light'}</button>
  );
};

const renderWithProvider = () =>
  render(
    <ThemeProvider>
      <Consumer />
    </ThemeProvider>,
  );

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('defaults to light when nothing is saved and the system is not dark', () => {
    // setup.ts mocks matchMedia to always report `matches: false`.
    renderWithProvider();
    expect(screen.getByRole('button')).toHaveTextContent('light');
  });

  it('toggles the theme and persists the choice to localStorage', async () => {
    const user = userEvent.setup();
    renderWithProvider();
    const button = screen.getByRole('button');

    await user.click(button);

    expect(button).toHaveTextContent('dark');
    expect(localStorage.getItem('darkMode')).toBe('true');
  });

  it('reads the saved theme from localStorage on mount', () => {
    localStorage.setItem('darkMode', 'true');
    renderWithProvider();
    expect(screen.getByRole('button')).toHaveTextContent('dark');
  });
});
