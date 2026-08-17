<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# What this is

A static marketing-site scaffold for a fictional product ("Inkflow"). You extend it — the existing code is the style guide: read a section, a component, and `src/theme.ts` before writing anything.

## Map

- `src/theme.ts` — all design tokens (+ `PRODUCT_NAME`). Type scale and spacing rhythm are documented in its header comment.
- `src/components/` — the base kit (Button, Chip, Card, Accordion, …).
- `src/sections/` — landing-page bands composed from the kit.
- `src/app/` — routes. `layout.tsx` is a Server Component — never add `'use client'` there.
- `src/app/lib/registry.tsx` + `src/app/providers.tsx` — styled-components SSR plumbing. Don't touch.
- `/components` route — living inventory of every kit component and token.

## Styling rules

- **styled-components v6 only.** No Tailwind, no CSS Modules, no inline `style={{}}` objects, no injected `<style>` strings. (Deliberate choice: stable, boring, well-documented.)
- **Styles are co-located.** `styled`/`keyframes` definitions live in the same file as the component, above the JSX — no separate `.styles.ts` files.
- Tokens come from the theme: `${({ theme }) => theme.color.ink}`. Never hardcode a hex that exists in `src/theme.ts`.
- Styling props are transient: `$variant`, `$size` — never plain props (they'd leak to the DOM).
- Animations use the `keyframes` helper and always carry a `prefers-reduced-motion: reduce` guard.
- Any file importing `styled`/`keyframes` starts with `'use client'`.

## SSG constraints

The build is a pure static export (`output: 'export'`): no API routes, no Server Actions, no middleware, no `cookies()`/`headers()`, no runtime data fetching. Client-side state and effects are fine (see `src/app/connectors/page.tsx` for the pattern). New dynamic routes need `generateStaticParams`.

## Assets

Icons and illustrations are inline SVG components (`src/components/icons.tsx`) — add new ones there. Raster files go in `public/` and MUST be referenced through `asset()` from `src/app/lib/asset.ts` (GitHub Pages serves this site under a subpath; bare `/foo.png` URLs 404 there). Never hotlink external assets.

## Testing

Vitest + React Testing Library, jsdom environment. **Unit tests cover the base kit only** (`src/components/`, colocated `X.test.tsx`) — pages and sections are verified by the build and a manual pass, not unit tests. Rules:

- **Every new component in `src/components/` needs a colocated `X.test.tsx`.** This is enforced: `kit-coverage.test.ts` fails the suite for any untested component.
- Render through `renderWithTheme` from `@/test-utils` — styled components need the ThemeProvider.
- Query by role/label (`screen.getByRole("button", { name: /…/i })`); test IDs are a last resort.
- Simulate interactions with `@testing-library/user-event`, not `fireEvent`.
- Prefer one test per user scenario over micro-tests (see `src/components/Accordion.test.tsx`).
- `npm test` runs once; `npm run test:watch` watches.

## Patterns to crib

- Interactive state under SSG: `src/app/connectors/page.tsx`
- Stateful component: `src/components/Accordion.tsx`
- Parent-hover-child styling: `src/components/ConnectorCard.tsx`
- Interaction test: `src/components/Accordion.test.tsx`

## Verify

`npm test` and `npm run build` must pass before you're done — the build emits the static site into `out/`. CI mirrors this: every push runs lint + tests; pushes to `main` also deploy to GitHub Pages.
