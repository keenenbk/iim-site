import type { Metadata } from "next";
import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlogNewsletterBand } from "@/components/blog-newsletter-band";
import { Container } from "@/components/container";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post not found" };
  }
  const title = post.metaTitle ?? post.title;
  const description =
    post.description ?? `${post.category} · ${post.date}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
    },
  };
}

const linkClassName =
  "font-semibold text-navy underline decoration-navy/25 underline-offset-4 transition-colors hover:decoration-navy";

const mdComponents = {
  h2: ({ children }: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mt-12 scroll-mt-24 font-serif text-2xl font-bold tracking-tight text-headline first:mt-0 sm:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mt-8 scroll-mt-24 font-serif text-xl font-bold tracking-tight text-headline sm:text-2xl">
      {children}
    </h3>
  ),
  p: ({ children }: ComponentPropsWithoutRef<"p">) => (
    <p className="mt-4 text-lg leading-[1.75] text-body first:mt-0 [&+ul]:mt-3">
      {children}
    </p>
  ),
  ul: ({ children }: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-[1.75] text-body">
      {children}
    </ul>
  ),
  ol: ({ children }: ComponentPropsWithoutRef<"ol">) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-lg leading-[1.75] text-body">
      {children}
    </ol>
  ),
  li: ({ children }: ComponentPropsWithoutRef<"li">) => (
    <li className="pl-1 marker:text-navy">{children}</li>
  ),
  strong: ({ children }: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-headline">{children}</strong>
  ),
  em: ({ children }: ComponentPropsWithoutRef<"em">) => (
    <em className="italic">{children}</em>
  ),
  a: ({ href, children }: ComponentPropsWithoutRef<"a">) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={linkClassName}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={linkClassName}
        {...(href?.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  },
  hr: () => <hr className="mt-12 border-hairline" />,
  table: ({ children }: ComponentPropsWithoutRef<"table">) => (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[28rem] border-collapse text-left text-base leading-relaxed text-body">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: ComponentPropsWithoutRef<"thead">) => (
    <thead>{children}</thead>
  ),
  tbody: ({ children }: ComponentPropsWithoutRef<"tbody">) => (
    <tbody>{children}</tbody>
  ),
  tr: ({ children }: ComponentPropsWithoutRef<"tr">) => (
    <tr className="border-b border-hairline">{children}</tr>
  ),
  th: ({ children, style }: ComponentPropsWithoutRef<"th">) => (
    <th
      className="py-3 pr-4 font-semibold text-headline last:pr-0"
      style={style}
    >
      {children}
    </th>
  ),
  td: ({ children, style }: ComponentPropsWithoutRef<"td">) => (
    <td className="py-3 pr-4 last:pr-0" style={style}>
      {children}
    </td>
  ),
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <main>
      <article className="border-b border-hairline bg-background pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/resources"
              className="inline-flex text-base font-semibold text-navy underline decoration-navy/25 underline-offset-4 transition-colors hover:decoration-navy"
            >
              ← Back to Resources
            </Link>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-navy">
              {post.category}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-headline lg:text-5xl lg:leading-tight">
              {post.title}
            </h1>
            <time
              className="mt-4 block text-sm font-semibold tabular-nums text-body"
              dateTime={post.dateIso}
            >
              {post.date}
            </time>
            {post.excerpt ? (
              <p className="mt-8 text-xl leading-relaxed text-navy sm:text-2xl sm:leading-snug">
                {post.excerpt}
              </p>
            ) : null}
            <div className="prose-article mt-10 border-t border-hairline pt-10">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={mdComponents}
              >
                {post.content.trim()}
              </ReactMarkdown>
            </div>
          </div>
        </Container>
      </article>
      <BlogNewsletterBand />
    </main>
  );
}
