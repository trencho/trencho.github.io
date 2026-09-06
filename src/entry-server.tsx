import type { ReactNode } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { MotionConfig } from 'motion/react';
import { ThemeProvider } from '@/shared/theme/ThemeProvider';
import Home from '@/layout/Home';
import NotFound from '@/shared/ui/NotFound';
import Cv from '@/routes/Cv';
import { CV_ROUTE, PROFILE } from '@/shared/utils/constants';

/**
 * Server entry used only by the prerender build step. It renders the real
 * page content (all sections) to a static HTML string that gets injected into
 * `build/index.html`, so crawlers and the first paint see the content instead
 * of an empty `#root`. The client still boots via `createRoot` and replaces
 * this markup — there is no hydration, so a structural match is not required.
 */

/** The one wrapper every prerendered document shares. */
const document = (location: string, children: ReactNode): string =>
  renderToStaticMarkup(
    <MotionConfig reducedMotion='user'>
      <ThemeProvider>
        <StaticRouter location={location}>{children}</StaticRouter>
      </ThemeProvider>
    </MotionConfig>,
  );

export function render(): string {
  return document('/', <Home />);
}

/**
 * Prerenders the styled 404 page into `dist/404.html`. GitHub Pages serves
 * that file for any unknown path (the SPA otherwise never boots on a typed
 * URL / hard refresh, so `BrowserRouter`'s `*` route can't render). `NotFound`
 * uses `<Link>`, so it needs a router context — `StaticRouter` supplies one.
 */
export function renderNotFound(): string {
  return document('/404', <NotFound />);
}

export interface PrerenderedRoute {
  path: string;
  /** Replaces the template's <title> in this route's document. */
  title: string;
  /** Replaces the template's meta/og descriptions in this route's document. */
  description: string;
}

/**
 * Every path the prerender emits as its own document, and the head it gets.
 *
 * `/` is deliberately absent: it is the template itself (dist/index.html) rather
 * than a directory, so `render()` keeps its own entry point above. Adding a route
 * here is all it takes to get `dist/<path>/index.html` plus a sitemap entry -
 * scripts/prerender.mjs reads this list rather than carrying its own copy, so the
 * two cannot disagree about what the site contains.
 *
 * The title and description are here rather than in the template because every
 * document is stamped out of one index.html, which carries `/`'s canonical URL,
 * og:url, title and description. Shipped unchanged, a second page declares itself
 * a duplicate of the home page - so search engines index the home page and drop
 * this one, and the only symptom is a URL that never appears in results.
 * prerender.mjs rewrites all four per route and fails the build if any
 * substitution finds nothing to replace.
 */
export const PRERENDERED_ROUTES: PrerenderedRoute[] = [
  {
    path: CV_ROUTE,
    title: `CV - ${PROFILE.name} | ${PROFILE.title}`,
    description:
      `The full CV of ${PROFILE.name}, ${PROFILE.title.toLowerCase()} in ` +
      `${PROFILE.location}: backend and data engineering roles, education, ` +
      `skills, certificates and publications. Printable to PDF.`,
  },
];

const routeElements: Record<string, ReactNode> = {
  [CV_ROUTE]: <Cv />,
};

/**
 * Renders one of `PRERENDERED_ROUTES` to static markup.
 *
 * Throws on an unknown path rather than returning an empty string, because a
 * silently blank document is a page that 200s with nothing in it - which reads as
 * a working deploy right up until someone opens it.
 */
export function renderRoute(path: string): string {
  const element = routeElements[path];
  if (element === undefined) {
    throw new Error(
      `renderRoute: no element registered for "${path}". Known routes: ` +
        PRERENDERED_ROUTES.map((route) => route.path).join(', '),
    );
  }
  return document(path, element);
}
