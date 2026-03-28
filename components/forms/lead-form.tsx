"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { courses } from "@/content/courses";
import { leadFormSchema, type LeadFormInput } from "@/lib/validation";

type LeadFormProps = {
  sourcePage?: string;
  leadType?: "registration" | "inquiry";
  submitLabel?: string;
};

type ApiResponse = {
  message?: string;
};

const inputClassName =
  "mt-1.5 w-full rounded-2xl border border-[var(--color-grenat-200)] bg-white px-3.5 py-2.5 text-sm text-[var(--color-ink-800)] outline-none transition placeholder:text-[var(--color-ink-500)] focus:border-[var(--color-rose-600)] focus:ring-4 focus:ring-[var(--color-rose-200)]/70";

const labelClassName = "text-sm font-semibold text-[var(--color-ink-800)]";

const courseOptions = courses.map((course) => course.title);

export function LeadForm({
  sourcePage = "/contact",
  leadType = "inquiry",
  submitLabel = "Recevoir mon orientation",
}: LeadFormProps) {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormInput>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      courseOfInterest: "",
      message: "",
      leadType,
      consent: false,
      sourcePage,
      website: "",
    },
  });

  const onSubmit = async (values: LeadFormInput) => {
    setServerMessage(null);
    setServerError(null);

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const payload = (await response.json()) as ApiResponse;

    if (!response.ok) {
      setServerError(payload.message ?? "Une erreur est survenue. Verifiez vos informations puis reessayez.");
      return;
    }

    setServerMessage(
      payload.message ??
        "Merci. Un conseiller vous contactera sous 24h ouvrables.",
    );

    reset({
      fullName: "",
      phone: "",
      email: "",
      courseOfInterest: "",
      message: "",
      leadType,
      consent: false,
      sourcePage,
      website: "",
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <p className="rounded-2xl border border-[var(--color-grenat-100)] bg-[var(--color-sand-100)] px-4 py-3 text-xs text-[var(--color-ink-700)]">
        Temps estime: 2 minutes. Un conseiller vous recontacte sous 24h ouvrables.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-full-name" className={labelClassName}>
            Nom complet *
          </label>
          <input
            id="lead-full-name"
            type="text"
            className={inputClassName}
            placeholder="Ex: Amine Khelifi"
            {...register("fullName")}
          />
          {errors.fullName ? (
            <p className="mt-1 text-xs text-red-700" role="alert">
              {errors.fullName.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="lead-phone" className={labelClassName}>
            Telephone / WhatsApp *
          </label>
          <input
            id="lead-phone"
            type="tel"
            className={inputClassName}
            placeholder="+213 5XX XX XX XX"
            {...register("phone")}
          />
          {errors.phone ? (
            <p className="mt-1 text-xs text-red-700" role="alert">
              {errors.phone.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-email" className={labelClassName}>
            Email *
          </label>
          <input
            id="lead-email"
            type="email"
            className={inputClassName}
            placeholder="nom@exemple.com"
            {...register("email")}
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-red-700" role="alert">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="lead-course" className={labelClassName}>
            Formation d'interet *
          </label>
          <select id="lead-course" className={inputClassName} {...register("courseOfInterest")}>
            <option value="">Selectionner votre formation cible</option>
            {courseOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            <option value="Je ne sais pas encore">Je ne sais pas encore</option>
          </select>
          {errors.courseOfInterest ? (
            <p className="mt-1 text-xs text-red-700" role="alert">
              {errors.courseOfInterest.message}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="lead-message" className={labelClassName}>
          Message *
        </label>
        <textarea
          id="lead-message"
          className={`${inputClassName} min-h-32 resize-y`}
          placeholder="Expliquez votre objectif: emploi, reconversion, progression salariale..."
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-red-700" role="alert">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="lead-website">Website</label>
        <input id="lead-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <input type="hidden" {...register("sourcePage")} value={sourcePage} />
      <input type="hidden" {...register("leadType")} value={leadType} />

      <div>
        <label className="inline-flex items-start gap-3 text-sm text-[var(--color-ink-700)]">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-[var(--color-grenat-300)]"
            {...register("consent")}
          />
          <span>
            J'accepte que mes donnees soient utilisees pour etre contacte par AL Djisr Centre de Formation. Vous pouvez demander leur suppression a tout moment.
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-1 text-xs text-red-700" role="alert">
            {errors.consent.message}
          </p>
        ) : null}
      </div>

      {serverMessage ? (
        <p className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800" role="status">
          {serverMessage}
        </p>
      ) : null}

      {serverError ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {serverError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-rose-700)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-rose-700)]/20 transition hover:bg-[var(--color-rose-800)] disabled:opacity-70 sm:w-auto"
        data-track="lead_form_submit"
      >
        {isSubmitting ? "Envoi en cours..." : submitLabel}
      </button>
    </form>
  );
}
