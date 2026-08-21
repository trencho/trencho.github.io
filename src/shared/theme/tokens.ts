/**
 * The themed class fragments the components share.
 *
 * The site has one binary theme (`darkMode`), and before this module every
 * component spelled its own `darkMode ? … : …` branch inline - the same handful
 * of literals repeated across thirteen files, so a restyle meant finding all of
 * them. Each helper here owns one such pair.
 *
 * Only the *themeable* half lives here. Layout - padding, width, radius, shadow -
 * stays with the component, because that genuinely differs per usage.
 *
 * Deliberately NOT centralized, and these are decisions rather than drift:
 * the Hero's heavier surface (/80, border /20, neon glow), the red ErrorBoundary,
 * the green contact-success box, and the Footer's brand-icon colours.
 */

/** Section panels and standalone item cards. The Hero does not use this. */
export const cardSurface = (darkMode: boolean): string =>
  darkMode ? 'bg-[#1a0b2e]/70 border border-fuchsia-500/15' : 'bg-white/70';

/** Section headings (`<h2>`/`<h3>`) - the highest-contrast text on the panel. */
export const headingText = (darkMode: boolean): string =>
  darkMode ? 'text-white' : 'text-gray-900';

/** Running copy inside a section. Lighter than a heading in light mode. */
export const bodyText = (darkMode: boolean): string =>
  darkMode ? 'text-white' : 'text-gray-700';

/** The single accent colour: neon cyan at night, fuchsia in the sunset theme. */
export const accentText = (darkMode: boolean): string =>
  darkMode ? 'text-cyan-400' : 'text-fuchsia-600';

/** A pill filter tab (the Skills category chips), selected or not. */
export const filterChip = (active: boolean, darkMode: boolean): string =>
  active
    ? darkMode
      ? 'bg-cyan-500/30 text-white border-cyan-400/50 focus:ring-cyan-400 shadow-lg shadow-cyan-500/20'
      : 'bg-fuchsia-500/30 text-black border-fuchsia-400/50 focus:ring-fuchsia-400 shadow-lg'
    : darkMode
      ? 'bg-cyan-500/15 text-white hover:bg-cyan-500/25 border-cyan-400/30 hover:scale-105'
      : 'bg-fuchsia-500/20 text-black hover:bg-fuchsia-500/30 border-fuchsia-400/30 hover:scale-105';

/**
 * A form control. An error state overrides the theme entirely - a red border has
 * to read the same in both, or the invalid field stops being obvious at a glance.
 */
export const inputField = (darkMode: boolean, hasError: boolean): string =>
  hasError
    ? 'border-red-500 focus:ring-red-400'
    : darkMode
      ? 'bg-[#241041] border-fuchsia-500/25 text-white focus:ring-cyan-400'
      : 'focus:ring-fuchsia-400';

/** The primary call-to-action: project links, the contact submit button. */
export const primaryButton = (darkMode: boolean): string =>
  darkMode
    ? 'bg-fuchsia-700 text-white hover:bg-fuchsia-600 shadow-[0_0_20px_rgba(217,70,239,0.35)]'
    : 'bg-black text-white hover:bg-gray-800';

/** The primary call-to-action while its action is in flight. */
export const disabledButton = (darkMode: boolean): string =>
  darkMode
    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
    : 'bg-gray-400 text-gray-600 cursor-not-allowed';
