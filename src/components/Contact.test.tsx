import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@/context/ThemeProvider';
import Contact from './Contact';

// The success path needs a real captcha token; these tests exercise the
// client-side validation, which runs before any sending. Mock the service so a
// misconfigured test env can never fire a real request.
vi.mock('@/services/emailService', () => ({
  sendEmail: vi.fn(),
}));

const renderContact = () =>
  render(
    <ThemeProvider>
      <Contact />
    </ThemeProvider>,
  );

const submit = (user: ReturnType<typeof userEvent.setup>) =>
  user.click(screen.getByRole('button', { name: /send message/i }));

describe('Contact form validation', () => {
  it('shows required-field errors when submitting an empty form', async () => {
    const user = userEvent.setup();
    renderContact();

    await submit(user);

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup();
    renderContact();

    await user.type(screen.getByLabelText(/your name/i), 'Ada');
    await user.type(screen.getByLabelText(/your email/i), 'not-an-email');
    await user.type(
      screen.getByLabelText(/your message/i),
      'This is a valid message.',
    );
    await submit(user);

    expect(
      await screen.findByText('Please enter a valid email address'),
    ).toBeInTheDocument();
  });

  it('rejects a message that is too short', async () => {
    const user = userEvent.setup();
    renderContact();

    await user.type(screen.getByLabelText(/your name/i), 'Ada');
    await user.type(screen.getByLabelText(/your email/i), 'ada@example.com');
    await user.type(screen.getByLabelText(/your message/i), 'short');
    await submit(user);

    expect(
      await screen.findByText('Message must be at least 10 characters'),
    ).toBeInTheDocument();
  });

  it('clears a field error once the user edits that field', async () => {
    const user = userEvent.setup();
    renderContact();

    await submit(user);
    expect(await screen.findByText('Name is required')).toBeInTheDocument();

    await user.type(screen.getByLabelText(/your name/i), 'A');

    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
  });
});
