import Link from "next/link";
import type { Metadata } from "next";

import { ContactStrip } from "@/components/contact-strip";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { highlights, trustSignals, whyChooseUsPillars } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Pourquoi choisir AL Djisr",
  description:
    "Decouvrez pourquoi AL Djisr est un choix solide pour apprendre des competences orientees metier a Bab Ezzouar.",
  path: "/pourquoi-nous",
  keywords: ["ecole de formation alger", "formation bab ezzouar", "pourquoi choisir une formation tech"],
});

export default function PourquoiNousPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Pourquoi nous", path: "/pourquoi-nous" },
        ])}
      />

      <section className="container-shell relative overflow-hidden py-16 sm:py-22">
        <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[var(--color-rose-200)]/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-4 h-72 w-72 rounded-full bg-[var(--color-gold-300)]/22 blur-3xl" />

        <div className="relative grid gap-7 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Pourquoi nous"
            title="Un cadre qui transforme vos competences en opportunites concretes"
            description="Des formateurs terrain, un suivi individuel et un objectif clair: vous rendre operationnel."
          />

          <aside className="rounded-3xl border border-[var(--color-grenat-200)] bg-white/90 p-6 shadow-lg backdrop-blur sm:p-7">
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Ce qui fait la difference</h2>
            <p className="mt-3 text-sm text-[var(--color-ink-700)]">
              Vous avancez avec un cadre exigeant, des projets utiles et un accompagnement qui reste aligne sur vos objectifs professionnels.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/inscription"
                className="rounded-full bg-[var(--color-rose-700)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)]"
                data-track="apply_now_click"
              >
                Recevoir mon orientation
              </Link>
              <Link
                href="/formations"
                className="rounded-full border border-[var(--color-grenat-300)] px-5 py-2.5 text-sm font-semibold text-[var(--color-grenat-900)]"
                data-track="courses_cta_click"
              >
                Voir les parcours
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-shell pb-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[var(--color-grenat-200)] bg-gradient-to-b from-white to-[var(--color-sand-50)] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold text-[var(--color-grenat-900)]">{item.title}</h2>
              <p className="mt-2 text-sm text-[var(--color-ink-700)]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-8">
        <div className="grid gap-6 rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 shadow-[0_24px_70px_-45px_rgba(74,19,30,0.5)] lg:grid-cols-2 lg:p-8">
          <article>
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Ce que vous obtenez</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-ink-700)]">
              {whyChooseUsPillars.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-rose-600)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Nos engagements</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-ink-700)]">
              {trustSignals.map((item) => (
                <li key={item} className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/formations"
                className="rounded-full bg-[var(--color-rose-700)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)]"
                data-track="courses_cta_click"
              >
                Voir les formations
              </Link>
              <Link
                href="/inscription"
                className="rounded-full border border-[var(--color-grenat-300)] px-6 py-3 text-sm font-semibold text-[var(--color-grenat-900)]"
                data-track="apply_now_click"
              >
                Demarrer avec un conseiller
              </Link>
            </div>
          </article>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
