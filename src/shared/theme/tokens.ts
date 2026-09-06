/**
 * The themed class fragments the components share.
 *
 * Each constant carries both themes at once: the base utilities style the light
 * theme, and the `dark:` counterparts take over under the `.dark` class on <html>.
 * Selecting between them is CSS's job, so nothing here reads a boolean and no
 * component has to be handed one in order to render itself correctly.
 *
 * Only the *themeable* half lives here. Layout - padding, width, radius, shadow -
 * stays with the component, because that genuinely differs per usage.
 *
 * Deliberately NOT centralized, and these are decisions rather than drift:
 * the Hero's heavier surface (/80, border /20, neon glow), the red ErrorBoundary,
 * the green contact-success box, and the Footer's brand-icon colours.
 *
 * Two rules for editing this file, both enforced by tokens.test.ts: every constant
 * that differs by theme needs a `dark:` counterpart for each base utility it
 * overrides, and the class strings must be written out in full. Tailwind scans
 * source text, so a name assembled at runtime emits no CSS at all.
 */

/** Section panels and standalone item cards. The Hero does not use this. */
export const cardSurface =
  'bg-white/70 dark:bg-[#1a0b2e]/70 dark:border dark:border-fuchsia-500/15';

/** Section headings (`<h2>`/`<h3>`) - the highest-contrast text on the panel. */
export const headingText = 'text-gray-900 dark:text-white';

/** Running copy inside a section. Lighter than a heading in light mode. */
export const bodyText = 'text-gray-700 dark:text-white';

/** The single accent colour: fuchsia in the sunset theme, neon cyan at night. */
export const accentText = 'text-fuchsia-600 dark:text-cyan-400';

/** A pill filter tab (the Skills category chips), selected or not. */
export const filterChip = (active: boolean): string =>
  active
    ? 'bg-fuchsia-500/30 text-black border-fuchsia-400/50 focus:ring-fuchsia-400 shadow-lg dark:bg-cyan-500/30 dark:text-white dark:border-cyan-400/50 dark:focus:ring-cyan-400 dark:shadow-cyan-500/20'
    : 'bg-fuchsia-500/20 text-black hover:bg-fuchsia-500/30 border-fuchsia-400/30 hover:scale-105 dark:bg-cyan-500/15 dark:text-white dark:hover:bg-cyan-500/25 dark:border-cyan-400/30';

/**
 * A form control. An error state overrides the theme entirely - a red border has
 * to read the same in both, or the invalid field stops being obvious at a glance.
 */
export const inputField = (hasError: boolean): string =>
  hasError
    ? 'border-red-500 focus:ring-red-400'
    : 'focus:ring-fuchsia-400 dark:bg-[#241041] dark:border-fuchsia-500/25 dark:text-white dark:focus:ring-cyan-400';

/** The primary call-to-action: project links, the contact submit button. */
export const primaryButton =
  'bg-black text-white hover:bg-gray-800 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-600 dark:shadow-[0_0_20px_rgba(217,70,239,0.35)]';

/** The primary call-to-action while its action is in flight. */
export const disabledButton =
  'bg-gray-400 text-gray-600 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400';
