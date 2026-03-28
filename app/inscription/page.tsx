import Link from "next/link";
import type { Metadata } from "next";

import { LeadForm } from "@/components/forms/lead-form";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { enrollmentSteps } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Inscription / Demande d'information",
  description:
    "Inscrivez-vous ou demandez des informations sur nos formations a Bab Ezzouar en quelques clics.",
  path: "/inscription",
  keywords: [
    "inscription formation alger",
    "demande information formation bab ezzouar",
    "ecole de formation alger",
  ],
});

export default function InscriptionPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Inscription", path: "/inscription" },
        ])}
      />

      <section className="container-shell relative overflow-hidden py-16 sm:py-22">
        <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[var(--color-rose-200)]/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-[var(--color-gold-300)]/25 blur-3xl" />

        <div className="relative grid gap-7 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-rose-700)]">Inscription</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[var(--color-grenat-900)] sm:text-5xl">
              Inscription et demande d'information
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-ink-700)]">
              Renseignez vos coordonnees, la formation ciblee et votre objectif. Notre equipe vous recontacte
              rapidement pour confirmer votre plan de demarrage. Reponse sous 24h ouvrables.
            </p>
          </div>

          <aside className="rounded-3xl border border-[var(--color-grenat-200)] bg-white/90 p-6 shadow-lg backdrop-blur sm:p-7">
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Ce que vous obtenez</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-ink-700)]">
              <li className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                Un plan de demarrage adapte a votre niveau.
              </li>
              <li className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                Une estimation claire du rythme et des objectifs.
              </li>
              <li className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                Une orientation directe vers la formation la plus rentable pour vous.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="container-shell pb-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <article className="rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 shadow-sm">
              <SectionHeading
                eyebrow="Parcours"
                title="Comment se passe l'inscription"
                description="Un processus clair, rapide et transparent pour lancer votre formation sans friction."
              />
              <ol className="mt-6 space-y-4">
                {enrollmentSteps.map((step) => (
                  <li
                    key={step.title}
                    className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] p-4"
                  >
                    <h3 className="text-base font-semibold text-[var(--color-grenat-900)]">{step.title}</h3>
                    <p className="mt-1 text-sm text-[var(--color-ink-700)]">{step.description}</p>
                  </li>
                ))}
              </ol>
            </article>

            <article className="rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 shadow-sm">
              <SectionHeading
                eyebrow="Besoin d'un conseil"
                title="Un conseiller vous aide a choisir en 1 appel"
                description="Si vous hesitez entre plusieurs parcours, un conseiller vous oriente selon votre niveau et objectif."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/formations"
                  className="rounded-full border border-[var(--color-grenat-300)] px-6 py-3 text-sm font-semibold text-[var(--color-grenat-900)]"
                  data-track="courses_cta_click"
                >
                  Voir les formations
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-[var(--color-rose-700)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)]"
                  data-track="contact_info_click"
                >
                  Echanger avec un conseiller
                </Link>
              </div>
            </article>
          </div>

          <div className="rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 shadow-[0_24px_70px_-45px_rgba(74,19,30,0.5)] lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Formulaire"
              title="Recevez votre plan de demarrage"
              description="Les champs marques d'un * sont obligatoires. Reponse sous 24h ouvrables."
            />
            <div className="mt-5">
              <LeadForm
                sourcePage="/inscription"
                leadType="registration"
                submitLabel="Demarrer mon inscription"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
