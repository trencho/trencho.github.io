import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { MotionConfig } from 'motion/react';
import { ThemeProvider } from './context/ThemeProvider';
import Home from './components/Home';
import NotFound from './components/NotFound';

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

/**
 * Prerenders the styled 404 page into `dist/404.html`. GitHub Pages serves
 * that file for any unknown path (the SPA otherwise never boots on a typed
 * URL / hard refresh, so `BrowserRouter`'s `*` route can't render). `NotFound`
 * uses `<Link>`, so it needs a router context — `StaticRouter` supplies one.
 */
export function renderNotFound(): string {
  return renderToStaticMarkup(
    <MotionConfig reducedMotion='user'>
      <ThemeProvider>
        <StaticRouter location='/404'>
          <NotFound />
        </StaticRouter>
      </ThemeProvider>
    </MotionConfig>,
  );
}
