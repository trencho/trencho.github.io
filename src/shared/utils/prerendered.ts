/**
 * True during the prerender, and in a browser that booted over prerendered
 * markup. Read once when the module loads, before `createRoot` replaces `#root`.
 *
 * Above-the-fold content uses it to skip its entrance animation: the static HTML
 * must be visible on first paint, and fading it out and back in once the app
 * boots would read as a flicker.
 */
export const startsFromPrerender: boolean =
  typeof document === 'undefined' ||
  (document.getElementById('root')?.childElementCount ?? 0) > 0;
