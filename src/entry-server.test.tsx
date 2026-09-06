import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect } from 'vitest';
import {
  render,
  renderNotFound,
  renderRoute,
  PRERENDERED_ROUTES,
} from './entry-server';
import { CV_ROUTE, PROFILE } from '@/shared/utils/constants';
import experience from '@/data/experience.json';

/**
 * The prerender is the half of a new route that nothing else checks. A route can
 * be registered in App.tsx, work perfectly in the browser, and still ship as a
 * client-only page: crawlers get the 404 fallback, and the only symptom is
 * something not appearing in search results months later.
 */

describe('prerendered routes', () => {
  it('renders the home document', () => {
    expect(render()).toContain('id="home"');
  });

  it('renders the 404 document', () => {
    expect(renderNotFound()).toContain('404');
  });

  it('renders the CV document from the real data', () => {
    const html = renderRoute(CV_ROUTE);
    expect(html).toContain(PROFILE.name);
    expect(html).toContain(experience[0]?.company ?? '');
  });

  it('refuses an unregistered path instead of emitting an empty page', () => {
    // A blank document 200s and reads as a working deploy until someone opens it.
    expect(() => renderRoute('/not-a-route')).toThrow(/no element registered/);
  });

  it('covers every App route that is not / or the catch-all', () => {
    /*
     * The guard that matters: adding <Route> to App.tsx without adding the path to
     * PRERENDERED_ROUTES gives a page that works in the SPA and does not exist as a
     * file, which is invisible from inside the app.
     *
     * Counted rather than name-matched, because App declares the CV path as an
     * expression (`path={CV_ROUTE}`) rather than a literal, so there is nothing to
     * match on. A new route moves the count and fails here until somebody decides
     * whether it should be prerendered.
     */
    const app = readFileSync(join(process.cwd(), 'src/App.tsx'), 'utf8');
    const routeCount = (app.match(/<Route\s/g) ?? []).length;

    // `/` (the template itself) + `*` (the 404 fallback) + one per prerendered route.
    expect(routeCount).toBe(2 + PRERENDERED_ROUTES.length);
  });

  it('lists no route the prerender cannot render', () => {
    for (const route of PRERENDERED_ROUTES) {
      expect(route.path.startsWith('/')).toBe(true);
      expect(renderRoute(route.path).length).toBeGreaterThan(0);
    }
  });

  it('gives every route its own title and description', () => {
    /*
     * Each document is stamped out of one index.html, which carries the home
     * page's canonical URL, title and descriptions. prerender.mjs rewrites those
     * per route and throws if a substitution matches nothing, but it can only
     * write what this list gives it - a route reusing the home page's title is a
     * page that asks to be treated as a duplicate, and looks perfect on screen.
     */
    const homeTitle = 'Aleksandar Trenchevski | Software Engineer Portfolio';
    const titles = new Set<string>();

    for (const route of PRERENDERED_ROUTES) {
      expect(route.title).not.toBe(homeTitle);
      expect(route.title.length).toBeGreaterThan(0);
      expect(route.description.length).toBeGreaterThan(0);
      titles.add(route.title);
    }

    expect(titles.size).toBe(PRERENDERED_ROUTES.length);
  });
});
