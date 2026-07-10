import { describe, it, expect, vi } from 'vitest';
import { toast } from 'react-toastify';
import {
  getDefaultToastOptions,
  showError,
  showSuccess,
} from '@/utils/toastUtils';

vi.mock('react-toastify', () => ({
  toast: { error: vi.fn(), success: vi.fn() },
}));

describe('getDefaultToastOptions', () => {
  it('selects the theme from the dark-mode flag', () => {
    expect(getDefaultToastOptions(true).theme).toBe('dark');
    expect(getDefaultToastOptions(false).theme).toBe('light');
  });

  it('keeps the shared defaults regardless of theme', () => {
    const opts = getDefaultToastOptions(false);
    expect(opts.position).toBe('top-center');
    expect(opts.autoClose).toBe(3000);
    expect(opts.closeOnClick).toBe(true);
  });
});

describe('showError / showSuccess', () => {
  it('routes an error through toast.error with the themed options', () => {
    showError('boom', true);
    expect(toast.error).toHaveBeenCalledWith(
      'boom',
      expect.objectContaining({ theme: 'dark', position: 'top-center' }),
    );
  });

  it('routes a success through toast.success with the themed options', () => {
    showSuccess('done', false);
    expect(toast.success).toHaveBeenCalledWith(
      'done',
      expect.objectContaining({ theme: 'light' }),
    );
  });
});
