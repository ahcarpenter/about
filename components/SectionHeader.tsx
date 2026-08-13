import type { ReactNode } from "react";

/**
 * Shared display heading, with an optional aside (e.g. a source link). The
 * heading carries the section on its own — there is deliberately no eyebrow
 * label above it.
 */
export default function SectionHeader({
  title,
  aside,
}: {
  title: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
      <h2 className="display text-3xl sm:text-4xl">{title}</h2>
      {aside && <div className="pb-1.5 font-mono text-xs text-muted">{aside}</div>}
    </div>
  );
}
