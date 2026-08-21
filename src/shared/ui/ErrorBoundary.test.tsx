import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';

/**
 * Characterization tests for the app's last line of defence.
 *
 * It had no test at all, which matters more here than for a presentational component: an
 * ErrorBoundary that stopped catching would not fail loudly -- the app would simply go blank on the
 * first render error, and every other test would stay green because none of them throws.
 *
 * React logs a caught error to console.error by design, and componentDidCatch logs another. Both are
 * silenced per-test so a passing run stays readable; the silencing is asserted where it is the point.
 */

function Boom({ message = 'kaboom' }: { message?: string }): React.ReactNode {
  throw new Error(message);
}

function Safe(): React.ReactNode {
  return <p>all good</p>;
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('ErrorBoundary', () => {
  it('renders its children untouched when nothing throws', () => {
    render(
      <ErrorBoundary>
        <Safe />
      </ErrorBoundary>,
    );

    expect(screen.getByText('all good')).toBeInTheDocument();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('shows the fallback instead of crashing when a child throws', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <Boom />
      </ErrorBoundary>,
    );

    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    // assertive, not polite: the page is gone, so a screen reader must interrupt.
    expect(alert).toHaveAttribute('aria-live', 'assertive');
    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    // The thrown message reaches the details block, so a bug report can carry it.
    expect(screen.getByText(/kaboom/)).toBeInTheDocument();
  });

  it('logs the error rather than swallowing it', () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <Boom message='diagnostic-detail' />
      </ErrorBoundary>,
    );

    // componentDidCatch is the only place this app records a render crash; a boundary that
    // rendered the fallback but logged nothing would leave no trace to debug from.
    expect(
      consoleError.mock.calls.some(
        (call) => call[0] === 'Error caught by Error Boundary:',
      ),
    ).toBe(true);
  });

  it('recovers when Try Again is pressed and the child no longer throws', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    const user = userEvent.setup();

    function Flaky(): React.ReactNode {
      const [ok, setOk] = useState(false);
      return (
        <>
          <button onClick={() => setOk(true)}>fix it</button>
          <ErrorBoundary>{ok ? <Safe /> : <Boom />}</ErrorBoundary>
        </>
      );
    }

    render(<Flaky />);
    expect(screen.getByRole('alert')).toBeInTheDocument();

    await user.click(screen.getByText('fix it'));
    await user.click(screen.getByRole('button', { name: 'Try Again' }));

    // handleReset clears hasError; the children re-render, and this time they do not throw.
    expect(screen.getByText('all good')).toBeInTheDocument();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
