export type GalleryCategory =
  | "Salles de formation"
  | "Labs tech"
  | "Reseaux"
  | "Coaching"
  | "Evenements"
  | "Campus";

export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  category: GalleryCategory;
  src: string;
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "training-room-1",
    title: "Salle de formation immersive",
    caption: "Espace equipe pour ateliers en groupe et sessions pratiques.",
    category: "Salles de formation",
    src: "/gallery/classroom.svg",
    alt: "Salle de formation moderne avec postes de travail",
  },
  {
    id: "tech-lab-1",
    title: "Lab data et codage",
    caption: "Postes connectes pour travaux pratiques, mini-projets et revues de code.",
    category: "Labs tech",
    src: "/gallery/corridor.svg",
    alt: "Apprenants en atelier tech autour de laptops",
  },
  {
    id: "network-lab-1",
    title: "Lab reseau",
    caption: "Environnement de simulation pour architecture reseau et troubleshooting.",
    category: "Reseaux",
    src: "/gallery/playground.svg",
    alt: "Atelier pratique de configuration reseau",
  },
  {
    id: "coaching-1",
    title: "Session mentoring",
    caption: "Coaching individuel pour clarifier objectifs, progression et plan carriere.",
    category: "Coaching",
    src: "/gallery/lab.svg",
    alt: "Mentor et apprenant en session de coaching",
  },
  {
    id: "hackday-1",
    title: "Hackday projet",
    caption: "Journee de realisation de projets en equipe, orientee resultats.",
    category: "Evenements",
    src: "/gallery/library.svg",
    alt: "Evenement de formation avec presentations de projets",
  },
  {
    id: "welcome-desk-1",
    title: "Accueil et orientation",
    caption: "Espace d'accueil pour les inscriptions et les demandes d'information.",
    category: "Campus",
    src: "/gallery/reception.svg",
    alt: "Zone d'accueil du centre de formation",
  },
  {
    id: "campus-1",
    title: "Acces Bab Ezzouar",
    caption: "Centre facilement accessible pour etudiants et jeunes professionnels.",
    category: "Campus",
    src: "/gallery/exterior.svg",
    alt: "Vue exterieure du centre de formation a Bab Ezzouar",
  },
  {
    id: "speaker-1",
    title: "Masterclass metier",
    caption: "Interventions de professionnels pour relier apprentissage et marche du travail.",
    category: "Evenements",
    src: "/gallery/event.svg",
    alt: "Masterclass professionnelle pour apprenants",
  },
  {
    id: "pair-programming-1",
    title: "Atelier collaboratif",
    caption: "Travail en binome pour renforcer logique, communication et execution.",
    category: "Labs tech",
    src: "/gallery/activity.svg",
    alt: "Apprenants en atelier collaboratif sur laptops",
  },
];

export const galleryCategories: string[] = [
  "Toutes",
  "Salles de formation",
  "Labs tech",
  "Reseaux",
  "Coaching",
  "Evenements",
  "Campus",
];
