export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Amine K.",
    role: "Etudiant en informatique",
    quote:
      "La formation Machine Learning est tres pratique. J'ai pu realiser un vrai projet et le presenter en entretien.",
  },
  {
    name: "Sonia M.",
    role: "Jeune professionnelle en reconversion",
    quote:
      "J'ai change de domaine vers le web en quelques mois. Le suivi des formateurs m'a aide a rester reguliere.",
  },
  {
    name: "Walid R.",
    role: "Technicien support IT",
    quote:
      "Le parcours reseau m'a permis de monter en responsabilite au travail avec des competences directement applicables.",
  },
];
