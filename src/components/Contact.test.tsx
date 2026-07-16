import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@/context/ThemeProvider';
import { sendEmail } from '@/services/emailService';
import Contact from './Contact';

// The success path needs a real captcha token; these tests exercise the
// client-side validation, which runs before any sending. Mock the service so a
// misconfigured test env can never fire a real request.
vi.mock('@/services/emailService', () => ({
  sendEmail: vi.fn(),
}));

// The real reCAPTCHA lazy-loads a third-party widget that never resolves in jsdom.
// Stand in a button that hands the form a token, so the submit path is reachable.
vi.mock('./LazyReCAPTCHA', () => ({
  default: ({ onChange }: { onChange: (value: string | null) => void }) => (
    <button type='button' onClick={() => onChange('test-token')}>
      complete-captcha
    </button>
  ),
}));

const sendEmailMock = vi.mocked(sendEmail);

const renderContact = () =>
  render(
    <ThemeProvider>
      <Contact />
    </ThemeProvider>,
  );

const submit = (user: ReturnType<typeof userEvent.setup>) =>
  user.click(screen.getByRole('button', { name: /send message/i }));

const fillValidForm = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(screen.getByLabelText(/your name/i), 'Ada');
  await user.type(screen.getByLabelText(/your email/i), 'ada@example.com');
  await user.type(
    screen.getByLabelText(/your message/i),
    'This is a valid message.',
  );
};

const completeCaptcha = (user: ReturnType<typeof userEvent.setup>) =>
  user.click(screen.getByRole('button', { name: /complete-captcha/i }));

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

describe('Contact form submission', () => {
  beforeEach(() => {
    sendEmailMock.mockReset();
  });

  it('blocks submit until the captcha is completed', async () => {
    const user = userEvent.setup();
    renderContact();

    await fillValidForm(user);
    await submit(user);

    expect(
      await screen.findByText(/complete the captcha/i),
    ).toBeInTheDocument();
    expect(sendEmailMock).not.toHaveBeenCalled();
  });

  it('sends the message and shows the success panel on a valid submit', async () => {
    sendEmailMock.mockResolvedValue({
      success: true,
      data: { status: 200, text: 'OK' },
    });
    const user = userEvent.setup();
    renderContact();

    await fillValidForm(user);
    await completeCaptcha(user);
    await submit(user);

    expect(
      await screen.findByText(/message has been sent successfully/i),
    ).toBeInTheDocument();
    expect(sendEmailMock).toHaveBeenCalledWith({
      name: 'Ada',
      email: 'ada@example.com',
      message: 'This is a valid message.',
    });
  });

  it('surfaces an error and keeps the form when sending fails', async () => {
    sendEmailMock.mockResolvedValue({ success: false, error: 'boom' });
    const user = userEvent.setup();
    renderContact();

    await fillValidForm(user);
    await completeCaptcha(user);
    await submit(user);

    expect(
      await screen.findByText(/failed to send message/i),
    ).toBeInTheDocument();
    // The form is still there for a retry (not swapped for the success panel).
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
  });

  it('resets the form when "Send another message" is clicked', async () => {
    sendEmailMock.mockResolvedValue({
      success: true,
      data: { status: 200, text: 'OK' },
    });
    const user = userEvent.setup();
    renderContact();

    await fillValidForm(user);
    await completeCaptcha(user);
    await submit(user);

    await user.click(
      await screen.findByRole('button', { name: /send another message/i }),
    );

    // Back to a blank form.
    expect(screen.getByLabelText(/your name/i)).toHaveValue('');
  });
});
