import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Politique de confidentialite",
  description:
    "Informations sur la collecte et le traitement des donnees des formulaires d'inscription et de demande d'information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Confidentialite", path: "/privacy" },
        ])}
      />

      <section className="container-shell relative overflow-hidden py-16 sm:py-22">
        <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[var(--color-rose-200)]/65 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-4 h-72 w-72 rounded-full bg-[var(--color-gold-300)]/20 blur-3xl" />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-rose-700)]">
            Confidentialite
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[var(--color-grenat-900)] sm:text-5xl">Politique de confidentialite</h1>
          <p className="mt-5 max-w-3xl text-base text-[var(--color-ink-700)]">
            Cette page explique comment les informations collectees via les formulaires du site AL Djisr sont
            utilisees et protegees.
          </p>

          <div className="mt-8 space-y-6 rounded-3xl border border-[var(--color-grenat-200)] bg-white p-6 shadow-[0_24px_70px_-45px_rgba(74,19,30,0.5)]">
            <section className="rounded-2xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] p-4">
              <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Donnees collectees</h2>
              <p className="mt-2 text-sm text-[var(--color-ink-700)]">
                Nom, telephone, email, formation d'interet et message.
              </p>
            </section>

            <section className="rounded-2xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] p-4">
              <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Finalite</h2>
              <p className="mt-2 text-sm text-[var(--color-ink-700)]">
                Les donnees sont utilisees uniquement pour traiter les demandes d'information, inscriptions et
                suivi par l'equipe formation.
              </p>
            </section>

            <section className="rounded-2xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] p-4">
              <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Conservation et securite</h2>
              <p className="mt-2 text-sm text-[var(--color-ink-700)]">
                Les donnees sont stockees via des canaux securises (email transactionnel, webhook ou stockage
                technique) et ne sont pas vendues a des tiers.
              </p>
            </section>

            <section className="rounded-2xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] p-4">
              <h2 className="text-2xl font-semibold text-[var(--color-grenat-900)]">Vos droits</h2>
              <p className="mt-2 text-sm text-[var(--color-ink-700)]">
                Vous pouvez demander l'acces, la correction ou la suppression de vos donnees en contactant
                directement l'etablissement par email.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
