# Aleksandar Trenchevski — Portfolio

Personal portfolio website for Aleksandar Trenchevski, a Software / Backend & Data Engineer.
It presents a hero introduction, an about section, a filterable skills grid, certificates,
featured projects and a contact form with spam protection.

🔗 **Live site:** [trencho.github.io](https://trencho.github.io/)

## Features

- **Single-page portfolio** with smooth-scroll navigation across Home, About, Skills, Certificates, Projects and Contact.
- **Light / dark theme** with a persisted preference (React context and custom hooks).
- **Filterable skills grid** — filter technologies by category (Frontend, Backend, Databases, Tools, DevOps, Data Science, Data Engineering).
- **Projects showcase** driven by data in [`src/data/projects.json`](src/data/projects.json), filterable by technology.
- **Contact form** powered by [EmailJS](https://www.emailjs.com/), with client-side validation and a lazily loaded [Google reCAPTCHA](https://developers.google.com/recaptcha) that only loads when scrolled into view.
- **Animations** via [Motion](https://motion.dev/) (scroll-triggered reveals, hero typing effect, animated loader).
- **Performance & SEO** — build-time prerendering (static HTML in `#root` for crawlers/first paint), WebP images with fallbacks, image preloading, lazy loading, code-split vendor chunks, structured data (JSON-LD), Open Graph / Twitter cards, `sitemap.xml` and `robots.txt`.
- **Accessibility** — semantic sections, ARIA roles/labels, keyboard-focusable controls and reduced-motion-friendly interactions.

## Tech Stack

| Area       | Technologies                                                                   |
| ---------- | ------------------------------------------------------------------------------ |
| Framework  | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite](https://vite.dev/)                                                      |
| Styling    | [Tailwind CSS](https://tailwindcss.com/) + [Sass](https://sass-lang.com/)      |
| Routing    | [React Router](https://reactrouter.com/)                                       |
| Animation  | [Motion](https://motion.dev/)                                                  |
| Icons      | [React Icons](https://react-icons.github.io/react-icons/)                      |
| Email      | [EmailJS](https://www.emailjs.com/)                                            |
| Spam guard | [react-google-recaptcha](https://github.com/dozoisch/react-google-recaptcha)   |
| Deployment | [GitHub Pages](https://pages.github.com/) via GitHub Actions                   |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [Yarn](https://yarnpkg.com/) (the project uses Yarn scripts)

### Installation

```bash
git clone https://github.com/trencho/trencho.github.io.git
cd trencho.github.io
yarn install
```

### Environment variables

The contact form needs EmailJS and reCAPTCHA credentials. Create a `.env` file in the project
root (it is git-ignored):

```env
VITE_CONTACT_EMAIL=your@email.com
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

In development, missing variables log a warning; in a production build they cause a hard error
(see [`src/config/environment.ts`](src/config/environment.ts)).

### Development

```bash
yarn dev        # start the Vite dev server on http://localhost:3000
```

## Scripts

| Script            | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `yarn dev`        | Start the local dev server (HMR) on port 3000.          |
| `yarn build`      | Type-check, build to `build/`, then prerender `#root`.  |
| `yarn preview`    | Serve the production build locally.                     |
| `yarn lint`       | Run ESLint across the project.                          |
| `yarn format`     | Format the codebase with Prettier.                      |
| `yarn test`       | Run the [Vitest](https://vitest.dev/) suite once.       |
| `yarn test:watch` | Run Vitest in watch mode.                               |
| `yarn deploy`     | Build and publish `dist/` to GitHub Pages (`gh-pages`). |

## Testing

Tests use [Vitest](https://vitest.dev/) with [Testing Library](https://testing-library.com/)
in a `jsdom` environment (setup in [`src/test/setup.ts`](src/test/setup.ts)). Specs live next to
the code as `*.test.ts(x)` and cover utility helpers, the `src/data/*.json` content and key
component behaviour (e.g. the skills category filter). Run them with `yarn test` (or
`yarn test:watch`); CI runs the suite before every build.

## Project Structure

```
├── public/                 # Static assets (images, CV, robots.txt, sitemap.xml)
│   ├── image-skills/        # Skill & certificate logos
│   └── image-projects/      # Project screenshots
├── src/
│   ├── components/          # UI components (Hero, About, Skills, Projects, Contact, …)
│   ├── config/              # Environment configuration & validation
│   ├── context/             # Theme context + provider
│   ├── data/                # projects.json, skills.json, certificates.json (content)
│   ├── hooks/               # useTheme, useIntersectionObserver
│   ├── services/            # emailService (EmailJS integration)
│   ├── styles/              # Global Sass styles
│   ├── utils/               # Animation variants, scroll, toast & theme helpers
│   ├── App.tsx              # Routing + providers + loader gate
│   └── main.tsx             # React entry point
├── index.html              # HTML shell with SEO / social meta & preloads
└── vite.config.ts          # Vite build config (aliases, chunking)
```

## Deployment

Pushes to the `master` branch trigger the
[Deploy Portfolio to GitHub Pages](.github/workflows/deploy.yml) workflow, which installs
dependencies, builds the site (injecting the `VITE_*` secrets) and publishes the `build/`
directory to GitHub Pages. You can also deploy manually with `yarn deploy`.

Configure the required secrets in the repository settings: `VITE_CONTACT_EMAIL`,
`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`,
`VITE_RECAPTCHA_SITE_KEY` and a `PERSONAL_TOKEN` for publishing.

## License

This project is private and not licensed for reuse. © Aleksandar Trenchevski.
