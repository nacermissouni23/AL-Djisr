import Link from "next/link";

import { navLinks, siteConfig, socialLinks, workingHours } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--color-grenat-700)] bg-gradient-to-b from-[var(--color-grenat-950)] via-[var(--color-grenat-900)] to-[var(--color-grenat-950)] text-[var(--color-sand-100)]">
      <div className="container-shell pt-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-300)]">
            Besoin d'un conseil rapide
          </p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Notre equipe vous aide a choisir la meilleure formation selon votre objectif.
            </h2>
            <Link
              href="/inscription"
              className="inline-flex w-fit rounded-full bg-[var(--color-gold-400)] px-6 py-3 text-sm font-semibold text-[var(--color-grenat-900)] transition hover:bg-[var(--color-gold-300)]"
              data-track="apply_now_click"
            >
              Parler a un conseiller
            </Link>
          </div>
        </div>
      </div>

      <div className="container-shell grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-xl font-semibold">{siteConfig.name}</h2>
          <p className="mt-3 text-sm text-[var(--color-sand-300)]/95">{siteConfig.description}</p>
          <p className="mt-4 text-sm text-[var(--color-sand-300)]/95">{siteConfig.address}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-sand-300)]">
            Navigation
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-[var(--color-gold-300)]"
                  data-track="menu_interaction"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="transition hover:text-[var(--color-gold-300)]">
                Politique de confidentialite
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-sand-300)]">
            Contact
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-sand-200)]">
            <li>
              <a href={siteConfig.phoneHref} data-track="phone_click">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={siteConfig.emailHref} data-track="email_click">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" data-track="maps_click">
                Ouvrir la carte
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-sand-300)]">
            Horaires & reseaux
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-sand-200)]">
            {workingHours.map((item) => (
              <li key={item.day}>
                {item.day}: {item.hours}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--color-sand-600)]/80 bg-white/5 px-3 py-1.5 transition hover:border-[var(--color-gold-300)] hover:bg-white/10"
                data-track="social_click"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-grenat-700)]/90">
        <div className="container-shell flex flex-col gap-2 py-4 text-xs text-[var(--color-sand-400)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Tous droits reserves.</p>
          <p>Bab Ezzouar, Alger - Formations professionnelles.</p>
        </div>
      </div>
    </footer>
  );
}
