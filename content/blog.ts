export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  category: string;
  readingTime: string;
  metaDescription: string;
  coverImage: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "comment-demarrer-machine-learning-alger",
    title: "Comment demarrer en Machine Learning a Alger en 2026",
    excerpt:
      "Une feuille de route claire pour passer de debutant a profil operationnel en machine learning.",
    publishedAt: "2026-03-12",
    author: "Equipe formation AL Djisr",
    category: "Machine Learning",
    readingTime: "4 min",
    metaDescription:
      "Guide pratique pour commencer une carriere en machine learning depuis Alger.",
    coverImage: "/gallery/classroom.svg",
    content: [
      "Le Machine Learning peut sembler complexe au debut, mais une progression bien structuree rend le parcours accessible meme sans bagage avance.",
      "Commencez par les bases: Python, statistiques appliquees et manipulation de donnees. Sans ces fondations, les modeles restent abstraits.",
      "Travaillez ensuite sur des projets reels: prediction de ventes, classification de textes ou detection d'anomalies. Les projets valent plus qu'une liste de cours suivis.",
      "Enfin, preparez votre employabilite: portfolio, presentation orale de vos resultats et simulation d'entretien technique.",
    ],
  },
  {
    slug: "meilleures-competences-a-apprendre-en-algerie",
    title: "Top competences a apprendre en Algerie pour accelerer sa carriere",
    excerpt:
      "Les competences les plus demandees par les entreprises: data, reseaux, developpement web et anglais professionnel.",
    publishedAt: "2026-02-19",
    author: "Direction AL Djisr",
    category: "Employabilite",
    readingTime: "3 min",
    metaDescription:
      "Decouvrez les competences les plus rentables a apprendre pour trouver de meilleures opportunites en Algerie.",
    coverImage: "/gallery/reception.svg",
    content: [
      "Le marche evolue vite, mais certains skills restent dominants: maitrise des outils numeriques, communication et capacite a resoudre des problemes concrets.",
      "Les profils qui combinent competence technique et anglais professionnel obtiennent plus d'entretiens et de mobilite.",
      "Le plus important: apprendre dans un cadre pratique, produire des preuves de competence et savoir expliquer sa valeur.",
      "Un plan de formation court, cible et coherent est souvent plus efficace qu'une accumulation de contenus non appliques.",
    ],
  },
  {
    slug: "carriere-reseau-guide-debutant",
    title: "Carriere reseau: par ou commencer quand on debute",
    excerpt:
      "Un guide simple pour comprendre les roles reseau, les certifications utiles et les premiers projets a realiser.",
    publishedAt: "2025-12-22",
    author: "Coach carriere AL Djisr",
    category: "Reseaux",
    readingTime: "5 min",
    metaDescription:
      "Guide debutant pour lancer une carriere en reseaux et administration systeme.",
    coverImage: "/gallery/exterior.svg",
    content: [
      "Le domaine reseau offre des postes accessibles meme en debut de parcours, a condition de maitriser les fondamentaux techniques et les bonnes pratiques support.",
      "Commencez par IP, sous-reseaux, switching et diagnostic. Ce socle est indispensable avant de viser des certifications avancees.",
      "Travaillez sur des labs et des incidents simules. Les recruteurs valorisent les candidats capables de depanner avec methode.",
      "Ajoutez ensuite une certification de base et un mini-portfolio de cas traites pour renforcer votre candidature.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
