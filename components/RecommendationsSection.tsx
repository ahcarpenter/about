import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import AsideLink from "@/components/AsideLink";
import RecommendationCard from "@/components/RecommendationCard";
import { recommendations } from "@/data/linkedin";
import { site } from "@/lib/site";

export default function RecommendationsSection() {
  return (
    <section className="mx-auto max-w-5xl px-5 pt-24" id="kind-words">
      <Reveal>
        <SectionHeader
          title={
            <>
              What colleagues <em>say</em>
            </>
          }
          aside={<AsideLink href={site.linkedinUrl}>recommendations via LinkedIn ↗</AsideLink>}
        />
      </Reveal>

      {/* Two columns, not three: at 64rem a third column drops each quote to
          roughly 45 characters, and the recommendations vary enough in length
          that a denser masonry rags badly. */}
      <div className="mt-8 gap-5 sm:columns-2">
        {recommendations.map((rec, i) => (
          <Reveal
            key={rec.name}
            delay={Math.min(i, 3) * 80}
            className="reveal mb-5 break-inside-avoid"
          >
            <RecommendationCard rec={rec} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
