import { toast, ToastOptions } from 'react-toastify';

/**
 * Default toast configuration to avoid repetition throughout the app
 */
export const getDefaultToastOptions = (isDarkMode: boolean): ToastOptions => ({
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: isDarkMode ? 'dark' : 'light',
});

/**
 * Show error toast with consistent styling
 */
export const showError = (message: string, isDarkMode: boolean) => {
  toast.error(message, getDefaultToastOptions(isDarkMode));
};

/**
 * Show success toast with consistent styling
 */
export const showSuccess = (message: string, isDarkMode: boolean) => {
  toast.success(message, getDefaultToastOptions(isDarkMode));
};

/**
 * Show warning toast with consistent styling
 */
export const showWarning = (message: string, isDarkMode: boolean) => {
  toast.warning(message, getDefaultToastOptions(isDarkMode));
};
