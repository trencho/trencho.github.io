import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useActiveSection } from '@/hooks/useActiveSection';

// A controllable IntersectionObserver replacing setup.ts's no-op, so we can feed
// the hook a set of "visible" sections and assert which id it settles on.
type Entry = {
  isIntersecting: boolean;
  target: { id: string };
  boundingClientRect: { top: number };
};
let callback: ((entries: Entry[]) => void) | undefined;

class ControllableIO {
  constructor(cb: (entries: Entry[]) => void) {
    callback = cb;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

const entry = (id: string, top: number, isIntersecting = true): Entry => ({
  isIntersecting,
  target: { id },
  boundingClientRect: { top },
});

describe('useActiveSection', () => {
  beforeEach(() => {
    callback = undefined;
    window.IntersectionObserver =
      ControllableIO as unknown as typeof IntersectionObserver;
    for (const id of ['home', 'about', 'contact']) {
      const el = document.createElement('section');
      el.id = id;
      document.body.appendChild(el);
    }
  });
  afterEach(() => {
    document.body.innerHTML = '';
    vi.restoreAllMocks();
  });

  it('defaults to the first section before anything intersects', () => {
    const { result } = renderHook(() =>
      useActiveSection(['home', 'about', 'contact']),
    );
    expect(result.current).toBe('home');
  });

  it('returns the empty string for an empty section list', () => {
    const { result } = renderHook(() => useActiveSection([]));
    expect(result.current).toBe('');
  });

  it('activates the visible section closest to the top of the band', () => {
    const { result } = renderHook(() =>
      useActiveSection(['home', 'about', 'contact']),
    );
    // about (top 20) is higher than contact (top 90) → about wins.
    act(() => callback?.([entry('contact', 90), entry('about', 20)]));
    expect(result.current).toBe('about');
  });

  it('ignores sections that are not intersecting', () => {
    const { result } = renderHook(() =>
      useActiveSection(['home', 'about', 'contact']),
    );
    act(() =>
      callback?.([entry('about', 10, false), entry('contact', 80, true)]),
    );
    expect(result.current).toBe('contact');
  });
});
