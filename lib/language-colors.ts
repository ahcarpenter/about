/**
 * The language dot on repo cards. Derived from the site palette in
 * app/globals.css rather than GitHub Linguist's brand colors: four families
 * (accent blue, mark magenta, deep plum, neutral) x four lightness steps.
 * Plum is separated from magenta by chroma, not hue — they are only 15 deg
 * apart and collapse into each other at high chroma.
 *
 * Kept as literal oklch() rather than --color-* tokens: this is a
 * presentational ramp, not a design token set, and literals cannot be
 * tree-shaken out of a `style` attribute.
 *
 * Min pairwise OKLab dE is 0.090 — the Linguist set it replaces was 0.031,
 * since those are per-language brand marks and were never designed to work as
 * a categorical scale. All values are in sRGB gamut and >= 3:1 on
 * --color-surface. Guarded by lib/language-colors.test.ts.
 */
export const LANGUAGE_COLORS: Record<string, string> = {
  // accent blue 264.21 — TypeScript is --color-accent exactly
  Python: "oklch(0.3 0.19 264.21)",
  TypeScript: "oklch(0.435 0.2801 264.21)",
  Go: "oklch(0.56 0.22 264.21)",
  JavaScript: "oklch(0.645 0.17 264.21)",
  // mark magenta 334.13 — Rust is --color-mark exactly
  Ruby: "oklch(0.36 0.15 334.13)",
  Elixir: "oklch(0.47 0.19 334.13)",
  Swift: "oklch(0.57 0.21 334.13)",
  Rust: "oklch(0.6699 0.185 334.13)",
  // deep plum 319.17, low chroma — Java is --color-deep exactly
  Java: "oklch(0.3253 0.0583 319.17)",
  Kotlin: "oklch(0.44 0.07 319.17)",
  "C#": "oklch(0.545 0.08 319.17)",
  "C++": "oklch(0.65 0.085 319.17)",
  // neutral 97.36 — C is --color-ink exactly
  C: "oklch(0 0 0)",
  Shell: "oklch(0.4 0.013 97.36)",
  HTML: "oklch(0.52 0.014 97.36)",
  CSS: "oklch(0.64 0.014 97.36)",
};

/** The dot color for a repo's primary language, falling back to a neutral. */
export function languageColor(language: string | null): string {
  return (language && LANGUAGE_COLORS[language]) || "oklch(0.52 0.014 97.36)";
}
