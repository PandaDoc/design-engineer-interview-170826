/**
 * Prefixes a `public/` file path with the deploy base path.
 *
 * On GitHub Pages this site lives under `/<repo-name>/`, and Next.js does NOT
 * auto-prefix plain `src` strings — so always reference public files through
 * this helper: `<img src={asset("/screenshot.png")} />`.
 */
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
