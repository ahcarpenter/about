import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { LANGUAGE_COLORS } from "@/lib/language-colors";

/**
 * Guards the design tokens in app/globals.css. Three classes of bug this
 * catches, all of which slipped past a hand contrast-check during the palette
 * rework:
 *   1. a token that fails WCAG AA against a background it actually lands on
 *      (notably composited ones like the footer's `bg-paper/60`),
 *   2. a token outside the sRGB gamut, which renders differently on P3 than
 *      its in-gamut siblings,
 *   3. drift between --color-page and the two places it has to be mirrored as
 *      a literal (app/icon.svg, app/layout.tsx `themeColor`).
 *
 * The color math lives here rather than in lib/ because nothing at runtime
 * needs it.
 */

const ROOT = path.resolve(import.meta.dirname, "..");
const read = (p: string) => readFileSync(path.join(ROOT, p), "utf8");

/** Every file under the given repo-relative directories, recursively. */
const walk = (dirs: string[]): string[] =>
  dirs.flatMap((dir) =>
    readdirSync(path.join(ROOT, dir), { withFileTypes: true }).flatMap((entry) => {
      const rel = `${dir}/${entry.name}`;
      return entry.isDirectory() ? walk([rel]) : [rel];
    }),
  );

type Oklch = [L: number, C: number, H: number];
type Rgb = [r: number, g: number, b: number];

