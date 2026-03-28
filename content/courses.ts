export type CourseLevel = "Debutant" | "Intermediaire" | "Avance";

export type CourseModule = {
  title: string;
  topics: string[];
};

export type Instructor = {
  name: string;
  role: string;
  bio: string;
};

export type Course = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  duration: string;
  level: CourseLevel;
  format: string;
  whatYouWillLearn: string[];
  whoItsFor: string[];
  curriculum: CourseModule[];
  skillsGained: string[];
  careerOutcomes: string[];
  instructor?: Instructor;
};

export const courses: Course[] = [
  {
    slug: "cours-machine-learning-alger",
    title: "Machine Learning applique",
    category: "Tech",
    shortDescription:
      "Passez de la theorie aux projets concrets: Python, modeles predictifs, evaluation et deploiement.",
    description:
      "Cette formation vous apprend a construire des modeles de Machine Learning utiles pour des cas reels: classification, prediction, segmentation et automatisation de decisions.",
    duration: "14 semaines",
    level: "Intermediaire",
    format: "Presentiel + ateliers projet",
    whatYouWillLearn: [
      "Structurer un pipeline ML de bout en bout",
      "Entrainer et evaluer des modeles supervises et non supervises",
      "Nettoyer, preparer et visualiser des jeux de donnees",
      "Presenter des resultats exploitables pour une equipe metier",
    ],
    whoItsFor: [
      "Etudiants en informatique, mathematiques ou data",
      "Developpeurs voulant evoluer vers la data science",
      "Professionnels en reconversion vers les metiers IA",
    ],
    curriculum: [
      {
        title: "Module 1 - Fondations Python et Data",
        topics: ["Numpy/Pandas", "Feature engineering", "Data visualization"],
      },
      {
        title: "Module 2 - Modeles supervises",
        topics: ["Regression", "Classification", "Evaluation et validation croisee"],
      },
      {
        title: "Module 3 - Modeles non supervises",
        topics: ["Clustering", "Reduction de dimension", "Selection de modeles"],
      },
      {
        title: "Module 4 - Projet final",
        topics: ["Cas reel", "Documentation", "Presentation orientee business"],
      },
    ],
    skillsGained: [
      "Python pour la data",
      "Modelisation predictive",
      "Lecture critique des performances",
      "Communication data vers non-tech",
    ],
    careerOutcomes: [
      "Junior ML Engineer",
      "Data Analyst",
      "Assistant Data Scientist",
    ],
    instructor: {
      name: "Yacine R.",
      role: "ML Engineer",
      bio: "8 ans d'experience sur des projets IA en fintech et industrie.",
    },
  },
  {
    slug: "formation-reseau-alger",
    title: "Reseaux & administration systeme",
    category: "Tech",
    shortDescription:
      "Maitrisez la configuration reseau, la securite de base et la maintenance d'infrastructures professionnelles.",
    description:
      "Parcours complet pour comprendre et administrer un reseau d'entreprise: adressage IP, switching, routing, supervision et bonnes pratiques de securite.",
    duration: "12 semaines",
    level: "Debutant",
    format: "Presentiel en lab reseau",
    whatYouWillLearn: [
      "Configurer un reseau local et des VLAN",
      "Diagnostiquer les incidents reseau",
      "Mettre en place les bases de la securite informatique",
      "Documenter une architecture simple",
    ],
    whoItsFor: [
      "Etudiants voulant entrer dans l'IT infrastructure",
      "Techniciens debutants",
      "Personnes visant une specialisation reseaux",
    ],
    curriculum: [
      {
        title: "Module 1 - Fondamentaux",
        topics: ["OSI/TCP-IP", "Adressage IPv4", "Sous-reseaux"],
      },
      {
        title: "Module 2 - Switching et routing",
        topics: ["VLAN", "STP", "Routage statique et dynamique"],
      },
      {
        title: "Module 3 - Securite & monitoring",
        topics: ["ACL", "Pare-feu de base", "Surveillance et logs"],
      },
      {
        title: "Module 4 - Projet d'infrastructure",
        topics: ["Plan d'adressage", "Mise en service", "Checklist de maintenance"],
      },
    ],
    skillsGained: [
      "Administration reseau",
      "Diagnostic d'incidents",
      "Documentation technique",
      "Bonnes pratiques securite",
    ],
    careerOutcomes: [
      "Technicien reseau",
      "Support IT",
      "Assistant administrateur systeme",
    ],
    instructor: {
      name: "Nabil A.",
      role: "Network Consultant",
      bio: "Expert infrastructure, certifie sur des environnements d'entreprise multi-sites.",
    },
  },
  {
    slug: "cours-anglais-professionnel",
    title: "Anglais professionnel",
    category: "Langues",
    shortDescription:
      "Developpez votre communication professionnelle en anglais pour les etudes, entretiens et travail.",
    description:
      "Formation orientee pratique: expression orale, ecriture professionnelle, communication en reunion et preparation d'entretien.",
    duration: "10 semaines",
    level: "Debutant",
    format: "Presentiel interactif",
    whatYouWillLearn: [
      "Prendre la parole avec confiance",
      "Rediger des emails et CV en anglais",
      "Passer un entretien en anglais",
      "Comprendre des supports professionnels",
    ],
    whoItsFor: [
      "Etudiants universitaires",
      "Jeunes professionnels",
      "Candidats cherchant un poste international ou remote",
    ],
    curriculum: [
      {
        title: "Module 1 - Foundations",
        topics: ["Grammar essentials", "Professional vocabulary", "Pronunciation drills"],
      },
      {
        title: "Module 2 - Communication",
        topics: ["Meetings", "Presentations", "Networking conversations"],
      },
      {
        title: "Module 3 - Writing",
        topics: ["Emails", "CV", "Cover letters"],
      },
      {
        title: "Module 4 - Interview simulation",
        topics: ["Common questions", "Storytelling", "Confidence building"],
      },
    ],
    skillsGained: [
      "Business communication",
      "Writing clarity",
      "Interview readiness",
      "Professional confidence",
    ],
    careerOutcomes: [
      "Acces a plus d'offres d'emploi",
      "Evolution vers des postes clients/internationaux",
      "Meilleure performance en entretien",
    ],
    instructor: {
      name: "Sara K.",
      role: "English Trainer",
      bio: "Formatrice en communication professionnelle et preparation employabilite.",
    },
  },
  {
    slug: "formation-developpement-web",
    title: "Developpement Web Full-Stack",
    category: "Tech",
    shortDescription:
      "Construisez des applications web modernes avec un parcours complet front-end et back-end.",
    description:
      "Formation complete pour devenir developpeur web operationnel: HTML/CSS, JavaScript, React, API, bases de donnees et deploiement.",
    duration: "16 semaines",
    level: "Intermediaire",
    format: "Bootcamp pratique",
    whatYouWillLearn: [
      "Creer des interfaces responsives modernes",
      "Concevoir des API robustes",
      "Modeliser des donnees et gerer l'authentification",
      "Deployer un projet en production",
    ],
    whoItsFor: [
      "Etudiants en IT",
      "Auto-didactes qui veulent un cadre pro",
      "Profils en reconversion vers le developpement",
    ],
    curriculum: [
      {
        title: "Module 1 - Front-end",
        topics: ["HTML/CSS", "JavaScript", "React"],
      },
      {
        title: "Module 2 - Back-end",
        topics: ["Node.js", "REST APIs", "Validation"],
      },
      {
        title: "Module 3 - Data & security",
        topics: ["SQL basics", "Auth", "App hardening"],
      },
      {
        title: "Module 4 - Capstone",
        topics: ["Product build", "Deployment", "Portfolio review"],
      },
    ],
    skillsGained: [
      "Front-end engineering",
      "Back-end integration",
      "Database workflows",
      "Production mindset",
    ],
    careerOutcomes: [
      "Junior Full-Stack Developer",
      "Front-end Developer",
      "Web Project Freelancer",
    ],
    instructor: {
      name: "Anis M.",
      role: "Senior Full-Stack Developer",
      bio: "Accompagne des equipes produit et forme des profils junior depuis 6 ans.",
    },
  },
];

export const popularCourseSlugs = [
  "cours-machine-learning-alger",
  "formation-reseau-alger",
  "cours-anglais-professionnel",
  "formation-developpement-web",
] as const;

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
