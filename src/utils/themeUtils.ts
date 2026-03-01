/**
 * Utility functions for theme-aware styling
 * Reduces repetitive ternary operators throughout components
 */

export const themeClass = (
  darkMode: boolean,
  darkClass: string,
  lightClass: string,
): string => {
  return darkMode ? darkClass : lightClass;
};

export const themeClasses = (
  darkMode: boolean,
  options: {
    darkBg?: string;
    lightBg?: string;
    darkText?: string;
    lightText?: string;
    darkBorder?: string;
    lightBorder?: string;
  },
): string => {
  const classes: string[] = [];

  if (options.darkBg ?? options.lightBg) {
    classes.push(
      themeClass(darkMode, options.darkBg ?? '', options.lightBg ?? ''),
    );
  }

  if (options.darkText ?? options.lightText) {
    classes.push(
      themeClass(darkMode, options.darkText ?? '', options.lightText ?? ''),
    );
  }

  if (options.darkBorder ?? options.lightBorder) {
    classes.push(
      themeClass(darkMode, options.darkBorder ?? '', options.lightBorder ?? ''),
    );
  }

  return classes.filter(Boolean).join(' ');
};

/**
 * Common theme variants used throughout the app
 */
export const themeVariants = {
  cardBackground: (darkMode: boolean) =>
    themeClass(darkMode, 'bg-[#444444]', 'bg-white bg-opacity-70'),

  containerBackground: (darkMode: boolean) =>
    themeClass(darkMode, 'bg-[#444444]', 'bg-gray-50'),

  text: (darkMode: boolean) =>
    themeClass(darkMode, 'text-white', 'text-gray-900'),

  textSecondary: (darkMode: boolean) =>
    themeClass(darkMode, 'text-white', 'text-gray-700'),

  accentColor: (darkMode: boolean) =>
    themeClass(darkMode, 'text-teal-400', 'text-emerald-500'),

  buttonPrimary: (darkMode: boolean) =>
    themeClass(
      darkMode,
      'bg-gray-600 text-white hover:bg-gray-500',
      'bg-black text-white hover:bg-gray-800',
    ),

  buttonIcon: (darkMode: boolean) =>
    themeClass(
      darkMode,
      'bg-gray-600 hover:bg-gray-500',
      'bg-black hover:bg-gray-800',
    ),

  borderColor: (darkMode: boolean) =>
    themeClass(darkMode, 'border-gray-700', 'border-gray-200'),

  navbarBackground: (darkMode: boolean) =>
    themeClass(darkMode, 'bg-black', 'bg-white'),

  menuBackground: (darkMode: boolean) =>
    themeClass(darkMode, 'bg-black', 'bg-white'),

  linkColor: (darkMode: boolean) =>
    themeClass(darkMode, 'hover:text-gray-400', 'hover:text-gray-400'),

  underlineColor: (darkMode: boolean) =>
    themeClass(darkMode, 'bg-teal-400', 'bg-purple-600'),

  focusRing: (darkMode: boolean) =>
    themeClass(darkMode, 'focus:ring-gray-500', 'focus:ring-blue-500'),
};
