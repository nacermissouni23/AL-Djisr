import Link from "next/link";

import { siteConfig } from "@/content/site";

export function FloatingConversionActions() {
  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-40 hidden flex-col items-end gap-3 md:flex">
      <p className="pointer-events-auto rounded-full border border-[var(--color-grenat-200)] bg-white/95 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-700)] shadow-sm">
        Reponse sous 24h
      </p>
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-[var(--color-rose-700)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[var(--color-rose-700)]/30 transition hover:bg-[var(--color-rose-800)]"
        data-track="whatsapp_click"
      >
        WhatsApp conseiller
      </a>
      <Link
        href="/inscription"
        className="pointer-events-auto inline-flex rounded-full border border-[var(--color-gold-400)] bg-[var(--color-gold-400)] px-5 py-3 text-sm font-semibold text-[var(--color-grenat-900)] shadow-lg transition hover:bg-[var(--color-gold-300)]"
        data-track="apply_now_click"
      >
        Demarrer l'inscription
      </Link>
    </div>
  );
}
