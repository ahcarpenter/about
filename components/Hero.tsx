import Link from "next/link";
import ExternalLink from "@/components/ExternalLink";
import { portrait } from "@/data/avatars";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    // items-start, not items-center: centred, the name floated ~50px below the
    // portrait's top edge at lg and up, so the photograph — a face, and the
    // highest-salience object on the page — owned the top of the hero. Aligned
    // to the top, the name leads and the two columns share one edge.
    <section className="mx-auto grid max-w-5xl items-start gap-10 px-5 pb-16 pt-14 sm:pt-20 md:grid-cols-[1.2fr_0.8fr]">
      <div>
        <h1 className="display text-5xl sm:text-6xl md:text-7xl">
          Andrew <em>Carpenter</em>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">
          {site.tagline} This is the running record — live from{" "}
          <ExternalLink href={site.githubUrl} className="font-medium text-accent hover:text-accent-deep">
            GitHub
          </ExternalLink>
          ,{" "}
          <ExternalLink href={site.substackUrl} className="font-medium text-accent hover:text-accent-deep">
            Substack
          </ExternalLink>
          , and{" "}
          <ExternalLink href={site.linkedinUrl} className="font-medium text-accent hover:text-accent-deep">
            LinkedIn
          </ExternalLink>
          .
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/story/" className="btn btn-primary">
            Read my story
          </Link>
          <Link href="/philosophy/" className="btn btn-secondary">
            What I believe
          </Link>
          {/* No px-2: when the row wraps below md this link drops to its own
              line, and the padding pushed its text 8px off the left edge the
              two buttons above it establish. The band restores the 44px. */}
          <Link
            href="/chat/"
            className="relative tap-target py-2.5 text-sm font-medium text-muted transition-colors before:inset-x-0 before:-inset-y-0.5 hover:text-accent"
          >
            or just ask me →
          </Link>
        </div>
      </div>

      {/* Centred only once it has its own column. Below md it stacks under a
          left-aligned name, lede and button row, and mx-auto there put the one
          image on a second alignment axis. */}
      <div className="relative w-56 sm:w-64 md:mx-auto md:w-full md:max-w-[280px]">
        <div aria-hidden className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl border border-line-strong bg-paper" />
        <div className="card relative overflow-hidden rounded-2xl p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portrait.src}
            alt={`Portrait of ${site.name}`}
            width={320}
            height={320}
            fetchPriority="high"
            className="aspect-square w-full rounded-lg bg-paper object-cover outline -outline-offset-1 outline-black/10"
          />
          <p className="px-2 pb-1 pt-2 text-center font-mono text-xs uppercase tracking-widest text-faint">
            Est. somewhere — still shipping
          </p>
        </div>
      </div>
    </section>
  );
}
