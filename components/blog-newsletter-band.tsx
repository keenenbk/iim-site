import Link from "next/link";
import { Container } from "@/components/container";

const BEEHIIV = "https://integratedimpactmarketing.beehiiv.com/";

export function BlogNewsletterBand() {
  return (
    <section className="border-t border-hairline bg-navy py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
            Get IIM insights in your inbox
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-200 sm:text-xl">
            Join thousands of marketers following weekly analysis on measurement,
            campaigns, and the science of impact.
          </p>
          <Link
            href={BEEHIIV}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-bold text-navy shadow-sm transition-[transform,box-shadow] hover:shadow-md active:scale-[0.99]"
          >
            Subscribe on Beehiiv
          </Link>
        </div>
      </Container>
    </section>
  );
}
