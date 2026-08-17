import type { SVGProps } from "react";

/**
 * Every mark in the scaffold is an inline SVG component — no image files, no
 * hotlinks, nothing to basePath-prefix. Product and tool marks are deliberately
 * abstract: this site markets a fictional product.
 */

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const svgProps = (size: number, rest: Omit<IconProps, "size">) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true as const,
  ...rest,
});

/** The Inkflow glyph: a folded page with an ink drop. */
export function ProductMark({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <path
        d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path d="M14 3v4a1 1 0 0 0 1 1h3" fill="#fff" opacity="0.45" />
      <circle cx="10.5" cy="14.5" r="2.5" fill="#fff" opacity="0.85" />
    </svg>
  );
}

/** Four-point spark — the assistant avatar in the chat window. */
export function SparkMark({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <path
        d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ── Abstract tool marks (stand-ins for third-party logos) ─────────────── */

export function ToolMarkAsterisk({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <path
        d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ToolMarkOrbit({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

export function ToolMarkPrism({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <path
        d="M12 3 21 19H3L12 3Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M12 10v9" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

export function ToolMarkBrackets({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <path
        d="M9 4 4 12l5 8M15 4l5 8-5 8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── UI icons (ported from the reference; generic shapes) ──────────────── */

export function SearchIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <path
        d="M21 21l-4.2-4.2M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <path
        d="M4 12h16m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SendIcon({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <path
        d="M12 19V5m0 0-6 6m6-6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PersonIcon({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlusCircleIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 8v8M8 12h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MinusCircleIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function GlobeIcon({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function ChevronDownIcon({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Footer glyphs (neutral stand-ins for store/social marks) ──────────── */

export function DesktopGlyph({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M9 20h6M12 16v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MobileGlyph({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <rect x="7" y="2" width="10" height="20" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function GlyphRing({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export function GlyphDots({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <circle cx="6" cy="12" r="2.4" fill="currentColor" />
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
      <circle cx="18" cy="12" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function GlyphWave({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <path
        d="M3 12c2.25-4 4.5-4 6.75 0S14.25 16 16.5 12 20.25 8 21 9.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GlyphGrid({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" fill="currentColor" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" fill="currentColor" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" fill="currentColor" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" fill="currentColor" />
    </svg>
  );
}

export function GlyphDiamond({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...svgProps(size, rest)}>
      <rect
        x="12"
        y="3.5"
        width="12"
        height="12"
        rx="2"
        transform="rotate(45 12 3.5)"
        stroke="currentColor"
        strokeWidth="2.2"
      />
    </svg>
  );
}
