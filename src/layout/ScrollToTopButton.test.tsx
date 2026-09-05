import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@/shared/theme/ThemeProvider';
import ScrollToTopButton from './ScrollToTopButton';

const renderButton = () =>
  render(
    <ThemeProvider>
      <ScrollToTopButton />
    </ThemeProvider>,
  );

/** Move the window and fire the event the component listens for. */
const scrollTo = (y: number) => {
  Object.defineProperty(window, 'scrollY', { value: y, writable: true });
  window.dispatchEvent(new Event('scroll'));
};

describe('ScrollToTopButton', () => {
  let scrollToSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.useFakeTimers();
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    // Held in a local rather than read back off `window`, which the unbound-method
    // rule rightly objects to.
    scrollToSpy = vi.fn();
    window.scrollTo = scrollToSpy as unknown as typeof window.scrollTo;
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('is absent at the top of the page', () => {
    renderButton();
    expect(
      screen.queryByRole('button', { name: 'Back to top' }),
    ).not.toBeInTheDocument();
  });

  it('appears once the page is scrolled past the threshold', () => {
    renderButton();

    act(() => {
      scrollTo(101);
      vi.advanceTimersByTime(150);
    });

    expect(
      screen.getByRole('button', { name: 'Back to top' }),
    ).toBeInTheDocument();
  });

  it('stays hidden AT the threshold, which is where an off-by-one would show', () => {
    renderButton();

    act(() => {
      scrollTo(100);
      vi.advanceTimersByTime(150);
    });

    // The predicate is `> 100`, not `>=`. Without this case, changing it would
    // pass every other test here.
    expect(
      screen.queryByRole('button', { name: 'Back to top' }),
    ).not.toBeInTheDocument();
  });

  it('does not react before the debounce has elapsed', () => {
    renderButton();

    act(() => {
      scrollTo(500);
      vi.advanceTimersByTime(149);
    });

    // Asserting the debounce exists, rather than only that the button
    // eventually appears: a component that updated on every scroll event would
    // satisfy the test above and fail this one.
    expect(
      screen.queryByRole('button', { name: 'Back to top' }),
    ).not.toBeInTheDocument();
  });

  it('scrolls back to the top when clicked', () => {
    renderButton();

    act(() => {
      scrollTo(500);
      vi.advanceTimersByTime(150);
    });

    // fireEvent rather than userEvent: userEvent schedules its own timers, and
    // this suite runs on fake ones.
    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }));

    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('removes its scroll listener on unmount', () => {
    const remove = vi.spyOn(window, 'removeEventListener');
    const { unmount } = renderButton();

    unmount();

    // A listener left behind keeps calling setState on an unmounted component,
    // which is invisible in a page that never navigates away.
    expect(remove).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});
