import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Integrated Impact Modeling (IIM)—a holistic, science-based approach to marketing measurement and optimization.",
};

const BEEHIIV = "https://integratedimpactmarketing.beehiiv.com/";

const ICON_NAVY = "#0f1f3d";

function IconBarChart() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden
    >
      <rect x="3" y="12" width="4.5" height="8" rx="0.5" fill={ICON_NAVY} />
      <rect x="9.75" y="8" width="4.5" height="12" rx="0.5" fill={ICON_NAVY} />
      <rect x="16.5" y="4" width="4.5" height="16" rx="0.5" fill={ICON_NAVY} />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke={ICON_NAVY}
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="12"
        r="4.75"
        stroke={ICON_NAVY}
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="1.75" fill={ICON_NAVY} />
    </svg>
  );
}

function IconTrendUp() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden
    >
      <path
        d="M4 15.5 9 10.5l3.5 3.5L18.5 7.5"
        stroke={ICON_NAVY}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7.5h5v5"
        stroke={ICON_NAVY}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy py-32 text-center text-white sm:py-36 lg:py-40">
        <Container>
          <div className="mx-auto w-full max-w-4xl text-center">
            <h1 className="font-serif text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-7xl">
              Integrated Impact Modeling
            </h1>
            <p className="mt-8 text-xl font-medium leading-snug text-slate-200 sm:text-2xl">
              The Science Behind Smarter Marketing
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-lg">
              Optimization Across Every Channel, Campaign &amp; Touchpoint for
              Maximum Impact
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <Link
                href="/methodology"
                className="inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-white px-10 py-4 text-base font-bold text-navy shadow-sm transition-[transform,box-shadow] hover:shadow-md active:scale-[0.99] sm:w-auto"
              >
                Explore the Methodology
              </Link>
              <Link
                href={BEEHIIV}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 w-full items-center justify-center rounded-lg border-2 border-white/90 bg-transparent px-10 py-4 text-base font-bold text-white transition-[background-color,border-color] hover:bg-white/10 sm:w-auto"
              >
                Read the Newsletter
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="border-b border-hairline bg-cream py-24 sm:py-28 lg:py-32">
        <Container>
          <p className="mx-auto max-w-3xl text-center font-serif text-2xl font-medium leading-relaxed text-headline sm:text-3xl sm:leading-snug">
            IIM has adapted the rigorous, science-based methodology behind
            complex climate impact modeling to tackle today&apos;s digital
            marketing challenges. A new and holistic marketing approach to
            campaign performance, IIM objectively analyzes multiple data streams
            to reveal hidden connections between channels, content and tactics.
            This unique ecosystem-level perspective means marketers can identify
            the most effective strategy combinations to improve lead generation.
          </p>
        </Container>
      </section>

      {/* Feature cards */}
      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            <article className="flex flex-col rounded-lg border-t-2 border-navy bg-background p-8 shadow-sm transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-md sm:p-10">
              <IconBarChart />
              <h3 className="mt-6 font-serif text-2xl font-bold tracking-tight text-headline sm:text-3xl">
                Competitive Advantage
              </h3>
              <p className="mt-4 text-base leading-[1.7] text-body">
                IIM cuts through the noise of complex marketing data, giving you
                clear, actionable insights to help make smarter decisions with
                confidence.
              </p>
            </article>
            <article className="flex flex-col rounded-lg border-t-2 border-navy bg-background p-8 shadow-sm transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-md sm:p-10">
              <IconTarget />
              <h3 className="mt-6 font-serif text-2xl font-bold tracking-tight text-headline sm:text-3xl">
                Optimized Strategy &amp; Budgeting
              </h3>
              <p className="mt-4 text-base leading-[1.7] text-body">
                An approach designed to ensure budgets are optimized, messaging
                is super-sharp and that every marketing effort is strategically
                aligned for efficiency.
              </p>
            </article>
            <article className="flex flex-col rounded-lg border-t-2 border-navy bg-background p-8 shadow-sm transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-md sm:p-10">
              <IconTrendUp />
              <h3 className="mt-6 font-serif text-2xl font-bold tracking-tight text-headline sm:text-3xl">
                Maximized Impact &amp; ROI
              </h3>
              <p className="mt-4 text-base leading-[1.7] text-body">
                Uncovering hidden connections between campaigns, channels and
                audience behaviour so your marketing strategies are ready to
                drive measurable impact and long-term growth.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* Why Choose IIM */}
      <section className="bg-navy py-24 text-center text-white sm:py-28 lg:py-32">
        <Container>
          <div className="mx-auto w-full max-w-4xl">
            <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Why Choose IIM?
            </h2>
            <p className="mx-auto mt-10 max-w-3xl text-lg leading-[1.75] text-slate-100 sm:text-xl sm:leading-[1.75]">
              Marketing should be measured with the same precision as the
              world&apos;s most complex systems and high-stakes situations.
              Through research-backed insights and impartial, evidence-based
              research, IIM&apos;s team of marketing strategists, data analysts and
              research professionals ensure today&apos;s marketers and business
              leaders are better equipped to make smart decisions.
            </p>
          </div>
        </Container>
      </section>

      {/* Newsletter feature */}
      <section className="border-t border-hairline bg-cream py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
            <div>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-headline sm:text-5xl lg:text-6xl">
                The IIM Newsletter
              </h2>
              <p className="mt-4 text-xl font-semibold text-navy sm:text-2xl">
                Built for marketers who refuse to guess.
              </p>
              <p className="mt-6 max-w-xl text-lg leading-[1.7] text-body">
                Join 6,000+ marketing professionals getting weekly insights on
                measurement, campaign analysis, and the science of smarter
                marketing.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href={BEEHIIV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-lg bg-navy px-10 py-4 text-center text-base font-bold text-white shadow-sm transition-[transform,box-shadow] hover:bg-[#0c192f] hover:shadow-md active:scale-[0.99]"
                >
                  Subscribe Free
                </Link>
                <Link
                  href={BEEHIIV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-base font-bold text-navy underline decoration-navy/25 underline-offset-[6px] transition-colors hover:decoration-navy sm:text-left"
                >
                  Read past issues →
                </Link>
              </div>
            </div>
            <aside className="rounded-xl bg-headline p-8 text-white shadow-lg sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                LATEST ISSUE
              </p>
              <h3 className="mt-4 font-serif text-2xl font-bold leading-snug sm:text-3xl">
                Ad Hit or Had It? adidas Backyard Legends
              </h3>
              <p className="mt-3 text-sm font-semibold text-slate-400">
                May 2026
              </p>
              <p className="mt-6 border-t border-white/10 pt-6 text-base leading-[1.7] text-slate-300">
                adidas proves brands are moving from quick burst ads toward
                long-form unskippable storytelling. This week we break down why
                it works.
              </p>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
