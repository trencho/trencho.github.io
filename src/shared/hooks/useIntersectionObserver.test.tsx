import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, act } from '@testing-library/react';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

// setup.ts installs a no-op IntersectionObserver. These tests replace it with a
// controllable one so the observer callback can be driven by hand.
type Cb = (entries: Array<{ isIntersecting: boolean }>) => void;
let callbacks: Cb[];
let disconnects: number;

class ControllableIO {
  constructor(cb: Cb) {
    callbacks.push(cb);
  }
  observe() {}
  unobserve() {}
  disconnect() {
    disconnects++;
  }
}

const fire = (isIntersecting: boolean) =>
  act(() => callbacks.forEach((cb) => cb([{ isIntersecting }])));

// A probe component attaches the hook's ref to a real element at mount — which is
// what makes the effect create the observer. renderHook alone leaves ref.current
// null when the effect runs, so the observer would never attach. The state is
// rendered into a data attribute rather than captured in a variable, so nothing is
// mutated during render.
function Probe({ triggerOnce }: { triggerOnce?: boolean }) {
  // Built conditionally: under exactOptionalPropertyTypes, passing an explicit
  // `triggerOnce: undefined` is not the same as omitting it.
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>(
    triggerOnce === undefined ? {} : { triggerOnce },
  );
  return (
    <div
      ref={ref}
      data-testid='probe'
      data-intersecting={String(isIntersecting)}
    />
  );
}

const intersecting = (container: HTMLElement) =>
  container
    .querySelector('[data-testid="probe"]')
    ?.getAttribute('data-intersecting');

describe('useIntersectionObserver', () => {
  beforeEach(() => {
    callbacks = [];
    disconnects = 0;
    window.IntersectionObserver =
      ControllableIO as unknown as typeof IntersectionObserver;
  });
  afterEach(() => vi.restoreAllMocks());

  it('starts not intersecting', () => {
    const { container } = render(<Probe />);
    expect(intersecting(container)).toBe('false');
  });

  it('with triggerOnce (default), stays true after the first intersection', () => {
    const { container } = render(<Probe />);

    fire(true);
    expect(intersecting(container)).toBe('true');

    // Leaving the viewport must not flip it back — the reveal is one-way.
    fire(false);
    expect(intersecting(container)).toBe('true');
  });

  it('with triggerOnce, stops observing after the first intersection', () => {
    render(<Probe />);
    expect(disconnects).toBe(0);
    fire(true);
    expect(disconnects).toBe(1);
  });

  it('with triggerOnce disabled, tracks the live intersection state', () => {
    const { container } = render(<Probe triggerOnce={false} />);

    fire(true);
    expect(intersecting(container)).toBe('true');
    fire(false);
    expect(intersecting(container)).toBe('false');
  });
});
