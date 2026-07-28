import type { Source } from "@/lib/content/feed";

/**
 * Brand colors for the source marks in the activity feed. Kept as sRGB hex
 * outside the OKLCH token system for the same reason as the language colors in
 * lib/language-colors.ts: they belong to third parties, not to this site's
 * palette, so they must not drift when the theme changes.
 *
 * `reading` and `all` are deliberately absent — they aren't brands, so their
 * icons inherit `currentColor` from the surrounding control.
 *
 * Substack is deepened from its official #ff6719. In the feed the mark
 * replaces the source name outright, which makes it the only indicator of
 * where a row came from, so WCAG 1.4.11 asks for 3:1. Official orange reaches
 * only 2.79:1 on --color-surface, 2.23:1 on --color-page and 2.09:1 on the
 * active filter pill. Holding its OKLCH hue and chroma and dropping lightness
 * 0.698 -> 0.60 gives 4.14 / 3.30 / 3.10 — the lightest tone that clears 3:1
 * on all three beds, so it stays recognisably Substack orange.
 */
const SOURCE_BRAND: Partial<Record<Source, string>> = {
  github: "#181717",
  linkedin: "#0a66c2",
  substack: "#db4500",
};

/** The brand color for a source, or undefined when it should inherit. */
export function sourceBrandColor(source: string): string | undefined {
  return SOURCE_BRAND[source as Source];
}
