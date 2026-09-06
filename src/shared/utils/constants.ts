/**
 * Navigation sections and related constants
 */
export const NAVIGATION_SECTIONS = [
  'home',
  'about',
  'experience',
  'education',
  'skills',
  'certificates',
  'projects',
  'languages',
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
 * Who the site is about. The Hero types the title out and the /cv route prints it
 * under the name, so it is stated once.
 */
export const PROFILE = {
  name: 'Aleksandar Trenchevski',
  title: 'Software Engineer',
  location: 'Skopje, North Macedonia',
};

/**
 * The hand-maintained PDF. `/cv` renders the same career out of `src/data/*.json`,
 * so the two can disagree; the PDF stays reachable from the Hero and from the CV
 * page itself rather than being removed, because replacing it is the owner's call.
 */
export const CV_DOWNLOAD = {
  filename: '/CV - Aleksandar Trenchevski.pdf',
  label: 'Download CV',
};

/** The rendered CV route. Prerendered to dist/cv/index.html and in the sitemap. */
export const CV_ROUTE = '/cv';
