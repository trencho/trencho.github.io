/**
 * Navigation sections and related constants
 */
export const NAVIGATION_SECTIONS = [
  'home',
  'about',
  'skills',
  'certificates',
  'projects',
  'contact',
] as const;

/**
 * Mobile navigation sections (may differ from desktop)
 */
export const MOBILE_NAVIGATION_SECTIONS = NAVIGATION_SECTIONS;

/**
 * Format section name for display
 */
export const formatSectionName = (section: string): string => {
  return section.charAt(0).toUpperCase() + section.slice(1);
};

/**
 * Theme color mapping
 */
export const THEME_COLORS = {
  dark: {
    bg: 'bg-black',
    text: 'text-white',
    accent: 'text-teal-400',
    cardBg: 'bg-[#444444]',
    cardHover: 'hover:bg-gray-600',
  },
  light: {
    bg: 'bg-white',
    text: 'text-gray-900',
    accent: 'text-emerald-500',
    cardBg: 'bg-gray-100',
    cardHover: 'hover:bg-gray-200',
  },
};

/**
 * Button styles mapping
 */
export const BUTTON_STYLES = {
  primary: (darkMode: boolean) => ({
    base: 'px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none cursor-pointer',
    dark: 'bg-gray-600 text-white hover:bg-gray-500',
    light: 'bg-black text-white hover:bg-gray-800',
    className: `px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 mb-2 sm:mb-0 select-none cursor-pointer ${
      darkMode
        ? 'bg-gray-600 text-white hover:bg-gray-500'
        : 'bg-black text-white hover:bg-gray-800'
    }`,
  }),
  icon: (darkMode: boolean) => ({
    className: `group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white transition 
      ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-black hover:bg-gray-800'}`,
  }),
};

/**
 * Social media links
 */
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/trencho',
    ariaLabel: 'GitHub Profile',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aleksandar-trenchevski-593b45168/',
    ariaLabel: 'LinkedIn Profile',
  },
];

/**
 * Download link
 */
export const CV_DOWNLOAD = {
  filename: '/CV - Aleksandar Trenchevski.pdf',
  label: 'Download CV',
};
