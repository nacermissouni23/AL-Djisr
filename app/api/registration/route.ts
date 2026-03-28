import { NextRequest, NextResponse } from "next/server";

import { processLeadSubmission } from "@/lib/lead-submission";
import { getClientIp, isRateLimited } from "@/lib/security";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers.get("x-forwarded-for"));

    if (isRateLimited(`registration:${ip}`, 6, 15 * 60 * 1000)) {
      return NextResponse.json(
        {
          message: "Trop de tentatives. Veuillez reessayer dans quelques minutes.",
        },
        { status: 429 },
      );
    }

    const body = await request.json();
    const result = await processLeadSubmission(body, ip, "registration");

    return NextResponse.json(result.body, {
      status: result.status,
    });
  } catch (error) {
    console.error("Registration form submission error", error);

    return NextResponse.json(
      {
        message: "Une erreur technique est survenue. Veuillez reessayer.",
      },
      { status: 500 },
    );
  }
}
