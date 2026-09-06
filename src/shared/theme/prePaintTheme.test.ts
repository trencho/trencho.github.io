import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { runInThisContext } from 'node:vm';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

/**
 * The pre-paint theme script lives inline in index.html so it runs before the first
 * paint. Nothing else in the build can see it: it is not a module, tsc never reads it,
 * and the prerender copies index.html through verbatim.
 *
 * So this suite extracts the real script out of the shipped index.html and executes it,
 * rather than testing a copy that would drift and then certify the wrong text. What it
 * protects is the agreement between two independent implementations of one decision -
 * this script and ThemeProvider's initial state - because a disagreement between them
 * shows up as a flash of the wrong theme and nothing else.
 */

const html = readFileSync(join(process.cwd(), 'index.html'), 'utf8');

// Parsed rather than pattern-matched. Picking tags out of HTML with a regular
// expression is fragile in ways that are easy to miss - case, attribute order,
// a `>` inside a string - and CodeQL flags the shape (js/bad-tag-filter) whether
// or not the input is trusted. jsdom is already the test environment, so the
// document can just be read.
//
// The pre-paint script is the inline one: no `src`, no `type` (which excludes the
// JSON-LD blocks and the module entry), and it is the one that reads `darkMode`.
const inlineScripts = [
  ...new DOMParser()
    .parseFromString(html, 'text/html')
    .querySelectorAll('script'),
]
  .filter((script) => !script.src && !script.type)
  .map((script) => script.textContent);

const prePaintScript = inlineScripts.find((s) => s.includes('darkMode'));

const setOsPrefersDark = (prefersDark: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: prefersDark && query.includes('prefers-color-scheme: dark'),
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  });
};

// The script is not a module and exports nothing, so the only way to drive the shipped
// text is to run it. `runInThisContext` evaluates against the same global the test sees,
// which is jsdom's - so the `localStorage`, `matchMedia` and `document` the script reads
// are the ones each test below sets up. That is what makes this an execution rather than
// a string match.
const runPrePaintScript = () => {
  runInThisContext(prePaintScript ?? '');
};

describe('the pre-paint theme script in index.html', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    setOsPrefersDark(false);
  });

  afterEach(() => {
    document.documentElement.classList.remove('dark');
  });

  it('ships synchronously inside <head>, ahead of the stylesheet', () => {
    // Delivery, not logic. Correct logic that runs too late paints the wrong theme just
    // as reliably as wrong logic, and the two are indistinguishable from the class alone.
    expect(prePaintScript).toBeDefined();

    const scriptIndex = html.indexOf('localStorage.getItem');
    expect(scriptIndex).toBeGreaterThan(-1);

    // Inside <head>, not merely somewhere above <body>.
    expect(scriptIndex).toBeGreaterThan(html.indexOf('<head>'));
    expect(scriptIndex).toBeLessThan(html.indexOf('</head>'));

    // Ahead of the stylesheet and of #root.
    expect(scriptIndex).toBeLessThan(html.indexOf('<link\n      rel="stylesheet"'));
    expect(scriptIndex).toBeLessThan(html.indexOf('id="root"'));

    // Synchronous. `defer`, `async` or `type="module"` all postpone execution past the
    // point where the markup is already on screen.
    const tagStart = html.lastIndexOf('<script', scriptIndex);
    const tag = html.slice(tagStart, html.indexOf('>', tagStart) + 1);
    expect(tag).toBe('<script>');
  });

  it('needs no CSP change, because script-src already allows inline', () => {
    const csp = html.match(/Content-Security-Policy"\s*content="([^"]+)"/)?.[1];
    expect(csp).toBeDefined();
    expect(csp).toMatch(/script-src[^;]*'unsafe-inline'/);
  });

  it('stamps .dark when the saved choice is dark', () => {
    localStorage.setItem('darkMode', 'true');
    runPrePaintScript();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('leaves the class off when the saved choice is light, even if the OS prefers dark', () => {
    // The saved choice is the visitor's own; it has to beat the OS or the toggle is a lie.
    localStorage.setItem('darkMode', 'false');
    setOsPrefersDark(true);
    runPrePaintScript();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('falls back to the OS preference when nothing is saved', () => {
    setOsPrefersDark(true);
    runPrePaintScript();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('leaves the class off when nothing is saved and the OS prefers light', () => {
    setOsPrefersDark(false);
    runPrePaintScript();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('falls through to the OS preference when localStorage throws', () => {
    // A private window or blocked site data throws on read. Defaulting to light there
    // would reintroduce the flash for exactly the visitors who cannot save a choice.
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('storage blocked');
    });
    setOsPrefersDark(true);
    runPrePaintScript();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('falls through to the OS preference when the saved value is corrupt', () => {
    localStorage.setItem('darkMode', 'not-json');
    setOsPrefersDark(true);
    runPrePaintScript();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
