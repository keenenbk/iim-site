import Link from "next/link";
import { Container } from "@/components/container";
import { SubscribeNewsletterForm } from "@/components/subscribe-newsletter-form";

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
          <div className="mt-8 flex justify-center">
            <SubscribeNewsletterForm
              variant="blogNavy"
              inputId="blog-nl-email"
            />
          </div>
          <p className="mt-6">
            <Link
              href={BEEHIIV}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-200 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              Browse past issues on Beehiiv →
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
