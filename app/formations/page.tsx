import Link from "next/link";
import type { Metadata } from "next";

import { ContactStrip } from "@/components/contact-strip";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { courses } from "@/content/courses";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Formations",
  description:
    "Explorez nos formations a Bab Ezzouar: Machine Learning, reseaux, anglais professionnel et developpement web.",
  path: "/formations",
  keywords: [
    "formation alger",
    "formation bab ezzouar",
    "ecole de formation alger",
    "cours machine learning alger",
    "formation reseau alger",
    "cours anglais alger",
  ],
});

export default function FormationsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Formations", path: "/formations" },
        ])}
      />

      <section className="container-shell relative overflow-hidden py-16 sm:py-22">
        <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[var(--color-rose-200)]/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-[var(--color-gold-300)]/25 blur-3xl" />

        <div className="relative grid gap-7 lg:grid-cols-[1.25fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-rose-700)]">Formations</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[var(--color-grenat-900)] sm:text-5xl">
              Trouvez la formation la plus adaptee a votre objectif
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-ink-700)]">
              Comparez chaque parcours en quelques minutes: niveau, duree, programme, competences visees
              et debouches.
            </p>
          </div>

          <aside className="rounded-3xl border border-[var(--color-grenat-200)] bg-white/90 p-6 shadow-lg backdrop-blur sm:p-7">
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Comment choisir rapidement</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-ink-700)]">
              <li className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                1. Identifiez votre objectif: emploi, reconversion ou progression.
              </li>
              <li className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                2. Comparez niveau, duree et format de chaque parcours.
              </li>
              <li className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                3. Demandez une orientation gratuite pour valider votre choix.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="container-shell pb-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {courses.map((course) => (
            <article
              key={course.slug}
              className="rounded-3xl border border-[var(--color-grenat-200)] bg-gradient-to-b from-white to-[var(--color-sand-50)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="rounded-full bg-[var(--color-sand-100)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-rose-700)]">
                  {course.level}
                </p>
                <p className="text-xs font-medium text-[var(--color-ink-600)]">{course.duration}</p>
                <p className="text-xs font-medium text-[var(--color-ink-600)]">{course.category}</p>
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-[var(--color-grenat-900)]">{course.title}</h2>
              <p className="mt-3 text-sm text-[var(--color-ink-700)]">{course.description}</p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-700)]">
                    Ce que vous allez apprendre
                  </h3>
                  <ul className="mt-2 space-y-2 text-sm text-[var(--color-ink-700)]">
                    {course.whatYouWillLearn.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-rose-600)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-700)]">
                    Cette formation est pour
                  </h3>
                  <ul className="mt-2 space-y-2 text-sm text-[var(--color-ink-700)]">
                    {course.whoItsFor.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold-500)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={`/courses/${course.slug}`}
                  className="rounded-full bg-[var(--color-rose-700)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)]"
                  data-track="course_detail_click"
                >
                  Voir le programme detaille
                </Link>
                <Link
                  href="/inscription"
                  className="rounded-full border border-[var(--color-grenat-300)] px-5 py-2.5 text-sm font-semibold text-[var(--color-grenat-900)]"
                  data-track="apply_now_click"
                >
                  Recevoir une orientation
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-8">
        <div className="rounded-3xl border border-[var(--color-grenat-200)] bg-white p-8 shadow-[0_24px_70px_-45px_rgba(74,19,30,0.5)]">
          <SectionHeading
            eyebrow="Besoin d'aide"
            title="Vous hesitez entre plusieurs parcours ?"
            description="Un conseiller vous aide a choisir la meilleure formation selon votre niveau, votre objectif et votre disponibilite. Orientation gratuite, sans engagement."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/inscription"
              className="rounded-full bg-[var(--color-rose-700)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)]"
              data-track="apply_now_click"
            >
              Obtenir ma recommandation gratuite
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[var(--color-grenat-300)] px-6 py-3 text-sm font-semibold text-[var(--color-grenat-900)]"
              data-track="contact_info_click"
            >
              Contacter un conseiller
            </Link>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
