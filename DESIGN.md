---
name: Andrew H. Carpenter
description: A living self-portrait — paper permanence, visible liveness, and a voice that answers back.
colors:
  surface: "oklch(0.985 0.004 97.36)"
  page: "oklch(0.9091 0.0068 97.36)"
  paper: "oklch(0.868 0.009 97.36)"
  line: "oklch(0.828 0.011 97.36)"
  line-strong: "oklch(0.762 0.013 97.36)"
  faint: "oklch(0.545 0.014 97.36)"
  muted: "oklch(0.47 0.014 97.36)"
  soft: "oklch(0.4 0.013 97.36)"
  ink: "oklch(0 0 0)"
  accent: "oklch(0.435 0.2801 264.21)"
  accent-deep: "oklch(0.365 0.2536 264.21)"
  accent-soft: "oklch(0.89 0.05 264.21)"
  mark: "oklch(0.6699 0.185 334.13)"
  deep: "oklch(0.3253 0.0583 319.17)"
typography:
  display:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 560
    lineHeight: 1.08
    letterSpacing: "-0.015em"
    fontVariation: "'SOFT' 40, 'WONK' 1"
  headline:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 560
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 560
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  lede:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  control:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  message:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.925rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.18em"
  meta:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  control: "8px"
  image: "0.5rem"
  card: "1rem"
  bubble: "1.1rem"
  bubble-tail: "0.3rem"
  pill: "999px"
spacing:
  gutter: "1.25rem"
  page-top: "3.5rem"
  page-top-sm: "5rem"
  section: "6rem"
  footer-gap: "6rem"
  timeline-step: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.surface}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0.5rem 1.15rem"
    height: "44px"
  button-mark:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0.5rem 1.15rem"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0.5rem 1.15rem"
    height: "44px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1.5rem"
  chip:
    backgroundColor: "{colors.page}"
    textColor: "{colors.muted}"
    typography: "{typography.meta}"
    rounded: "{rounded.pill}"
    padding: "0.15rem 0.6rem"
  nav-pill:
    backgroundColor: "transparent"
    textColor: "{colors.soft}"
    rounded: "{rounded.pill}"
    padding: "0.375rem 0.75rem"
  nav-pill-active:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-deep}"
    rounded: "{rounded.pill}"
    padding: "0.375rem 0.75rem"
  input-chat:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.625rem 1rem"
  msg-me:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    typography: "{typography.message}"
    rounded: "{rounded.bubble}"
    padding: "0.65rem 1rem"
  msg-bot:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    typography: "{typography.message}"
    rounded: "{rounded.bubble}"
    padding: "0.65rem 1rem"
---

# Design System: Andrew H. Carpenter

## Overview

**Creative North Star: "The Living Self-Portrait"**

The site is not a page about a person; it is the person, rendered. Three layers
compose the portrait and every design decision serves one of them. **The
likeness** — philosophy and story — is the drawn, deliberate part: serif,
paper, slow. **The pulse** — GitHub, Substack, LinkedIn, reading — is the proof
the subject is alive right now, fetched at build and never older than the last
deploy. **The voice** — chat with AI me — is the standing offer to stop reading
and just ask. A portrait that only had the likeness would be a résumé. One that
only had the pulse would be a feed reader. The design's job is to hold all
three in one frame without any of them looking pasted on.

