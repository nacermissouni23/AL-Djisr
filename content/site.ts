export const siteConfig = {
  name: "AL Djisr Centre de Formation",
  shortName: "AL Djisr",
  description:
    "Centre de formation professionnelle a Bab Ezzouar. Parcours pratiques en Machine Learning, reseaux, langues et web pour acceder a de meilleures opportunites.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://al-djisr-formation.vercel.app",
  locale: "fr-DZ",
  location: "Bab Ezzouar, Alger",
  heroTitle: "Developpez des competences recrutees a Bab Ezzouar",
  heroSubtitle:
    "Formations pratiques, mentorat et orientation carriere pour etudiants, jeunes professionnels et personnes en reconversion.",
  phone: "+213 555 00 11 22",
  phoneHref: "tel:+213555001122",
  whatsapp: "+213 555 00 11 22",
  whatsappHref: "https://wa.me/213555001122",
  email: "contact@aldjisr-formation.dz",
  emailHref: "mailto:contact@aldjisr-formation.dz",
  address: "Bab Ezzouar, Alger",
  mapsUrl: "https://maps.google.com/?q=Bab+Ezzouar,+Alger",
  mapsEmbedUrl: "https://www.google.com/maps?q=Bab+Ezzouar,+Alger&output=embed",
  defaultKeywords: [
    "formation alger",
    "formation bab ezzouar",
    "ecole de formation alger",
    "cours machine learning alger",
    "formation reseau alger",
    "cours anglais alger",
    "AL Djisr",
  ],
} as const;

export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "A propos", href: "/about" },
  { label: "Formations", href: "/formations" },
  { label: "Inscription", href: "/inscription" },
  { label: "Pourquoi nous", href: "/pourquoi-nous" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const trustSignals = [
  "Orientation gratuite avant inscription",
  "Projets pratiques encadres",
  "Formateurs actifs sur le terrain",
  "Reponse sous 24h ouvrables",
] as const;

export const highlights = [
  {
    title: "Apprentissage pratique",
    description:
      "Des la premiere semaine, vous travaillez sur des cas reels, des mini-projets et des ateliers concrets.",
  },
  {
    title: "Competences orientees metier",
    description:
      "Nos parcours sont construits sur les competences attendues par les entreprises en Algerie et a distance.",
  },
  {
    title: "Encadrement expert",
    description:
      "Des formateurs actifs dans leur domaine vous donnent des methodes applicables immediatement.",
  },
  {
    title: "Formats flexibles",
    description:
      "Cours en semaine ou weekend avec un rythme adapte aux etudiants et aux actifs.",
  },
  {
    title: "Mentorat de carriere",
    description:
      "Coaching CV, simulation d'entretien et orientation de specialisation selon votre profil.",
  },
  {
    title: "Certification valorisante",
    description:
      "Chaque parcours inclut une evaluation finale et une attestation reconnue par nos partenaires.",
  },
] as const;

export const enrollmentSteps = [
  {
    title: "1. Choisissez votre formation",
    description:
      "Selectionnez le parcours adapte a votre objectif: specialisation, reconversion ou montee en competences.",
  },
  {
    title: "2. Envoyez votre demande",
    description:
      "Remplissez le formulaire d'inscription ou de demande d'information en moins de deux minutes. Reponse sous 24h ouvrables.",
  },
  {
    title: "3. Demarrez l'apprentissage",
    description:
      "Recevez votre plan de cours, votre calendrier et commencez vos ateliers avec les formateurs.",
  },
  {
    title: "4. Certifiez vos competences",
    description:
      "Validez vos acquis et valorisez votre profil avec une attestation et un portfolio projet.",
  },
] as const;

export const whyChooseUsPillars = [
  "Progression guidee module par module",
  "Evaluation continue sur projets",
  "Classe a effectif reduit",
  "Suivi individuel et feedback actionnable",
  "Reseau local d'opportunites",
  "Support post-formation",
] as const;

export const workingHours = [
  { day: "Dimanche - Jeudi", hours: "09:00 - 19:00" },
  { day: "Samedi", hours: "10:00 - 16:00" },
  { day: "Vendredi", hours: "Ferme" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
] as const;
