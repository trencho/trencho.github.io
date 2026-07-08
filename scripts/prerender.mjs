// Build-time prerender: render the app to static HTML and inject it into the
// client-built index.html, so the served page ships real content in #root
// instead of an empty div. Run after `vite build` (dist/) and the SSR build.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const templatePath = resolve('dist/index.html');
const serverEntry = pathToFileURL(resolve('dist-ssr/entry-server.js')).href;

const { render, renderNotFound } = await import(serverEntry);
const appHtml = render();

const template = readFileSync(templatePath, 'utf-8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(`Prerender marker "${marker}" not found in dist/index.html`);
}

const html = template.replace(marker, `<div id="root">${appHtml}</div>`);
writeFileSync(templatePath, html);

// Emit a 404.html so GitHub Pages has an SPA fallback for unknown paths: it
// serves this file (with a 404 status) for any route that isn't a real file,
// which boots the same app so BrowserRouter's `*` route renders NotFound.
// Prerender the styled NotFound into it so the static fallback matches.
const notFoundHtml = renderNotFound();
const notFoundPath = resolve('dist/404.html');
writeFileSync(
  notFoundPath,
  template.replace(marker, `<div id="root">${notFoundHtml}</div>`),
);

// The SSR bundle is a build artifact only; drop it.
rmSync('dist-ssr', { recursive: true, force: true });

console.log(
  `Prerender dist/index.html (+${appHtml.length} chars in #root); ` +
    `dist/404.html (+${notFoundHtml.length} chars)`,
);
