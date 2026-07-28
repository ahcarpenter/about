"use client";

import { useMemo, useState } from "react";
import ExternalLink from "@/components/ExternalLink";
import SourceIcon from "@/components/SourceIcon";
import { linkedinActivity } from "@/data/linkedin";
import { recentReads } from "@/data/reading";
import type { SubstackPost } from "@/lib/sources/substack/substack";
import type { GithubFeedItem } from "@/lib/sources/github/events";
import { buildFeed, type Source } from "@/lib/content/feed";
import { relativeTime } from "@/lib/format";

const SOURCE_LABEL: Record<Source, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  substack: "Substack",
  reading: "Reading",
};

const FILTERS: Array<{ key: Source | "all"; label: string }> = [
  { key: "all", label: "Everything" },
  { key: "github", label: "GitHub" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "substack", label: "Substack" },
  { key: "reading", label: "Reading" },
];

export default function ActivityFeed({
  githubActivity,
  substackPosts,
}: {
  githubActivity: GithubFeedItem[];
  substackPosts: SubstackPost[];
}) {
  const [filter, setFilter] = useState<Source | "all">("all");

  const items = useMemo(
    () =>
      buildFeed({
        github: githubActivity,
        substack: substackPosts,
        linkedin: linkedinActivity,
        reading: recentReads,
      }),
    [githubActivity, substackPosts],
  );

  const visible = filter === "all" ? items : items.filter((i) => i.source === filter);

  return (
    <div>
      {/* gap-y-4 (16px) is what lets the pills' -inset-y-2 hit areas reach 44px
          without overlapping each other when the row wraps. */}
      <div className="flex flex-wrap gap-x-2 gap-y-4">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`relative inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-xs tracking-wide transition-[color,background-color,border-color,scale] before:absolute before:inset-x-0 before:-inset-y-2 before:content-[''] active:scale-[0.96] ${
              filter === f.key
                ? "border-accent bg-accent-soft text-accent-deep"
                : "border-line bg-surface text-muted hover:border-line-strong hover:text-ink"
            }`}
          >
            <SourceIcon source={f.key} />
            {f.label}
          </button>
        ))}
      </div>

      <ul className="card mt-5 divide-y divide-line overflow-hidden">
        {visible.length === 0 && (
          <li className="px-5 py-8 text-center text-sm text-muted">Nothing here yet.</li>
        )}

        {visible.map((item, i) => (
          <li key={`${item.source}-${item.date}-${i}`}>
            <ExternalLink
              href={item.url}
              className="group flex items-baseline gap-4 px-5 py-4 transition-colors hover:bg-page/60"
            >
              <span className="min-w-0 flex-1 text-sm leading-snug text-ink">
                <span className="group-hover:underline decoration-line underline-offset-4">
                  {item.title}
                </span>
                {item.sample && <span className="chip ml-2 align-middle">sample</span>}
              </span>
              {/* The mark replaces the source name here, so it carries the only
                  visible cue — the label stays for screen readers. Baseline,
                  not centre: on a title that wraps to two lines, centring drops
                  the mark to the second line while the timestamp stays on the
                  first. The nudge sits it optically on the text baseline. */}
              <span className="shrink-0 translate-y-[3px] self-baseline">
                <SourceIcon source={item.source} />
                <span className="sr-only">{SOURCE_LABEL[item.source]}</span>
              </span>
              <span className="shrink-0 font-mono text-xs text-muted">
                {relativeTime(item.date)}
              </span>
            </ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
