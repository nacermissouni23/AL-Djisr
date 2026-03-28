import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-shell py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-rose-700)]">Erreur 404</p>
      <h1 className="mt-3 text-4xl font-semibold text-[var(--color-grenat-900)] sm:text-5xl">
        Cette page n'existe pas
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-sm text-[var(--color-ink-700)]">
        Le lien est peut-etre incorrect ou le contenu a ete deplace.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-[var(--color-rose-700)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-rose-800)]"
      >
        Retour a l'accueil
      </Link>
    </section>
  );
}
