import type { Source } from "@/lib/content/feed";
import { sourceBrandColor } from "@/lib/source-brand";

/** The activity feed's four sources plus the "no filter" case. */
export type SourceIconKey = Source | "all";

/*
  Brand marks are solid paths (that is the form the trademarks take); the two
  generic icons are strokes at a heavier width so they don't read lighter than
  the solid marks at 14px.
*/
const BRAND_MARKS: Record<"github" | "linkedin" | "substack", string> = {
  github:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  substack: "M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z",
};

function Mark({ d }: { d: string }) {
  return <path d={d} fill="currentColor" />;
}

/** Feather-style globe, for the unfiltered "Everything" case. */
function GlobeMark() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round">
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19" />
      <path d="M12 2.5a14.5 14.5 0 0 1 0 19 14.5 14.5 0 0 1 0-19z" />
    </g>
  );
}

/** Feather-style closed book, for the reading source. */
function BookMark() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </g>
  );
}

/**
 * The mark for a feed source. Purely presentational: it is always
 * `aria-hidden`, so any caller that isn't already adjacent to the source name
 * must supply its own accessible label.
 */
export default function SourceIcon({
  source,
  className = "h-3.5 w-3.5",
  brand = true,
}: {
  source: SourceIconKey;
  className?: string;
  /** When false the mark inherits `currentColor` instead of its brand color. */
  brand?: boolean;
}) {
  const color = brand ? sourceBrandColor(source) : undefined;

  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`shrink-0 ${className}`}
      style={color ? { color } : undefined}
    >
      {source === "all" && <GlobeMark />}
      {source === "reading" && <BookMark />}
      {source !== "all" && source !== "reading" && <Mark d={BRAND_MARKS[source]} />}
    </svg>
  );
}
