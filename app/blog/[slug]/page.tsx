import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { getBlogPostBySlug, blogPosts } from "@/content/blog";
import { buildPageMetadata } from "@/lib/metadata";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/structured-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return buildPageMetadata({
      title: "Article introuvable",
      description: "L'article demande n'existe pas.",
      path: `/blog/${slug}`,
    });
  }

  return buildPageMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: [post.category, "blog formation alger", "AL Djisr"],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={buildArticleSchema({
          title: post.title,
          description: post.metaDescription,
          slug: post.slug,
          publishedAt: post.publishedAt,
          author: post.author,
        })}
      />

      <article className="container-shell relative overflow-hidden py-16 sm:py-22">
        <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[var(--color-rose-200)]/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-4 h-72 w-72 rounded-full bg-[var(--color-gold-300)]/20 blur-3xl" />

        <Link
          href="/blog"
          className="relative inline-flex rounded-full border border-[var(--color-grenat-200)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-grenat-900)]"
        >
          Retour au blog
        </Link>

        <div className="relative mt-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-rose-700)]">{post.category}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-[var(--color-grenat-900)] sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-sm text-[var(--color-ink-600)]">
            {post.publishedAt} • {post.author} • {post.readingTime}
          </p>
        </div>

        <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-3xl border border-[var(--color-grenat-200)] bg-white shadow-sm">
          <Image src={post.coverImage} alt={post.title} fill sizes="100vw" className="object-cover" priority />
        </div>

        <div className="prose-custom relative mt-10 max-w-3xl space-y-5 text-[var(--color-ink-800)]">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="relative mt-10 max-w-3xl rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Passer a l'action</h2>
          <p className="mt-2 text-sm text-[var(--color-ink-700)]">
            Vous souhaitez transformer ces conseils en progression concrete ? Parlez a un conseiller et recevez un plan adapte a votre objectif.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/inscription"
              className="rounded-full bg-[var(--color-rose-700)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)]"
              data-track="apply_now_click"
            >
              Demarrer mon orientation
            </Link>
            <Link
              href="/formations"
              className="rounded-full border border-[var(--color-grenat-300)] px-5 py-2.5 text-sm font-semibold text-[var(--color-grenat-900)]"
              data-track="courses_cta_click"
            >
              Voir les formations
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
