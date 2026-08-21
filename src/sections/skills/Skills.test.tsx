import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@/shared/theme/ThemeProvider';
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

  it('filters to exactly the four AI tools', async () => {
    const user = userEvent.setup();
    renderSkills();

    await user.click(screen.getByRole('tab', { name: 'AI' }));

    for (const tool of ['ChatGPT', 'Claude', 'GitHub Copilot', 'Grok']) {
      expect(screen.getByText(tool)).toBeInTheDocument();
    }
    // The AI tab must not leak a skill from any other category.
    expect(screen.queryByText('Java')).not.toBeInTheDocument();
    expect(screen.queryByText('Docker')).not.toBeInTheDocument();
  });

  it('gives every AI logo a webp source alongside its png', () => {
    const { container } = renderSkills();

    for (const base of ['chatgpt', 'claude', 'github-copilot', 'grok']) {
      const img = container.querySelector(
        `img[src="image-skills/ai/${base}.png"]`,
      );
      expect(img).not.toBeNull();
      // The .webp path is derived from the .png, so a logo shipped without its
      // webp sibling still renders here - the file itself is checked by the build.
      expect(
        img?.parentElement?.querySelector('source[type="image/webp"]'),
      ).toHaveAttribute('srcSet', `image-skills/ai/${base}.webp`);
    }
  });
});
