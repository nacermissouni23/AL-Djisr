import Link from "next/link";
import type { Metadata } from "next";

import { ContactStrip } from "@/components/contact-strip";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "A propos",
  description:
    "Decouvrez la mission de AL Djisr: former des talents operationnels avec des competences utiles au marche de l'emploi.",
  path: "/about",
  keywords: ["ecole de formation alger", "formation bab ezzouar", "centre de formation AL Djisr"],
});

const values = [
  {
    title: "Exigence pratique",
    description:
      "Chaque parcours est construit autour de competences applicables en contexte professionnel.",
  },
  {
    title: "Orientation resultats",
    description:
      "Nous privilegions l'impact: projets, preuves de competence et progression mesurable.",
  },
  {
    title: "Mentorat actif",
    description:
      "Chaque apprenant beneficie d'un suivi humain pour garder un rythme de progression solide.",
  },
  {
    title: "Vision carriere",
    description:
      "Nous connectons apprentissage, objectifs professionnels et opportunites de marche.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "A propos", path: "/about" },
        ])}
      />

      <section className="container-shell relative overflow-hidden py-16 sm:py-22">
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-rose-200)]/65 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[var(--color-gold-300)]/20 blur-3xl" />

        <div className="relative grid gap-7 lg:grid-cols-[1.25fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-rose-700)]">
              A propos du centre
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[var(--color-grenat-900)] sm:text-5xl">
              Une ecole de formation centree sur l'emploi et l'execution
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-ink-700)]">
              AL Djisr est nee d'une conviction simple: une formation utile doit produire des resultats concrets.
              Notre mission est d'accompagner les etudiants et professionnels de Bab Ezzouar vers des carrieres durables.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/formations"
                className="rounded-full bg-[var(--color-grenat-900)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-grenat-800)]"
                data-track="courses_cta_click"
              >
                Explorer les formations
              </Link>
              <Link
                href="/inscription"
                className="rounded-full border border-[var(--color-grenat-300)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-grenat-900)] transition hover:border-[var(--color-rose-500)] hover:text-[var(--color-rose-700)]"
                data-track="apply_now_click"
              >
                Recevoir un conseil gratuit
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-[var(--color-grenat-200)] bg-white/90 p-6 shadow-lg backdrop-blur sm:p-7">
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Ce qui vous attend chez AL Djisr</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-ink-700)]">
              <li className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                Programmes concus pour etre directement utilisables dans des projets reels.
              </li>
              <li className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                Suivi humain avec feedback precis pour maintenir une progression continue.
              </li>
              <li className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                Orientation metier pour relier vos apprentissages a des opportunites concretes.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="container-shell pb-8">
        <div className="grid gap-6 rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 shadow-[0_24px_70px_-45px_rgba(74,19,30,0.45)] lg:grid-cols-2 lg:p-10">
          <article className="rounded-2xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] p-5">
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Notre mission formation</h2>
            <p className="mt-3 text-[var(--color-ink-700)]">
              Nous aidons les apprenants a maitriser des competences concretes en tech, langues et
              developpement professionnel. Chaque programme est pense pour produire des resultats visibles.
            </p>
          </article>
          <article className="rounded-2xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] p-5">
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Notre impact local</h2>
            <p className="mt-3 text-[var(--color-ink-700)]">
              Situe a Bab Ezzouar, AL Djisr accompagne la nouvelle generation de talents d'Alger avec des
              formations connectees aux besoins reels des entreprises et des freelances.
            </p>
          </article>
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Mission</h2>
            <p className="mt-3 text-[var(--color-ink-700)]">
              Former des profils autonomes, fiables et operationnels grace a une pedagogie pratique et un
              encadrement exigeant.
            </p>
          </article>
          <article className="rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Vision</h2>
            <p className="mt-3 text-[var(--color-ink-700)]">
              Devenir la reference locale en formation professionnelle moderne, orientee carriere et innovation.
            </p>
          </article>
        </div>
      </section>

      <section className="container-shell py-10">
        <SectionHeading
          eyebrow="Nos valeurs"
          title="Une culture de progression et de responsabilite"
          description="Ces principes guident nos decisions pedagogiques, humaines et operationnelles."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-[var(--color-grenat-200)] bg-gradient-to-b from-white to-[var(--color-sand-50)] p-5 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[var(--color-grenat-900)]">{value.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-ink-700)]">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="rounded-3xl border border-[var(--color-grenat-200)] bg-white p-8 shadow-[0_24px_70px_-45px_rgba(74,19,30,0.5)]">
          <SectionHeading
            eyebrow="Message de la direction"
            title="Notre promesse: des formations qui changent vraiment votre trajectoire"
            description="Nous croyons a une formation utile, mesurable et ambitieuse. Chaque apprenant merite un cadre qui pousse vers l'excellence professionnelle."
          />
          <p className="mt-5 text-[var(--color-ink-700)]">
            Notre equipe construit des parcours clairs, bases sur la pratique et l'execution. Nous accompagnons
            chaque participant de l'inscription jusqu'a la valorisation de ses competences sur le marche.
          </p>
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
              Demander un plan personnalise
            </Link>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
