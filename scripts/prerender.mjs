// Build-time prerender: render the app to static HTML and inject it into the
// client-built index.html, so the served page ships real content in #root
// instead of an empty div. Run after `vite build` and the SSR build.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const templatePath = resolve('build/index.html');
const serverEntry = pathToFileURL(resolve('dist-ssr/entry-server.js')).href;

const { render } = await import(serverEntry);
const appHtml = render();

const template = readFileSync(templatePath, 'utf-8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(`Prerender marker "${marker}" not found in build/index.html`);
}

const html = template.replace(marker, `<div id="root">${appHtml}</div>`);
writeFileSync(templatePath, html);

// The SSR bundle is a build artifact only; drop it.
rmSync('dist-ssr', { recursive: true, force: true });

console.log(`Prerendered build/index.html (+${appHtml.length} chars in #root)`);
