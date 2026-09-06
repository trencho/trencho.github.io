// Build-time prerender: render the app to static HTML and inject it into the
// client-built index.html, so the served page ships real content in #root
// instead of an empty div. Run after `vite build` (dist/) and the SSR build.
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';

const SITE = 'https://trencho.github.io';

const templatePath = resolve('dist/index.html');
const serverEntry = pathToFileURL(resolve('dist-ssr/entry-server.js')).href;

const { render, renderNotFound, renderRoute, PRERENDERED_ROUTES } =
  await import(serverEntry);

const template = readFileSync(templatePath, 'utf-8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(`Prerender marker "${marker}" not found in dist/index.html`);
}

const withContent = (html) =>
  template.replace(marker, `<div id="root">${html}</div>`);

const appHtml = render();
writeFileSync(templatePath, withContent(appHtml));

// Emit a 404.html so GitHub Pages has an SPA fallback for unknown paths: it
// serves this file (with a 404 status) for any route that isn't a real file,
// which boots the same app so BrowserRouter's `*` route renders NotFound.
// Prerender the styled NotFound into it so the static fallback matches.
const notFoundHtml = renderNotFound();
writeFileSync(resolve('dist/404.html'), withContent(notFoundHtml));

/**
 * Rewrite one head tag, and abort the build if there was nothing to rewrite.
 *
 * These substitutions are invisible when they silently no-op, which is what makes
 * a thrown error the right response rather than a warning: a page that keeps the
 * home page's canonical URL renders perfectly, asks search engines to drop it, and
 * gives no sign from the page itself. The template is hand-edited, so a reformat
 * that moves an attribute onto another line is a realistic way to break this.
 *
 * `expected` is asserted rather than assumed, because three separate tags carry a
 * description and replacing one of them is the half-done state that looks fine.
 */
const substitute = (html, pattern, replacement, what, expected) => {
  const found = html.match(pattern);
  const count = found ? found.length : 0;
  if (count !== expected) {
    throw new Error(
      `Prerender: expected ${expected} match(es) for ${what} in the template, ` +
        `found ${count}. index.html changed shape; update scripts/prerender.mjs.`,
    );
  }
  return html.replace(pattern, replacement);
};

const escapeAttr = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

// One directory per extra route. GitHub Pages serves `<path>/index.html` for a
// request to `<path>`, so a real file at dist/cv/index.html makes /cv a crawlable
// document rather than a client-only route the 404 fallback happens to boot.
//
// Each document also gets its own head. Every page here is stamped out of the one
// index.html, which names `/` as its canonical URL and carries the home page's
// title and descriptions - shipped as-is, /cv would declare itself a duplicate of
// the home page and ask to be dropped from the index.
const emitted = [];
for (const { path, title, description } of PRERENDERED_ROUTES) {
  const markup = renderRoute(path);
  let html = withContent(markup);
  const url = `${SITE}${path}`;
  const attr = escapeAttr(description);

  html = substitute(
    html,
    /<link rel="canonical" href="[^"]*" \/>/g,
    `<link rel="canonical" href="${url}" />`,
    'the canonical URL',
    1,
  );
  html = substitute(
    html,
    /<meta property="og:url" content="[^"]*" \/>/g,
    `<meta property="og:url" content="${url}" />`,
    'og:url',
    1,
  );
  html = substitute(
    html,
    /<title>[^<]*<\/title>/g,
    `<title>${escapeAttr(title)}</title>`,
    'the title',
    1,
  );
  // og:title sits on its own line in the template, hence the `\s+`.
  html = substitute(
    html,
    /(property="og:title"\s+content=")[^"]*(")/g,
    `$1${escapeAttr(title)}$2`,
    'og:title',
    1,
  );
  // description, og:description and twitter:description - all three, or the page
  // ships two different summaries of itself.
  html = substitute(
    html,
    /((?:name|property)="(?:description|og:description|twitter:description)"\s+content=")[^"]*(")/g,
    `$1${attr}$2`,
    'the description tags',
    3,
  );

  const outPath = resolve(`dist${path}/index.html`);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  emitted.push(`dist${path}/index.html (+${markup.length} chars)`);
}

// The sitemap is generated here rather than hand-maintained under public/, for
// two reasons. Its <lastmod> was typed by hand and went stale across content
// deploys with nothing to notice. And it has to name every prerendered route -
// a list this script already holds, so a second copy would drift the first time
// somebody added one.
//
// <lastmod> is the build date. That moves on every deploy rather than tracking
// when each page's content last changed, which overstates freshness a little; a
// date that is always right about the deploy beats one that is quietly wrong
// about everything.
const lastmod = new Date().toISOString().slice(0, 10);
const urls = [
  { loc: `${SITE}/`, priority: '1.0' },
  ...PRERENDERED_ROUTES.map(({ path }) => ({
    loc: `${SITE}${path}`,
    priority: '0.8',
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls
  .map(
    ({ loc, priority }) => `
    <url>
        <loc>${loc}</loc>
        <lastmod>${lastmod}</lastmod>
        <priority>${priority}</priority>
    </url>`,
  )
  .join('')}

</urlset>
`;
writeFileSync(resolve('dist/sitemap.xml'), sitemap);

// The SSR bundle is a build artifact only; drop it.
rmSync('dist-ssr', { recursive: true, force: true });

console.log(
  `Prerender dist/index.html (+${appHtml.length} chars in #root); ` +
    `dist/404.html (+${notFoundHtml.length} chars)` +
    (emitted.length ? `; ${emitted.join('; ')}` : '') +
    `; dist/sitemap.xml (${urls.length} urls, lastmod ${lastmod})`,
);
