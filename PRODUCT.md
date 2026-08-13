# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: people sizing Andrew up professionally — recruiters, hiring managers,
and potential collaborators who arrived from a GitHub profile, a Substack post,
a LinkedIn message, or a referral, and who want to decide whether he is worth
a conversation. They typically arrive cold, skim on limited time, and are
looking for evidence of judgment and craft, not just a job history.

Secondary (incidental, not the design driver): peers and readers following the
writing and side projects.

Andrew is open to the right opportunity. The site may quietly signal that; it
is not a job-hunt landing page and should not read as one.

## Product Purpose

A personal site that answers "who is this person, and are they any good?" with
evidence rather than assertion — live proof of work (GitHub activity and
projects, Substack posts, reading), stated principles, a life story, and
third-party vouching (LinkedIn recommendations).

Success: a professional visitor leaves with a concrete, accurate read on how
Andrew thinks and works, and has enough confidence to reach out.

## Positioning

The credibility comes from freshness and receipts, not claims. GitHub and
Substack content is fetched at build time and rebuilt weekly, so the site
reflects what Andrew is actually doing right now — a static export that is
nevertheless never stale. A generic résumé site cannot truthfully make that
claim, and neither can a hand-maintained portfolio.

The site is also itself a work sample: it is the artifact that demonstrates the
craft it describes.

## Operating Context

- Visitors mostly arrive cold from an external profile or a link, often on
  mobile, and skim before committing time.
- Content updates happen two ways: automatically at build (GitHub, Substack)
  and by hand in `data/*.ts` (LinkedIn, reading, timeline, principles, nav,
  social). Hand-curated data is the fallback wherever no public API exists.
- Deploys are push-to-`main` via `.github/workflows/deploy.yml`, plus a weekly
  scheduled rebuild to refresh fetched data.

## Capabilities and Constraints

Surfaces:

- `/` — intro, merged activity feed (GitHub · LinkedIn · Substack · reading),
  GitHub project highlights, latest Substack posts, LinkedIn recommendations.
- `/philosophy` — principles.
- `/story` — life story as a vertical timeline with scroll-triggered reveals.
- `/chat` — "chat with AI me". Currently a stub with canned responses. This is
  a committed plan, not flavor copy: it is intended to become a real model
  grounded in Andrew's writing and philosophy. Design and copy should treat it
  as a feature in progress, not permanent decoration.

Technical constraints:

- Next.js App Router with **static export** (`out/`), deployed to **GitHub
  Pages** at a project-site path (`/about/`). No server runtime, no server
  actions, no ISR — everything must work as prerendered static HTML. The
  eventual `/chat` model must therefore reach an external service from the
  client, not a same-origin backend.
- Tailwind CSS v4, CSS-first. There is no `tailwind.config`; design tokens live
  in the `@theme` block of `app/globals.css`.
- `app/theme.test.ts` is a real gate: tokens must sit inside the sRGB gamut
  (Lightning CSS clips out-of-gamut values at build), clear WCAG AA against the
  backgrounds they actually land on, and stay in sync with the two places
  `--color-page` is mirrored as a literal (`app/icon.svg`, `themeColor` in
  `app/layout.tsx`). Any palette change must keep this test passing.
- GitHub data uses `GITHUB_TOKEN` when present (authenticated GraphQL) and
  falls back to the unauthenticated API — the build must succeed without it.
- Light-mode only today. Not a stated commitment; simply the current state.

Undecided: whether the site ever gains dark mode, and what backend the `/chat`
model runs on.

## Brand Commitments

- Name and identity: **Andrew H. Carpenter** ("Andrew" / "Drew"). Tagline:
  "Builder of software, collector of ideas."
- Voice is confirmed and binding: dry, specific, self-aware, allergic to
  résumé-speak and hype. Present tense, first person, willing to name what is
  unfinished ("right now it's a polite stub — but the seat is warm").
- Profile links are fixed facts, not decoration: GitHub `ahcarpenter`,
  LinkedIn `andrewhcarpenter`, Substack `@ahcarpenter`, Keybase `ahcarpenter`.
  Central in `lib/site.ts`.
- **No visual lock.** The current look (E2E1DC paper, Fraunces display serif,
  electric-blue links, plum/magenta accents, pushable buttons) is incumbent
  evidence, not a commitment — it may be replaced. The OKLCH-in-`@theme`
  architecture and the `theme.test.ts` gate are technical constraints that
  survive any redesign, but the specific palette and typography do not.

## Evidence on Hand

Real:

- **LinkedIn recommendations** — five genuine, attributed recommendations in
  `data/linkedin.ts` (John Chaffier, Christian Hughes, Rick Peyton, Patrick
  Taylor, Ronaldus van Uden). These are the site's strongest third-party proof.
  They establish real career facts: Ruby on Rails and React/React Native depth,
  architecture and design-pattern fluency, mentoring, conference/meetup
  participation, work at Frontdoor, University of Transylvania (Lexington).
- **GitHub projects and activity** — live, fetched at build.
- **Substack posts** — live, fetched from RSS at build.

Placeholder — must not be treated as fact, quoted, or reasoned from:

- `/story` timeline (`data/timeline.ts`) — template starter copy.
- `/philosophy` principles (`data/principles.ts`) — written as a starting set,
  not confirmed as Andrew's stated principles.
- Recent reading (`data/reading.ts`) — flagged `sample: true`.
- LinkedIn activity entries (`data/linkedin.ts`) — flagged `sample: true`,
  pointing at feed URLs rather than post permalinks.

The `sample: true` flag renders a visible "sample" badge; that mechanism must
be preserved so placeholder content is never mistaken for real. Never invent
employers, dates, metrics, testimonials, or clients to fill these gaps.

## Product Principles

1. **Receipts over claims.** Every assertion about Andrew should be backed by
   something a visitor can click: a repo, a post, a named recommender.
2. **Freshness is the differentiator.** The build-time fetch and weekly rebuild
   are the product's core mechanism — anything that makes the site look stale
   undermines its main argument.
3. **The site is the work sample.** Craft in the artifact is evidence, not
   vanity; sloppiness here is a substantive claim about the person.
4. **Honest about the unfinished.** Sample badges, the stubbed chat, and
   in-progress framing stay visible. Never dress a placeholder as fact.
5. **Skimmable first, deep second.** A cold professional visitor gets the read
   in one scroll; depth is available to anyone who wants it.

## Accessibility & Inclusion

**WCAG AA** is the binding standard, already machine-enforced for color by
`app/theme.test.ts` against the backgrounds each token actually lands on. AA
applies to the rest of the site too — focus visibility, keyboard reachability,
tap targets, and the scroll-triggered reveals on `/story` and `/philosophy`,
which must respect `prefers-reduced-motion` and must never be the only way
content becomes readable.
