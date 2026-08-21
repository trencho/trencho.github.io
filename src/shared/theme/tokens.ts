/**
 * The shared translucent card surface — background + border — used by section panels
 * and standalone item cards, themed for dark (neon-night) and light (sunset) modes.
 *
 * Only the themeable surface lives here; each component keeps its own layout classes
 * (padding, width, radius, shadow). Centralizing the surface means a restyle is a single
 * edit instead of the same literal hand-maintained across every section. The Hero is
 * intentionally heavier and does not use this.
 */
export const cardSurface = (darkMode: boolean): string =>
  darkMode ? 'bg-[#1a0b2e]/70 border border-fuchsia-500/15' : 'bg-white/70';
