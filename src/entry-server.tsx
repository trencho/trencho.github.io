import { renderToStaticMarkup } from 'react-dom/server';
import { MotionConfig } from 'motion/react';
import { ThemeProvider } from './context/ThemeProvider';
import Home from './components/Home';

/**
 * Server entry used only by the prerender build step. It renders the real
 * page content (all sections) to a static HTML string that gets injected into
 * `build/index.html`, so crawlers and the first paint see the content instead
 * of an empty `#root`. The client still boots via `createRoot` and replaces
 * this markup — there is no hydration, so a structural match is not required.
 */
export function render(): string {
  return renderToStaticMarkup(
    <MotionConfig reducedMotion='user'>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </MotionConfig>,
  );
}
