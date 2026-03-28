import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { courses, getCourseBySlug } from "@/content/courses";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbSchema,
  buildCourseSchema,
} from "@/lib/structured-data";

type CourseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return buildPageMetadata({
      title: "Cours introuvable",
      description: "Le cours demande n'existe pas.",
      path: `/courses/${slug}`,
    });
  }

  return buildPageMetadata({
    title: course.title,
    description: `${course.shortDescription} Duree: ${course.duration}. Niveau: ${course.level}.`,
    path: `/courses/${course.slug}`,
    keywords: [
      "formation alger",
      "formation bab ezzouar",
      course.title.toLowerCase(),
      `cours ${course.category.toLowerCase()} alger`,
    ],
  });
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Formations", path: "/formations" },
          { name: course.title, path: `/courses/${course.slug}` },
        ])}
      />
      <JsonLd data={buildCourseSchema(course)} />

      <section className="container-shell relative overflow-hidden py-16 sm:py-22">
        <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[var(--color-rose-200)]/65 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-4 h-72 w-72 rounded-full bg-[var(--color-gold-300)]/20 blur-3xl" />

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-rose-700)]">{course.category}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[var(--color-grenat-900)] sm:text-5xl">
          {course.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-ink-700)]">{course.description}</p>

        <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-700)]">
          <span className="rounded-full border border-[var(--color-grenat-100)] bg-white px-3 py-1">{course.level}</span>
          <span className="rounded-full border border-[var(--color-grenat-100)] bg-white px-3 py-1">{course.duration}</span>
          <span className="rounded-full border border-[var(--color-grenat-100)] bg-white px-3 py-1">{course.format}</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/inscription"
            className="rounded-full bg-[var(--color-rose-700)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)]"
            data-track="apply_now_click"
          >
            Recevoir mon plan de demarrage
          </Link>
          <a
            href={`${siteConfig.whatsappHref}?text=${encodeURIComponent(`Bonjour, je veux des infos sur la formation ${course.title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--color-grenat-300)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-grenat-900)]"
            data-track="whatsapp_click"
          >
            Poser mes questions sur WhatsApp
          </a>
        </div>
      </section>

      <section className="container-shell pb-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <article className="rounded-3xl border border-[var(--color-grenat-200)] bg-gradient-to-b from-white to-[var(--color-sand-50)] p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Curriculum complet</h2>
              <div className="mt-5 space-y-4">
                {course.curriculum.map((module) => (
                  <section
                    key={module.title}
                    className="rounded-2xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] p-4"
                  >
                    <h3 className="text-lg font-semibold text-[var(--color-grenat-900)]">{module.title}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-[var(--color-ink-700)]">
                      {module.topics.map((topic) => (
                        <li key={topic} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-rose-600)]" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-[var(--color-grenat-200)] bg-gradient-to-b from-white to-[var(--color-sand-50)] p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Ce que vous allez maitriser</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {course.skillsGained.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3 text-sm text-[var(--color-ink-700)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-[var(--color-grenat-200)] bg-gradient-to-b from-white to-[var(--color-sand-50)] p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Debouches professionnels</h2>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-ink-700)]">
                {course.careerOutcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold-500)]" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>

            {course.instructor ? (
              <article className="rounded-3xl border border-[var(--color-grenat-200)] bg-gradient-to-b from-white to-[var(--color-sand-50)] p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Formateur</h2>
                <h3 className="mt-3 text-lg font-semibold text-[var(--color-grenat-900)]">{course.instructor.name}</h3>
                <p className="text-sm font-medium text-[var(--color-rose-700)]">{course.instructor.role}</p>
                <p className="mt-2 text-sm text-[var(--color-ink-700)]">{course.instructor.bio}</p>
              </article>
            ) : null}
          </div>

          <aside className="space-y-4 rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 shadow-[0_24px_70px_-45px_rgba(74,19,30,0.5)] lg:sticky lg:top-28 lg:h-fit">
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Pret a demarrer cette formation ?</h2>
            <p className="text-sm text-[var(--color-ink-700)]">
              Inscrivez-vous maintenant ou parlez a un conseiller. Vous recevez une reponse claire sous 24h ouvrables.
            </p>
            <Link
              href="/inscription"
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-rose-700)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)]"
              data-track="apply_now_click"
            >
              Recevoir mon plan de demarrage
            </Link>
            <a
              href={`${siteConfig.whatsappHref}?text=${encodeURIComponent(`Bonjour, je veux des infos sur la formation ${course.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-[var(--color-grenat-300)] px-5 py-3 text-sm font-semibold text-[var(--color-grenat-900)]"
              data-track="whatsapp_click"
            >
              Parler a un conseiller maintenant
            </a>
            <Link
              href="/formations"
              className="inline-flex w-full items-center justify-center rounded-full border border-[var(--color-grenat-200)] px-5 py-3 text-sm font-semibold text-[var(--color-ink-700)]"
              data-track="courses_cta_click"
            >
              Voir les autres formations
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
