import type { Metadata } from "next";
import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
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
  return {
    title: post.title,
    description: `${post.category} · ${post.date}`,
    openGraph: {
      title: post.title,
      description: `${post.category} · ${post.date}`,
    },
  };
}

const mdComponents = {
  h2: ({
    children,
    ...props
  }: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-12 scroll-mt-24 font-serif text-2xl font-bold tracking-tight text-headline first:mt-0 sm:text-3xl"
      {...props}
    >
      {children}
    </h2>
  ),
  p: ({ children, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p
      className="mt-4 text-lg leading-[1.75] text-body first:mt-0 [&+ul]:mt-3"
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ children, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="mt-4 list-disc space-y-2 pl-6 text-lg leading-[1.75] text-body"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mt-4 list-decimal space-y-2 pl-6 text-lg leading-[1.75] text-body"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className="pl-1 marker:text-navy" {...props}>
      {children}
    </li>
  ),
  strong: ({
    children,
    ...props
  }: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-headline" {...props}>
      {children}
    </strong>
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
            <div className="prose-article mt-10 border-t border-hairline pt-10">
              <ReactMarkdown components={mdComponents}>
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
