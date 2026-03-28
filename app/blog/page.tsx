import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/content/blog";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog et actualites",
  description:
    "Articles utiles pour apprendre les competences les plus demandees et construire une trajectoire professionnelle solide.",
  path: "/blog",
  keywords: ["blog formation alger", "machine learning alger", "carriere reseau", "skills algerie"],
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <section className="container-shell relative overflow-hidden py-16 sm:py-22">
        <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[var(--color-rose-200)]/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-4 h-72 w-72 rounded-full bg-[var(--color-gold-300)]/22 blur-3xl" />

        <div className="relative grid gap-7 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Blog"
            title="Conseils pratiques pour apprendre, progresser et etre recrutable"
            description="Guides de terrain sur la tech, les langues et l'evolution de carriere a Alger et au-dela."
          />

          <aside className="rounded-3xl border border-[var(--color-grenat-200)] bg-white/90 p-6 shadow-lg backdrop-blur sm:p-7">
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Pourquoi lire ces guides</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-ink-700)]">
              <li className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                Decouvrir les competences les plus demandees sur le marche.
              </li>
              <li className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                Eviter les erreurs frequentes de parcours et d'apprentissage.
              </li>
              <li className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                Passer plus vite de la theorie a des actions utiles.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="container-shell pb-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-3xl border border-[var(--color-grenat-200)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex flex-wrap gap-2 text-xs text-[var(--color-ink-600)]">
                  <span>{post.category}</span>
                  <span>•</span>
                  <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>

                <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">{post.title}</h2>
                <p className="text-sm text-[var(--color-ink-700)]">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[var(--color-rose-700)] hover:text-[var(--color-rose-800)]"
                  data-track="blog_post_click"
                >
                  Lire le guide
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
