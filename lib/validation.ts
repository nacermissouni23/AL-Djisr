import { z } from "zod";

const phonePattern = /^[+()0-9\s-]{8,20}$/;

function sanitize(value: string): string {
  return value.replace(/[<>]/g, "").replace(/\s+/g, " ").trim();
}

function requiredText(label: string, min = 2, max = 160) {
  return z
    .string({
      error: `${label} est requis`,
    })
    .trim()
    .min(min, `${label} est requis`)
    .max(max, `${label} est trop long`)
    .transform(sanitize);
}

const phoneField = z
  .string({
    error: "Numero de telephone requis",
  })
  .trim()
  .min(8, "Numero de telephone requis")
  .max(20, "Numero de telephone invalide")
  .refine((value) => phonePattern.test(value), "Numero de telephone invalide")
  .transform(sanitize);

const honeypotField = z.string().optional().transform((value) => value?.trim() ?? "");

const requiredEmail = z
  .string({
    error: "Adresse email requise",
  })
  .trim()
  .min(1, "Adresse email requise")
  .max(120, "Adresse email trop longue")
  .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), "Adresse email invalide")
  .transform(sanitize);

export const leadFormSchema = z.object({
  fullName: requiredText("Nom complet", 2, 80),
  phone: phoneField,
  email: requiredEmail,
  courseOfInterest: requiredText("Formation ciblee", 2, 120),
  message: requiredText("Message", 8, 1000),
  leadType: z.enum(["registration", "inquiry"]),
  consent: z
    .boolean({
      error: "Consentement requis",
    })
    .refine((value) => value, "Vous devez accepter le traitement des donnees"),
  sourcePage: z.string().trim().min(1).max(120).transform(sanitize),
  website: honeypotField,
});

export const contactFormSchema = leadFormSchema.extend({
  leadType: z.literal("inquiry"),
});

export const registrationFormSchema = leadFormSchema.extend({
  leadType: z.literal("registration"),
});

export type LeadFormInput = z.input<typeof leadFormSchema>;
export type LeadFormValues = z.output<typeof leadFormSchema>;
export type ContactFormInput = z.input<typeof contactFormSchema>;
export type ContactFormValues = z.output<typeof contactFormSchema>;
export type RegistrationFormInput = z.input<typeof registrationFormSchema>;
export type RegistrationFormValues = z.output<typeof registrationFormSchema>;
