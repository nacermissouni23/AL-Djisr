import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { ContactStrip } from "@/components/contact-strip";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { courses, popularCourseSlugs } from "@/content/courses";
import { galleryItems } from "@/content/gallery";
import { enrollmentSteps, highlights, siteConfig, trustSignals } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { buildPageMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Accueil",
  description:
    "Centre de formation a Bab Ezzouar: Machine Learning, reseaux, langues et parcours professionnels orientes carriere.",
  path: "/",
  keywords: [
    "formation alger",
    "formation bab ezzouar",
    "ecole de formation alger",
    "cours machine learning alger",
    "formation reseau alger",
    "cours anglais alger",
  ],
});

const featuredCourses = popularCourseSlugs
  .map((slug) => courses.find((course) => course.slug === slug))
  .filter((course): course is (typeof courses)[number] => Boolean(course));

const featuredGallery = galleryItems.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />
      <JsonLd data={buildBreadcrumbSchema([{ name: "Accueil", path: "/" }])} />

            <section className="container-shell relative overflow-hidden py-20 sm:py-28">
              <div className="pointer-events-none absolute -top-28 -left-20 h-72 w-72 rounded-full bg-[var(--color-rose-200)]/70 blur-3xl" />
              <div className="pointer-events-none absolute -right-28 top-8 h-80 w-80 rounded-full bg-[var(--color-gold-300)]/25 blur-3xl" />

              <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:items-center">
                <div>
                  <p className="inline-flex rounded-full border border-[var(--color-grenat-100)] bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-rose-700)]">
                    Centre de formation a Bab Ezzouar
                  </p>
                  <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-[var(--color-grenat-950)] sm:text-6xl">
                    Developpez des competences recrutees a Bab Ezzouar
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-ink-700)] sm:text-lg">
                    Passez de la theorie a la pratique avec des parcours en Machine Learning, Reseaux,
                    Langues et Developpement Web, concus pour l'emploi.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/formations"
                      className="rounded-full bg-[var(--color-grenat-900)] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-grenat-900)]/20 transition hover:-translate-y-0.5 hover:bg-[var(--color-grenat-800)]"
                      data-track="courses_cta_click"
                    >
                      Explorer les formations
                    </Link>
                    <Link
                      href="/inscription"
                      className="rounded-full border border-[var(--color-grenat-300)] bg-white px-7 py-3 text-sm font-semibold text-[var(--color-grenat-900)] transition hover:border-[var(--color-rose-500)] hover:text-[var(--color-rose-700)]"
                      data-track="apply_now_click"
                    >
                      Recevoir un conseil gratuit
                    </Link>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {trustSignals.map((signal) => (
                      <span
                        key={signal}
                        className="rounded-xl border border-[var(--color-grenat-100)] bg-white/70 px-3 py-1.5 text-xs font-medium text-[var(--color-ink-700)] shadow-sm"
                      >
                        {signal}
                      </span>
                    ))}
                  </div>
                </div>

                <aside className="rounded-3xl border border-[var(--color-grenat-200)] bg-white/85 p-6 shadow-xl backdrop-blur">
                  <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Parler a un conseiller en 2 minutes</h2>
                  <p className="mt-2 text-sm text-[var(--color-ink-700)]">Orientation gratuite et reponse sous 24h ouvrables.</p>
                  <ul className="mt-4 space-y-3 text-sm text-[var(--color-ink-700)]">
                    <li>
                      <span className="font-semibold text-[var(--color-grenat-900)]">Localisation:</span> {siteConfig.location}
                    </li>
                    <li>
                      <span className="font-semibold text-[var(--color-grenat-900)]">Telephone:</span>{" "}
                      <a href={siteConfig.phoneHref} data-track="phone_click" className="underline">
                        {siteConfig.phone}
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold text-[var(--color-grenat-900)]">WhatsApp:</span>{" "}
                      <a
                        href={siteConfig.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-track="whatsapp_click"
                        className="underline"
                      >
                        Conseiller AL Djisr
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold text-[var(--color-grenat-900)]">Email:</span>{" "}
                      <a href={siteConfig.emailHref} data-track="email_click" className="underline">
                        {siteConfig.email}
                      </a>
                    </li>
                  </ul>
                  <Link
                    href="/inscription"
                    className="mt-6 inline-flex rounded-full bg-[var(--color-rose-700)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)]"
                    data-track="apply_now_click"
                  >
                    Recevoir le programme par WhatsApp
                  </Link>
                </aside>
              </div>
            </section>

      <section className="container-shell py-10 sm:py-16">
        <SectionHeading
          eyebrow="Pourquoi AL Djisr"
          title="Un centre de formation centre sur les resultats"
          description="Approche pratique, projets encadres et accompagnement actif vers l'employabilite."
        />
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-[var(--color-grenat-100)] bg-gradient-to-b from-white to-[var(--color-sand-50)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[var(--color-rose-200)] opacity-70 transition group-hover:scale-125" />
              <h3 className="relative text-xl font-semibold text-[var(--color-grenat-900)]">{item.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-[var(--color-ink-700)]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="grid gap-7 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <SectionHeading
            eyebrow="Formations populaires"
            title="Comparez les parcours et choisissez rapidement"
            description="Objectifs, niveau, duree, competences et debouches: tout est clair pour decider sans perdre de temps."
          />
          <div className="flex justify-start lg:justify-end">
            <Link
              href="/formations"
              className="rounded-full border border-[var(--color-grenat-300)] px-6 py-3 text-sm font-semibold text-[var(--color-grenat-900)]"
              data-track="courses_cta_click"
            >
              Voir toutes les formations
            </Link>
          </div>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredCourses.map((course) => (
            <article
              key={course.slug}
              className="rounded-2xl border border-[var(--color-grenat-200)] bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-rose-700)]">
                {course.level}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--color-grenat-900)]">{course.title}</h3>
              <p className="mt-1 text-xs text-[var(--color-ink-600)]">{course.duration}</p>
              <p className="mt-3 text-sm text-[var(--color-ink-700)]">{course.shortDescription}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[var(--color-ink-600)]">
                {course.category}
              </p>
              <Link
                href={`/courses/${course.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-[var(--color-rose-700)]"
                data-track="course_detail_click"
              >
                Voir le programme
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-10">
        <SectionHeading
          eyebrow="Environnement"
          title="Des espaces adaptes a l'apprentissage professionnel"
          description="Labs pratiques, ateliers collaboratifs et sessions de coaching pour une progression concrete."
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGallery.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-[var(--color-grenat-200)] bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-rose-700)]">
                  {item.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--color-grenat-900)]">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/gallery"
            className="inline-flex rounded-full border border-[var(--color-grenat-300)] px-6 py-3 text-sm font-semibold text-[var(--color-grenat-900)]"
            data-track="gallery_interaction"
          >
            Explorer la galerie complete
          </Link>
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="grid gap-6 rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 shadow-sm lg:grid-cols-[1.1fr_1fr] lg:p-8">
          <div>
            <SectionHeading
              eyebrow="Comment ca marche"
              title="Choisir. Demarrer. Valoriser vos competences."
              description="Un processus simple pour passer de l'intention a une competence monnayable sur le marche."
            />
            <ol className="mt-5 space-y-3">
              {enrollmentSteps.map((step) => (
                <li key={step.title} className="rounded-xl bg-[var(--color-sand-100)] p-3 text-sm text-[var(--color-ink-700)]">
                  <p className="font-semibold text-[var(--color-grenat-900)]">{step.title}</p>
                  <p className="mt-1">{step.description}</p>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/inscription"
                className="rounded-full bg-[var(--color-rose-700)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)]"
                data-track="apply_now_click"
              >
                Envoyer ma demande maintenant
              </Link>
              <Link
                href="/faq"
                className="rounded-full border border-[var(--color-grenat-300)] px-6 py-3 text-sm font-semibold text-[var(--color-grenat-900)]"
              >
                Lire la FAQ
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Ils ont evolue avec AL Djisr</h2>
            <div className="mt-4 space-y-3">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.name}
                  className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] p-4"
                >
                  <p className="text-sm text-[var(--color-ink-700)]">"{testimonial.quote}"</p>
                  <footer className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-ink-600)]">
                    {testimonial.name} - {testimonial.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
