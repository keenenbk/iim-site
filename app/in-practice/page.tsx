import type { Metadata } from "next";
import { Container } from "@/components/container";
import { FeatureCard } from "@/components/feature-card";

export const metadata: Metadata = {
  title: "IIM in Practice",
  description:
    "How IIM translates complex analytics into practical marketing methodologies for real-world decisions.",
};

export default function InPracticePage() {
  return (
    <main>
      <section className="border-b border-hairline bg-cream pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-body">
              Practice
            </p>
            <blockquote className="mt-5 font-serif text-3xl font-bold leading-snug text-headline sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight">
              How can I see the full picture and identify my most impactful
              channels beyond attribution?
            </blockquote>
            <p className="mt-10 text-xl font-semibold leading-relaxed text-navy sm:text-2xl sm:leading-snug">
              Whether you need big-picture clarity or technical depth, IIM
              translates complex analytics into practical marketing methodologies
              that work in real-world scenarios.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
            <FeatureCard title="Objective Overview">
              <p>
                With a siloed approach to marketing results, you risk inconsistent
                data sets. IIM integrates multiple sources into one cohesive
                framework, helping marketers to reveal hidden relationships and
                showing the full impact of their marketing strategy.
              </p>
            </FeatureCard>
            <FeatureCard title="Optimize Smarter">
              <p>
                IIM competes against traditional attribution modeling and emerging
                frameworks which often miss cross-channel complexity. By using
                predictive modeling, IIM measures true marketing impact, offering
                a more comprehensive, data-driven strategy for growth.
              </p>
            </FeatureCard>
            <FeatureCard title="Research-Backed Insights">
              <p>
                Rather than rely on short-term metrics such as clicks and
                conversions, IIM shifts focus to brand equity, customer retention
                and long-term growth, so your decisions are based on real impact.
              </p>
            </FeatureCard>
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-lg font-semibold leading-[1.75] text-headline sm:text-xl sm:leading-[1.75]">
            IIM&apos;s framework seamlessly integrates with existing marketing
            models, giving you fresh insights and untapped efficiencies.
          </p>
        </Container>
      </section>
    </main>
  );
}
