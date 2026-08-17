# Inkflow — prototyping scaffold

A small, self-contained marketing site for a fictional document-automation product. It's a working design system in miniature: typed theme tokens, a base component kit, and two composed pages to build on.

## Quickstart

1. Click **Use this template** on GitHub and create the repo in your own account.
2. Clone it, then:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Static export → `out/` |
| `npm run lint` | ESLint |
| `npm test` | Vitest + React Testing Library (`test:watch` to watch) |

## Where things live

- `src/theme.ts` — design tokens; the type scale and spacing rhythm are documented at the top.
- `src/components/` — the base kit. Browse it live at [`/components`](http://localhost:3000/components).
- `src/sections/` — the landing-page sections.
- `src/app/` — routes: `/` (landing), `/connectors` (directory with live search), `/components` (kit inventory).
- `AGENTS.md` — conventions for you and your AI tools.

## CI & deploy

Every push runs **lint + tests** (`.github/workflows/ci.yml`). Pushes to `main` additionally **deploy to GitHub Pages** once both pass:

1. One-time setup in your repo: **Settings → Pages → Source: GitHub Actions**.
2. Push to `main` — the site appears at `https://<username>.github.io/<repo>/` in about two minutes.

> Note: if your repo is named `<username>.github.io`, the site is served from the domain root — remove the `BASE_PATH` env from the deploy job in that case.

`npm run build` locally emits the same static site into `out/` — plain HTML/CSS/JS, deployable to any static host. When serving under a subpath, set `BASE_PATH=/<repo-name>` at build time.

## Starting points

- The nav header has a marked insertion point for new links — a use-cases page is the natural first addition.
- The connector cards' **Connect / Learn more** buttons are no-ops waiting for a detail page.
- `/components` shows everything you have to build with.
