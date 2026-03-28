import { storeLead } from "@/lib/leads";
import { leadFormSchema } from "@/lib/validation";

type LeadTypeOverride = "registration" | "inquiry";

type LeadSubmissionResult = {
  status: number;
  body: Record<string, unknown>;
};

export async function processLeadSubmission(
  body: unknown,
  ip: string,
  forcedLeadType?: LeadTypeOverride,
): Promise<LeadSubmissionResult> {
  const mergedBody =
    forcedLeadType && body && typeof body === "object"
      ? {
          ...(body as Record<string, unknown>),
          leadType: forcedLeadType,
        }
      : body;

  const parsed = leadFormSchema.safeParse(mergedBody);

  if (!parsed.success) {
    return {
      status: 400,
      body: {
        message: "Le formulaire contient des erreurs.",
        errors: parsed.error.flatten().fieldErrors,
      },
    };
  }

  if (parsed.data.website) {
    return {
      status: 200,
      body: {
        message: "Demande recue.",
      },
    };
  }

  const data = Object.fromEntries(
    Object.entries(parsed.data).filter(([key]) => key !== "website"),
  ) as Omit<typeof parsed.data, "website">;

  await storeLead({
    type: data.leadType === "registration" ? "registration-request" : "inquiry",
    submittedAt: new Date().toISOString(),
    ip,
    sourcePage: data.sourcePage,
    data,
  });

  return {
    status: 200,
    body: {
      message:
        data.leadType === "registration"
          ? "Inscription envoyee. Notre equipe vous contactera rapidement avec les prochaines etapes."
          : "Merci. Un conseiller formation vous contactera rapidement.",
    },
  };
}
