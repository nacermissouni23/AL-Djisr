import Link from "next/link";
import type { Metadata } from "next";

import { ContactStrip } from "@/components/contact-strip";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { faqItems } from "@/content/faq";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ",
  description:
    "Retrouvez les reponses aux questions frequentes sur les formations, l'inscription et l'orientation carriere.",
  path: "/faq",
  keywords: ["FAQ formation alger", "questions inscription formation", "cours bab ezzouar"],
});

export default function FaqPage() {
  const categorized = {
    inscription: faqItems.filter((item) => item.category === "inscription"),
    formations: faqItems.filter((item) => item.category === "formations"),
    carriere: faqItems.filter((item) => item.category === "carriere"),
  };

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <JsonLd
        data={buildFaqSchema(
          faqItems.map((item) => ({
            question: item.question,
            answer: item.answer,
          })),
        )}
      />

      <section className="container-shell relative overflow-hidden py-16 sm:py-22">
        <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[var(--color-rose-200)]/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-4 h-72 w-72 rounded-full bg-[var(--color-gold-300)]/24 blur-3xl" />

        <div className="relative grid gap-7 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-rose-700)]">FAQ</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[var(--color-grenat-900)] sm:text-5xl">
              Questions frequentes des apprenants
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-ink-700)]">
              Cette section repond aux demandes les plus courantes sur les parcours, l'inscription
              et l'orientation professionnelle.
            </p>
          </div>

          <aside className="rounded-3xl border border-[var(--color-grenat-200)] bg-white/90 p-6 shadow-lg backdrop-blur sm:p-7">
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Besoin d'une reponse rapide</h2>
            <p className="mt-3 text-sm text-[var(--color-ink-700)]">
              Si vous ne trouvez pas votre cas, notre equipe peut vous orienter en quelques minutes.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--color-rose-700)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)]"
                data-track="contact_info_click"
              >
                Parler a un conseiller
              </Link>
              <Link
                href="/inscription"
                className="rounded-full border border-[var(--color-grenat-300)] px-5 py-2.5 text-sm font-semibold text-[var(--color-grenat-900)]"
                data-track="apply_now_click"
              >
                Demarrer l'inscription
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-shell pb-8">
        <SectionHeading
          eyebrow="Inscription"
          title="Demande d'information et demarrage"
          description="Les reponses ci-dessous sont indicatives et peuvent etre precisees par un conseiller formation."
        />
        <div className="mt-5 space-y-3">
          {categorized.inscription.map((item) => (
            <details
              key={item.id}
              className="rounded-2xl border border-[var(--color-grenat-200)] bg-white px-5 py-4 shadow-sm transition hover:shadow-md"
            >
              <summary className="cursor-pointer text-base font-semibold text-[var(--color-grenat-900)]">
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-[var(--color-ink-700)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container-shell py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Formations"
              title="Parcours et methodes"
              description="Contenu, niveau, format et certification."
            />
            <div className="mt-5 space-y-3">
              {categorized.formations.map((item) => (
                <details
                  key={item.id}
                  className="rounded-2xl border border-[var(--color-grenat-200)] bg-white px-5 py-4 shadow-sm transition hover:shadow-md"
                >
                  <summary className="cursor-pointer text-base font-semibold text-[var(--color-grenat-900)]">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm text-[var(--color-ink-700)]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Carriere"
              title="Impact professionnel"
              description="Debouches, progression et accompagnement emploi."
            />
            <div className="mt-5 space-y-3">
              {categorized.carriere.map((item) => (
                <details
                  key={item.id}
                  className="rounded-2xl border border-[var(--color-grenat-200)] bg-white px-5 py-4 shadow-sm transition hover:shadow-md"
                >
                  <summary className="cursor-pointer text-base font-semibold text-[var(--color-grenat-900)]">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm text-[var(--color-ink-700)]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-6">
        <div className="rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 text-center shadow-[0_24px_70px_-45px_rgba(74,19,30,0.5)] sm:p-8">
          <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Besoin d'une reponse personnalisee ?</h2>
          <p className="mt-3 text-sm text-[var(--color-ink-700)]">
            Notre equipe vous aide a choisir la formation la plus adaptee a votre objectif.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--color-rose-700)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)]"
              data-track="contact_info_click"
            >
              Contacter un conseiller
            </Link>
            <Link
              href="/inscription"
              className="rounded-full border border-[var(--color-grenat-300)] px-6 py-3 text-sm font-semibold text-[var(--color-grenat-900)]"
              data-track="apply_now_click"
            >
              Aller a l'inscription
            </Link>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
