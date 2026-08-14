import ExternalLink from "@/components/ExternalLink";
import { recommenderAvatars } from "@/data/avatars";
import type { Recommendation } from "@/data/linkedin";

export default function RecommendationCard({ rec }: { rec: Recommendation }) {
  const avatar = rec.profileUrl ? recommenderAvatars[rec.profileUrl] : undefined;
  const inner = (
    <>
      {/* No decorative quote glyph: the card, the rule, and the attribution
          already say "quotation", and a display-size mark in accent would
          spend the palette's one reading color on ornament. */}
      <blockquote className="whitespace-pre-line text-sm leading-relaxed text-soft">
        {rec.quote}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        {avatar && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={avatar.src}
            alt=""
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
            className="h-10 w-10 shrink-0 rounded-full object-cover outline -outline-offset-1 outline-black/10"
          />
        )}
        <span className="min-w-0">
          <span className="flex flex-wrap items-center gap-x-2 text-sm font-semibold text-ink">
            <span className="group-hover:text-accent transition-colors">{rec.name}</span>
            {rec.profileUrl && (
              <span aria-hidden className="font-mono text-xs font-normal text-faint group-hover:text-accent">
                ↗
              </span>
            )}
            {rec.sample && (
              <span className="chip font-normal" title="Placeholder — not yet confirmed as real">
                sample
                <span className="sr-only"> (placeholder, not yet confirmed as real)</span>
              </span>
            )}
          </span>
          <span className="mt-0.5 block text-xs text-muted">
            {rec.title}
            {rec.relationship ? ` · ${rec.relationship}` : ""}
          </span>
        </span>
      </figcaption>
    </>
  );

  const className = "card group block break-inside-avoid px-6 py-6";
  return rec.profileUrl ? (
    <ExternalLink
      href={rec.profileUrl}
      className={className}
      aria-label={`View ${rec.name}’s LinkedIn profile`}
    >
      {inner}
    </ExternalLink>
  ) : (
    <figure className={className}>{inner}</figure>
  );
}
