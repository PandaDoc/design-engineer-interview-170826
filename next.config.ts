import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure SSG: `next build` emits static HTML/CSS/JS into `out/` (GitHub Pages artifact).
  output: "export",
  // Directory-style output (`connectors/index.html`) — the robust shape for static hosts.
  trailingSlash: true,
  // Project Pages sites live under /<repo-name>; the deploy workflow injects BASE_PATH.
  basePath: process.env.BASE_PATH ?? "",
  // `public/` URLs are NOT auto-prefixed with basePath — client code reads this via asset().
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH ?? "",
  },
  // next/image default loader requires a server; not available with `output: 'export'`.
  images: {
    unoptimized: true,
  },
  // SWC transform for styled-components: stable class names + SSR support.
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
