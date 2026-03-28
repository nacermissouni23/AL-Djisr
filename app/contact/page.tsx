import type { Metadata } from "next";

import { LeadForm } from "@/components/forms/lead-form";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig, workingHours } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contactez AL Djisr pour choisir votre formation, demander des informations ou lancer votre inscription.",
  path: "/contact",
  keywords: ["contact centre de formation alger", "contact formation bab ezzouar", "AL Djisr contact"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="container-shell relative overflow-hidden py-16 sm:py-22">
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-rose-200)]/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-[var(--color-gold-300)]/20 blur-3xl" />

        <div className="relative grid gap-7 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-rose-700)]">Contact</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[var(--color-grenat-900)] sm:text-5xl">
              Parlez a un conseiller formation des aujourd'hui
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-ink-700)]">
              Appelez, envoyez un message WhatsApp, ecrivez-nous par email ou utilisez le formulaire
              Inscription / Demande d'information pour une reponse sous 24h ouvrables.
            </p>
          </div>

          <aside className="rounded-3xl border border-[var(--color-grenat-200)] bg-white/90 p-6 shadow-lg backdrop-blur sm:p-7">
            <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Reponse rapide et claire</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-ink-700)]">
              <li className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                Reponse sous 24h ouvrables.
              </li>
              <li className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                Orientation selon votre niveau reel.
              </li>
              <li className="rounded-xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3">
                Conseils concrets sur la prochaine etape.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="container-shell pb-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <article className="rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 shadow-sm">
              <SectionHeading eyebrow="Coordonnees" title="Choisissez votre canal de contact" />
              <ul className="mt-5 space-y-3 text-sm text-[var(--color-ink-700)]">
                <li>
                  <span className="font-semibold text-[var(--color-grenat-900)]">Telephone: </span>
                  <a href={siteConfig.phoneHref} data-track="phone_click" className="underline">
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-[var(--color-grenat-900)]">WhatsApp: </span>
                  <a
                    href={siteConfig.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="whatsapp_click"
                    className="underline"
                  >
                    {siteConfig.whatsapp}
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-[var(--color-grenat-900)]">Email: </span>
                  <a href={siteConfig.emailHref} data-track="email_click" className="underline">
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-[var(--color-grenat-900)]">Adresse: </span>
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="maps_click"
                    className="underline"
                  >
                    {siteConfig.address}
                  </a>
                </li>
              </ul>
            </article>

            <article className="rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 shadow-sm">
              <SectionHeading eyebrow="Horaires" title="Accueil administratif" />
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-ink-700)]">
                {workingHours.map((item) => (
                  <li
                    key={item.day}
                    className="flex items-center justify-between gap-3 border-b border-[var(--color-grenat-100)] py-2"
                  >
                    <span>{item.day}</span>
                    <span className="font-semibold text-[var(--color-grenat-900)]">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="overflow-hidden rounded-3xl border border-[var(--color-grenat-200)] bg-white shadow-sm">
              <div className="h-[300px] w-full">
                <iframe
                  title="Carte AL Djisr"
                  src={siteConfig.mapsEmbedUrl}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </article>
          </div>

          <article className="rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 shadow-[0_24px_70px_-45px_rgba(74,19,30,0.5)] lg:p-8">
            <SectionHeading
              eyebrow="Formulaire"
              title="Inscription / Demande d'information"
              description="Indiquez votre objectif et la formation visee. Un conseiller vous recontacte sous 24h ouvrables."
            />
            <div className="mt-5">
              <LeadForm sourcePage="/contact" leadType="inquiry" submitLabel="Demander des informations" />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
