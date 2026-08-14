import type { ReactNode } from "react";
import ExternalLink from "@/components/ExternalLink";

/**
 * The small external link that sits in a SectionHeader's aside slot. The
 * `before:` pseudo-element enlarges the tap target without changing layout.
 * -inset-y-3.5 rather than -3: the mono face is 16px tall, so 12px a side
 * reached only 40 and left the Hidden 44 Rule unmet.
 */
export default function AsideLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <ExternalLink
      href={href}
      className="relative tap-target inline-block transition-colors before:-inset-x-1 before:-inset-y-3.5 hover:text-accent"
    >
      {children}
    </ExternalLink>
  );
}
