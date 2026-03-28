import { siteConfig } from "@/content/site";

export function MobileQuickActions() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 rounded-2xl border border-[var(--color-grenat-200)] bg-white/95 p-2 shadow-[0_16px_40px_-24px_rgba(74,19,30,0.6)] backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={siteConfig.phoneHref}
          className="rounded-xl border border-[var(--color-grenat-200)] bg-[var(--color-grenat-900)] px-3 py-2 text-center text-xs font-semibold text-white"
          data-track="phone_click"
        >
          Appeler
        </a>
        <a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-[var(--color-rose-600)] bg-[var(--color-rose-700)] px-3 py-2 text-center text-xs font-semibold text-white"
          data-track="whatsapp_click"
        >
          WhatsApp
        </a>
        <a
          href="/inscription"
          className="rounded-xl border border-[var(--color-gold-400)] bg-[var(--color-gold-400)] px-3 py-2 text-center text-xs font-semibold text-[var(--color-grenat-900)]"
          data-track="apply_now_click"
        >
          Inscription
        </a>
      </div>
    </div>
  );
}
