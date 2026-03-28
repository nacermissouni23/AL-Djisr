export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: "inscription" | "formations" | "carriere";
};

export const faqItems: FaqItem[] = [
  {
    id: "niveau",
    question: "Quel niveau faut-il pour commencer une formation ?",
    answer:
      "Chaque parcours indique un niveau recommande (Debutant, Intermediaire, Avance). Si vous hesitez, notre equipe vous oriente gratuitement.",
    category: "formations",
  },
  {
    id: "register",
    question: "Comment s'inscrire a une formation ?",
    answer:
      "Remplissez le formulaire Inscription / Demande d'information avec la formation qui vous interesse. Un conseiller vous rappelle pour finaliser votre demarrage.",
    category: "inscription",
  },
  {
    id: "documents",
    question: "Quels documents sont demandes pour l'inscription ?",
    answer:
      "En general: piece d'identite, niveau d'etudes ou experiences precedentes (si necessaire) et vos coordonnees de contact.",
    category: "inscription",
  },
  {
    id: "hours",
    question: "Quels sont les horaires des cours ?",
    answer:
      "Nous proposons des groupes en journee et en fin de journee. Les details exacts sont communiques selon la session choisie.",
    category: "formations",
  },
  {
    id: "format",
    question: "Les formations sont-elles pratiques ?",
    answer:
      "Oui. Chaque parcours integre des ateliers, des exercices encadres et un projet de validation pour appliquer les competences directement.",
    category: "formations",
  },
  {
    id: "certification",
    question: "Y a-t-il une certification en fin de parcours ?",
    answer:
      "Oui, une attestation de formation est delivree apres validation des objectifs pedagogiques et du projet final.",
    category: "carriere",
  },
  {
    id: "career-support",
    question: "Est-ce que vous aidez pour l'emploi ?",
    answer:
      "Oui. Nous proposons coaching CV, simulation d'entretien et conseils de positionnement pour le marche local et remote.",
    category: "carriere",
  },
  {
    id: "payment",
    question: "Peut-on payer en plusieurs fois ?",
    answer:
      "Selon la formation, des modalites de paiement echelonne peuvent etre proposees. Contactez-nous pour les options disponibles.",
    category: "inscription",
  },
  {
    id: "contact",
    question: "Comment contacter un conseiller formation ?",
    answer:
      "Par telephone, WhatsApp, email ou via le formulaire de demande d'information sur le site.",
    category: "inscription",
  },
  {
    id: "ml-start",
    question: "Je suis debutant, puis-je commencer en Machine Learning ?",
    answer:
      "Oui, apres un entretien de positionnement. Nous indiquons les pre-requis et un plan de progression avant de demarrer.",
    category: "formations",
  },
];
