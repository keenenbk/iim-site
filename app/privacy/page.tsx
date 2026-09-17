import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { NEWSLETTER_CONSENT_TEXT } from "@/lib/newsletter-consent";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How Integrated Impact Modeling collects and uses email addresses for the IIM newsletter, including consent, Beehiiv processing, and your rights under UK GDPR, EU GDPR, and US email law.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="border-b border-hairline bg-cream pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-body">
              Privacy
            </p>
            <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.08] tracking-tight text-headline sm:text-6xl lg:text-7xl lg:leading-[1.06]">
              Privacy notice
            </h1>
            <p className="mt-8 text-xl font-semibold leading-relaxed text-navy sm:text-2xl sm:leading-snug">
              How we collect consent and use email addresses for the IIM
              newsletter.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <article className="mx-auto max-w-3xl space-y-12 text-lg leading-[1.75] text-body">
            <section>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-headline sm:text-3xl">
                Who we are
              </h2>
              <p className="mt-4">
                Integrated Impact Modeling (IIM) operates this website and the
                IIM newsletter. For UK GDPR and EU GDPR, IIM is the data
                controller for newsletter signups made through this site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-headline sm:text-3xl">
                What we collect
              </h2>
              <p className="mt-4">
                When you subscribe, we collect your email address and a record
                of your consent. That record includes the time of signup, the
                page where you subscribed, and technical data such as IP
                address and browser information used to evidence that consent
                was given.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-headline sm:text-3xl">
                Why we collect it
              </h2>
              <p className="mt-4">
                We use your email only to send the IIM newsletter: occasional
                updates on marketing measurement, methodology, and applied
                research. We do not sell your email address.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-headline sm:text-3xl">
                Legal basis
              </h2>
              <p className="mt-4">
                In the United Kingdom and the European Union, we send
                newsletter email on the basis of your consent (UK GDPR / EU
                GDPR Article 6(1)(a), and the Privacy and Electronic
                Communications Regulations in the UK). The signup checkbox is
                unchecked by default. You must actively opt in before we add
                you.
              </p>
              <p className="mt-4">
                In the United States, we collect your email because you asked
                to receive the newsletter. Commercial email we send includes
                identification of the sender and an unsubscribe method, as
                required by CAN-SPAM.
              </p>
              <blockquote className="mt-4 rounded-lg bg-cream p-5 text-base leading-relaxed text-headline">
                {NEWSLETTER_CONSENT_TEXT}
              </blockquote>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-headline sm:text-3xl">
                How we process it
              </h2>
              <p className="mt-4">
                Newsletter delivery is handled by Beehiiv, which acts as our
                email service provider / data processor. Your address is stored
                on their systems in order to send issues and process
                unsubscribes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-headline sm:text-3xl">
                How long we keep it
              </h2>
              <p className="mt-4">
                We keep your email on the list until you unsubscribe or ask us
                to delete it. We retain the consent record for as long as we
                need it to show that a newsletter was lawfully sent.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold tracking-tight text-headline sm:text-3xl">
                Your rights
              </h2>
              <p className="mt-4">
                You can withdraw consent at any time by using the unsubscribe
                link in any newsletter. Withdrawal does not affect email we
                already sent lawfully.
              </p>
              <p className="mt-4">
                Under UK and EU GDPR you may also request access to, correction
                of, or deletion of your personal data, and you may lodge a
                complaint with the ICO in the UK or your local EU supervisory
                authority.
              </p>
            </section>

            <p className="border-t border-hairline pt-10">
              <Link
                href="/resources"
                className="font-semibold text-navy underline decoration-navy/25 underline-offset-4 hover:decoration-navy"
              >
                Back to Resources
              </Link>
            </p>
          </article>
        </Container>
      </section>
    </main>
  );
}
