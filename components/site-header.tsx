"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navLinks, siteConfig } from "@/content/site";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/formations") {
    return pathname.startsWith("/formations") || pathname.startsWith("/courses");
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-[var(--color-grenat-100)] bg-white/60 backdrop-blur md:block">
        <div className="container-shell flex items-center justify-between gap-4 py-2 text-xs text-[var(--color-ink-700)]">
          <p>{siteConfig.location} - Orientation gratuite</p>
          <div className="flex items-center gap-4">
            <a href={siteConfig.phoneHref} data-track="phone_click" className="transition hover:text-[var(--color-rose-700)]">
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp_click"
              className="transition hover:text-[var(--color-rose-700)]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container-shell py-3">
        <div className="relative rounded-2xl border border-[var(--color-grenat-200)]/70 bg-white/85 px-4 py-3 shadow-lg shadow-[var(--color-grenat-900)]/10 backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="group inline-flex items-center gap-3" data-track="logo_click">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-grenat-900)] text-sm font-bold text-white transition group-hover:scale-105">
                AD
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-semibold text-[var(--color-grenat-900)]">{siteConfig.shortName}</span>
                <span className="block text-xs uppercase tracking-[0.2em] text-[var(--color-ink-600)]">Centre de formation</span>
              </span>
            </Link>

            <nav
              className="hidden items-center gap-1 rounded-full border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)]/75 p-1 lg:flex"
              aria-label="Navigation principale"
            >
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActivePath(pathname, item.href)
                      ? "bg-white text-[var(--color-grenat-900)] shadow-sm"
                      : "text-[var(--color-ink-700)] hover:bg-white/60 hover:text-[var(--color-rose-700)]"
                  }`}
                  data-track="menu_interaction"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/inscription"
                className="hidden rounded-full bg-[var(--color-rose-700)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)] sm:inline-flex"
                data-track="apply_now_click"
              >
                Demande rapide
              </Link>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label="Ouvrir le menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-grenat-200)] text-[var(--color-grenat-900)] lg:hidden"
                onClick={() => setIsOpen((current) => !current)}
                data-track="menu_interaction"
              >
                <span className="sr-only">Menu</span>
                <span className="text-lg font-semibold">{isOpen ? "X" : "="}</span>
              </button>
            </div>
          </div>

          <div
            id="mobile-navigation"
            className={`absolute left-0 right-0 top-[calc(100%+0.55rem)] rounded-2xl border border-[var(--color-grenat-100)] bg-white p-4 shadow-xl lg:hidden ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <nav className="flex flex-col gap-2" aria-label="Navigation mobile">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-3 py-2 text-sm font-medium ${
                    isActivePath(pathname, item.href)
                      ? "bg-[var(--color-sand-100)] text-[var(--color-grenat-900)]"
                      : "text-[var(--color-ink-700)]"
                  }`}
                  onClick={() => setIsOpen(false)}
                  data-track="menu_interaction"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <a
                href={siteConfig.phoneHref}
                className="rounded-full border border-[var(--color-grenat-300)] px-4 py-2 text-center text-sm font-semibold text-[var(--color-grenat-900)]"
                data-track="phone_click"
              >
                Appeler
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--color-rose-700)] px-4 py-2 text-center text-sm font-semibold text-white"
                data-track="whatsapp_click"
              >
                Infos WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
