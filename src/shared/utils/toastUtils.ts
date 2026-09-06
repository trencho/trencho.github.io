import { toast, ToastOptions } from 'react-toastify';

/**
 * Default toast configuration to avoid repetition throughout the app.
 *
 * No `theme` here on purpose. It is set once on <ToastContainer /> in Contact.tsx,
 * which react-toastify applies to every toast that does not override it - so the
 * theme no longer has to be threaded through the hook and both call sites.
 */
export const getDefaultToastOptions = (): ToastOptions => ({
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
});

/**
 * Show error toast with consistent styling
 */
export const showError = (message: string) => {
  toast.error(message, getDefaultToastOptions());
};

/**
 * Show success toast with consistent styling
 */
export const showSuccess = (message: string) => {
  toast.success(message, getDefaultToastOptions());
};
