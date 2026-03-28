import Link from "next/link";

import { siteConfig } from "@/content/site";

export function ContactStrip() {
  return (
    <section className="container-shell py-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-grenat-200)] bg-gradient-to-br from-[var(--color-grenat-900)] via-[var(--color-grenat-800)] to-[var(--color-rose-700)] px-6 py-9 text-white shadow-[0_24px_70px_-30px_rgba(74,19,30,0.8)] sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute -top-14 -right-14 h-44 w-44 rounded-full bg-[var(--color-gold-300)]/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-12 bottom-0 h-48 w-48 rounded-full bg-[var(--color-rose-400)]/35 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-300)]">
              Orientation gratuite
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
              Recevez un plan de formation clair en moins de 24h
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base">
              Nos conseillers vous aident a choisir le bon parcours selon votre niveau, votre objectif et votre disponibilite.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/95">
              <a
                href={siteConfig.phoneHref}
                data-track="phone_click"
                className="rounded-full border border-white/25 bg-white/5 px-4 py-2 transition hover:bg-white/12"
              >
                Appel: {siteConfig.phone}
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                className="rounded-full border border-white/25 bg-white/5 px-4 py-2 transition hover:bg-white/12"
              >
                WhatsApp conseiller
              </a>
              <a
                href={siteConfig.emailHref}
                data-track="email_click"
                className="rounded-full border border-white/25 bg-white/5 px-4 py-2 transition hover:bg-white/12"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/inscription"
              className="rounded-full bg-[var(--color-gold-400)] px-6 py-3 text-sm font-semibold text-[var(--color-grenat-900)] transition hover:bg-[var(--color-gold-300)]"
              data-track="apply_now_click"
            >
              Recevoir mon orientation
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/40 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              data-track="contact_info_click"
            >
              Demander le programme complet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
