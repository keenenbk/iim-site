import type { Metadata } from "next";
import { Container } from "@/components/container";
import { FeatureCard } from "@/components/feature-card";

export const metadata: Metadata = {
  title: "IIM Methodology",
  description:
    "How Integrated Impact Modeling blends scientific rigor with practical marketing intelligence.",
};

const whitePaperSections = [
  {
    heading: "Introduction",
    body: [
      "Marketing leaders today operate inside interconnected digital ecosystems—paid media, organic search, lifecycle programs, sales outreach, and product-led motions all shape demand at once. Yet measurement frameworks often treat these forces as separable, stable, and easy to credit in isolation.",
      "Integrated Impact Modeling (IIM) reframes the problem: campaigns are not independent levers; they are components of a dynamic system. IIM adapts principles from complex systems modeling—long used in domains like climate science—to produce a coherent, testable view of how marketing activity propagates through an organization’s go-to-market environment.",
    ],
  },
  {
    heading: "The Limits of Traditional Attribution",
    body: [
      "Traditional attribution models optimize for convenient accounting: assigning credit along a path, often with implicit assumptions about channel independence and short memory windows. These approaches can be useful for tactical reporting, but they frequently misstate strategic impact when channels interact, when messaging changes perception over time, or when non-clickable touchpoints matter.",
      "The result is familiar: channel conflict, brittle forecasts, and budgets that chase last-touch signals rather than durable growth mechanics. IIM is designed to reduce those structural blind spots by modeling interactions explicitly rather than assuming them away.",
    ],
  },
  {
    heading: "The Case for a Systems Approach",
    body: [
      "A systems approach treats marketing performance as emergent: outcomes arise from combinations of activities, constraints, and feedback loops. Instead of asking only “which touchpoint won credit?” IIM asks “how does the ecosystem respond when we change a pattern of investment and creative emphasis?”",
      "This shift aligns measurement with how senior leaders actually decide—portfolio tradeoffs, sequencing, creative differentiation, and operating cadence—while remaining compatible with the data realities of modern B2B and B2C stacks.",
    ],
  },
  {
    heading: "Methodological Components",
    body: [
      "IIM combines domain-informed structure with empirical discipline: clearly specified relationships between channels and outcomes, integrity checks across data sources, sensitivity analysis for major assumptions, and transparency suitable for technical review.",
      "Practically, this means explicit hypotheses about cross-channel influence, time-aware dynamics, and robust handling of missingness and bias—so results are not merely plausible narratives, but documented claims that can be challenged, refined, and audited.",
    ],
  },
  {
    heading: "Why IIM is Gaining Traction",
    body: [
      "As privacy changes compress deterministic tracking and as buying journeys fragment, organizations need measurement that remains coherent when the plumbing changes. IIM’s emphasis on ecosystem structure is aligned with a world where deterministic paths are incomplete but directional signals still accumulate across channels.",
      "For cross-functional teams—marketing, finance, RevOps, and data science—a shared model language reduces misalignment and accelerates decisions grounded in the same underlying representation of the market.",
    ],
  },
  {
    heading: "Early Use Cases",
    body: [
      "Early adopters apply IIM to portfolio budgeting, campaign sequencing, and executive reporting where “channel ROI tables” fail to explain observed business movement. Teams also use IIM outputs to prioritize experiments: not just what to test next, but which parts of the system are most likely to amplify learning.",
      "In regulated and high-consideration categories, IIM’s documentation posture can materially shorten review cycles by separating claims from assumptions and making uncertainty explicit.",
    ],
  },
  {
    heading: "Conclusion",
    body: [
      "Integrated Impact Modeling is not a single score or a black-box optimizer. It is a disciplined methodology for representing marketing as a system—so organizations can measure impact with the seriousness their spend deserves.",
      "The next era of marketing performance belongs to models that respect interaction, time, and data integrity. IIM is built to meet that standard.",
    ],
  },
] as const;

export default function MethodologyPage() {
  return (
    <main>
      <section className="border-b border-hairline bg-cream pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-body">
              Methodology
            </p>
            <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.08] tracking-tight text-headline sm:text-6xl lg:text-7xl lg:leading-[1.06]">
              The Science Behind Smarter Marketing
            </h1>
            <p className="mt-8 text-xl font-semibold leading-relaxed text-navy sm:text-2xl sm:leading-snug">
              IIM blends science with human intelligence offering brands an
              unbiased, holistic marketing approach to measure and optimize
              campaign performance.
            </p>
            <p className="mt-10 text-lg leading-[1.75] text-body sm:text-xl sm:leading-[1.75]">
              IIM has adapted the rigorous, science-based methodology behind
              complex climate impact modeling to tackle today&apos;s digital
              marketing challenges. A new and holistic marketing approach to
              campaign performance, IIM objectively analyzes multiple data streams
              to reveal hidden connections between channels, content and
              tactics. This unique ecosystem-level perspective means marketers
              can identify the most effective strategy combinations to improve
              lead generation.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
            <FeatureCard title="Beyond Traditional Models">
              <p>
                Move past last-touch narratives and channel silos with a
                representation designed for interaction, sequencing, and
                long-horizon effects—without losing executive clarity.
              </p>
            </FeatureCard>
            <FeatureCard title="Cross-Channel Optimization">
              <p>
                Evaluate how combinations of channels and tactics behave
                together, so you can rebalance investment toward compounding
                dynamics—not isolated efficiency metrics.
              </p>
            </FeatureCard>
            <FeatureCard title="Scientific Rigor & Data Integrity">
              <p>
                Built for scrutiny: explicit assumptions, integrity checks, and
                sensitivity analysis that stand up to finance and data-science
                review.
              </p>
            </FeatureCard>
            <FeatureCard title="Smarter Investment Decisions">
              <p>
                Tie measurement to decisions CFOs recognize—tradeoffs,
                uncertainty, and scenario planning grounded in a coherent system
                view.
              </p>
            </FeatureCard>
          </div>
        </Container>
      </section>

      <section className="border-y border-hairline bg-navy py-24 text-white sm:py-28 lg:py-32">
        <Container>
          <blockquote className="mx-auto max-w-3xl text-center font-serif text-3xl font-bold leading-snug sm:text-4xl sm:leading-snug lg:text-5xl">
            Think of IIM as a marketing ecosystem map. Instead of analyzing each
            channel separately, IIM looks at how they interact and influence each
            other over time.
          </blockquote>
        </Container>
      </section>

      <section className="bg-cream py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-left">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-body">
                White paper
              </p>
              <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-headline sm:text-5xl sm:leading-tight lg:text-6xl">
                Integrated Impact Modeling: An Executive Overview
              </h2>
              <p className="mt-5 text-base leading-[1.7] text-body sm:text-lg">
                Abstract and outline—formatted for reading, sharing, and technical
                review.
              </p>
            </div>

            <div className="mt-16 space-y-16 border-t border-hairline pt-16">
              {whitePaperSections.map((section) => (
                <div key={section.heading}>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-headline sm:text-3xl sm:leading-snug lg:text-4xl">
                    {section.heading}
                  </h3>
                  <div className="mt-6 space-y-5 text-lg leading-[1.75] text-body">
                    {section.body.map((paragraph, i) => (
                      <p key={`${section.heading}-${i}`}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
