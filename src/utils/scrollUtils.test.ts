import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { MouseEvent } from 'react';
import { scrollToElement } from '@/utils/scrollUtils';

// A minimal stand-in for the anchor click event. The spy is returned separately so
// assertions reference the local mock, not an unbound method off the event object.
const clickEvent = () => {
  const preventDefault = vi.fn();
  const e = { preventDefault } as unknown as MouseEvent<HTMLAnchorElement>;
  return { e, preventDefault };
};

describe('scrollToElement', () => {
  beforeEach(() => {
    // jsdom implements neither scrollTo nor a real layout, so both are stubbed.
    window.scrollTo = vi.fn();
    window.scrollY = 100;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('prevents the default anchor navigation', () => {
    const { e, preventDefault } = clickEvent();
    scrollToElement(e, 'missing');
    expect(preventDefault).toHaveBeenCalledOnce();
  });

  it('smooth-scrolls to the target, offset by -50px above it', () => {
    const target = document.createElement('div');
    target.id = 'about';
    document.body.appendChild(target);
    vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
      top: 300,
    } as DOMRect);

    scrollToElement(clickEvent().e, 'about');

    // top(300) + scrollY(100) + yOffset(-50) = 350
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 350,
      behavior: 'smooth',
    });
  });

  it('does nothing (beyond preventDefault) when the element is absent', () => {
    scrollToElement(clickEvent().e, 'nope');
    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});
