import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { ResourcesNewsletterBand } from "@/components/resources-newsletter-band";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Articles, references, and knowledge for marketing leaders, researchers, and measurement practitioners.",
};

type Category = "CASE STUDY" | "BLOG";

const posts: {
  category: Category;
  title: string;
  dateLabel: string;
  dateIso: string;
}[] = [
  {
    category: "CASE STUDY",
    title:
      "Case Study: How a Gaming Brand Replaced Attribution with Integrated Impact Modeling (IIM) to Unlock Growth",
    dateLabel: "Nov 2, 2024",
    dateIso: "2024-11-02",
  },
  {
    category: "BLOG",
    title:
      "From Awareness to Activation: A Real-World Application of Integrated Impact Modeling in Wholesale Distribution",
    dateLabel: "Jun 1, 2024",
    dateIso: "2024-06-01",
  },
  {
    category: "BLOG",
    title:
      "What Marketing Can Learn from Climate Science: Rethinking Measurement with Integrated Impact Modeling",
    dateLabel: "Apr 6, 2024",
    dateIso: "2024-04-06",
  },
  {
    category: "BLOG",
    title:
      "Transitioning from Traditional Metrics to Integrated Impact Modeling: A Strategic Guide for Digital Marketers",
    dateLabel: "Mar 2, 2023",
    dateIso: "2023-03-02",
  },
  {
    category: "BLOG",
    title: "Together, Building a New Era of Marketing Measurement",
    dateLabel: "Feb 1, 2023",
    dateIso: "2023-02-01",
  },
];

function PostCard({
  post,
  featured = false,
}: {
  post: (typeof posts)[number];
  featured?: boolean;
}) {
  return (
    <Link
      href="#"
      className={`group flex h-full flex-col rounded-lg bg-background p-7 shadow-sm transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-md sm:p-9 ${
        featured ? "min-h-[260px] lg:min-h-[320px]" : ""
      }`}
      aria-label={`Read: ${post.title}`}
    >
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-navy">
        {post.category}
      </span>
      <span
        className={`mt-4 font-serif font-bold leading-snug text-headline transition-colors group-hover:text-navy ${
          featured
            ? "text-2xl sm:text-3xl lg:text-4xl lg:leading-tight"
            : "text-xl sm:text-2xl"
        }`}
      >
        {post.title}
      </span>
      <div className="mt-auto flex items-end justify-between gap-4 pt-8">
        <time
          className="text-sm font-semibold tabular-nums text-body"
          dateTime={post.dateIso}
        >
          {post.dateLabel}
        </time>
        <span
          className="text-xl font-light text-navy opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
          aria-hidden
        >
          →
        </span>
      </div>
    </Link>
  );
}

export default function ResourcesPage() {
  const [featured, ...rest] = posts;
  const [stackTop, stackBottom, rowLeft, rowRight] = rest;

  return (
    <main>
      <section className="border-b border-hairline bg-cream py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-body">
              Resources
            </p>
            <h1 className="mt-4 font-serif text-5xl font-bold leading-[1.08] tracking-tight text-headline sm:text-6xl lg:text-7xl lg:leading-[1.06]">
              Resources &amp; References
            </h1>
            <p className="mt-8 text-xl font-semibold leading-relaxed text-navy sm:text-2xl sm:leading-snug">
              A comprehensive knowledge hub for marketing professionals,
              researchers and industry experts.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
            <div className="flex flex-[2] flex-col gap-5">
              <PostCard post={featured} featured />
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <PostCard post={rowLeft} />
                <PostCard post={rowRight} />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 lg:max-w-md">
              <PostCard post={stackTop} />
              <PostCard post={stackBottom} />
            </div>
          </div>
        </Container>
      </section>

      <ResourcesNewsletterBand />
    </main>
  );
}
