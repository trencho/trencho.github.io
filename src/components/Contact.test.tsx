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

// A reCAPTCHA token is single-use, so the widget must be RESET after any failed send -- otherwise
// the retry resubmits a spent token, verification fails, and it looks like sending is broken
// rather than the token being stale.
//
// That reset is only observable if the mock honours `widgetRef`. It previously did not: it took
// only `onChange`, so `recaptchaRef.current` stayed null in every test and all three
// `recaptchaRef.current?.reset()` calls were unobservable no-ops. The reset half of the fix had no
// test that could fail.
const captchaReset = vi.fn();

// The real component lazy-loads a third-party widget that never resolves in jsdom. This stands in
// a button that hands the form a token, and populates the forwarded ref the way ReCAPTCHA does.
vi.mock('./LazyReCAPTCHA', () => ({
  default: ({
    onChange,
    widgetRef,
  }: {
    onChange: (value: string | null) => void;
    widgetRef?: { current: { reset: () => void } | null };
  }) => {
    if (widgetRef) {
      widgetRef.current = { reset: captchaReset };
    }
    return (
      <button type='button' onClick={() => onChange('test-token')}>
        complete-captcha
      </button>
    );
  },
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
    captchaReset.mockClear();
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
    expect(sendEmailMock).toHaveBeenCalledWith(
      {
        name: 'Ada',
        email: 'ada@example.com',
        message: 'This is a valid message.',
      },
      // The captcha token is forwarded so EmailJS can verify it server-side. Asserted here
      // because a silently-dropped token is exactly the defect this argument exists to prevent.
      'test-token',
    );
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

  // A reCAPTCHA token is single-use and short-lived. After a failed send the form stays mounted,
  // so without clearing the widget the retry resubmits a token the server has already seen --
  // verification fails and it reads as "sending is broken" rather than "the token was spent".
  it('resets the spent captcha when the send is rejected', async () => {
    sendEmailMock.mockResolvedValue({ success: false, error: 'rejected' });
    const user = userEvent.setup();
    renderContact();

    await fillValidForm(user);
    await completeCaptcha(user);
    await submit(user);

    expect(captchaReset).toHaveBeenCalledTimes(1);
  });

  // The catch branch holds the same reset pair as the failure branch above and was entirely
  // uncovered -- it is the measured coverage regression #35 introduced.
  it('resets the spent captcha when sending throws', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    sendEmailMock.mockRejectedValue(new Error('network down'));
    const user = userEvent.setup();
    renderContact();

    await fillValidForm(user);
    await completeCaptcha(user);
    await submit(user);

    expect(captchaReset).toHaveBeenCalledTimes(1);
  });

  // Clearing the widget is only half of it: captchaValue has to be dropped too, or the form still
  // believes it holds a solved challenge and lets a second submit through on the spent token.
  // Asserting the reset alone would pass with that half missing.
  it('blocks a second submit until the captcha is solved again', async () => {
    sendEmailMock.mockResolvedValue({ success: false, error: 'rejected' });
    const user = userEvent.setup();
    renderContact();

    await fillValidForm(user);
    await completeCaptcha(user);
    await submit(user);
    expect(sendEmailMock).toHaveBeenCalledTimes(1);

    await submit(user);

    // Still one call: the second submit was stopped by the missing captcha, not sent.
    expect(sendEmailMock).toHaveBeenCalledTimes(1);
    expect(
      await screen.findByText(/complete the CAPTCHA/i),
    ).toBeInTheDocument();
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