That produces a specific material contradiction the system leans into rather
than resolves: paper permanence *plus* visible liveness. The ground is a warm
neutral paper stock (#E2E1DC) with a real grain overlay, set in a serif with
optical-size and softness axes engaged — an artifact that looks like it was
printed and will last. On top of it, things move: rows arrive from four live
sources, timeline dots settle and descriptions slide in as you scroll, a magenta
status dot breathes, typing indicators bounce. Nothing on the page may look like
a snapshot.

**The governing register is refined and restrained**, and it wins every tie.
Nothing performs at rest. There are no eyebrow labels over headings, no section
numbers, no decorative glyphs, no colored bars down the side of a card — a
heading carries its own section, and a quotation is recognisable without a
display-size quote mark. What remains is precise and engineered: mono for
measured values, a contrast-tested palette, the arithmetic written into the CSS
comments beside the tokens it justifies.

Restraint is not coldness. The system keeps exactly enough personality to read
as a person rather than a template — a wry portrait caption, italic blue in
every headline, magenta held back for the one invitation to talk — and it keeps
a real mechanical affordance in the controls, felt on contact rather than
announced at rest. The craft is the argument, and the visitor is here to judge
judgment.

**Key Characteristics:**

- One paper hue (97.36) carries every neutral, so no tint of the page ever
  drifts warm or cool against another.
- Serif display with italic-blue emphasis; monospace for every label, slug, and
  measurement; sans for all prose.
- Depth is physical rather than atmospheric — a hairline edge and a small
  offset, felt on contact, never a haze or a lifted slab.
- Blue for reading, plum for acting, magenta for talking. Never mixed.
- Motion is evidence of life, never decoration; all of it yields to
  `prefers-reduced-motion`.
- Nothing labels, numbers, or decorates what a heading already says.
- Light-mode only, and every token machine-tested for gamut and WCAG AA.

## Colors

A single warm paper hue carries the entire neutral stack, with three chromatics
that each own exactly one job — read, act, talk.

### Primary

- **Electric Ink** (`oklch(0.435 0.2801 264.21)` / #001ee7): Every link,
  emphasis run, italic in a display heading, and timeline date. Blue because it is the
  only chromatic in the palette that clears 4.5:1 as text on the page (6.85:1
  on page, 8.60:1 on surface). It is also the focus ring for the entire site.
- **Electric Ink Deep** (`oklch(0.365 0.2536 264.21)` / #0100c0): Link hover,
  and the label color on the active nav pill. Chroma is capped at the sRGB
  gamut edge for this lightness — raising it renders out-of-gamut on P3 and
  stops matching the sRGB anchor.
- **Electric Ink Soft** (`oklch(0.89 0.05 264.21)` / #cadbfd): The borderless
  active nav pill, the active feed filter, and the text-selection background.
  Held at L 0.89 rather than lighter because blue's maximum chroma above that
  is too pale to separate a borderless pill from the page.

### Secondary

- **Plum Black** (`oklch(0.3253 0.0583 319.17)` / #412a47): The primary button
  fill, and the darkest chromatic in the palette. Reads as near-black with a
  held breath of color; surface text on it is 12.22:1.

### Tertiary

- **Signal Magenta** (`oklch(0.6699 0.185 334.13)` / #d662c3): Solid shapes
  only — the chat CTA, the live status dot, source dots. The one color that
  means *conversation*. Its labels are ink, never white.

### Neutral

- **Surface** (`oklch(0.985 0.004 97.36)` / #fbfaf7): Raised paper — cards,
  inputs, the secondary button face.
- **Page** (`oklch(0.9091 0.0068 97.36)` / #e2e1dc): The stock everything is
  printed on. Mirrored as a literal in `app/icon.svg` and `themeColor`.
- **Paper** (`oklch(0.868 0.009 97.36)` / #d5d4cd): Recessed — the footer bed,
  the chat header, the offset block behind the portrait.
- **Rule** (`oklch(0.828 0.011 97.36)` / #c8c7bf): Every hairline border and
  divider at rest.
- **Rule Strong** (`oklch(0.762 0.013 97.36)` / #b4b2a9): Hovered card borders,
  the secondary button's edge, the timeline's vertical line.
- **Faint** (`oklch(0.545 0.014 97.36)` / #727067): De-emphasised captions on
  cards. Held at L 0.545 rather than 0.6 to keep 4.76:1 there.
- **Muted** (`oklch(0.47 0.014 97.36)` / #5d5b52): Metadata, timestamps, footer
  copy. Held at L 0.47 rather than 0.495, which reaches only 4.32:1 on the
  footer's paper/60 bed.
- **Soft** (`oklch(0.4 0.013 97.36)` / #494840): Body prose and secondary
  navigation. 7.02:1 on page.
- **Ink** (`oklch(0 0 0)` / #000000): Headings, primary text, and the label on
  any magenta fill. 16.04:1 on page.

### Named Rules

**The One Hue Rule.** Every neutral sits on hue 97.36 — the page background's
own hue — so surface, paper, rule, muted, and soft all read as tints and shades
of the same stock. A neutral introduced on any other hue breaks the paper.

**The Three Jobs Rule.** Blue reads, plum acts, magenta talks. Blue never fills
a button. Plum never carries a link. Magenta never appears as text or in more
than one element per viewport. Chromatics are never spent on ornament — a
display-size quote glyph, a decorative bar, a colored divider — because the
moment blue means "decoration" it stops meaning "read this". A visitor who
learns the code once should never be retaught it.

**The Ink-on-Magenta Rule.** White on Signal Magenta is 3.28:1 and is banned.
Ink on it is 6.39:1. Any label on a magenta fill is ink.

**The Test-Gated Palette Rule.** No color enters or changes without
`app/theme.test.ts` passing: inside sRGB (Lightning CSS silently clips
out-of-gamut values at build), clearing WCAG AA against the beds it actually
lands on, and `--color-page` still equal across `globals.css`, `icon.svg`, and
`themeColor`. The comments recording each contrast figure are part of the
token, not decoration — a value that moves without its comment moving is a bug.

## Typography

**Display Font:** Fraunces (with Iowan Old Style, Georgia, serif) — variable,
with the `SOFT`, `WONK`, and `opsz` axes loaded and italics available.
**Body Font:** Inter (with ui-sans-serif, system-ui, sans-serif).
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, SFMono-Regular).

**Character:** Fraunces is set at weight 560 with `SOFT 40, WONK 1` — softened
terminals and its idiosyncratic alternates on — so headings read as warm and
slightly odd rather than institutional. Inter carries every sentence without
personality, deliberately, so the serif keeps all of it. Plex Mono does the
machine work: kickers, timestamps, counts, verification lines. The three never
blur; if a run of text is neither a heading nor prose, it is mono.

### Hierarchy

- **Display** (560, `3rem`–`4.5rem`, 1.08, -0.015em): Page-owning headlines
  only — the hero name, and each page's h1. Always `text-wrap: balance`, always
  with one italic Electric Ink run inside it.
- **Headline** (560, `1.875rem`–`2.25rem`, 1.08): Section headings under a
  kicker on the home page.
- **Title** (560, `1.5rem`–`1.875rem`, 1.08): Principle names, timeline event
  titles, card headings.
- **Lede** (400, `1.125rem`, 1.625, Soft): The one paragraph under each h1.
  Capped near 36rem so it never runs past comfortable measure.
- **Body** (400, `1rem`, 1.625, Soft): All prose. `text-wrap: pretty` globally,
  so no paragraph ends on an orphan.
- **Label** (500 mono, `0.75rem`, 0.18em, uppercase, Muted): The heading over a
  column of links — the footer's "Pages" and "Elsewhere". It names a *group of
  items*; it is never an eyebrow over a heading.
- **Meta** (400 mono, `0.75rem`, Muted): Timestamps, star counts, source names,
  copyright, the Keybase verification line.
- **Control** (600, `0.9rem`): Button labels only. The one place weight goes
  above 500 in the sans.
- **Message** (400, `0.925rem`, 1.55): Chat bubble text — a half-step under body
  because a bubble is a shorter measure than a paragraph.

### Named Rules

**The Italic Emphasis Rule.** Emphasis inside a display heading is Fraunces
italic at weight 500 in Electric Ink — "How I try to *think*", "Andrew
*Carpenter*". This is the site's signature typographic gesture. One per
heading; never bold, never underlined, never a second color.

**The Mono Means Machine Rule.** Monospace marks anything the site measured,
fetched, or stamped: dates, counts, sources, slugs, hashes. Prose never takes
mono for flavor, and a machine value never takes the sans.

**The No Eyebrow Rule.** Nothing is labelled above a heading. No kicker, no
eyebrow, no category slug, and no `01 / 02 / 03` sequence numbering unless the
order itself is information the reader needs. If a heading needs a label to
explain what section it starts, the heading is the thing to fix. Mono labels
survive only where they head an actual list of items.

**The No Faked Weight Rule.** `font-synthesis: none` is set globally. A missing
weight or style must fail visibly rather than render browser-faked — if a
heading looks wrong, the font did not load, and that is information.

## Layout

A single centered column, widened or narrowed by what the page is for.
**Feed pages take 64rem** (`max-w-5xl`: home, header, footer), **reading pages
take 48rem** (`max-w-3xl`: philosophy, story), and **the conversation takes
42rem** (`max-w-2xl`: chat). Nothing is full-bleed; the paper always has
margins.

The gutter is a constant `1.25rem` (20px) at every width, so the text block
never touches the edge on a phone. Pages open at `3.5rem` top padding, `5rem`
from the `sm` breakpoint up. Home-page sections are separated by `5rem`, the
timeline steps by `4rem`, and the footer is pushed off by `6rem`.

The grid appears in only three places, and each is a real content shape rather
than a layout habit: the hero splits `1.2fr / 0.8fr` at `md` so the portrait
sits beside the name; the project highlights run two columns at `sm` and three
at `lg`; the footer runs three columns at `sm`. Everything else is one column
that simply gets more air.

Breakpoints are Tailwind's defaults — `sm` 640px, `md` 768px, `lg` 1024px — and
the site is designed at the narrow end first: the header nav wraps rather than
collapsing to a hamburger, the CTA drops the word "with me" below `sm`, and
every interactive target keeps a 44px hit area even where its face is smaller.

### Named Rules

**The Width-By-Purpose Rule.** Container width states what the page wants from
you: 64rem to scan, 48rem to read, 42rem to talk. Do not standardize them.

**The Hidden 44 Rule.** Faces may be smaller than 44px; hit areas may not.
Buttons extend with a fixed 44px `::after` band, pills and links with negative
`before:-inset-y-*` insets. Vertical extension only — controls sit side by side,
so growing horizontally collides.

## Elevation & Depth

**Depth is physical rather than atmospheric — and it is quiet.** The model is
an object resting on paper, not a card floating in fog, but the object announces
itself only on contact. The primary vocabulary is a hairline edge: a solid 1px
band of the face color mixed 74% toward black sits directly under every button,
with a 1px border in the same value around it. Press and the face travels 1px
down onto that edge until it is fully seated; hover and it rises 1px off it. The
bottom of the assembly never moves, so nothing reflows. At rest the whole
assembly reads as a hairline, not a slab. The portrait uses the same logic — a
Paper block with a Rule Strong border offset 2px down and right, the depth of a
mounted print rather than a dropped card.

Soft shadow is the secondary vocabulary and never the statement. Cards carry a
barely-there ambient pair at rest and deepen it slightly on hover while rising
1px. That is the full extent of atmosphere in the system. Where the system needs
to say "this is above that" without motion, it uses tonal layering instead —
Surface above Page above Paper, all on the same hue.

### Shadow Vocabulary

- **Card ambient** (`0 1px 2px color-mix(in oklab, var(--color-ink) 4%, transparent), 0 6px 24px -12px color-mix(in oklab, var(--color-ink) 16%, transparent)`):
  Every card at rest. Deliberately near-invisible; it separates surface from
  page without announcing itself.
- **Card lift** (`0 1px 3px color-mix(in oklab, var(--color-ink) 5%, transparent), 0 10px 28px -14px color-mix(in oklab, var(--color-ink) 18%, transparent)`):
  Interactive cards on hover, paired with `translateY(-1px)` and a border shift
  to Rule Strong.
- **Control edge, rest** (`0 1px 0 var(--btn-edge)`): The hairline band under
  every button.
- **Control edge, hover** (`0 2px 0 var(--btn-edge)`): Grows 1px as the face
  rises 1px.
- **Control edge, press** (`0 0 0 var(--btn-edge)`): Gone — the face has
  travelled down onto its own edge and is fully seated.

### Named Rules

**The Edge-From-Face Rule.** A button's edge is always
`color-mix(in oklab, <its face token> 74%, black)`, never a hand-picked second
literal. The edge follows the token so it cannot drift when the palette moves.

**The Still Bottom Rule.** Button travel is symmetric: the face moves and the
edge compensates, so the bottom of the assembly holds still through hover and
press. Layout never shifts on interaction.

**The Travel-Not-Tint Rule.** Hover on a button is movement only — no color
change — so a variant reads as one color in every state. Color changes are
reserved for links, pills, and text.

**The Hairline Depth Rule.** Depth is measured in single pixels. An edge, an
offset, or a hover rise above 2px is a costume; if an element needs to read as
higher than its neighbours, layer it tonally (Surface over Page over Paper)
rather than lifting it further.

## Shapes

Three radii, each tied to a class of thing. **Controls are 8px** — buttons and
the boundary of anything that behaves like a key. **Containers are 1rem** —
cards, the feed list, the chat frame; 2xl (1rem) on the portrait mount, with the
image itself at 0.5rem inside its 2px paper margin. **Anything that filters or
tags is a full pill** (999px) — nav links, feed filters, source chips, the chat
input, the status dots.

Chat bubbles break the pattern on purpose: `1.1rem` on three corners and
`0.3rem` on the corner nearest their speaker, so the tail points without a
drawn arrow.

Borders are hairlines. Every resting boundary is `1px solid` Rule; hover moves
it to Rule Strong. The only heavier strokes in the system are the button's
1.5px edge, the timeline dot's 3px accent ring, and the 1px vertical timeline
line. Images carry a `-1px` inset `outline` in `black/10` rather than a border,
so a light photograph still has a defined edge without the frame growing.

### Named Rules

**The Radius-By-Role Rule.** 8px means press me, 1rem means read inside me,
999px means pick me. A shape that takes the wrong radius lies about what it does.

**The Hairline Rule.** Structural boundaries are 1px. Weight is earned by
color (Rule → Rule Strong), never by adding pixels.

## Components

The register is refined and restrained: quiet at rest, precise on contact.
Controls do not perform until touched, and then they do exactly one thing.

### Buttons

- **Shape:** Softly squared (8px radius), with a 1px border and a solid 1px
  edge beneath in the same mixed-down value. Minimum 44px hit area via a fixed
  `::after` band, regardless of face height (faces run 35–41px).
- **Primary:** Plum Black face, Surface label, `0.5rem 1.15rem` padding, 600
  weight, `0.9rem`. The default forward action.
- **Mark (CTA):** Signal Magenta face, **Ink** label. Reserved for the chat
  invitation — the header CTA and nothing routine.
- **Secondary:** Surface face, Ink label, Rule Strong edge. Sits beside primary
  without competing.
- **Hover / Press:** `translateY(-1px)` with a 2px edge on hover;
  `translateY(1px)` with no edge on press — fully seated; 100ms ease on both. No
  color change in either direction.
- **Disabled:** 40% opacity, `not-allowed` cursor, travel suppressed.

### Chips

- **Style:** Full pill, 1px Rule border, Page fill, Muted mono label at
  `0.75rem` / 0.08em / uppercase.
- **Use:** The `sample` badge on placeholder content, and inline source tags.
  The badge is a truth mechanism, not decoration — see Do's and Don'ts.

### Cards / Containers

- **Corner Style:** 1rem.
- **Background:** Surface, on the Page ground.
- **Shadow Strategy:** Card ambient at rest; Card lift plus `translateY(-1px)`
  plus a Rule Strong border on hover, but **only when the card is interactive**.
  A static card never lifts.
- **Border:** 1px Rule.
- **Internal Padding:** `1.25rem`–`1.5rem` (`px-5 py-5` to `px-6 py-6`);
  list rows inside a card use `1.25rem` horizontal, `1rem` vertical and are
  divided by Rule hairlines.
- **Focus inside clipped cards:** the global focus ring flips to
  `outline-offset: -2px` for links inside a card that clips overflow, since a
  positive offset would be shaved to a sliver.

### Inputs / Fields

- **Style:** Full pill, 1px Rule border, Page fill (not Surface — the input
  sits inside a card that is already Surface, and would otherwise be invisible
  but for its border), `0.625rem 1rem` padding.
- **Focus:** Border shifts to Electric Ink, plus the global 2px focus ring at
  2px offset.
- **Mobile:** `text-base` below `sm` so iOS does not zoom on focus, `text-sm`
  above.

### Navigation

- **Header:** Sticky, Page at 85% with `backdrop-blur-md`, 1px Rule bottom
  border. Wordmark in Fraunces with a trailing Electric Ink period.
- **Links:** Full pills, `0.875rem` / 500. Inactive is Soft on transparent,
  hovering to Ink on Surface. **Active is Electric Ink Deep on Electric Ink
  Soft, borderless** — the fill alone carries state.
- **Press:** `scale(0.96)` on active.
- **CTA:** The Mark button, sitting at the end of the nav row; drops "with me"
  below `sm`.
- **Mobile:** the row wraps rather than collapsing into a menu. There is no
  hamburger, and there should not be one — four links fit.

### Section Header (signature)

A Fraunces heading with exactly one italic Electric Ink run, and nothing above
it. An optional mono meta line sits baseline-aligned to the right — a source
attribution or a link, never a restatement of the heading. The heading alone is
how a visitor knows a new section started; sections are separated by `6rem` of
space rather than by a label or a rule.

### Recommendation Card (signature)

A quotation in Soft at `0.875rem`, then a hairline rule, then the attribution:
a 40px round avatar, the recommender's name in 600 Ink with a Faint `↗`, and
their title and relationship in Muted `0.75rem`. The whole card is the link to
their profile, so the name shifts to Electric Ink on hover with the card.
Deliberately no quote glyph and no accent bar — the rule and the attribution
already say "quotation". Laid out in **two** masonry columns at `sm` and no
more: a third column drops the measure to roughly 45 characters and the
recommendations vary enough in length that a denser grid rags badly.

### Timeline Item (signature)

A 1px Rule Strong vertical line, with a 15px (19px at `sm`) dot per event —
Page-filled with a 3px Electric Ink ring — and content offset `2.25rem` /
`3rem` to its right. On entry the three parts arrive in sequence: the dot settles
from `scale(0.72)` on an exponential ease-out (460ms), the mono date and title
slide in from the left at 120ms, and the description slides in from the right at
240ms. The stagger is the gesture — it reads as a life being laid down in order
— and it does not need an overshoot to be noticed.

### Chat Bubbles (signature)

Mine: Electric Ink fill, Surface text, right-aligned, tail corner at 0.3rem.
Bot: Page fill with a 1px Rule border, Ink text, left-aligned, tail at the
opposite corner. Both cap at 85% width and animate in on a 300ms rise. The
first message does not animate — it is already there on load. The typing
indicator is three Faint dots bouncing on a 1.2s loop, staggered 0.15s. The live
status dot in the header carries a Signal Magenta halo on a slow 2.8s breath —
not Tailwind's `animate-ping`, which doubles the dot in 1s and reads as an
alarm.

## Do's and Don'ts

### Do:

- **Do** run `app/theme.test.ts` before shipping any palette change. Every
  token must sit inside sRGB, clear WCAG AA on the beds it actually lands on,
  and keep `--color-page` identical across `globals.css`, `icon.svg`, and
  `themeColor`.
- **Do** keep every neutral on hue 97.36. New neutrals are new lightness steps
  on the same hue, never a new hue.
- **Do** give every display heading exactly one italic Electric Ink emphasis
  run, and let it stand alone — no label, eyebrow, or number above it.
- **Do** derive a new button variant's edge as
  `color-mix(in oklab, <face> 74%, black)`, keep it a hairline, and let hover be
  travel only.
- **Do** extend hit areas to 44px vertically with a `::after` band or negative
  `before:-inset-y-*` insets, never by inflating padding.
- **Do** render the `sample` chip on any placeholder content, and remove the
  flag only when the content is genuinely real.
- **Do** add every new animation to the `prefers-reduced-motion` block in
  `globals.css` in the same commit that introduces it.
- **Do** use third-party brand colors (`lib/source-brand.ts`,
  `lib/language-colors.ts`) as sRGB hex outside the token system, and adjust
  lightness — never hue or chroma — when a mark needs 3:1 as the sole indicator.

### Don't:

- **Don't** put white text on Signal Magenta (3.28:1). Labels on magenta are Ink.
- **Don't** use Electric Ink as a fill behind small text, or plum on a link.
  Blue reads, plum acts, magenta talks.
- **Don't** add a dark mode, a `dark:` variant, or a theme toggle. The site is
  `color-scheme: light only` by decision, and the contrast test only covers the
  light beds.
- **Don't** introduce a second focus treatment. One ring, Electric Ink, 2px at
  2px offset, flipping to `-2px` inside clipping cards.
- **Don't** lift a card that isn't interactive. The hover shadow is a promise
  that something will happen when clicked.
- **Don't** change a button's color on hover, or let its bottom edge move.
- **Don't** put a label, eyebrow, category slug, or sequence number above a
  heading. If the heading needs explaining, rewrite the heading.
- **Don't** spend a chromatic on ornament — no display-size quote glyphs, no
  colored side bars, no accent dividers. Blue that decorates stops meaning
  "read this".
- **Don't** exceed 2px on an edge, offset, or hover rise. Deeper separation is
  tonal (Surface over Page over Paper), not taller.
- **Don't** reach for gradients, glassmorphism, glow, floating 3D shapes, or
  logo walls. The confirmed anti-references are the SaaS landing page, the CV
  template, the dark-mode developer portfolio, and the corporate personal
  brand — this site must never be mistaken for any of the four.
- **Don't** replace the grain overlay, the paper stock, or the offset portrait
  mount with a flat fill. The physical read is the identity.
- **Don't** collapse the header into a hamburger, or standardize the three
  container widths into one.
