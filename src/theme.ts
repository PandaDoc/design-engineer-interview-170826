/**
 * Design tokens. Every color, radius, and shadow in the UI comes from here —
 * components read them via the styled-components theme:
 *
 *   color: ${({ theme }) => theme.color.ink};
 *
 * Type scale (weights 400/600/700, tracking tightens as size grows):
 *   display  60/72  -1.2px  700   (hero H1; 40/48 under bp.md)
 *   h2       36/44  -0.72px 700   (section headings; 32/39 in bands)
 *   lead     20/30          400   (hero subtitle)
 *   body     16/24          400
 *   small    14/20          400-600
 *   caption  13/20          400   (notes, metadata)
 *   micro    11/16  +0.06em 500   (uppercase labels)
 *
 * Spacing rhythm: sections pad 96px vertical, section gap 64, card gap 24–32,
 * text stacks 8/12/16/24.
 */
export const theme = {
  color: {
    // Text — warm stone ramp
    ink: "#1c1917",
    inkSoft: "#44403c",
    body: "#57534e",
    muted: "#79716b",
    faint: "#a8a29e",
    // Surfaces
    surface: "#ffffff",
    surfaceAlt: "#fafaf9",
    sand: "#f8f5f3",
    sandHover: "#f0ebe4",
    // Borders
    border: "#e4e4e4",
    borderWarm: "#ede7de",
    borderSand: "#e4ddd6",
    borderStrong: "#d7d3d0",
    // Brand greens
    brand: "#155643",
    brandHover: "#196b53",
    brandBright: "#248567",
    brandTint: "#e6f4f0",
    brandFoam: "#bce7d3",
    // Accents
    purple: "#6453cf",
    blue: "#2167c6",
    bubbleFrom: "#4f46e5",
    bubbleTo: "#6d28d9",
    // Dark band
    dark: "#242424",
    darkPanel: "#18181b",
  },
  font: {
    sans: "var(--font-inter), system-ui, -apple-system, sans-serif",
    mono: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace",
  },
  radius: {
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    pill: "999px",
  },
  shadow: {
    xs: "0 1px 2px rgba(23, 20, 18, 0.05)",
    sm: "0 1px 3px rgba(23, 20, 18, 0.08)",
    md: "0 4px 16px rgba(23, 20, 18, 0.08)",
    lg: "0 8px 24px rgba(23, 20, 18, 0.08)",
    lift: "0 12px 28px rgba(23, 20, 18, 0.10)",
  },
  bp: {
    sm: "600px",
    md: "768px",
    lg: "900px",
  },
} as const;

export type Theme = typeof theme;

/**
 * The (fictional) product this site markets. Not a design token, but the one
 * string every page mentions — renaming the product is a one-line change.
 */
export const PRODUCT_NAME = "Inkflow";
