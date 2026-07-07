/**
 * Navigation sections and related constants
 */
export const NAVIGATION_SECTIONS = [
  'home',
  'about',
  'experience',
  'skills',
  'certificates',
  'projects',
  'contact',
] as const;

/**
 * Format section name for display
 */
export const formatSectionName = (section: string): string => {
  return section.charAt(0).toUpperCase() + section.slice(1);
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