/** OKLCH -> linear sRGB. Values outside [0,1] mean out of gamut. */
function toLinearSrgb([L, C, H]: Oklch): Rgb {
  const hRad = (H * Math.PI) / 180;
  const a = C * Math.cos(hRad);
  const b = C * Math.sin(hRad);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

function toSrgb8(color: Oklch): Rgb {
  return toLinearSrgb(color).map((v) => {
    const c = clamp01(v);
    const encoded = c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055;
    return Math.round(encoded * 255);
  }) as Rgb;
}

const toHex = (color: Oklch) =>
  `#${toSrgb8(color)
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("")}`;

function relativeLuminance([r, g, b]: Rgb): number {
  const [lr, lg, lb] = [r, g, b].map((v) => {
    const c = v / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
}

function contrastRatio(fg: Rgb, bg: Rgb): number {
  const [hi, lo] = [relativeLuminance(fg), relativeLuminance(bg)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/** Simple alpha composite, for tokens rendered over a translucent bed. */
const over = (fg: Rgb, bg: Rgb, alpha: number) =>
  fg.map((v, i) => Math.round(v * alpha + bg[i] * (1 - alpha))) as Rgb;

const oklabOf = ([L, C, H]: Oklch): Rgb => {
  const hRad = (H * Math.PI) / 180;
  return [L, C * Math.cos(hRad), C * Math.sin(hRad)];
};

const deltaE = (a: Oklch, b: Oklch) => Math.hypot(...oklabOf(a).map((v, i) => v - oklabOf(b)[i]));

/** Deliberately strict: a reformatted @theme block should fail loudly here. */
function parseThemeTokens(): Record<string, Oklch> {
  const css = read("app/globals.css");
  const block = /@theme static \{([\s\S]*?)\n\}/.exec(css);
  expect(block, "could not locate the `@theme static { ... }` block").not.toBeNull();

  const tokens: Record<string, Oklch> = {};
  for (const [, name, args] of block![1].matchAll(/--color-([a-z-]+):\s*oklch\(([^)]+)\)/g)) {
    const parts = args.trim().split(/\s+/).map(Number);
    expect(parts, `--color-${name} is not three numbers`).toHaveLength(3);
    tokens[name] = parts as Oklch;
  }
  return tokens;
}

const TOKENS = parseThemeTokens();
const rgb = (name: string): Rgb => {
  const token = TOKENS[name];
  if (!token) throw new Error(`no --color-${name} in the @theme block`);
  return toSrgb8(token);
};

describe("theme tokens", () => {
  it("parses every color token out of the @theme block", () => {
    expect(Object.keys(TOKENS).sort()).toEqual([
      "accent",
      "accent-deep",
      "accent-soft",
      "deep",
      "faint",
      "ink",
      "line",
      "line-strong",
      "mark",
      "muted",
      "page",
      "paper",
      "soft",
      "surface",
    ]);
  });

  it.each(Object.entries(TOKENS))("--color-%s is inside the sRGB gamut", (_name, color) => {
    for (const channel of toLinearSrgb(color)) {
      expect(channel).toBeGreaterThanOrEqual(-0.0005);
      expect(channel).toBeLessThanOrEqual(1.0005);
    }
  });

  // Only pairs that actually occur in the markup. `min` is the WCAG level the
  // pair has to clear: 4.5 for body text, 3 for large text and decoration.
  const PAIRS: Array<[label: string, fg: Rgb, bg: Rgb, min: number]> = [
    ["accent on page (body links)", rgb("accent"), rgb("page"), 4.5],
    ["accent on surface (card hover)", rgb("accent"), rgb("surface"), 4.5],
    ["muted on page (chips, timestamps)", rgb("muted"), rgb("page"), 4.5],
    // Footer.tsx and ChatStub.tsx put text on `bg-paper/60` over the page.
    ["muted on paper/60 (footer)", rgb("muted"), over(rgb("paper"), rgb("page"), 0.6), 4.5],
    ["soft on page (body copy)", rgb("soft"), rgb("page"), 4.5],
    ["surface on deep (.btn-primary label)", rgb("surface"), rgb("deep"), 4.5],
    ["ink on mark (.btn-primary:hover label)", rgb("ink"), rgb("mark"), 4.5],
    ["surface on accent (.msg-me)", rgb("surface"), rgb("accent"), 4.5],
    ["accent-deep on accent-soft (nav pill)", rgb("accent-deep"), rgb("accent-soft"), 4.5],
    ["faint on surface (card captions)", rgb("faint"), rgb("surface"), 4.5],
    ["ink on page", rgb("ink"), rgb("page"), 4.5],
  ];

  it.each(PAIRS)("%s clears its contrast floor", (_label, fg, bg, min) => {
    expect(contrastRatio(fg, bg)).toBeGreaterThanOrEqual(min);
  });

  // PAIRS proves two tokens are compatible; it does not prove the stylesheet
  // pairs them that way. This catches e.g. a `.btn-primary:hover` that keeps a
  // surface label when its fill moves to --color-mark (3.28:1).
  it("keeps every rule that sets both a token fill and a token label legible", () => {
    const css = read("app/globals.css").replace(/\/\*[\s\S]*?\*\//g, "");
    const rules = [...css.matchAll(/([^{}]+)\{([^}]*)\}/g)].flatMap(([, selector, body]) => {
      const bg = /(?:^|[\s;])background(?:-color)?:\s*var\(--color-([a-z-]+)\)/.exec(body);
      const fg = /(?:^|[\s;])color:\s*var\(--color-([a-z-]+)\)/.exec(body);
      return bg && fg ? [{ selector: selector.trim(), bg: bg[1], fg: fg[1] }] : [];
    });

    // If a refactor renames these rules, fail rather than silently check nothing.
    expect(rules.length).toBeGreaterThanOrEqual(5);

    for (const { selector, bg, fg } of rules) {
      expect(contrastRatio(rgb(fg), rgb(bg)), `${selector} (${fg} on ${bg})`).toBeGreaterThanOrEqual(
        4.5,
      );
    }
  });

  it("keeps --color-page in sync with its two hardcoded mirrors", () => {
    // Neither can reference the token: icon.svg is served before any CSS
    // exists, and `themeColor` must be a literal in the metadata object.
    const page = toHex(TOKENS.page);
    expect(page).toBe("#e2e1dc");

    const iconFill = /<rect[^>]*\sfill="(#[0-9a-f]{6})"/i.exec(read("app/icon.svg"));
    expect(iconFill?.[1].toLowerCase(), "app/icon.svg background fill").toBe(page);

    const themeColor = /themeColor:\s*"(#[0-9a-fA-F]{6})"/.exec(read("app/layout.tsx"));
    expect(themeColor?.[1].toLowerCase(), "app/layout.tsx themeColor").toBe(page);
  });

  it("has no raw Tailwind palette classes left in the markup", () => {
    // The palette lives entirely in @theme, so a stock Tailwind color would be
    // an untracked value that silently stops following the tokens.
    const stock =
      /\b(?:bg|text|border|outline|fill|stroke|divide|ring|decoration|shadow)-(?:black|white|slate|gray|grey|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)\b/;

    // Image outlines are the one deliberate exception: they must be pure
    // black at 10%, never a themed neutral. A tinted outline picks up the
    // surface under it and reads as dirt on the image edge, so these must NOT
    // follow --color-ink even while it happens to be pure black.
    const imageOutline = /\boutline-(?:black|white)\/\d+\b/g;

    const offenders = walk(["app", "components"])
      .filter((file) => file.endsWith(".tsx"))
      .filter((file) => stock.test(read(file).replace(imageOutline, "")));

    expect(offenders).toEqual([]);
  });
});

describe("language dot colors", () => {
  const parsed = Object.entries(LANGUAGE_COLORS).map(([language, value]) => {
    const args = /^oklch\(([^)]+)\)$/.exec(value);
    expect(args, `${language} is not a bare oklch() value`).not.toBeNull();
    return [language, args![1].trim().split(/\s+/).map(Number) as Oklch] as const;
  });

  it.each(parsed)("%s is inside the sRGB gamut", (_language, color) => {
    for (const channel of toLinearSrgb(color)) {
      expect(channel).toBeGreaterThanOrEqual(-0.0005);
      expect(channel).toBeLessThanOrEqual(1.0005);
    }
  });

  it.each(parsed)("%s is legible on a card", (_language, color) => {
    // Decorative dots beside a text label, so the large-text floor applies.
    expect(contrastRatio(toSrgb8(color), rgb("surface"))).toBeGreaterThanOrEqual(3);
  });

  it("keeps every pair of dots visually distinct", () => {
    // The Linguist brand set this replaced bottomed out at 0.031.
    for (let i = 0; i < parsed.length; i++) {
      for (let j = i + 1; j < parsed.length; j++) {
        const [aName, a] = parsed[i];
        const [bName, b] = parsed[j];
        expect(deltaE(a, b), `${aName} vs ${bName}`).toBeGreaterThan(0.08);
      }
    }
  });
});
