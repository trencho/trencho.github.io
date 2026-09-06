import { describe, it, expect, vi } from 'vitest';
import { toast } from 'react-toastify';
import {
  getDefaultToastOptions,
  showError,
  showSuccess,
} from '@/shared/utils/toastUtils';

vi.mock('react-toastify', () => ({
  toast: { error: vi.fn(), success: vi.fn() },
}));

describe('getDefaultToastOptions', () => {
  it('sets no theme, leaving that to the container', () => {
    // The theme used to be threaded here from Contact, through useContactForm and
    // five call sites. It is set once on <ToastContainer /> now, and a `theme` key
    // in these options would silently take precedence over it on every toast.
    expect(getDefaultToastOptions()).not.toHaveProperty('theme');
  });

  it('keeps the shared defaults', () => {
    const opts = getDefaultToastOptions();
    expect(opts.position).toBe('top-center');
    expect(opts.autoClose).toBe(3000);
    expect(opts.closeOnClick).toBe(true);
  });
});

describe('showError / showSuccess', () => {
  it('routes an error through toast.error with the shared options', () => {
    showError('boom');
    expect(toast.error).toHaveBeenCalledWith(
      'boom',
      expect.objectContaining({ position: 'top-center', autoClose: 3000 }),
    );
  });

  it('routes a success through toast.success with the shared options', () => {
    showSuccess('done');
    expect(toast.success).toHaveBeenCalledWith(
      'done',
      expect.objectContaining({ position: 'top-center' }),
    );
  });
});
