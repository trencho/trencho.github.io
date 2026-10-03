import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createRef, useImperativeHandle, type Ref } from 'react';
import { act, render, screen } from '@testing-library/react';
import type ReCAPTCHA from 'react-google-recaptcha';
import LazyReCAPTCHA from './LazyReCAPTCHA';

const env = vi.hoisted(() => ({ siteKey: '' }));

vi.mock('@/config/environment', () => ({
  config: {
    recaptcha: {
      get siteKey() {
        return env.siteKey;
      },
    },
  },
}));

const widgetReset = vi.fn();

// Stands in for the third-party widget: it exposes `reset()` through its ref the
// way react-google-recaptcha does, which is what the contact form calls.
vi.mock('react-google-recaptcha', () => {
  const FakeWidget = ({
    ref,
    sitekey,
  }: {
    ref?: Ref<{ reset: () => void }>;
    sitekey: string;
  }) => {
    useImperativeHandle(ref, () => ({ reset: widgetReset }));
    return <div data-testid='widget'>{sitekey}</div>;
  };
  return { default: FakeWidget };
});

// setup.ts installs a no-op IntersectionObserver; this one lets a test scroll the
// widget into view.
let reveal: () => void;
class ControllableIO {
  constructor(cb: (entries: Array<{ isIntersecting: boolean }>) => void) {
    reveal = () => cb([{ isIntersecting: true }]);
  }
  observe() {}
  disconnect() {}
}

describe('LazyReCAPTCHA', () => {
  beforeEach(() => {
    widgetReset.mockClear();
    window.IntersectionObserver =
      ControllableIO as unknown as typeof IntersectionObserver;
  });

  it('shows a notice instead of the widget when no site key is configured', () => {
    env.siteKey = '';
    render(<LazyReCAPTCHA onChange={vi.fn()} />);

    expect(
      screen.getByText('Verification is unavailable right now.'),
    ).toBeInTheDocument();
    expect(screen.queryByTestId('widget')).toBeNull();
  });

  it('loads the widget only once it scrolls into view', async () => {
    env.siteKey = 'site-key';
    render(<LazyReCAPTCHA onChange={vi.fn()} />);

    expect(screen.getByText('Loading verification...')).toBeInTheDocument();
    act(() => reveal());

    expect(await screen.findByTestId('widget')).toHaveTextContent('site-key');
  });

  it('hands the widget to widgetRef, so the form can reset a spent token', async () => {
    env.siteKey = 'site-key';
    const widgetRef = createRef<ReCAPTCHA | null>();
    render(<LazyReCAPTCHA onChange={vi.fn()} widgetRef={widgetRef} />);

    act(() => reveal());
    await screen.findByTestId('widget');

    widgetRef.current?.reset();
    expect(widgetReset).toHaveBeenCalledTimes(1);
  });
});
