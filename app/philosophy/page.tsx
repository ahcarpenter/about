import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { principles } from "@/data/principles";

export const metadata: Metadata = {
  title: "Philosophy",
  description: "The principles I try to work and live by.",
};

export default function PhilosophyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-8 pt-14 sm:pt-20">
      <h1 className="display text-4xl sm:text-6xl">
        How I try to <em>think</em>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">
        A working set of principles — written down so they can be argued with,
        revised when they lose, and actually used in the meantime.
      </p>

      <blockquote className="mt-12 border-t border-line pt-8">
        <p className="display max-w-2xl text-2xl leading-snug sm:text-3xl">
          “The point isn’t to have beliefs. It’s to have beliefs that would
          notice if they were wrong.”
        </p>
      </blockquote>

      <div className="mt-16 space-y-12">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={Math.min(i, 2) * 60}>
            <section>
              <h2 className="display text-2xl">{p.title}</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-soft">{p.body}</p>
            </section>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-16 border-t border-line pt-8 text-sm leading-relaxed text-muted">
          These are principles, not laws — version-controlled like everything
          else here. If you think one of them is wrong, I’d genuinely like to
          hear the argument.
        </p>
      </Reveal>
    </div>
  );
}
