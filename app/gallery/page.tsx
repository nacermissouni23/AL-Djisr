import Link from "next/link";
import type { Metadata } from "next";

import { ContactStrip } from "@/components/contact-strip";
import { GalleryGrid } from "@/components/gallery-grid";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Galerie des formations",
  description:
    "Decouvrez les espaces de formation, ateliers tech et environnements de coaching de AL Djisr.",
  path: "/gallery",
  keywords: ["galerie formation alger", "centre de formation bab ezzouar", "formation tech alger"],
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Galerie", path: "/gallery" },
        ])}
      />

      <section className="container-shell relative overflow-hidden py-16 sm:py-22">
        <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[var(--color-rose-200)]/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-4 h-72 w-72 rounded-full bg-[var(--color-gold-300)]/24 blur-3xl" />

        <div className="relative grid gap-7 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-rose-700)]">
              Galerie
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[var(--color-grenat-900)] sm:text-5xl">
              Un apercu concret de l'environnement de formation
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-ink-700)]">
              Nous montrons des espaces orientes pratique: labs, salles de formation, ateliers collaboratifs
              et sessions de coaching.
            </p>
          </div>

          <aside className="rounded-3xl border border-[var(--color-grenat-200)] bg-white/90 p-6 shadow-lg backdrop-blur sm:p-7">
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Visitez avant de decider</h2>
            <p className="mt-3 text-sm text-[var(--color-ink-700)]">
              Une visite du centre vous permet de valider l'ambiance, les equipements et la methode pedagogique.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/inscription"
                className="rounded-full bg-[var(--color-rose-700)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)]"
                data-track="book_visit_click"
              >
                Planifier une visite
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[var(--color-grenat-300)] px-5 py-2.5 text-sm font-semibold text-[var(--color-grenat-900)]"
                data-track="contact_info_click"
              >
                Poser une question
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-shell pb-10">
        <SectionHeading
          eyebrow="Environnement"
          title="Explorez les categories"
          description="Espaces de formation, labs techniques et ecosysteme d'apprentissage professionnel."
        />
        <div className="mt-6">
          <GalleryGrid />
        </div>
      </section>

      <section className="container-shell py-6">
        <div className="rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 text-center shadow-[0_24px_70px_-45px_rgba(74,19,30,0.5)] sm:p-8">
          <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Planifier une visite du centre</h2>
          <p className="mt-3 text-sm text-[var(--color-ink-700)]">
            Rien ne remplace une visite sur place pour valider l'ambiance de travail et la qualite des ateliers.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/inscription"
              className="rounded-full bg-[var(--color-rose-700)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)]"
              data-track="book_visit_click"
            >
              Demander une visite
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[var(--color-grenat-300)] px-6 py-3 text-sm font-semibold text-[var(--color-grenat-900)]"
              data-track="contact_info_click"
            >
              Contacter l'equipe
            </Link>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
